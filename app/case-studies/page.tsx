import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { CaseStudyCard } from "@/components/case-study-card"

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
              subtitle="JCPenney · Principal UX Architect · 2022"
              description="Led UI design and design system creation for a national retailer's complete POS overhaul—from 20-year-old registers to mobile-first checkout across 650+ stores."
              metrics={[
                { value: "$6.2M", label: "Hardware savings" },
                { value: "86", label: "Jobs discovered" },
                { value: "650+", label: "Stores" },
                { value: "60M+", label: "Users" },
              ]}
              imageSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/jcpenney.png"
              caseStudyLink="/case-studies/point-of-sale"
            />

            <CaseStudyCard
              title="Do What's Right for Clients and Their Customers"
              subtitle="America's Car-Mart · Principal UX Architect · 2025"
              description="Launched a zero-to-one payments platform in four months achieving 200% increase in auto pay enrollment."
              metrics={[
                { value: "200%", label: "Autopay Increase" },
                { value: "15%", label: "Portal growth" },
                { value: "4 mo", label: "Delivery time" },
                { value: "100K+", label: "Customers" },
              ]}
              imageSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/car-mart.png"
              caseStudyLink="/case-studies/enterprise-payments-platform"
            />

            <CaseStudyCard
              title="Building Mission Critical Tools for Domain Experts"
              subtitle="Walmart · Principal Product Designer · 2024"
              description="Consulted retailer #1 on their design system strategy. Established workflows for designing building tools for information security operations and led the charge to design products."
              metrics={[
                { value: "$6.2M", label: "Hardware savings" },
                { value: "86", label: "Jobs discovered" },
                { value: "650+", label: "Stores" },
                { value: "60M+", label: "Users" },
              ]}
              imageSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/walmart-infosec.png"
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
