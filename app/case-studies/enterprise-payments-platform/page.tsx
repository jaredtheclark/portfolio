import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { ArrowLeft } from "lucide-react"
import { LetsConnect } from "@/components/lets-connect"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Enterprise Payments Platform | Principal UX Architect",
  description: "How I launched a zero-to-one payments platform in 4 months, achieving 200% autopay increase while blocking deceptive design patterns at America's Car-Mart.",
}

export default function EnterprisePaymentsPlatformCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">

          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">
              America's Car-Mart Payments Platform
            </h1>
            <p className="text-lg text-muted-foreground">
              Principal UX Architect · Enterprise Payments Modernization · 2025
            </p>
          </div>
        </div>
      </section>

  

      {/* The Situation */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">The Situation</h2>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-muted-foreground">
              America's Car-Mart operates 150+ dealerships serving 100,000+ customers with in-house financing. Their
              payments infrastructure was fractured across multiple legacy systems with no unified source of truth.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I was brought in to architect the UX strategy for an enterprise-wide payments modernization. Eight weeks
              in, leadership pivoted: ship a customer-facing payments platform by June 1, or miss a critical financial
              audit window.
            </p>
            <p className="text-lg leading-relaxed">
              The scope collapsed from "transform everything" to <span className="font-medium">"launch or else."</span>
            </p>
          </div>
        </div>
      </section>

      {/* What I Did */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What I Did</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Reframed the problem under pressure.</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                When the timeline compressed, I carved out the customer-critical Jobs to Be Done from the broader
                research and built a focused product strategy that could actually ship.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Enabled a team to move fast without breaking things.</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Before bringing in a senior designer, I stood up the design system, documented the workflow, and synthesized
                each requirement with business and technical context. This enabled them to deliver a working demo by the end of their first week.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Held the line when it mattered.</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                When the CTO bypassed our process to push a deceptive pattern directly to development, I intervened. I
                uncovered the actual business need behind the ask, designed a solution that served both customers and the
                business goal, and built the executive communication strategy to sell it. The result: 200% higher adoption
                than projected—without the dark pattern.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Validated with real users, not assumptions.</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Coached the team through usability studies with store managers, customer service associates, and actual
                customers. We recorded sessions and used the findings to reinforce design decisions to skeptical stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

          {/* The Outcome */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">The Outcome</h2>
          <p className="text-xl leading-relaxed">
            Launched a zero-to-one payments platform in four months—on a timeline leadership said couldn't be
            done—achieving 200% increase in autopay enrollment while blocking a C-level directive that would have
            broken the customer experience.
          </p>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Results</h2>
          <ul className="space-y-3">
            <li className="text-lg leading-relaxed flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span>200% increase in autopay enrollment</span>
            </li>
            <li className="text-lg leading-relaxed flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span>15% growth in active online portal users post-launch</span>
            </li>
            <li className="text-lg leading-relaxed flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span>4-month delivery from kickoff to production (Jan–May 2025)</span>
            </li>
            <li className="text-lg leading-relaxed flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Zero data loss during payment system migration</span>
            </li>
            <li className="text-lg leading-relaxed flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Expanded engagement: Both myself and the designer I brought in were requested for additional high-visibility projects</span>
            </li>
          </ul>
        </div>
      </section>

      {/* What They Said */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What They Said</h2>
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <blockquote className="text-lg leading-relaxed italic mb-4">
                "Jared brought exceptional strategic thinking and technical expertise to this complex project. They
                architected an end-to-end experience that balanced user needs with business requirements and
                technical constraints. What set Jared apart was their collaborative approach—making complex UX
                concepts accessible to all stakeholders and maintaining alignment throughout."
              </blockquote>
              <p className="text-sm font-medium">— John Whitman, Product Director</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Button variant="outline" asChild>
            <Link href="/case-studies">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
          </Button>
        </div>
      </section>

      {/* Let's Connect */}
      <LetsConnect />

      <Footer />
    </div>
  )
}
