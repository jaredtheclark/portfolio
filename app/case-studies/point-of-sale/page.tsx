"use client"

import { useState, useEffect, useRef } from "react"
import { Navigation } from "@/components/navigation"
import { LetsConnect } from "@/components/lets-connect"
import { ContactModal } from "@/components/contact-modal"
import { Footer } from "@/components/footer"

export default function PointOfSaleCaseStudy() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play()
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1>
              JCPenney Next Generation POS
            </h1>
            <p className="text-lg text-muted-foreground">
              Point of Sale Modernization · Senior UX Designer · 2022
            </p>
            <p className="text-xl leading-relaxed">
              Led UI design and design system creation for a national retailer's complete POS overhaul—from 20-year-old registers to mobile-first checkout across 650+ stores.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            <div>
              <p className="text-3xl font-semibold">$6.2M</p>
              <p className="text-sm text-muted-foreground">Hardware savings</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">86</p>
              <p className="text-sm text-muted-foreground">Jobs discovered</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">31+</p>
              <p className="text-sm text-muted-foreground">Stores launched</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">4 mo</p>
              <p className="text-sm text-muted-foreground">Research to handoff</p>
            </div>
          </div>

          {/* Hero Video */}
          <div className="mt-12 rounded-2xl overflow-hidden">
            <video
              ref={videoRef}
              className="w-full h-auto"
              muted
              loop
              playsInline
              poster="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/jcpenney.png"
              src="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/jcpenney.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* The Situation */}
      <section className="py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6">The Situation</h2>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              JCPenney's point of sale hadn't been touched since 2004. Associates were tethered to fixed registers, unable to help customers on the floor. Online and in-store systems didn't talk to each other. The credit application process took so long customers would abandon purchases mid-transaction.
            </p>
            <p>
              The company needed more than a facelift—they needed a complete platform transformation: new network infrastructure, new hardware, new software, and a mobile-first approach that would let associates meet customers anywhere in the store.
            </p>
            <p>
              I joined a cross-functional team spanning three workstreams: a mobile pilot program, a "checkout of the future" design effort, and a lab proof-of-concept comparing hardware vendors. My focus was Workstream 2: designing the future checkout experience for both associates and customers.
            </p>
          </div>
        </div>
      </section>

      {/* My Role */}
      <section className="py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6">My Role</h2>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              <span className="text-foreground font-medium">Senior UX Designer</span> responsible for:
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>UI design strategy and design system creation</li>
              <li>Co-facilitating JTBD and ORCA workshops with cross-functional stakeholders</li>
              <li>Contextual inquiry and persona validation at JCP stores</li>
              <li>Translating 86 jobs-to-be-done into journey maps and interactive prototypes</li>
              <li>Building Figma components that mapped directly to GK platform capabilities</li>
            </ul>
            <p>
              I worked alongside a Principal UX Architect who led the research strategy, partnering with a technical team of architects and developers, and reporting to stakeholders including the Director of Store Ops, VP of Store Ops, and the CIO.
            </p>
          </div>
        </div>
      </section>

      {/* Discovery */}
      <section className="py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6">Discovery: Understanding 86 Ways to Do a Job</h2>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              The retailer's checkout process wasn't one job—it was dozens. Cash management alone had 23 distinct tasks. Returns, exchanges, tax compliance, specialty departments like Fine Jewelry and Salon—each had their own workflows, edge cases, and frustrations.
            </p>

            <h3 className="text-foreground pt-4">Contextual Inquiry</h3>
            <p>
              We spent time in stores with associates at their registers. I set up a camera on a tripod to capture actual screen states during transactions—not staged demos, but real workflows with real friction. We interviewed cashiers, supervisors, and specialty associates to understand not just what they did, but why existing workarounds existed.
            </p>
            <p>
              One cashier showed us how she'd developed her own system for handling BOGO promotions because the POS couldn't calculate multi-item discounts. A Fine Jewelry supervisor explained why she kept customer information in a separate notebook instead of the system. These weren't user errors—they were signals that the current system had failed them.
            </p>

            <h3 className="text-foreground pt-4">Jobs-to-Be-Done Workshops</h3>
            <p>
              We facilitated workshops with 27 cross-functional partners from Accounting, Tax, Customer Care, Store Ops, and a dozen other departments. The goal was to surface every job an associate might need to complete through the POS, then cluster them into themes and define success metrics for each.
            </p>
            <p>
              The workshops produced 86 distinct jobs-to-be-done across 13 categories: Core Checkout, Cash Management, Returns, Tax Compliance, Administration, Training, and more. For each job, we captured the situation, motivation, and expected outcome—creating a research foundation that would drive every design decision.
            </p>

            <h3 className="text-foreground pt-4">Four Personas, Validated</h3>
            <p>
              The client came to us with two proto-personas representing a young part-timer and another to represent their veteran associates. Through interviews and surveys, we expanded and validated these into four research-backed personas:
            </p>
          </div>

          {/* Personas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-6 bg-card rounded-lg">
              <h4 className="text-foreground mb-2">Nelly Newbie</h4>
              <p className="text-sm text-muted-foreground">
                College student, part-time cashier, anxious about system crashes during transactions
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h4 className="text-foreground mb-2">Victor Veteran</h4>
              <p className="text-sm text-muted-foreground">
                5+ year associate who'd developed workarounds for every system gap
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h4 className="text-foreground mb-2">Steadfast Samuel</h4>
              <p className="text-sm text-muted-foreground">
                Supervisor focused on coaching and metrics, frustrated by system unreliability
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h4 className="text-foreground mb-2">Specialist Suzanna</h4>
              <p className="text-sm text-muted-foreground">
                Fine Jewelry lead juggling sales, repairs, and customer relationships across disconnected tools
              </p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-muted-foreground">
            Each persona captured not just demographics and tasks, but emotional and social needs—what it felt like to have the system crash during a credit application, or to appear slow in front of waiting customers.
          </p>
        </div>
      </section>

      {/* Design System */}
      <section className="py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6">Design System: Built Solo, Designed to Scale</h2>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              JCPenney had marketing components for their e-commerce site but no true design system. The GK platform we were building on used SAP's design language, but the client wanted something they could own and extend across future products.
            </p>
            <p>
              With a flexible timeline, I took on building a complete design system from the ground up.
            </p>

            <h3 className="text-foreground pt-4">The Approach</h3>
            <p>
              I started with design tokens as Figma variables—colors, typography, spacing—then worked upward through primitives to application-level components. Every component was built with auto-layout for responsive behavior across the mobile M60 device and docked desktop display.
            </p>
            <p>
              Rather than maintain separate files, I built a monolithic Figma workspace organized by component type: atoms, molecules, application components, page templates, and interactive prototypes. This let me iterate quickly while keeping the technical team's source of truth in one place.
            </p>

            <h3 className="text-foreground pt-4">The Components</h3>
            <p>
              The system included everything needed for a complete POS experience:
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>Transaction line items with configurable states (regular, sale, clearance, return)</li>
              <li>Payment method selectors supporting cash, card, check, and gift card</li>
              <li>Customer lookup and rewards integration</li>
              <li>Till management interfaces for cash counting and reconciliation</li>
              <li>Specialty workflows for Fine Jewelry, Salon appointments, and BOPIS fulfillment</li>
            </ul>
          </div>

          {/* UI Screens Grid */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <img
                src="https://www.figma.com/api/mcp/asset/52255e92-b62f-4537-8f7e-72dabe7d6c4b"
                alt="Main Menu - POS home screen with transaction options"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <img
                src="https://www.figma.com/api/mcp/asset/b37a75b0-0098-4b1f-8d6d-8eb524ae9618"
                alt="Item Entry - Transaction cart with rewards"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <img
                src="https://www.figma.com/api/mcp/asset/f42937b8-0145-44aa-ae60-1fb406a31666"
                alt="Just Ask - Customer lookup and rewards"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <img
                src="https://www.figma.com/api/mcp/asset/10095fba-9297-4aa1-bc12-c416126909b4"
                alt="Accept Tender - Payment screen"
                className="w-full h-auto"
              />
            </div>
          </div> */}

          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Each component mapped to real data objects surfaced in our ORCA workshops, ensuring the UI accurately represented what the backend systems could actually support.
            </p>

            <h3 className="text-foreground pt-4">The Reception</h3>
            <p>
              When I presented the design system to JCPenney's internal UX team, their lead designer jokingly interrogated me about whether I had a hidden team of designers helping. He appreciated how the system integrated their existing brand while being flexible enough for multiple product contexts—and that every component actually worked with auto-layout.
            </p>
          </div>
        </div>
      </section>

      {/* Key Design Decisions */}
      <section className="py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6">Key Design Decisions</h2>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-foreground">Mobile-First, Dock-Aware</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                The ELO M60 device could be used handheld on the sales floor or docked at a fixed terminal with a larger touchscreen. Rather than designing two separate experiences, I created a responsive system where the same UI adapted to context.
              </p>

              {/* Device Mockup */}
              {/* <div className="my-6 flex justify-center">
                <img
                  src="https://www.figma.com/api/mcp/asset/52255e92-b62f-4537-8f7e-72dabe7d6c4b"
                  alt="ELO M60 mobile POS device showing the main menu interface with responsive layout"
                  className="max-w-sm w-full h-auto rounded-lg shadow-lg"
                />
              </div> */}

              <p className="text-lg leading-relaxed text-muted-foreground">
                On the floor, associates could scan items, look up inventory, and even complete transactions. At the dock, the M60 screen flipped to face customers for signature capture and payment input while associates used the larger display for complex operations like returns and exchanges.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-foreground">Journey Maps at Scale</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We needed to document current and future state journeys for all 86 jobs-to-be-done—a massive documentation challenge. I built a Figma component system specifically for journey mapping, where each step was a configurable component that could expand to accommodate any workflow length using auto-layout.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                This let the research team rapidly document journeys while maintaining visual consistency. Each map captured associate actions, customer touchpoints, emotional states, and proposed changes—becoming the specification that drove development priorities.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-foreground">Mapping UI to System Objects</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Through our ORCA workshops, we'd mapped the relationships between business objects: Customer, Transaction, Tender, Item, Associate, and their attributes and connections. I used this object model to structure the UI, ensuring every component had a clear relationship to backend data.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                This alignment meant developers could look at a Figma prototype and immediately understand what data needed to flow where. It reduced ambiguity in handoffs and caught integration issues early—before they became expensive rework.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6">Outcomes</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-foreground mb-4">For the Business</h3>
              <ul className="space-y-2 text-lg leading-relaxed list-disc pl-5">
                <li><span className="font-medium text-foreground">$6.2M saved</span> through hardware selection study and vendor negotiations</li>
                <li><span className="font-medium text-foreground">31+ stores modernized</span> with the new POS system following our design</li>
                <li><span className="font-medium text-foreground">Aggressive timeline met</span> across two 16-week engagements</li>
              </ul>
            </div>

            <div>
              <h3 className="text-foreground mb-4">For Customers and Associates</h3>
              <ul className="space-y-2 text-lg leading-relaxed text-muted-foreground list-disc pl-5">
                <li><span className="font-medium text-foreground">Mobile checkout enabled</span> reducing wait times for customers who could complete purchases on the floor</li>
                <li><span className="font-medium text-foreground">Streamlined credit applications</span> allowing same-transaction approval and purchase</li>
                <li><span className="font-medium text-foreground">Unified omnichannel experience</span> connecting in-store and online systems</li>
              </ul>
            </div>

            <div>
              <h3 className="text-foreground mb-4">For the Organization</h3>
              <ul className="space-y-2 text-lg leading-relaxed text-muted-foreground list-disc pl-5">
                <li><span className="font-medium text-foreground">Design system established</span> that JCPenney's UX team could extend to future products</li>
                <li><span className="font-medium text-foreground">Agile practices introduced</span> through sprint ceremonies and backlog management</li>
                <li><span className="font-medium text-foreground">Research foundation created</span> with documented personas, journey maps, and JTBD that informed subsequent phases</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6">Reflection</h2>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              This project taught me the value of research infrastructure. The 86 jobs-to-be-done we documented weren't just artifacts—they became the language the entire cross-functional team used to discuss priorities, make tradeoffs, and measure success.
            </p>
            <p>
              Building the design system solo under timeline pressure forced clarity about what components actually needed to do versus what would be nice to have. Every auto-layout decision, every variant, had to earn its place.
            </p>
            <p>
              Most importantly, I learned how to co-lead workshops that respected stakeholders' time while extracting the information we needed. When you're in a room with 27 people from 14 departments, every minute matters. The preparation—the component templates, the facilitation plan, the follow-up documentation—made the difference between a productive session and an expensive meeting.
            </p>
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
