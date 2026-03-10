import { type NextRequest, NextResponse } from "next/server"
import { get } from "@vercel/blob"

// This route streams the PDF from private blob storage
// The pathname is hardcoded for security - users can't request arbitrary files
const DECK_PATHNAME = "Jared Clark Product Designer.pdf"

export async function GET(request: NextRequest) {
  try {
    // Check for valid session via custom header from client
    const authHeader = request.headers.get("x-portfolio-auth")
    if (authHeader !== "unlocked") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Verify blob token is configured
    if (!process.env.DECK_BLOB_READ_WRITE_TOKEN) {
      console.error("[deck/signed-url] DECK_BLOB_READ_WRITE_TOKEN not configured")
      return NextResponse.json({ error: "Storage not configured" }, { status: 500 })
    }

    // Fetch from private blob storage
    // Uses DECK_BLOB_READ_WRITE_TOKEN env var for this specific blob store
    const result = await get(DECK_PATHNAME, {
      access: "private",
      token: process.env.DECK_BLOB_READ_WRITE_TOKEN,
      ifNoneMatch: request.headers.get("if-none-match") ?? undefined,
    })

    if (!result) {
      console.error("[deck/signed-url] Blob not found:", DECK_PATHNAME)
      return NextResponse.json({ error: "PDF not found" }, { status: 404 })
    }

    // Blob hasn't changed - tell the browser to use its cached copy
    if (result.statusCode === 304) {
      return new NextResponse(null, {
        status: 304,
        headers: {
          ETag: result.blob.etag,
          "Cache-Control": "private, no-cache",
        },
      })
    }

    // Stream the PDF to the client
    return new NextResponse(result.stream, {
      headers: {
        "Content-Type": result.blob.contentType,
        "Content-Disposition": 'inline; filename="jared-clark-product-designer.pdf"',
        "X-Content-Type-Options": "nosniff",
        ETag: result.blob.etag,
        "Cache-Control": "private, no-cache",
      },
    })
  } catch (error) {
    console.error("[deck/signed-url] Error:", error)
    return NextResponse.json({ error: "Failed to fetch PDF" }, { status: 500 })
  }
}

// Also support POST for backwards compatibility with initial implementation
export async function POST(request: NextRequest) {
  return GET(request)
}
