import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { CaseStudyCard } from "@/components/case-study-card"

export const metadata: Metadata = {
  title: "Case Studies | Jared Clark - Product Designer",
  description:
    "UX case studies in enterprise fintech: payment platforms with 200% autopay growth, point-of-sale systems with 15% faster transactions.",
  openGraph: {
    title: "Case Studies | Jared Clark - Product Designer",
    description:
      "UX case studies in enterprise fintech: payment platforms with 200% autopay growth, point-of-sale systems with 15% faster transactions.",
  },
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="pt-16 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold tracking-tight mb-4">
            Case Studies
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
            These are abbreviated versions of the content I show in interviews. To see more about any project or with any questions, email me at{" "}
            <a
              href="mailto:jared@jaredclark.design"
              className="text-foreground underline underline-offset-2 hover:text-primary transition-colors"
            >
              jared@jaredclark.design
            </a>
            , message me on{" "}
            <a
              href="https://www.linkedin.com/in/jaredclarkdesigner/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-2 hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            , or contact me using the{" "}
            <a
              href="#contact"
              className="text-foreground underline underline-offset-2 hover:text-primary transition-colors"
            >
              form
            </a>
            {" "}at the bottom of this page.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
            <CaseStudyCard
              title="Designing the Future of Retail Checkout"
              subtitle="JCPenney · Staff Product Designer · 2022"
              description="Point of Sale service and design system creation for a national retailer. Our team transformed JCPenney's point of sale software, hardware, and network infrastructure supporting a mobile-first checkout experience launched across 650+ stores."
              metrics={[
                { value: "+15%", label: "Transaction throughput" },
                { value: "86", label: "Workflows redesigned" },
                { value: "650+", label: "Stores launched" },
                { value: "$6.2M", label: "Hardware savings" },
              ]}
              imageSrc="/images/snapshots/jcpenney.png"
              caseStudyLink="/case-studies/point-of-sale"
            />

            <CaseStudyCard
              title="Unifying Dealership, Digital, and Retail Payments for a National Auto Retailer"
              subtitle="America's Car-Mart · Principal UX Architect · 2025"
              description="Launched a zero-to-one payments platform in four months achieving 200% increase in auto pay enrollment."
              metrics={[
                { value: "200%", label: "Autopay Increase" },
                { value: "15%", label: "Portal growth" },
                { value: "4 mo", label: "Delivery time" },
                { value: "100K+", label: "Customers" },
              ]}
              imageSrc="/images/snapshots/car-mart.png"
              caseStudyLink="/case-studies/enterprise-payments-platform"
            />

            <CaseStudyCard
              title="Building Mission Critical Tools for Domain Experts"
              subtitle="Walmart · Principal Product Designer · 2024"
              description="Consulted retailer #1 on their design system strategy. Established workflows for designing building tools for information security operations and led the charge to design products."
              imageSrc="/images/snapshots/walmart-infosec.png"
              comingSoon
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>

      <Footer />
    </div>
  )
}
