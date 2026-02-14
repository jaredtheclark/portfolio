"use client"

import type React from "react"
import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronsDown } from "lucide-react"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"

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

// Recommendation card component
function RecommendationCard({
  name,
  title,
  relationship,
  date,
  quote,
}: {
  name: string
  title: string
  relationship: string
  date: string
  quote: string
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
        <p className="text-xs font-mono text-muted-foreground">{title}</p>
        <p className="text-xs text-muted-foreground">{relationship} &middot; {date}</p>
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
  )
}

export default function HomePage() {

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
                priority
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
            <Image
              src="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/homepage-images/jcp-m60-hand-mg65n2nH0dwVFBdfFMwssIJISNl6Pa.png"
              alt="JCPenney POS device in hand"
              width={373}
              height={500}
              className="w-full max-w-[200px] lg:max-w-[373px] lg:w-[373px]"
              style={{ height: 'auto' }}
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
                  Designing the Future of Retail Checkout
                </h3>
                <p className="text-base text-muted-foreground">
                  JCPenney · Senior Product Designer · 2022
                </p>
              </div>
            </div>

            <p className="text-base text-foreground leading-[26px]">
              Point of Sale service and design system creation for a national retailer. Our team transformed JCPenney's point of sale supporting a mobile-first checkout experience launched across 650+ stores.
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
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
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
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Image - Single responsive image that overflows right and bottom on desktop */}
          <div className="flex-1 flex justify-center order-2">
            <Image
              src="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/homepage-images/ACM-iPad-fimEV8EFeOBpxGUooPLPYfiqpQNCgU.png"
              alt="Enterprise Payments Platform interface on iPad"
              width={909}
              height={710}
              className="hidden lg:inline lg:left-0 top-0 lg:top-[48px] w-[417px] md:w-[500px] lg:w-[909px] xl:w-[70vw] origin-top-left lg:scale-200"
              style={{ filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25))" }}
            />
            <Image
              src="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/homepage-images/acm-ipad-mobile-qDSyOGHv3LuyZIutCftZjlgMmqcZyo.png"
              alt="Enterprise Payments Platform interface on iPad"
              width={500}
              height={350}
              className="lg:hidden w-[417px] md:w-[500px]"
              style={{ filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25))", height: 'auto' }}
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
           

            {/* Walmart Information Security */}
            <SnapshotCard
              title="Walmart Information Security"
              description="User Research | Design Systems"
              imageSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/walmart-infosec.png"
              videoSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/walmart-infosec.mp4"
            />

                     {/* Walmart Data Ventures Luminate */}
            <SnapshotCard
              title="Walmart Data Ventures Luminate"
              description="Data Visualization | Prototyping"
              imageSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/walmart-luminate.png"
              videoSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/walmart-luminate.mp4"
            />

            {/* Walmart Legal Themis */}
            <SnapshotCard
              title="Walmart Legal Themis"
              description="User Interface | Prototyping"
              imageSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/walmart-themis.png"
              // videoSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/walmart-themis.mp4"
            />

   

            {/* Handled Home */}
            <SnapshotCard
              title="Handled Home"
              description="Design Systems | Consumer App"
              imageSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/handled-home.png"
              videoSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/Handled-movie-.mp4"
            />
             {/* Follett Corporation */}
            <SnapshotCard
              title="Follett Corporation"
              description="Service Design | Point of Sale"
              imageSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/follett.png"
              // videoSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/follett.mp4"
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
              name="John Whitman"
              title="Product Owner | Operator | Strategist | People Leader"
              relationship="Managed Jared directly"
              date="October 2025"
              quote="Jared brought exceptional strategic thinking and technical expertise to this complex project. They architected an end-to-end experience that balanced user needs with business requirements and technical constraints, ensuring our system was both intuitive and scalable. What set Jared apart was their collaborative approach. They worked seamlessly across all teams—Business Analysts, Product Design, UX, Quality Assurance and Development—making complex UX concepts accessible to all stakeholders and maintaining alignment throughout the project."
            />
            <RecommendationCard
              name="Corey Campbell"
              title="Director of Product Strategy & Design at Fleet Enable"
              relationship="Managed Jared directly"
              date="July 2022"
              quote="Jared is an exceptional visual designer and has robust experience in digital product design, design systems, branding, and even data visualization best practices. He amplifies this experience with strong familiarity in CSS and HTML as well as React, making his ability to collaborate with engineering a breeze. His eye for well balanced design aesthetic takes his execution to the next level and sets him apart as a best in class UI designer. I would highly recommend Jared for a Digital Product Design leadership position due to his deep experience across many industries in B2B, B2C, Enterprise, Startup, etc."
            />
            <RecommendationCard
              name="Hiba Murali"
              title="Senior Product Designer @ Document Crunch"
              relationship="Same team"
              date="July 2022"
              quote="Jared is an amazingly dedicated and sharp colleague! He demonstrated the ability to break down complex feature requests into clean and intuitive designs that sparked delight and excitement from stakeholders, and was able to communicate design ideas in a highly effective way. Besides his top-notch design skills and genuine desire to do whatever it took to make the client happy, he also brought a sense of enthusiasm and camaraderie to the team. He is truly an excellent designer and an excellent human being!"
            />
            <RecommendationCard
              name="Tom Greever"
              title="VP of Product Design & Research, AI-first marketplaces and SaaS"
              relationship="Client"
              date="April 2020"
              quote="Jared was the lead designer on a project that I oversaw—it was a great experience working with him and I hope we have the opportunity to work together again. He is one of those rare designers who is talented at both visual design, as well as some of the more technical aspects of design that require knowledge of coding. He was not afraid to dabble in code-heavy environments, was an excellent champion for design systems, and always delivered quality work. He is kind, articulate, funny, and genuine."
            />
            <RecommendationCard
              name="Kathleen Radecki"
              title="Community Leader & Maker of Products that Help People"
              relationship="Different teams"
              date="September 2023"
              quote="Jared possesses a remarkable ability to generate innovative ideas promptly and readily collaborate with both development and product teams to ensure our products align with customer usability goals and business objectives. His collaborative nature made working with him a seamless experience, and I have no reservations about working with Jared again on future projects. If you're seeking assistance in designing a new product, Jared is undoubtedly the right choice for the job!"
            />
            <RecommendationCard
              name="Charles Gugino"
              title="Business + Tech · TPM @ RaiseRight"
              relationship="Senior to Jared"
              date="September 2022"
              quote="Jared makes work fun and he gets it done. He was a key reason a 0-1 startup went from concept to launch & revenue in 5 months (Bonus: It exited 2 years later). He has great ideas, he's fun to work with, I can't recommend him more highly."
            />
            <RecommendationCard
              name="Kendall Johnson"
              title="Senior Product Designer | AI · UX Strategy · Complex Workflows"
              relationship="Different teams"
              date="July 2022"
              quote="Jared is an incredibly attentive, thorough, and passionate Product Designer. His commitment to his craft is inspiring and is evident through the work that he produces. Not only is Jared extremely talented, but he is also a lot of fun to work with and brings amazing energy. I know he is going to do really, really big things!"
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
