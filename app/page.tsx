"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactModal } from "@/components/contact-modal"
import { CaseStudies } from "@/components/case-studies"
import { ArrowRight, Building2, Lightbulb, Zap } from "lucide-react"

export default function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-transparent">
        <div className="max-w-6xl mx-auto text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-balance mb-6 uppercase tracking-tight">
            Hi, I'm Jared 🤙
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 mx-auto">
            Principal UX Product Designer specializing in enterprise fintech transformation. 10+ years driving
            measurable business outcomes through strategic design leadership at Fortune 500 retailers and financial
            services companies.
          </p>
          <div className="flex items-center justify-left gap-4">
            {/* <Button size="lg" asChild>
              <Link href="/case-studies">
                View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button> */}
            <Button size="lg" onClick={() => setIsContactModalOpen(true)}>
              Contact Me
            </Button>
          </div>
        </div>
      </section>


      {/* Case Studies */}


      {/* Selected Works */}
      <section className="py-20 px-6 bg-background border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-display mb-2 uppercase tracking-tight text-left">
              Recent Projects
            </h2>
            <p className="text-lg text-muted-foreground text-left max-w-3xl">
              To learn more about any project and see a case study, reach out on LinkedIn or email.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* America's Car Mart */}
            <div className="group block">
              <div className="mb-4">
                <h4 className="mb-1">
                  America's Car Mart
                  </h4>
                <p className="text-muted-foreground">
                  UX Research | Team Leadership
                </p>
              </div>
              <div className="aspect-video w-full bg-[#2563EB] rounded-lg overflow-hidden transition-all group-hover:shadow-lg group-hover:opacity-90" />
            </div>

            {/* Computer Care */}
            <div className="group block">
              <div className="mb-4">
     
                <h4 className="mb-1">Computer Care</h4>
                <p className="text-muted-foreground">AI Design Systems | UX Engineering</p>
              </div>
              <div className="aspect-video w-full bg-[#333333] rounded-lg overflow-hidden" />
            </div>

            {/* Follett Corporation */}
            <div className="group block">
              <div className="mb-4">
         
                <h4 className="mb-1">Follett Corporation</h4>
                <p className="text-muted-foreground">Retail POS Experience Design</p>
              </div>
              <div className="aspect-video w-full bg-[#B48140] rounded-lg overflow-hidden" />
            </div>

            {/* JCPenney */}
            <div className="group block">
              <div className="mb-4">
                <h4 className="mb-1">JCPenney</h4>
                <p className="text-muted-foreground">Retail POS Transformation</p>
              </div>
              <div className="aspect-video w-full bg-[#E5E5E5] rounded-lg overflow-hidden transition-all group-hover:shadow-lg group-hover:opacity-90" />
            </div>

            {/* Walmart Information Security */}
            <div className="group block">
              <div className="mb-4">
                <h4 className="mb-1">Walmart Information Security</h4>
                <p className="text-muted-foreground">Design System Governance | Developer Collaboration</p>
              </div>
              <div className="aspect-video w-full bg-[#1F2937] rounded-lg overflow-hidden" />
            </div>

            {/* Walmart Legal Themis */}
            <div className="group block">
              <div className="mb-4">
       
                <h4 className="mb-1">Walmart Legal Themis</h4>
                <p className="text-muted-foreground">Team Leadership | Application Design Prototyping</p>
              </div>
              <div className="aspect-video w-full bg-[#1D4ED8] rounded-lg overflow-hidden" />
            </div>

            {/* Walmart Data Ventures Luminate */}
            <div className="group block">
              <div className="mb-4">
     
                <h4 className="mb-1">Walmart Data Ventures Luminate</h4>
                <p className="text-muted-foreground">Design Ops | Prototyping</p>
              </div>
              <div className="aspect-video w-full bg-[#E5E5E5] rounded-lg overflow-hidden" />
            </div>

            {/* Handled Home */}
            <div className="group block">
              <div className="mb-4">
     
                <h4 className="mb-1">Handled Home</h4>
                <p className="text-muted-foreground">Residential Moving & Home Inventory Management</p>
              </div>
              <div className="aspect-video w-full bg-[#F97316] rounded-lg overflow-hidden" />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Works */}
  

      {/* Get In Touch */}
      <section className="py-20 px-6 border-t border-border-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-6 uppercase tracking-tight">Let's Connect</h2>
          <p className="text-lg text-muted-foreground text-balance mb-8">
            I'm looking for my next role where I can build teams and shape product strategy. If you need
            a Designer who knows how to ship, let's talk.
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button size="lg" onClick={() => setIsContactModalOpen(true)}>
              Contact Me
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.linkedin.com/in/jaredclarkdesigner/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">Available for full-time roles</p>
        </div>
      </section>

      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />

      <Footer />
    </div>
  )
}
