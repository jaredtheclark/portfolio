"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ContactModal } from "@/components/contact-modal"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronsDown } from "lucide-react"
import { LinkedInButton } from "@/components/linkedin-button"

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
    >
      <path
        d="M12.6667 7.33301H3.33333C2.59695 7.33301 2 7.92996 2 8.66634V13.333C2 14.0694 2.59695 14.6663 3.33333 14.6663H12.6667C13.403 14.6663 14 14.0694 14 13.333V8.66634C14 7.92996 13.403 7.33301 12.6667 7.33301Z"
        stroke="#525252"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66797 7.33301V4.66634C4.66797 3.78229 5.01916 2.93444 5.64428 2.30932C6.2694 1.6842 7.11725 1.33301 8.0013 1.33301C8.88536 1.33301 9.7332 1.6842 10.3583 2.30932C10.9834 2.93444 11.3346 3.78229 11.3346 4.66634V7.33301"
        stroke="#525252"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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
}: {
  title: string
  description: string
  imageSrc: string
  videoSrc?: string
  isLocked?: boolean
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isHovered, setIsHovered] = useState(false)

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

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <h5 className="text-base font-medium text-foreground">{title}</h5>
          <p className="text-base font-mono text-muted-foreground">{description}</p>
        </div>
        {isLocked && (
          <div className="flex-shrink-0 bg-muted rounded-full p-2">
            <LockIcon />
          </div>
        )}
      </div>
      <div
        className="overflow-hidden rounded-[4.8px] aspect-[16/10] relative"
        onMouseEnter={videoSrc ? handleMouseEnter : undefined}
        onMouseLeave={videoSrc ? handleMouseLeave : undefined}
      >
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
        <img
          src={imageSrc}
          alt={`${title} project preview`}
          className={`w-full h-full object-cover ${
            videoSrc
              ? `absolute inset-0 transition-opacity duration-200 ${isHovered ? 'opacity-0 ease-out' : 'opacity-100 ease-in'}`
              : ''
          }`}
        />
      </div>
    </div>
  )
}

export default function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

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
        <div className="max-w-6xl mx-auto px-6 py-8 lg:py-24 flex flex-col md:flex-row lg:items-center gap-8 lg:gap-16 relative z-10">
          {/* Content */}
          <div className="flex-1 flex flex-col gap-6 lg:gap-8 lg:pb-6 order-1">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-[32px] md:text-[40px] lg:text-[56px] font-heading font-medium leading-[1.1] lg:leading-[60px] text-foreground">
                  Hi, I'm Jared 👨‍💻
                </h1>
                <p className="text-[20px] md:text-[24px] lg:text-[33px] font-heading font-normal leading-[1.4] lg:leading-[40px] text-muted-foreground">
                  I'm a <span className="text-foreground">design technologist</span> helping teams make strategic decisions, and ship <span className="text-foreground">design systems</span> that scale.
                </p>
              </div>
              <p className="text-xs md:text-lg font-mono text-muted-foreground leading-6 lg:leading-7">
                Design Systems | AI + Code | Design Strategy | UX Research
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                size="lg"
                onClick={scrollToCaseStudies}
                className="w-full md:w-auto flex items-center justify-center gap-2 cursor-pointer"
              >
                View Case Studies
                <ChevronsDown className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Photo - Shows on right for tablet+, bottom-right for mobile */}
          <div className="flex-shrink-0 flex justify-end order-2 lg:order-2">
            <div
              className="w-[124px] h-[200px] md:w-[124px] md:h-[200px] lg:w-[391px] lg:h-[391px] rounded-[1.5em] lg:rounded-full overflow-hidden bg-accent"
              style={{
                boxShadow: "32.867px 38.533px 68.34px 9.067px rgba(40, 60, 16, 0.24)"
              }}
            >
              <img
                src="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/homepage-images/jared-clark-product-designer-2-RJplkdew5XUkwoZCQtJHK0GnYl8unP.jpg"
                alt="Jared Clark, Product Designer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Background Graphic - Hidden on mobile, visible on larger screens */}
        <div className="absolute top-0 right-0 w-[400px] md:w-[542px] lg:w-[799px] h-full z-0 pointer-events-none">
          <img
            src="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/homepage-images/background-graphic-T1CqY4VzLndX5jntYzWHQ0e2MbzKHY.svg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Case Study 1 - Unified Commerce Checkout Platform */}
      <section
        id="case-studies"
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(252.86deg, var(--gradient-case-study-start) 0%, var(--gradient-case-study-end) 100%), var(--gradient-case-study-overlay)"
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row lg:items-center gap-0 lg:gap-[72px]">
          {/* Image - Shows below on mobile/tablet, left on desktop */}
          <div className="flex-shrink-0 self-center lg:self-end order-2 lg:order-1">
            <img
              src="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/homepage-images/jcp-m60-hand-mg65n2nH0dwVFBdfFMwssIJISNl6Pa.png"
              alt="JCPenney POS device in hand"
              className="w-full max-w-[200px] lg:max-w-[373px] lg:w-[373px] h-auto"
            />
          </div>

          {/* Content */}
          <div className="flex-1 py-8 lg:py-10 flex flex-col gap-2 order-1 lg:order-2">
            <div className="flex flex-col gap-4 mb-2">
              <span className="inline-flex w-fit px-2 py-[3px] text-xs font-medium border border-muted-foreground rounded-lg bg-white/10">
                Case Study
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[24px] md:text-[30px] font-heading font-semibold leading-tight lg:leading-none tracking-[-0.3px] text-foreground">
                  Unified Commerce Checkout Platform
                </h3>
                <p className="text-base text-muted-foreground">
                  JCPenney · Principal UX Architect · 2022
                </p>
              </div>
            </div>

            <p className="text-base text-foreground leading-[26px]">
              Led UI design and design system creation for a national retailer's complete POS overhaul—from 20-year-old registers to mobile-first checkout across 650+ stores.
            </p>

            <div className="grid grid-cols-4 gap-2 md:gap-4 py-4">
              <Metric value="$6.2M" label="Hardware savings" />
              <Metric value="86" label="Workflows redesigned" />
              <Metric value="31+" label="Stores launched" />
              <Metric value="4 mo" label="Research to handoff" />
            </div>

            <div>
              <Button variant="outline" asChild className="w-full md:w-auto border-border shadow-sm bg-white/10">
                <Link href="/case-studies/point-of-sale" className="flex items-center justify-center gap-2">
                  Read Case Study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Case Study 2 - Enterprise Payments Platform */}
      <section
        className="relative border-b border-border overflow-hidden"
        style={{
          background: "linear-gradient(252.99deg, var(--gradient-case-study-end) 0%, var(--gradient-case-study-start) 100%), var(--gradient-case-study-overlay), var(--background)"
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row lg:items-center gap-0 lg:gap-[72px]">
          {/* Content */}
          <div className="flex-1 py-8 lg:py-32 flex flex-col gap-2 order-1">
            <div className="flex flex-col gap-4 mb-2">
              <span className="inline-flex w-fit px-2 py-[3px] text-xs font-medium border border-muted-foreground rounded-lg bg-white/10">
                Case Study
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[24px] md:text-[30px] font-heading font-semibold leading-tight lg:leading-none tracking-[-0.3px] text-foreground">
                  Enterprise Payments Platform
                </h3>
                <p className="text-base text-muted-foreground">
                  America's Car-Mart · Principal UX Architect · 2025
                </p>
              </div>
            </div>

            <p className="text-base text-foreground leading-[26px]">
              Launched a zero-to-one payments platform in four months achieving 200% increase in auto pay enrollment.
            </p>

            <div className="grid grid-cols-4 gap-2 md:gap-4 py-4">
              <Metric value="200%" label="Autopay increase" />
              <Metric value="15%" label="Portal growth" />
              <Metric value="4 mo" label="Delivery time" />
              <Metric value="100K+" label="Customers" />
            </div>

            <div>
              <Button variant="outline" asChild className="w-full md:w-auto border-border shadow-sm bg-white/10">
                <Link href="/case-studies/enterprise-payments-platform" className="flex items-center justify-center gap-2">
                  Read Case Study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Image - Single responsive image that overflows right and bottom on desktop */}
          <div className="flex-1 flex justify-center order-2">
            <img
              src="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/homepage-images/ACM-iPad-fimEV8EFeOBpxGUooPLPYfiqpQNCgU.png"
              alt="Enterprise Payments Platform interface on iPad"
              className="hidden lg:inline lg:left-0 top-0 lg:top-[48px] w-[417px] md:w-[500px] lg:w-[909px] xl:w-[70vw] origin-top-left lg:scale-200"
              style={{ filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25))" }}
            />   
            <img
              src="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/homepage-images/acm-ipad-mobile-qDSyOGHv3LuyZIutCftZjlgMmqcZyo.png"
              alt="Enterprise Payments Platform interface on iPad"
              className="lg:hidden w-[417px] md:w-[500px]"
              style={{ filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25))" }}
            />
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
            {/* Follett Corporation */}
            <SnapshotCard
              title="Follett Corporation"
              description="Service Design | Point of Sale"
              imageSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/follett.png"
              // videoSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/follett.mp4"
            />

            {/* Walmart Information Security */}
            <SnapshotCard
              title="Walmart Information Security"
              description="User Research | Design Systems"
              imageSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/walmart-infosec.png"
              videoSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/walmart-infosec.mp4"
              isLocked={true}
            />

            {/* Walmart Legal Themis */}
            <SnapshotCard
              title="Walmart Legal Themis"
              description="User Interface | Prototyping"
              imageSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/walmart-themis.png"
              // videoSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/walmart-themis.mp4"
              isLocked={true}
            />

            {/* Walmart Data Ventures Luminate */}
            <SnapshotCard
              title="Walmart Data Ventures Luminate"
              description="Data Visualization | Prototyping"
              imageSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/walmart-luminate.png"
              videoSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/walmart-luminate.mp4"
            />

            {/* Handled Home */}
            <SnapshotCard
              title="Handled Home"
              description="Design Systems | Consumer App"
              imageSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/handled-home.png"
              videoSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/Handled-movie-.mp4"
            />
          </div>
        </div>
      </section>

      {/* Combined Let's Connect + Footer Section */}
      <section className="relative border-t border-border overflow-hidden">
        {/* Background graphic */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/homepage-images/footer-background-graphic-nYEU3AUOuyt2v1GFh54ltYu7BG9bl9.jpg"
            alt=""
            className="w-full h-full object-cover dark:opacity-20"
          />
          <div className="absolute inset-0" style={{ backgroundColor: `var(--background)`, opacity: `var(--footer-overlay-opacity)` }} />
        </div>

        {/* Let's Connect Content */}
        <div className="relative z-10 px-6 py-16 md:py-24 lg:py-36 max-w-6xl mx-auto">
          <div className="flex flex-col gap-2 mb-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold leading-tight lg:leading-10 text-foreground">
              Let's Connect
            </h2>
            <div className="text-base md:text-lg text-muted-foreground leading-6 md:leading-7 pb-2">
              <p>I'm looking for my next role building teams and shaping product strategy.</p>
              <p>If you need a design leader who ships measurable outcomes, let's talk.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Button
              size="lg"
              onClick={() => setIsContactModalOpen(true)}
              className="cursor-pointer group w-full sm:w-auto"
            >
              <span className="inline-flex items-center justify-center transition-all duration-300 ease-out">
                <span>Say Hello</span>
                <span className="inline-block w-0 overflow-visible opacity-0 transition-all duration-300 ease-out group-hover:w-[1.25rem] group-hover:opacity-100 group-hover:ml-2 group-hover:animate-wave-in">
                  👋
                </span>
              </span>
            </Button>
            <LinkedInButton />
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            Available for full-time and contract roles.
          </p>
        </div>

        {/* Footer */}
        <div className="relative z-10 px-6 py-6 md:py-10 border-t-0">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium text-muted-foreground tracking-wider">
              Created with ⌨️, 🖱️, and 🤖 by 👨‍💻
            </p>
          </div>
        </div>
      </section>

      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
    </div>
  )
}
