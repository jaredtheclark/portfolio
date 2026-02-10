"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { LetsConnect } from "@/components/lets-connect"
import { ContactModal } from "@/components/contact-modal"
import { Footer } from "@/components/footer"
import { SplineSolution } from "@/components/spline-solution"
import { SplineHero } from "@/components/spline-hero"
import { cn } from "@/lib/utils"

// Asset URLs
const ASSETS = {
  videos: {
    heroPhone: "https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/case-study_jcp/jcp-find-order-3d.mp4",
  },
  images: {
    register01: "https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/case-study_jcp/jcp-onsite-register-01.jpg",
    register02: "https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/case-study_jcp/jcp-onsite-register-02.jpg",
    register03: "https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/case-study_jcp/jcp-onsite-register-03.jpg",
    tablet: "https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/case-study_jcp/jcp-tablet.png",
  },
  icons: {
    fasterFlow: "https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/case-study_jcp/icon/faster-flow.svg",
    errorProof: "https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/case-study_jcp/icon/error-proof.svg",
    dailyClose: "https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/case-study_jcp/icon/daily-close.svg",
    mobileFirst: "https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/case-study_jcp/icon/mobile-first.svg",
    systemTrust: "https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/case-study_jcp/icon/system-trust.svg",
  },
}

// Context card data
const CONTEXT_CARDS = [
  {
    icon: ASSETS.icons.fasterFlow,
    title: "Faster Checkout Flow",
    description: "We should remove interruptions and irreversible steps to keep transactions moving without restarts.",
  },
  {
    icon: ASSETS.icons.errorProof,
    title: "Error-Proof Tendering",
    description: "The tendering flow should prevent mistakes instead of punishing them.",
  },
  {
    icon: ASSETS.icons.dailyClose,
    title: "Reliable Daily Close",
    description: "Streamline end-of-day reconciliation to reduce errors and manager overhead.",
  },
  {
    icon: ASSETS.icons.mobileFirst,
    title: "Mobile-First Selling",
    description: "Enable associates to complete full transactions on the floor without returning to the register.",
  },
  {
    icon: ASSETS.icons.systemTrust,
    title: "System Trust & Stability",
    description: "Reduce system crashes and slow-downs that erode associate confidence.",
  },
]

// Metric component
function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-medium text-[24px] leading-[1.2] tracking-[-0.48px] text-foreground" style={{ fontFamily: "'Poppins', sans-serif" }}>{value}</span>
      <span className="text-[14px] font-normal text-muted-foreground leading-[1.5] tracking-[0.07px]" style={{ fontFamily: "'Golos Text', sans-serif" }}>{label}</span>
    </div>
  )
}

// Section heading component
function SectionHeading({ label, title, className }: { label: string; title: string; className?: string }) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span className="text-xs font-medium text-label tracking-[0.18px] leading-[1.5] uppercase">{label}</span>
      <h2 className="text-xl md:text-[30px] font-semibold leading-[1.2] md:leading-[36px] tracking-tight text-foreground">{title}</h2>
    </div>
  )
}

// Context card component
function ContextCard({
  icon,
  title,
  description,
  className
}: {
  icon: string
  title: string
  description: string
  className?: string
}) {
  return (
    <div className={cn(
      "bg-card border border-border rounded-2xl p-4 flex flex-col gap-2 md:gap-4 justify-end",
      className
    )}>
      <img src={icon} alt="" className="w-6 h-6" aria-hidden="true" />
      <div className="flex flex-col gap-2">
        <h3 className="text-base md:text-2xl font-normal leading-6 md:leading-[30px] text-foreground/80" style={{ fontFamily: "'Golos Text', sans-serif" }}>
          {title}
        </h3>
        <p className="text-base text-muted-foreground leading-6">{description}</p>
      </div>
    </div>
  )
}

export default function PointOfSaleCaseStudy() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(90deg, var(--gradient-page-start) 0%, var(--gradient-page-start) 100%), linear-gradient(90deg, #fff 0%, #fff 100%)" }}>
      <Navigation />

      {/* Hero Section - Outcomes */}
      <section
        className="px-4 md:px-[72px] py-14 md:py-[88px]"
        style={{ background: "linear-gradient(to bottom, var(--gradient-page-start) 0%, var(--gradient-page-end) 100%)" }}
      >
        <div className="max-w-[1296px] mx-auto grid grid-cols-4 auto-rows-min lg:grid-cols-12 col-gap-1 row-gap-0">
          {/* Content Column */}
          <div className="col-span-3 lg:col-span-7 flex flex-col gap-4 py-8 md:pb-0 relative">
            <h1 className="text-2xl md:text-5xl font-medium leading-[1.2] md:leading-[56px] tracking-tight md:tracking-normal text-foreground">
              Designing the Future of Retail Checkout
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground leading-[1.5] md:leading-7">
              Senior UX Designer · 2022
            </p>
            <p className="text-sm md:text-base text-foreground leading-5 md:leading-6 max-w-[770px] pr-0 md:pr-[72px]">
              Point of Sale service and design system creation for a national retailer. Our team transformed JCPenney's point of sale software, hardware, and network infrastructure supporting a mobile-first checkout experience launched across 650+ stores.
            </p>

            </div>

       
          

          {/* Mobile Spline/Video Column */}
          <div className="col-span-1 row-span-2 flex py-8 items-start justify-end lg:hidden">
            <div className="w-[120px] h-[260px]">
              <SplineHero
                fallbackVideoSrc={ASSETS.videos.heroPhone}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Desktop Spline/Video Column */}
          <div className="hidden lg:flex col-span-4 col-start-9 row-span-2 items-center justify-center relative">
            <div className="relative w-[400px] h-[450px]">
              {/* Decorative ellipse background */}
              <div
                className="absolute w-[246px] h-[398px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
                style={{ background: "radial-gradient(circle, rgba(179,172,152,0.4) 0%, transparent 70%)" }}
              />
              <SplineHero
                fallbackVideoSrc={ASSETS.videos.heroPhone}
                className="w-full h-full z-10"
              />
            </div>
          </div>

     {/* Metrics Grid */}
            <div className="row-span-2 col-span-4 md:col-span-3 lg:col-span-7 grid grid-cols-2 auto-rows-min md:grid-cols-4 gap-4 md:gap-6 mt-2">
              <Metric value="$6.2M" label="Hardware savings" />
              <Metric value="86" label="Workflows redesigned" />
              <Metric value="31+" label="Stores launched" />
              <Metric value="4 mo" label="Research to handoff" />
            </div>

        </div>
      </section>

      {/* Challenge Section - Problems */}
      <section
        className="px-4 md:px-[72px] py-8 md:py-24"
        style={{ background: "var(--gradient-section-light)" }}
      >
        <div className="max-w-[1296px] mx-auto flex flex-col lg:flex-row gap-6 lg:gap-24 lg:items-center">
          {/* Image Collage */}
          <div className="flex-none lg:flex-1 relative h-[206px] lg:h-[300px] w-full lg:pr-[100px]">
            {/* Desktop positioning */}
            <img
              src={ASSETS.images.register02}
              alt="JCPenney associate at register during research visit"
              className="absolute rounded-lg shadow-float object-cover w-[182px] h-[102px] left-[24px] top-[43px] lg:w-[326px] lg:h-[183px] lg:left-[6px] lg:top-0"
            />
            <img
              src={ASSETS.images.register01}
              alt="Point of sale terminal during field observation"
              className="absolute rounded-lg shadow-float object-cover w-[199px] h-[149px] left-[170px] top-0 lg:w-[246px] lg:h-[184px] lg:left-[318px] lg:top-[101px]"
            />
            <img
              src={ASSETS.images.register03}
              alt="Contextual inquiry session at JCPenney store"
              className="absolute rounded-lg shadow-float object-cover w-[114px] h-[78px] left-[145px] top-[128px] lg:w-[208px] lg:h-[132px] lg:left-[140px] lg:top-[168px]"
            />
          </div>

          {/* Content */}
          <div className="flex-none lg:flex-1 flex flex-col gap-6 py-4">
            <SectionHeading label="Challenge" title="Understanding 86 Ways to Do a Job" />

            <div className="text-base text-muted-foreground leading-6">
              <p className="mb-4">
                Field research surfaced consistent patterns where small interaction failures were compounding into significant operational drag.
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <span className="font-medium text-muted-foreground">Do This Every Time</span>
                  <br />
                  Rewards prompts fired before cashiers finished scanning items
                </li>
                <li>
                  <span className="font-medium text-muted-foreground">Can&apos;t Go Back</span>
                  <br />
                  Tender selection entered associates into a forced flow navigation
                </li>
                <li>
                  <span className="font-medium text-muted-foreground">Do it My Own Way</span>
                  <br />
                  Most associates defaulted to manual entry and workarounds
                </li>
              </ul>
              <p>
                For associates, this was business as usual. There were measurable downstream effects. Longer transaction times, increased audit exposure, and degraded customer experience at the register.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Context Section - Goals */}
      <section className="px-4 md:px-[72px] py-10 md:py-12" style={{ background: "var(--gradient-section-light)" }}>
        <div className="max-w-[1296px] mx-auto flex flex-col gap-6">
          <SectionHeading label="Context" title="New Point of Sale, Familiar Goals" />

          {/* Cards Grid - Desktop: custom layout, Mobile: single column */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
            {/* Row 1 - Desktop: 2 cards spanning 6 cols each */}
            <ContextCard
              icon={CONTEXT_CARDS[0].icon}
              title={CONTEXT_CARDS[0].title}
              description={CONTEXT_CARDS[0].description}
              className="lg:col-span-6"
            />
            <ContextCard
              icon={CONTEXT_CARDS[1].icon}
              title={CONTEXT_CARDS[1].title}
              description={CONTEXT_CARDS[1].description}
              className="lg:col-span-6"
            />

            {/* Row 2 - Desktop: 3 cards spanning 4+5+3 cols */}
            <ContextCard
              icon={CONTEXT_CARDS[2].icon}
              title={CONTEXT_CARDS[2].title}
              description={CONTEXT_CARDS[2].description}
              className="lg:col-span-4"
            />
            <ContextCard
              icon={CONTEXT_CARDS[3].icon}
              title={CONTEXT_CARDS[3].title}
              description={CONTEXT_CARDS[3].description}
              className="lg:col-span-5"
            />
            <ContextCard
              icon={CONTEXT_CARDS[4].icon}
              title={CONTEXT_CARDS[4].title}
              description={CONTEXT_CARDS[4].description}
              className="lg:col-span-3"
            />
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-4 md:px-[72px] py-8 md:py-6 border-t border-b border-section-border" style={{ background: "var(--gradient-section-medium)" }}>
        <div className="max-w-[1296px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Content */}
          <div className="flex flex-col gap-6 py-8 md:py-20">
            <SectionHeading label="Solution" title="A Scalable, System-Aligned POS Platform" />

            <div className="text-lg text-muted-foreground leading-[29.25px]">
              <p className="mb-4">
                JCPenney needed a design system to power mobile checkout, complex retail workflows, and future in-store products.
              </p>
              <p className="mb-4">
                I built the design system and point of sale application in Figma from the ground up, tokens to page components.
              </p>
              <p>
                This became the foundation of JCPenney&apos;s digital products. UX leadership at JCP highlighted its depth, responsiveness, and technical rigor calling out how seamlessly it integrated the brand, system logic, and future product needs.
              </p>
            </div>
          </div>

          {/* Spline 3D Scene */}
          <div className="flex items-center justify-center">
            <SplineSolution className="w-[296px] h-[277px] lg:w-[544px] lg:h-[509px]" />
          </div>
        </div>
      </section>

      {/* Iterations Section */}
      <section className="px-4 md:px-[72px] py-8 md:py-[72px] pb-12 md:pb-24">
        <div className="max-w-[1296px] mx-auto flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 lg:items-center">
          {/* Tablet Image */}
          <div className="flex-1 overflow-hidden rounded-3xl lg:rounded-[32px] shadow-warm h-[284px] lg:h-[409px]">
            <img
              src={ASSETS.images.tablet}
              alt="JCPenney point of sale interface on tablet device"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col gap-4">
            <SectionHeading label="Iterations" title="Meeting Customers Where They Are" />

            <div className="text-lg text-muted-foreground leading-[29.25px]">
              <p className="mb-4">
                Associates need to complete fast transactions on the sales floor and migrate to the register if additional hardware is needed.
              </p>
              <p>
                The point of sale experience was designed specifically to transition between contexts.  This reduced transaction time, and avoided restarts, and cancellations. These metrics directly support checkout KPIs and minimize audit-triggering patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learnings + Testimonial Section */}
      <section className="border-t border-b border-section-border flex flex-col lg:flex-row">
        {/* Learnings */}
        <div className="flex-1 px-4 md:px-[72px] py-8 md:py-[88px]" style={{ background: "var(--gradient-section-medium)" }}>
          <div className="max-w-[1296px] mx-auto flex flex-col gap-6">
            <SectionHeading label="Learnings" title="Reflection" />

            <div className="text-lg text-muted-foreground leading-[29.25px]">
              <p className="mb-4">
                This project reinforced the value of research serving as the connective tissue between a business, its systems, and its users. The 86 jobs-to-be-done became a shared language that guided priorities, tradeoffs, and success metrics across teams.
              </p>
              <p>
                Starting a design system with a specific use case in mind drove clarity around what components needed to do. We were able to design with components that represented real system and business objects.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="flex-1 px-4 md:px-[72px] py-8 md:py-[88px] relative">
          <div className="max-w-[1296px] mx-auto flex flex-col gap-6">
            <SectionHeading label="Testimonial" title="Client Feedback" />

            <div className="flex flex-col gap-4 pr-0 md:pr-10">
              <blockquote className="text-lg text-foreground leading-[29.25px]">
                Kitestring was a strategic partner in shaping JCPenney&apos;s next-generation store technology, modernizing both checkout systems and the customer and associate experience. Their strong UI/UX capabilities drove major improvements in core checkout workflows and specialty areas like Jewelry and Salon, helping bring our transformation roadmap to life.
              </blockquote>
              <p className="text-sm font-medium text-foreground">
                — Irfan Butt, Director, JCPenney
              </p>
            </div>

            {/* Decorative quote mark */}
            <svg
              className="absolute right-[108px] bottom-6 w-[71px] h-[57px] text-border hidden md:block"
              viewBox="0 0 71 57"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M32.6627 57C32.9598 54.9055 33.5542 53.1102 34.4458 51.6142C35.3374 50.1181 36.2289 48.622 37.1205 47.126L38.9036 48.0236C39.2008 43.2362 40.9839 39.0472 44.253 35.4567C43.9558 35.1575 43.6586 35.0079 43.3614 35.0079C43.0643 35.0079 42.7671 34.8583 42.4699 34.5591C44.5502 33.6614 45.5904 32.315 45.5904 30.5197C45.5904 28.4252 46.3333 26.6299 47.8193 25.1339C47.8193 26.3307 48.1165 27.2283 48.7108 27.8268C48.7108 27.2283 48.4137 25.8819 47.8193 23.7874C47.5221 21.6929 47.5221 20.3465 47.8193 19.748C48.4137 18.5512 49.008 18.1024 49.6024 18.4016C50.494 18.4016 51.0884 17.5039 51.3855 15.7087C50.1968 15.4094 49.6024 15.2598 49.6024 15.2598C49.8996 14.9606 49.8996 14.2126 49.6024 13.0157C50.1968 12.4173 50.494 11.6693 50.494 10.7716C51.9799 10.7716 52.8715 10.7716 53.1687 10.7716C53.7631 10.7716 54.3574 10.1732 54.9518 8.97637H52.2771L53.1687 4.03937H54.506C55.992 4.03937 57.1807 3.74015 58.0723 3.14172C58.9639 2.24409 60.004 1.19685 61.1928 0C63.2731 1.19685 65.3534 1.94488 67.4337 2.24409C69.5141 2.5433 70.7028 4.03936 71 6.73228C68.9197 7.33071 68.0281 9.4252 68.3253 13.0157C68.6225 16.3071 68.6225 19 68.3253 21.0945C67.4337 20.7953 66.5422 20.7953 65.6506 21.0945C65.9478 21.6929 66.0964 22.4409 66.0964 23.3386C66.0964 24.8346 65.3534 26.3307 63.8675 27.8268H62.5301C61.9357 28.4252 61.49 29.3228 61.1928 30.5197C61.1928 31.7165 61.1928 32.7638 61.1928 33.6614H58.5181C58.5181 36.0551 57.0321 39.0472 54.0602 42.6378C51.0884 46.2283 48.4137 48.3228 46.0361 48.9213V51.6142C44.8474 52.2126 43.6586 52.9606 42.4699 53.8583C41.2811 54.7559 40.0924 55.8031 38.9036 57H32.6627ZM7.13253 52.5118C5.94377 53.4095 4.75502 54.1575 3.56626 54.7559C2.37751 55.0551 1.18875 55.5039 0 56.1024V52.5118C0.891566 51.9134 1.63454 51.1654 2.22891 50.2677C2.82329 49.3701 3.26908 48.622 3.56626 48.0236L6.24096 49.8189C5.94377 48.3228 5.64659 47.4252 5.3494 47.126C5.05221 46.5276 5.05221 45.6299 5.3494 44.4331C7.72691 42.0394 9.95582 37.8504 12.0361 31.8661C14.1165 25.8819 15.1566 21.3937 15.1566 18.4016H17.8313C17.8313 16.3071 18.1285 13.3149 18.7229 9.42518C19.6145 5.23621 20.8032 2.5433 22.2892 1.34647C22.8835 0.748031 23.9237 0.448813 25.4096 0.448813C26.8956 0.149604 27.9357 0 28.5301 0C30.9076 1.49606 32.9879 2.3937 34.7711 2.69291C36.8514 2.99211 38.0402 4.78739 38.3374 8.07874H37.8916L36.5542 7.62993C34.7711 10.3228 34.1767 12.7165 34.7711 14.811C35.6626 16.9055 35.6626 19.2992 34.7711 21.9921C33.2851 26.4803 30.759 30.5197 27.1928 34.1102C23.9237 37.4016 21.1004 41.1417 18.7229 45.3307L16.0482 42.6378C15.751 45.3307 15.008 47.5748 13.8193 49.3701C12.6305 51.1654 10.4016 52.2126 7.13253 52.5118Z"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Let's Connect */}
      <LetsConnect onContactClick={() => setIsContactModalOpen(true)} />

      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />

      <Footer />
    </div>
  )
}
