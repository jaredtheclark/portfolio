import { NextResponse } from "next/server"
import { Resend } from "resend"
import { getAll } from "@vercel/edge-config"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { password, snapshotTitle } = body

    if (!password || !snapshotTitle) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
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
        console.error("[snapshot-access] Failed to parse PORTFOLIO_PASSWORDS env var")
        return NextResponse.json({ success: false }, { status: 500 })
      }
    }

    if (Object.keys(passwordMap).length === 0) {
      return NextResponse.json({ success: false }, { status: 401 })
    }

    // Find the label whose value matches the submitted password
    const matchedLabel = Object.entries(passwordMap).find(([, val]) => val === password)?.[0]

    if (!matchedLabel) {
      return NextResponse.json({ success: false }, { status: 401 })
    }

    // Get requester IP
    const forwarded = request.headers.get("x-forwarded-for")
    const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown"

    const timestamp = new Date().toISOString()

    // Send tracking email — best-effort, only if API key is configured
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY)
      const contactEmail = process.env.SNAPSHOT_NOTIFY_EMAIL || process.env.CONTACT_EMAIL_TO || "jared@example.com"
      const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"

      const { error } = await resend.emails.send({
        from: fromEmail,
        to: contactEmail,
        subject: `Portfolio Access: ${snapshotTitle}`,
        html: `
          <h2>Portfolio Snapshot Accessed</h2>
          <p><strong>Snapshot:</strong> ${snapshotTitle}</p>
          <p><strong>Password Label:</strong> ${matchedLabel}</p>
          <p><strong>Timestamp:</strong> ${timestamp}</p>
          <p><strong>Requester IP:</strong> ${ip}</p>
        `,
      })

      if (error) {
        console.error("[snapshot-access] Resend error:", error)
      }
    } else {
      console.log(`[snapshot-access] No RESEND_API_KEY — skipping tracking email. Label: ${matchedLabel}, Snapshot: ${snapshotTitle}, Time: ${timestamp}`)
    }

    return NextResponse.json({ success: true, label: matchedLabel })
  } catch (error) {
    console.error("[snapshot-access] API route error:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
