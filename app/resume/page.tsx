import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Download, Mail, MapPin, Linkedin } from "lucide-react"

export const metadata: Metadata = {
  title: "Resume | Jared Clark - Product Designer",
  description: "View and download Jared Clark's resume - 10+ years of product design leadership experience in enterprise fintech and design systems.",
  openGraph: {
    title: "Resume | Jared Clark - Product Designer",
    description: "View and download Jared Clark's resume - 10+ years of product design leadership experience in enterprise fintech and design systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Jared Clark - Product Designer",
    description: "View and download Jared Clark's resume - 10+ years of product design leadership experience in enterprise fintech and design systems.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "@id": "https://jaredclark.design/#person",
    "name": "Jared Clark",
    "jobTitle": "Principal UX Product Designer",
    "email": "jared@jaredclark.design",
    "url": "https://jaredclark.design",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Fayetteville",
      "addressRegion": "AR",
      "addressCountry": "US"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University of Arkansas"
    },
    "hasOccupation": [
      {
        "@type": "Occupation",
        "name": "Principal Product Designer",
        "occupationLocation": {
          "@type": "Place",
          "name": "Remote"
        }
      }
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Kitestring Technical Services",
      "url": "https://kitestring.io"
    },
    "knowsAbout": [
      "Jobs-to-Be-Done (JTBD)",
      "Contextual Inquiry",
      "User Testing",
      "Design Systems",
      "Figma",
      "React",
      "Accessibility (WCAG)"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/jaredclarkdesigner/"
    ]
  }
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header with Contact Info */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
              <div>
                <h1 className="mb-2">Jared Clark</h1>
                <p className="text-xl text-muted-foreground">Product Design Lead</p>
              </div>
              <Button asChild>
                <a href="/docs/about-jared/Jared Clark Resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </a>
              </Button>
            </div>

            {/* Contact Links */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <a href="mailto:jared@jaredclark.design" className="flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4" />
                jared@jaredclark.design
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Fayetteville, AR
              </span>
              <a
                href="https://linkedin.com/in/jaredclarkdesigner"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
                linkedin.com/in/jaredclarkdesigner
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-12">
            <h2 className="mb-4">Summary</h2>
            <p className="text-lg leading-relaxed">
              Principal UX Product Designer with 10+ years leading digital product transformation for enterprise SaaS and e-commerce clients. I combine user research methods (Jobs-to-Be-Done, contextual inquiry, ORCA) with AI-augmented design workflows to deliver zero-to-one products that drive measurable business impact. My approach bridges UX design, product management, and software development to solve complex problems at scale.
            </p>
          </div>

          {/* Professional Experience */}
          <div className="mb-12">
            <h2 className="mb-6">Professional Experience</h2>

            <div className="space-y-8">
              {/* Kitestring */}
              <div>
                <div className="mb-3">
                  <h3>Principal Product Designer</h3>
                  <p className="text-muted-foreground">
                    Kitestring Technical Services | Jul 2022 - Present | Remote
                  </p>
                </div>
                <ul className="space-y-2 text-lg leading-relaxed list-disc pl-5">
                  <li>
                    Led end-to-end UX strategy for enterprise digital transformation initiatives serving 100,000+ users, engaging cross-functional teams of designers, developers, business analysts, and technology architects across multiple client engagements
                  </li>
                  <li>
                    Drove product strategy and design execution for zero-to-one platform launches, achieving 200% increases in user adoption and $6M+ cost savings
                  </li>
                  <li>
                    Created and executed UX research program including onsite contextual inquiry, stakeholder interviews, JTBD, and ORCA workshops to inform payment platform serving 150+ dealerships across 12 states
                  </li>
                  <li>
                    Designed next-generation mobile point-of-sale (POS) solution enabling sales associates to complete transactions on sales floor, eliminating customer wait times at fixed registers and modernizing 20-year-old legacy system
                  </li>
                </ul>
              </div>

              {/* RevUnit */}
              <div>
                <div className="mb-3">
                  <h3>Senior Product Designer</h3>
                  <p className="text-muted-foreground">RevUnit | Apr 2019 - Jul 2022 | Remote</p>
                </div>
                <ul className="space-y-2 text-lg leading-relaxed list-disc pl-5">
                  <li>
                    Designed B2B data visualization SaaS platform for Fortune 500 retailer Walmart, enabling CPG brands to access real-time sales performance insights across retail locations
                  </li>
                  <li>
                    Led UX design for enterprise legal management platform serving Walmart's internal legal team and outside counsel, consolidating legacy systems and streamlining case workflows
                  </li>
                  <li>
                    Designed Handled, a moving services app with computer vision inventory features, leading design team from concept through acquisition in 2019
                  </li>
                </ul>
              </div>

              {/* Lauren James */}
              <div>
                <div className="mb-3">
                  <h3>Lead UX Designer → Director of Digital Strategy</h3>
                  <p className="text-muted-foreground">Lauren James | Oct 2016 - Mar 2019 | Fayetteville, AR</p>
                </div>
                <ul className="space-y-2 text-lg leading-relaxed list-disc pl-5">
                  <li>
                    Led 10-person marketing and design team for multi-brand e-commerce retailer, directing UX strategy and technical implementation across three direct-to-consumer brands
                  </li>
                  <li>
                    Designed cart and checkout experiences using customer research and analytics, improving conversion rates and average order value
                  </li>
                  <li>Directed $1M flash sale campaign integrating product design, and marketing strategy</li>
                </ul>
              </div>

              {/* Aristotle Interactive */}
              <div>
                <div className="mb-3">
                  <h3>UX/UI Designer</h3>
                  <p className="text-muted-foreground">Aristotle Interactive | Aug 2015 - Oct 2016 | Little Rock, AR</p>
                </div>
                <ul className="space-y-2 text-lg leading-relaxed list-disc pl-5">
                  <li>Designed and maintained the design of government (.gov) and state tourism departments.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h2 className="mb-4">Education</h2>
            <div>
              <h3>Bachelors Visual Arts - Graphic Design & Photography</h3>
              <p className="text-muted-foreground">University of Arkansas | Aug 2011 - May 2015 | Fayetteville, AR</p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Jobs-to-Be-Done (JTBD)",
                "Contextual Inquiry",
                "User Testing",
                "Persona Development",
                "Journey Mapping",
                "Service Design",
                "ORCA Methodology",
                "Stakeholder Interviews",
                "Figma",
                "Design Systems",
                "Prototyping",
                "Wireframing",
                "Responsive Design",
                "Mobile-First Design",
                "Accessibility (WCAG)",
                "Information Architecture",
                "HTML/CSS",
                "JavaScript",
                "React Components",
                "Azure DevOps",
                "API Integration",
                "Agile/Scrum",
                "Git",
                "Developer Handoff",
                "Cross-Functional Team Leadership",
                "Product Strategy",
                "Stakeholder Management",
                "Workshop Facilitation",
                "Change Management",
                "OKRs",
                "Roadmapping",
                "AI-Augmented Design Workflows",
                "Generative AI Integration",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-muted text-sm rounded-md hover:bg-muted-foreground/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
