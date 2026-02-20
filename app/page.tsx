"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ChevronsDown, Eye, EyeOff } from "lucide-react"
import { toast } from "sonner"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { ContactModal } from "@/components/contact-modal"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

// Types for snapshot article content
type SnapshotArticleBlock = {
  heading?: string
  body?: string
  image?: { src: string; alt: string; caption?: string }
}

type SnapshotArticle = {
  summary: string
  blocks: SnapshotArticleBlock[]
}

// Lock icon SVG component
function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ stroke: "var(--lock-icon-stroke)" }}
    >
      <path
        d="M12.6667 7.33301H3.33333C2.59695 7.33301 2 7.92996 2 8.66634V13.333C2 14.0694 2.59695 14.6663 3.33333 14.6663H12.6667C13.403 14.6663 14 14.0694 14 13.333V8.66634C14 7.92996 13.403 7.33301 12.6667 7.33301Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66797 7.33301V4.66634C4.66797 3.78229 5.01916 2.93444 5.64428 2.30932C6.2694 1.6842 7.11725 1.33301 8.0013 1.33301C8.88536 1.33301 9.7332 1.6842 10.3583 2.30932C10.9834 2.93444 11.3346 3.78229 11.3346 4.66634V7.33301"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Recommendation card component
function RecommendationCard({
  name,
  role,
  quote,
}: {
  name: string
  role?: string
  quote: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-[4.8px] border border-border bg-white/5">
      <p
        className="text-base text-foreground leading-[1.6] flex-1"
        style={{ textIndent: "-0.45em", paddingLeft: "0.45em" }}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-border">
        <p className="text-sm font-medium text-foreground">{name}</p>
        {role && <p className="text-xs font-mono text-muted-foreground">{role}</p>}
      </div>
    </div>
  )
}

// Case study metric component
function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex-1">
      <p className="text-2xl font-sans text-foreground">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  )
}

// Snapshot card component
function SnapshotCard({
  title,
  description,
  imageSrc,
  videoSrc,
  isLocked = false,
  lockedIntro,
  article,
  isGloballyUnlocked,
  onUnlock,
}: {
  title: string
  description: string
  imageSrc: string
  videoSrc?: string
  isLocked?: boolean
  lockedIntro?: string
  article?: SnapshotArticle
  isGloballyUnlocked?: boolean
  onUnlock?: () => void
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const modalVideoRef = useCallback((node: HTMLVideoElement | null) => {
    if (node) {
      node.play().catch(() => {})
    }
  }, [])
  const [isHovered, setIsHovered] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [password, setPassword] = useState("")
  const [pwError, setPwError] = useState(false)
  const [pwLoading, setPwLoading] = useState(false)
  const [shakeKey, setShakeKey] = useState(0)
  const [showPassword, setShowPassword] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  const handleOpenModal = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
    setModalOpen(true)
    setPassword("")
    setPwError(false)
    setShowPassword(false)
  }

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!password.trim()) {
      setPwError(true)
      setShakeKey((k) => k + 1)
      return
    }

    setPwLoading(true)
    setPwError(false)

    try {
      const res = await fetch("/api/snapshot-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: password.trim(), snapshotTitle: title }),
      })

      if (res.ok) {
        toast.success("Hey! Thanks for checking out my portfolio, feel free to reach out with any questions.")
        onUnlock?.()
      } else {
        setPwError(true)
        setShakeKey((k) => k + 1)
        setPassword("")
      }
    } catch {
      setPwError(true)
      setShakeKey((k) => k + 1)
      setPassword("")
    } finally {
      setPwLoading(false)
    }
  }

  const showArticle = article && (!isLocked || isGloballyUnlocked)

  
  return (
    <>
      <div className="flex flex-col gap-2 cursor-pointer group" onClick={handleOpenModal} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && handleOpenModal()}>
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <h5 className="text-base font-medium text-foreground group-hover:text-primary transition-colors">{title}</h5>
            <p className="text-base font-mono text-muted-foreground">{description}</p>
          </div>
          {isLocked && !isGloballyUnlocked && (
            <div className="flex-shrink-0 bg-muted rounded-full p-2">
              <LockIcon />
            </div>
          )}
        </div>
        <div
          className="overflow-hidden rounded-[4.8px] aspect-[16/10] relative group/image"
          onMouseEnter={videoSrc ? handleMouseEnter : undefined}
          onMouseLeave={videoSrc ? handleMouseLeave : undefined}
        >
          {/* Hover overlay - desktop only, same for all cards */}
          <div
            className="hidden md:flex absolute inset-0 z-10 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 items-center justify-center pointer-events-none"
            style={{ backgroundColor: "var(--snapshot-hover-overlay)" }}
          >
            <div
              className="border border-border/50 backdrop-blur-sm rounded-lg px-6 py-2.5 shadow-sm"
              style={{ backgroundColor: "var(--snapshot-hover-button-bg)" }}
            >
              <span className="text-sm font-medium text-foreground">See Details</span>
            </div>
          </div>

          {videoSrc && (
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}
          <Image
            src={imageSrc}
            alt={`${title} project preview`}
            fill
            className={`object-cover ${
              videoSrc
                ? `absolute inset-0 transition-opacity duration-200 ${isHovered ? 'opacity-0 ease-out' : 'opacity-100 ease-in'}`
                : ''
            }`}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <Dialog open={modalOpen} onOpenChange={(open) => {
        setModalOpen(open)
        if (!open) {
          setPassword("")
          setPwError(false)
        }
      }}>
        <DialogContent className={`overflow-y-auto ${showArticle ? "sm:max-w-6xl max-h-[95vh]" : "sm:max-w-2xl max-h-[85vh]"}`} onOpenAutoFocus={(e) => e.preventDefault()}>
          <DialogHeader className="text-left">
            <div className="flex items-center gap-2">
              <DialogTitle className="font-heading text-2xl font-semibold -tracking-[0.04em] text-left">
                {title}
              </DialogTitle>
              {isLocked && !isGloballyUnlocked && (
                <Badge variant="outline" className="gap-1.5 font-normal text-xs">
                  <LockIcon className="opacity-60" />
                  Locked
                </Badge>
              )}
            </div>
            <DialogDescription className="text-base font-mono text-muted-foreground text-left">{description}</DialogDescription>
          </DialogHeader>

          <div className="flex flex-col">
            {showArticle ? (
              <>
                <p className="text-base text-muted-foreground leading-relaxed">{article.summary}</p>
                {videoSrc && (
                  <div className="mt-4 rounded-lg overflow-hidden">
                    <video
                      ref={modalVideoRef}
                      muted
                      loop
                      playsInline
                      autoPlay
                      className="w-full"
                    >
                      <source src={videoSrc} type="video/mp4" />
                    </video>
                  </div>
                )}
                {article.blocks.map((block, i) => (
                  <div key={i} className="flex flex-col gap-2 mt-4">
                    {block.image && (
                      <figure className="flex flex-col gap-1">
                        <Image
                          src={block.image.src}
                          alt={block.image.alt}
                          width={800}
                          height={500}
                          className="w-full rounded-sm object-cover"
                        />
                        {block.image.caption && (
                          <figcaption className="text-sm italic text-muted-foreground">{block.image.caption}</figcaption>
                        )}
                      </figure>
                    )}
                    {block.heading && (
                      <h3 className="text-lg font-semibold font-heading mt-2">{block.heading}</h3>
                    )}
                    {block.body && (
                      <p className="text-base leading-relaxed">{block.body}</p>
                    )}
                  </div>
                ))}
              </>
            ) : isLocked ? (
              <>
                {/* Paragraph - 16px gap to image */}
                <p className="text-base leading-relaxed">
                  {lockedIntro || "This snapshot contains client-sensitive details."} That's just about all I can say, but there's more to see. Request access by emailing me at{" "}
                  <a
                    href="mailto:jared@jaredclark.design"
                    className="text-foreground underline underline-offset-2"
                  >
                    jared@jaredclark.design
                  </a>
                  {" "}or{" "}
                  <a
                    href="https://www.linkedin.com/in/jaredclarkdesign/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline underline-offset-2"
                  >
                    LinkedIn
                  </a>
                  .
                </p>

                {/* Video/Image preview in gray container - 16px gap to form */}
                <div className="rounded-lg p-4 mt-4" style={{ backgroundColor: "var(--snapshot-preview-bg)" }}>
                  <div className="relative w-full aspect-[16/10] rounded-[4.8px] overflow-hidden">
                    {videoSrc ? (
                      <video
                        ref={modalVideoRef}
                        muted
                        loop
                        playsInline
                        autoPlay
                        className="w-full h-full object-cover"
                      >
                        <source src={videoSrc} type="video/mp4" />
                      </video>
                    ) : (
                      <Image
                        src={imageSrc}
                        alt={`${title} preview`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}
                  </div>
                </div>

                {/* Password form - 16px gap from image */}
                <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-4 mt-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-foreground" htmlFor="snapshot-password">
                      Enter access password
                    </label>
                    <div className="relative">
                      <input
                        key={shakeKey}
                        id="snapshot-password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); setPwError(false) }}
                        placeholder="Password"
                        autoComplete="off"
                        aria-invalid={pwError}
                        aria-describedby={pwError ? "password-error" : undefined}
                        className={`w-full h-9 rounded-lg border px-3 pr-9 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors shadow-sm ${
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
                    {pwError && (
                      <p id="password-error" className="text-sm text-destructive" role="alert">
                        {!password.trim()
                          ? "Enter a code to continue."
                          : "That code didn't work. Try again or request access."}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={pwLoading || !password.trim()}
                  >
                    {pwLoading ? "..." : "Unlock"}
                  </Button>
                </form>
              </>
            ) : (
              <p className="text-base text-muted-foreground leading-relaxed">
                No additional content available for this project.
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
        title="Request Snapshot Access"
        description="I'd be happy to share more details about this project. Let me know what you'd like to see and I'll get back to you soon."
        defaultMessage={`I'd like to request access to the "${title}" snapshot.`}
      />
    </>
  )
}

export default function HomePage() {
  const [isUnlocked, setIsUnlocked] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('snapshot_unlocked') === 'true') {
      setIsUnlocked(true)
    }
  }, [])

  const handleUnlock = () => {
    setIsUnlocked(true)
    sessionStorage.setItem('snapshot_unlocked', 'true')
  }

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      (window as Window & { clearSnapshotAccess?: () => void }).clearSnapshotAccess = () => {
        sessionStorage.removeItem('snapshot_unlocked')
        setIsUnlocked(false)
        console.log('[dev] snapshot_unlocked cleared')
      }
      console.log(
        '%c clearSnapshotAccess() %c reset snapshot session lock',
        'background:#1a1a1a;color:#22d3ee;font-family:monospace;padding:2px 6px;border-radius:3px;border:1px solid #22d3ee',
        'color:#737373;font-family:monospace'
      )
    }
  }, [])

  const scrollToCaseStudies = () => {
    const caseStudiesSection = document.getElementById('case-studies')
    const nav = document.querySelector('nav')
    if (caseStudiesSection && nav) {
      const navHeight = nav.offsetHeight
      const elementPosition = caseStudiesSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative border-b border-border overflow-hidden" style={{
        background: "linear-gradient(251.79deg, var(--gradient-hero-start) 0%, var(--gradient-hero-end) 100%), var(--background)"
      }}>
        <div className="max-w-6xl mx-auto px-4 md:px-[72px] py-8 lg:py-24 flex flex-col md:flex-row lg:items-center gap-8 lg:gap-16 relative z-10">
          {/* Content */}
          <div className="flex-1 flex flex-col gap-6 lg:gap-8 lg:pb-6 order-1 relative">
            {/* Mobile headshot - absolutely positioned next to h1 */}
            <div
              className="absolute top-[-13px] right-0 w-[48px] h-[48px] rounded-full overflow-hidden bg-accent md:hidden z-10 relative"
              style={{
                boxShadow: "8.813px 10.332px 18.324px 2.431px rgba(40, 60, 16, 0.32)"
              }}
            >
              <Image
                src="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/homepage-images/headshot-designer.jpg"
                alt="Jared Clark, Product Designer"
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-[32px] md:text-[40px] lg:text-[56px] font-heading font-medium leading-[1.1] lg:leading-[60px] text-foreground pr-[75px] md:pr-0">
                  Hi, I'm Jared
                </h1>
                <p className="text-[20px] md:text-[24px] lg:text-[33px] font-heading font-normal leading-[1.4] lg:leading-[40px] text-muted-foreground">
                  I'm a <span className="text-foreground">design technologist</span> helping teams make strategic decisions, and ship <span className="text-foreground">design systems</span> that scale.
                </p>
              </div>
              <p className="text-xs md:text-lg font-mono text-muted-foreground leading-6 lg:leading-7">
                Design Systems | AI + Code | Design Strategy | UX Research
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                onClick={scrollToCaseStudies}
                className="w-full md:w-auto flex items-center justify-center gap-2 cursor-pointer"
              >
                View Case Studies
                <ChevronsDown className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full md:w-auto flex items-center justify-center gap-2"
              >
                <Link href="/about">
                  About Me
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Photo - Hidden on mobile, shows on tablet+ */}
          <div className="hidden md:flex flex-shrink-0 justify-end order-2 lg:order-2">
            <div
              className="w-[124px] h-[200px] lg:w-[200px] lg:h-[320px] rounded-2xl overflow-hidden bg-accent relative"
              style={{
                boxShadow: "32.867px 38.533px 68.34px 9.067px rgba(40, 60, 16, 0.24)"
              }}
            >
              <Image
                src="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/homepage-images/headshot-designer.jpg"
                alt="Jared Clark, Product Designer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 124px, 200px"
                priority
              />
            </div>
          </div>
        </div>

        {/* Background Graphic - Hidden on mobile, visible on larger screens */}
        <div className="absolute top-0 right-0 w-[400px] md:w-[542px] lg:w-[799px] h-full z-0 pointer-events-none" aria-hidden="true">
          <Image
            src="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/homepage-images/background-graphic-T1CqY4VzLndX5jntYzWHQ0e2MbzKHY.svg"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 400px, 799px"
            priority
          />
        </div>
      </section>

         {/* Case Study 2 - Enterprise Payments Platform */}
      <section
        id="case-studies"
        className="relative border-b border-border overflow-hidden"
        style={{
          background: "linear-gradient(252.99deg, var(--gradient-case-study-end) 0%, var(--gradient-case-study-start) 100%), var(--gradient-case-study-overlay), var(--background)"
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row lg:items-center gap-0 lg:gap-[72px]">
          {/* Mobile Image - Shows at top on mobile only */}
          <div className="lg:hidden pt-6">
            <div className="rounded-[16px] flex items-end justify-center overflow-hidden" style={{ backgroundColor: "var(--case-study-image-bg-1)" }}>
              <Image
                src="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/homepage-images/acm-ipad-mobile-qDSyOGHv3LuyZIutCftZjlgMmqcZyo.png"
                alt="Enterprise Payments Platform interface on iPad"
                width={382}
                height={232}
                className="w-full max-w-[382px]"
                style={{ filter: "drop-shadow(0px 1.5px 7.5px rgba(0, 0, 0, 0.25))" }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 py-6 lg:py-32 flex flex-col gap-2">
            <div className="flex flex-col gap-4 mb-2">
              <span className="inline-flex w-fit px-2 py-[3px] text-xs font-medium border border-border rounded-lg bg-white/10">
                Case Study
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[24px] md:text-[30px] font-heading font-semibold leading-tight lg:leading-none tracking-[-0.3px] text-foreground">
                  Unifying Dealership, Digital, and Retail Payments for a National Auto Retailer
                </h3>
                <p className="text-base text-muted-foreground">
                  America's Car-Mart · Principal UX Architect · 2025
                </p>
              </div>
            </div>

            <p className="text-base text-foreground leading-[26px]">
              Launched a zero-to-one payments platform in four months achieving 200% increase in auto pay enrollment.
            </p>

            <div className="grid grid-cols-4 gap-4 py-4">
              <Metric value="200%" label="Autopay increase" />
              <Metric value="15%" label="Portal growth" />
              <Metric value="4 mo" label="Delivery time" />
              <Metric value="100K+" label="Customers" />
            </div>

            <div>
              <Button variant="outline" asChild className="w-full lg:w-auto border-border shadow-sm bg-white/10">
                <Link href="/case-studies/enterprise-payments-platform" className="flex items-center justify-center gap-2">
                  Read Case Study
                  <ArrowRight className="h-6 w-6" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Desktop Image - Shows on right on desktop only */}
          <div className="hidden lg:flex flex-1 justify-center">
            <Image
              src="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/homepage-images/ACM-iPad-fimEV8EFeOBpxGUooPLPYfiqpQNCgU.png"
              alt="Enterprise Payments Platform interface on iPad"
              width={909}
              height={710}
              className="lg:left-0 top-0 lg:top-[48px] lg:w-[909px] xl:w-[70vw] origin-top-left lg:scale-200"
              style={{ filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25))" }}
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

  

       {/* Case Study 1 - Unified Commerce Checkout Platform */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(252.86deg, var(--gradient-case-study-start) 0%, var(--gradient-case-study-end) 100%), var(--gradient-case-study-overlay)"
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row lg:items-center gap-0 lg:gap-[72px]">
          {/* Mobile Image - Shows at top on mobile only */}
          <div className="lg:hidden pt-6">
            <div className="rounded-[16px] flex items-end justify-center" style={{ backgroundColor: "var(--case-study-image-bg-2)" }}>
              <Image
                src="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/homepage-images/jcp-m60-hand-mg65n2nH0dwVFBdfFMwssIJISNl6Pa.png"
                alt="JCPenney POS device in hand"
                width={190}
                height={229}
                className="w-[190px] h-auto"
              />
            </div>
          </div>

          {/* Desktop Image - Shows on left on desktop only */}
          <div className="hidden lg:flex flex-shrink-0 self-end">
            <Image
              src="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/homepage-images/jcp-m60-hand-mg65n2nH0dwVFBdfFMwssIJISNl6Pa.png"
              alt="JCPenney POS device in hand"
              width={373}
              height={500}
              className="w-full max-w-[373px] h-auto"
            />
          </div>

          {/* Content */}
          <div className="flex-1 py-6 pb-8 lg:py-10 flex flex-col gap-2">
            <div className="flex flex-col gap-4 mb-2">
              <span className="inline-flex w-fit px-2 py-[3px] text-xs font-medium border border-border rounded-lg bg-white/10">
                Case Study
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[24px] md:text-[30px] font-heading font-semibold leading-tight lg:leading-none tracking-[-0.3px] text-foreground">
                  Designing the Future of Retail Checkout
                </h3>
                <p className="text-base text-muted-foreground">
                  JCPenney · Staff Product Designer · 2022
                </p>
              </div>
            </div>

            <p className="text-base text-foreground leading-[26px]">
              Point of Sale service and design system creation for a national retailer. Our team transformed JCPenney's point of sale supporting a mobile-first checkout experience launched across 650+ stores.
            </p>

            <div className="grid grid-cols-4 gap-4 py-4">
              <Metric value="+15%" label="Transaction throughput" />
              <Metric value="$6.2M" label="Hardware savings" />
              <Metric value="86" label="Workflows redesigned" />
              <Metric value="650+" label="Stores launched" />
            </div>

            <div>
              <Button variant="outline" asChild className="w-full lg:w-auto border-border shadow-sm bg-white/10">
                <Link href="/case-studies/point-of-sale" className="flex items-center justify-center gap-2">
                  Read Case Study
                  <ArrowRight className="h-6 w-6" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Snapshots Section */}
      <section
        className="py-20 px-6"
        style={{
          background: "linear-gradient(to bottom, var(--gradient-snapshots-start), var(--background))"
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-2 mb-12">
            <h2 className="text-[30px] font-heading font-semibold leading-none tracking-[-0.3px] text-foreground">
              Snapshots
            </h2>
            <p className="text-base text-muted-foreground max-w-[604px]">
              Less recent projects and confidential work. Locks indicate NDA restrictions, to talk about a project reach out and Say Hello
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
           

            {/* Walmart Information Security */}
            <SnapshotCard
              title="Walmart Information Security"
              description="User Research | Design Systems"
              imageSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/walmart-infosec.png"
              videoSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/walmart-infosec.mp4"
              isLocked
              lockedIntro="I researched and designed products that Walmart uses to keep its systems secure."
              isGloballyUnlocked={isUnlocked}
              onUnlock={handleUnlock}
              article={{
                summary: "Led UX research and design systems work for Walmart's Information Security division, creating tools that helped security teams triage and respond to threats more effectively.",
                blocks: [
                  {
                    heading: "The Challenge",
                    body: "Walmart Global Tech's security analysts process 6 trillion data points a year across a global network of security operations centers. The internal microservice tools they used to detect and investigate threats couldn't keep up. One key scanning application gave analysts no visibility into system status; they were left refreshing pages and hunting manually for data while the clock ran on time-sensitive decisions. Walmart's Living Design System wasn't built for this class of tooling, so the team needed a different path.",
                  },
                  {
                    heading: "The Approach",
                    body: "Before opening Figma, I helped the security department work through a design system decision. I recommended Elastic UI based on the nature of their tooling, and the team adopted it. From there I embedded on the security floor, interviewed analysts about how they actually worked, scrubbed sensitive details from my notes, and synthesized findings into something actionable. I submitted product updates to Jira throughout to keep leadership aligned. Working alongside an internal designer, I anchored patterns to what SOC analysts already knew, keeping the cognitive load low. On the scanning tool, I redesigned the UI around real-time reactivity: loading states at both the page and component level, so system status was always visible without a manual refresh. I ran user testing with analysts to validate the work, then collaborated closely with a frontend and backend developer to make sure the build matched spec.",
                  },
                  {
                    heading: "The Outcome",
                    body: "Analysts got tools that matched the pace and precision their work actually requires: clear system feedback, less friction, and interfaces built around the workflows they already had. The design system recommendation gave the security department a foundation they can build on. The Figma deliverables were handed off at a standard internal teams could own and extend without starting over.",
                  },
                ],
              }}
            />

            {/* Walmart Data Ventures Luminate */}
            <SnapshotCard
              title="Walmart Data Ventures Luminate"
              description="Data Visualization | Prototyping"
              imageSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/walmart-luminate.png"
              videoSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/walmart-luminate.mp4"
              isLocked
              lockedIntro="Walmart Luminate (now Scintilla) is a SaaS product from Walmart for its vendors."
              isGloballyUnlocked={isUnlocked}
              onUnlock={handleUnlock}
              article={{
                summary: "Designed data visualization interfaces for Walmart Data Ventures' Luminate platform, helping CPG brands understand shopper behavior through retail data insights.",
                blocks: [
                  {
                    heading: "The Challenge",
                    body: "Walmart Data Ventures was building Luminate, a first-of-its-kind platform giving suppliers access to Walmart's rich first-party data. Channel Performance, one of its core modules, needed to surface complex omnichannel metrics across in-store, delivery, pickup, and ship-to-home in a way that was clear and actionable for suppliers ranging from global CPG brands to small businesses. Data-dense dashboards carry a consistent risk: too much noise obscures the signal that drives decisions.",
                  },
                  {
                    heading: "The Approach",
                    body: "I worked alongside a data visualization specialist researcher to shape the information architecture of Channel Performance, ensuring the structure of the product matched how suppliers actually needed to interrogate their data. As launch approached, my focus shifted to building the data visualization components themselves; charts and graphs designed to flex across different data contexts while maintaining a consistent source of truth. To prepare, I studied Steven Few's Now You See It and Information Dashboard Design, grounding the work in established principles of perceptual efficiency and dashboard clarity. The Figma environment was built to handoff-ready standards, as it would be inherited by Walmart's internal design teams. Every component, variable, and annotation had to be pristine.",
                  },
                  {
                    heading: "The Outcome",
                    body: "Channel Performance launched as part of Walmart Luminate in early 2022 and became a cornerstone of the platform. Walmart Data Ventures grew its client base by 173% and saw 100% renewal from existing subscribers, many signing on for three years or longer. The platform has since expanded to Mexico and Canada, rebranding as Scintilla in 2025 to support its global ambitions.",
                  },
                ],
              }}
            />

            {/* Walmart Legal Themis */}
            <SnapshotCard
              title="Walmart Legal Themis"
              description="User Interface | Prototyping"
              imageSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/walmart-themis.png"
              isLocked
              lockedIntro="Themis is an internal case management platform that routes and resolves legal matters across thousands of external law firms at enterprise scale."
              isGloballyUnlocked={isUnlocked}
              onUnlock={handleUnlock}
              article={{
                summary: "Designed the UI for Themis, Walmart's internal legal matter management platform, streamlining how legal teams track cases, deadlines, and document workflows.",
                blocks: [
                  {
                    heading: "The Challenge",
                    body: "Walmart's legal department was managing complex litigation and compliance matters across spreadsheets and disconnected systems, creating risk and inefficiency at scale.",
                  },
                  {
                    heading: "Approach",
                    body: "Collaborated with legal operations stakeholders to map matter lifecycle workflows, then designed an interface system that surfaced the right information at each stage without overwhelming users.",
                  },
                  {
                    heading: "Outcome",
                    body: "Delivered a production-ready UI that consolidated matter tracking, document management, and deadline visibility into a single workflow-driven interface.",
                  },
                ],
              }}
            />

            {/* Handled Home */}
            <SnapshotCard
              title="Handled Home"
              description="Design Systems | Consumer App"
              imageSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/handled-home.png"
              videoSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/Handled-movie-.mp4"
              isGloballyUnlocked={isUnlocked}
              onUnlock={handleUnlock}
              article={{
                summary: "Built the design system and consumer-facing mobile app for Handled Home, a moving services startup that went from concept to launch and exit in under two years.",
                blocks: [
                  {
                    heading: "The Challenge",
                    body: "As a founding product designer, I needed to establish a complete design language and component library that supported product interactions while aligning with brand design. This design system needed to integrate simultaneously while our product team shipped product features on an aggressive startup timeline.",
                  },
                  {
                    heading: "Approach",
                    body: "Created a token-based design system in Figma and worked with development to map these to React Native components, to enable the same rapid feature development in design tools and in code. I later designed the consumer booking flow, service customization, and real-time tracking experience in the application. Customers could book a move, document their possessions, and track them as they were trucked across the country.",
                  },
                  {
                    heading: "Outcome",
                    body: "Handled launched to market in five months. The startup reached revenue and was acquired two years later. I designed the UI system to support white-labeling, then worked with the acquiring company to roll out the service across their national brands.",
                  },
                ],
              }}
            />

            {/* Follett Corporation */}
            <SnapshotCard
              title="Follett Corporation"
              description="Service Design | Point of Sale"
              imageSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/follett.png"
              isLocked
              lockedIntro="I designed the point of sale for Follett, a national collegiate bookstore."
              isGloballyUnlocked={isUnlocked}
              onUnlock={handleUnlock}
              article={{
                summary: "Redesigned point-of-sale and service workflows for Follett Corporation, one of the largest campus retail and library services companies in North America.",
                blocks: [
                  {
                    heading: "The Challenge",
                    body: "Follett Higher Education runs campus retail at scale: 1,000+ stores, course materials, book and software rentals, and high-volume events like pop-ups and sporting events. Their existing POS couldn't flex to meet those demands. Checkout was a bottleneck.",
                  },
                  {
                    heading: "The Approach",
                    body: "I led UI design alongside a UX researcher. We ran Jobs to be Done sessions and ORCA workshops, then I modeled Follett's operational systems as Figma objects using variables. Prototypes pulled from realistic data tied to actual use cases, giving stakeholders something to evaluate against their real workflows rather than a demo.",
                  },
                  {
                    heading: "The Outcome",
                    body: "Follett selected GK Software as their new cloud-based POS provider and built on my custom UI instead of GK's default interface. The design targeted their specific rental and course materials workflows. It runs on a dockable tablet that supports additional hardware, deployed across 1,000+ stores, pop-up shops, and sporting arenas serving over six million students.",
                  },
                ],
              }}
            />
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-2 mb-12">
            <h2 className="text-[30px] font-heading font-semibold leading-none tracking-[-0.3px] text-foreground">
              Recommendations
            </h2>
            <p className="text-base text-muted-foreground max-w-[604px]">
              What colleagues, managers, and clients have said about working with me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RecommendationCard
              name="Tom Greever"
              role="VP | Author, Articulating Design Decisions"
              quote={<>Jared was the lead designer on a project that I oversaw—it was a great experience working with him. He is one of those <span className="font-semibold">rare designers who is talented at both visual design and the more technical aspects of design</span> that require knowledge of coding. He was not afraid to dabble in code-heavy environments, was an <span className="font-semibold">excellent champion for design systems</span>, and <span className="font-semibold">always delivered quality work</span>. He is kind, articulate, funny, and genuine.</>}
            />
            <RecommendationCard
              name="John Whitman"
              role="Director of Product"
              quote={<>Jared brought <span className="font-semibold">exceptional strategic thinking and technical expertise</span> to this complex project. They architected an end-to-end experience that <span className="font-semibold">balanced user needs with business requirements and technical constraints</span>, ensuring our system was both intuitive and scalable. What set Jared apart was their collaborative approach. They <span className="font-semibold">worked seamlessly across all teams</span>—Business Analysts, Product Design, UX, Quality Assurance and Development—making complex UX concepts accessible to all stakeholders and maintaining alignment throughout the project.</>}
            />
            <RecommendationCard
              name="Corey Campbell"
              role="Director of Product Strategy & Design"
              quote={<>Jared is an <span className="font-semibold">exceptional visual designer</span> and has robust experience in <span className="font-semibold">digital product design, design systems, branding, and even data visualization</span>. He amplifies this experience with <span className="font-semibold">strong familiarity in CSS and HTML as well as React</span>, making his ability to collaborate with engineering a breeze. His eye for well balanced design aesthetic takes his execution to the next level and sets him apart as a best in class UI designer. I would highly recommend Jared for a <span className="font-semibold">Digital Product Design leadership position</span> due to his deep experience across many industries in B2B, B2C, Enterprise, Startup, etc.</>}
            />
            <RecommendationCard
              name="Hiba Murali"
              role="Senior Product Designer"
              quote={<>Jared is an amazingly dedicated and sharp colleague! He demonstrated the ability to <span className="font-semibold">break down complex feature requests into clean and intuitive designs</span> that sparked delight and excitement from stakeholders, and was able to <span className="font-semibold">communicate design ideas in a highly effective way</span>. Besides his top-notch design skills and genuine desire to do whatever it took to make the client happy, he also brought a sense of enthusiasm and camaraderie to the team. He <span className="font-semibold">happily mentored me on my design work and general career</span>. He is truly an excellent designer and an excellent human being!</>}
            />
            <RecommendationCard
              name="Kathleen Radecki"
              role="Program Manager"
              quote={<>Jared possesses a <span className="font-semibold">remarkable ability to generate innovative ideas promptly</span> and readily <span className="font-semibold">collaborate with both development and product teams</span> to ensure our products align with customer usability goals and business objectives. His collaborative nature made working with him a seamless experience, and I have no reservations about working with Jared again on future projects.</>}
            />
            <RecommendationCard
              name="Charles Gugino"
              role="Technical Program Manager"
              quote={<>Jared makes work fun and he gets it done. He was a key reason a <span className="font-semibold">0-to-1 startup went from concept to launch and revenue in 5 months</span>—and it <span className="font-semibold">exited two years later</span>. He has great ideas, he's fun to work with, I can't recommend him more highly.</>}
            />
            <RecommendationCard
              name="Kendall Johnson"
              role="Senior Product Designer"
              quote={<>Jared is an <span className="font-semibold">incredibly attentive, thorough, and passionate</span> Product Designer. His <span className="font-semibold">commitment to his craft is inspiring</span> and is evident through the work that he produces. Not only is Jared extremely talented, but he is also a lot of fun to work with and brings amazing energy. I know he is going to do really, really big things!</>}
            />
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" asChild className="flex items-center gap-2">
              <a href="https://www.linkedin.com/in/jaredclarkdesigner/details/recommendations/" target="_blank" rel="noopener noreferrer">
                See all recommendations on LinkedIn
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <ContactSection />

      <Footer />

    </div>
  )
}
