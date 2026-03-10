import { NextResponse } from "next/server"
import { Resend } from "resend"
import { getAll } from "@vercel/edge-config"
import { signDeckToken } from "@/lib/deck-auth"

// Rate limiting: track failed attempts per IP
// Map of IP -> { count: number, timestamp: number }
const rateLimitMap = new Map<string, { count: number; timestamp: number }>()

// Rate limit config
const RATE_LIMIT_WINDOW_MS = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX_ATTEMPTS = 5

// Clean up old entries periodically (every 100 requests)
let requestCount = 0
function cleanupRateLimitMap() {
  requestCount++
  if (requestCount % 100 === 0) {
    const now = Date.now()
    for (const [ip, data] of rateLimitMap.entries()) {
      if (now - data.timestamp > RATE_LIMIT_WINDOW_MS) {
        rateLimitMap.delete(ip)
      }
    }
  }
}

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  cleanupRateLimitMap()

  const now = Date.now()
  const existing = rateLimitMap.get(ip)

  if (!existing) {
    return { allowed: true }
  }

  // Reset if window has passed
  if (now - existing.timestamp > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.delete(ip)
    return { allowed: true }
  }

  // Check if over limit
  if (existing.count >= RATE_LIMIT_MAX_ATTEMPTS) {
    const retryAfter = Math.ceil(
      (RATE_LIMIT_WINDOW_MS - (now - existing.timestamp)) / 1000
    )
    return { allowed: false, retryAfter }
  }

  return { allowed: true }
}

function recordFailedAttempt(ip: string) {
  const now = Date.now()
  const existing = rateLimitMap.get(ip)

  if (!existing || now - existing.timestamp > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, timestamp: now })
  } else {
    rateLimitMap.set(ip, { count: existing.count + 1, timestamp: existing.timestamp })
  }
}

function clearRateLimitForIp(ip: string) {
  rateLimitMap.delete(ip)
}

export async function POST(request: Request) {
  try {
    // Get requester IP for rate limiting
    const forwarded = request.headers.get("x-forwarded-for")
    const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown"

    // Check rate limit
    const rateLimitResult = checkRateLimit(ip)
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many attempts. Please try again later.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimitResult.retryAfter ?? 60),
          },
        }
      )
    }

    const body = await request.json()
    const { password } = body

    if (!password) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      )
    }

    let passwordMap: Record<string, string> = {}

    if (process.env.EDGE_CONFIG) {
      // Production: read from Vercel Edge Config store
      const entries = await getAll<Record<string, string>>()
      passwordMap = entries ?? {}
    } else if (process.env.PORTFOLIO_PASSWORDS) {
      // Local dev fallback: parse JSON env var
      try {
        passwordMap = JSON.parse(process.env.PORTFOLIO_PASSWORDS)
      } catch {
        console.error("[deck-access] Failed to parse PORTFOLIO_PASSWORDS env var")
        return NextResponse.json({ success: false }, { status: 500 })
      }
    }

    if (Object.keys(passwordMap).length === 0) {
      recordFailedAttempt(ip)
      return NextResponse.json({ success: false }, { status: 401 })
    }

    // Find the label whose value matches the submitted password
    const matchedLabel = Object.entries(passwordMap).find(
      ([, val]) => val === password
    )?.[0]

    if (!matchedLabel) {
      recordFailedAttempt(ip)
      return NextResponse.json({ success: false }, { status: 401 })
    }

    // Successful authentication - clear rate limit for this IP
    clearRateLimitForIp(ip)

    // Generate JWT token
    const token = await signDeckToken(matchedLabel)

    const timestamp = new Date().toISOString()

    // Send tracking email - best-effort, only if API key is configured
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY)
      const contactEmail =
        process.env.DECK_NOTIFY_EMAIL ||
        process.env.CONTACT_EMAIL_TO ||
        "jared@example.com"
      const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"

      const { error } = await resend.emails.send({
        from: fromEmail,
        to: contactEmail,
        subject: `Portfolio Deck Access: ${matchedLabel}`,
        html: `
          <h2>Case Study Deck Accessed</h2>
          <p><strong>Recruiter/Company:</strong> ${matchedLabel}</p>
          <p><strong>Timestamp:</strong> ${timestamp}</p>
          <p><strong>Requester IP:</strong> ${ip}</p>
        `,
      })

      if (error) {
        console.error("[deck-access] Resend error:", error)
      }
    } else {
      console.log(
        `[deck-access] No RESEND_API_KEY - skipping tracking email. Label: ${matchedLabel}, Time: ${timestamp}`
      )
    }

    return NextResponse.json({ success: true, label: matchedLabel, token })
  } catch (error) {
    console.error("[deck-access] API route error:", error)
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    )
  }
}
