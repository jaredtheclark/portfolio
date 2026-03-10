"use client"

import { useState, useEffect, useCallback } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff, Download, Loader2, AlertCircle } from "lucide-react"
import { toast } from "sonner"

// The API endpoint that streams the PDF from private blob storage
const PDF_API_ENDPOINT = "/api/deck/signed-url"

// Session storage key for JWT token
const TOKEN_STORAGE_KEY = "portfolio_token"

// Helper to get stored token
function getStoredToken(): string | null {
  if (typeof window === "undefined") return null
  return sessionStorage.getItem(TOKEN_STORAGE_KEY)
}

// Helper to store token
function storeToken(token: string): void {
  sessionStorage.setItem(TOKEN_STORAGE_KEY, token)
}

// Helper to clear token
function clearToken(): void {
  sessionStorage.removeItem(TOKEN_STORAGE_KEY)
}

export default function DeckPage() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [password, setPassword] = useState("")
  const [pwError, setPwError] = useState(false)
  const [pwErrorMessage, setPwErrorMessage] = useState<string | null>(null)
  const [pwLoading, setPwLoading] = useState(false)
  const [shakeKey, setShakeKey] = useState(0)
  const [showPassword, setShowPassword] = useState(false)
  const [pdfReady, setPdfReady] = useState(false)
  const [pdfError, setPdfError] = useState(false)

  // Handle 401 responses by clearing token and showing password form
  const handleUnauthorized = useCallback(() => {
    clearToken()
    setIsUnlocked(false)
    setPdfReady(false)
    setPdfError(false)
  }, [])

  // Check if PDF is accessible (validate auth works with API)
  const validatePdfAccess = useCallback(async () => {
    const token = getStoredToken()
    if (!token) {
      handleUnauthorized()
      return
    }

    try {
      const res = await fetch(PDF_API_ENDPOINT, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (res.status === 401) {
        handleUnauthorized()
        return
      }

      if (res.ok) {
        setPdfReady(true)
        setPdfError(false)
      } else {
        setPdfError(true)
      }
    } catch {
      setPdfError(true)
    }
  }, [handleUnauthorized])

  // Check for existing session on mount
  useEffect(() => {
    const token = getStoredToken()
    if (token) {
      setIsUnlocked(true)
      validatePdfAccess()
    }
  }, [validatePdfAccess])

  // Dev helper to clear session
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      (window as Window & { clearPortfolioAccess?: () => void }).clearPortfolioAccess = () => {
        clearToken()
        setIsUnlocked(false)
        setPdfReady(false)
        console.log("[dev] portfolio token cleared")
      }
      console.log(
        "%c clearPortfolioAccess() %c reset portfolio session lock",
        "background:#1a1a1a;color:#22d3ee;font-family:monospace;padding:2px 6px;border-radius:3px;border:1px solid #22d3ee",
        "color:#737373;font-family:monospace"
      )
    }
  }, [])

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!password.trim()) {
      setPwError(true)
      setPwErrorMessage("Please enter a password.")
      setShakeKey((k) => k + 1)
      return
    }

    setPwLoading(true)
    setPwError(false)
    setPwErrorMessage(null)

    try {
      const res = await fetch("/api/deck-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: password.trim() }),
      })

      if (res.ok) {
        const data = await res.json()
        if (data.token) {
          storeToken(data.token)
          toast.success("Access granted. Thanks for checking out my case study deck!")
          setIsUnlocked(true)
          // Validate PDF access after successful authentication
          validatePdfAccess()
        } else {
          // Unexpected response - no token provided
          setPwError(true)
          setPwErrorMessage("Authentication error. Please try again.")
          setShakeKey((k) => k + 1)
          setPassword("")
        }
      } else if (res.status === 429) {
        // Rate limited
        const data = await res.json()
        setPwError(true)
        setPwErrorMessage(data.error || "Too many attempts. Please try again later.")
        setShakeKey((k) => k + 1)
        setPassword("")
      } else {
        setPwError(true)
        setPwErrorMessage("Incorrect password. Please try again.")
        setShakeKey((k) => k + 1)
        setPassword("")
      }
    } catch {
      setPwError(true)
      setPwErrorMessage("Connection error. Please try again.")
      setShakeKey((k) => k + 1)
      setPassword("")
    } finally {
      setPwLoading(false)
    }
  }

  // Handle retry for PDF loading errors
  const handleRetry = () => {
    setPdfError(false)
    validatePdfAccess()
  }

  // Handle download - fetch with auth header and trigger download
  const handleDownload = async () => {
    const token = getStoredToken()
    if (!token) {
      handleUnauthorized()
      toast.error("Session expired. Please log in again.")
      return
    }

    try {
      const res = await fetch(PDF_API_ENDPOINT, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (res.status === 401) {
        handleUnauthorized()
        toast.error("Session expired. Please log in again.")
        return
      }

      if (!res.ok) {
        toast.error("Failed to download. Please try again.")
        return
      }

      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = "jared-clark-product-designer.pdf"
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch {
      toast.error("Failed to download. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-1 flex flex-col">
        {isUnlocked ? (
          <div className="flex-1 flex flex-col px-4 py-8 max-w-6xl mx-auto w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-heading font-semibold text-foreground">
                  Case Study Deck
                </h1>
                <p className="text-sm text-muted-foreground font-mono">
                  Portfolio presentation
                </p>
              </div>
              {pdfReady && (
                <Button
                  variant="outline"
                  onClick={handleDownload}
                  className="w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download PDF
                </Button>
              )}
            </div>

            {!pdfReady && !pdfError ? (
              <div className="flex-1 w-full rounded-lg border border-border bg-muted/20 flex items-center justify-center min-h-[70vh] lg:min-h-[80vh]">
                <div className="flex flex-col items-center gap-3 text-muted-foreground">
                  <Loader2 className="h-8 w-8 animate-spin" aria-hidden="true" />
                  <p className="text-sm">Loading presentation...</p>
                </div>
              </div>
            ) : pdfError ? (
              <div className="flex-1 w-full rounded-lg border border-border bg-muted/20 flex items-center justify-center min-h-[70vh] lg:min-h-[80vh]">
                <div className="flex flex-col items-center gap-4 text-center px-4">
                  <AlertCircle className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
                  <p className="text-muted-foreground">
                    Unable to load the presentation. Please try again.
                  </p>
                  <Button variant="outline" onClick={handleRetry}>
                    Retry
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-1 w-full rounded-lg overflow-hidden border border-border bg-muted/20">
                  {/*
                    Note: The embed can't pass custom headers, so we use an iframe
                    with a blob URL instead for authenticated PDF viewing
                  */}
                  <PdfViewer onUnauthorized={handleUnauthorized} />
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  If the PDF doesn&apos;t display, you can{" "}
                  <button
                    onClick={handleDownload}
                    className="text-foreground underline underline-offset-2"
                  >
                    download it directly
                  </button>
                  .
                </p>
              </>
            )}
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center px-4 py-16">
            <div className="w-full max-w-md">
              <div className="flex flex-col gap-6 p-6 rounded-lg border border-border bg-card">
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-2xl font-heading font-semibold text-foreground">
                    Case Study Deck
                  </h1>
                  <p className="text-base text-muted-foreground">
                    Enter your access password to view
                  </p>
                </div>

                <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <label
                      className="text-sm font-medium text-foreground"
                      htmlFor="deck-password"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        key={shakeKey}
                        id="deck-password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value)
                          setPwError(false)
                          setPwErrorMessage(null)
                        }}
                        placeholder="Enter password"
                        autoComplete="off"
                        aria-invalid={pwError}
                        aria-describedby={pwError ? "password-error" : undefined}
                        className={`w-full h-10 rounded-lg border px-3 pr-10 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors shadow-sm ${
                          pwError ? "border-destructive animate-shake" : "border-input"
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-muted/50 transition-colors"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </button>
                    </div>
                    {pwError && pwErrorMessage && (
                      <p
                        id="password-error"
                        className="text-sm text-destructive"
                        role="alert"
                      >
                        {pwErrorMessage}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={pwLoading || !password.trim()}
                  >
                    {pwLoading ? "Verifying..." : "Unlock"}
                  </Button>
                </form>

                <div className="text-center text-sm text-muted-foreground border-t border-border pt-4">
                  <p>
                    Need access? Email me at{" "}
                    <a
                      href="mailto:jared@jaredclark.design"
                      className="text-foreground underline underline-offset-2"
                    >
                      jared@jaredclark.design
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

// Separate component for PDF viewing that fetches and displays via blob URL
function PdfViewer({ onUnauthorized }: { onUnauthorized: () => void }) {
  const [blobUrl, setBlobUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let objectUrl: string | null = null

    const loadPdf = async () => {
      const token = getStoredToken()
      if (!token) {
        onUnauthorized()
        return
      }

      try {
        const res = await fetch(PDF_API_ENDPOINT, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (res.status === 401) {
          onUnauthorized()
          return
        }

        if (!res.ok) {
          throw new Error("Failed to fetch PDF")
        }

        const blob = await res.blob()
        objectUrl = URL.createObjectURL(blob)
        setBlobUrl(objectUrl)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    loadPdf()

    // Cleanup blob URL on unmount
    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl)
      }
    }
  }, [onUnauthorized])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[70vh] lg:min-h-[80vh]">
        <div className="flex flex-col items-center gap-3 text-muted-foreground">
          <Loader2 className="h-8 w-8 animate-spin" aria-hidden="true" />
          <p className="text-sm">Loading PDF...</p>
        </div>
      </div>
    )
  }

  if (error || !blobUrl) {
    return (
      <div className="flex items-center justify-center min-h-[70vh] lg:min-h-[80vh]">
        <div className="flex flex-col items-center gap-4 text-center px-4">
          <AlertCircle className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
          <p className="text-muted-foreground">
            Unable to display the PDF. Try downloading it instead.
          </p>
        </div>
      </div>
    )
  }

  return (
    <embed
      src={blobUrl}
      type="application/pdf"
      width="100%"
      height="100%"
      className="min-h-[70vh] lg:min-h-[80vh]"
      title="Case Study Deck PDF"
    />
  )
}
