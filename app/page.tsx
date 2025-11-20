"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactModal } from "@/components/contact-modal"
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
            <Button size="lg" asChild>
              <Link href="/case-studies">
                View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" onClick={() => setIsContactModalOpen(true)}>
              Let's Connect
            </Button>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-display mb-4 uppercase tracking-tight text-left">Approach</h3>
            <p className="text-lg text-muted-foreground text-balance text-left">
              I lead with research, build with intention, and measure what matters. Every design decision ties back to
              user needs and business goals. Features ship with clear purpose and measurable success criteria.
            </p>
          </div>

          {/* Key Differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 rounded-lg mb-4 text-[rgba(35,35,31,1)]">
                  <Building2 className="h-6 w-6 text-stone-600" />
                </div>
                <CardTitle>Designing at Scale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  In large organizations where nothing is simple, I navigate competing priorities, work within legacy
                  system constraints, and design systems for diverse user bases.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 rounded-lg mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Research-to-Launch</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I lead the entire process from user research and business alignment through implementation and
                  measurement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 rounded-lg mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>AI Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Leading teams through AI-enhanced design processes that increase velocity while improving quality.
                  I've developed frameworks for designers to leverage AI effectively.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display mb-4 uppercase tracking-tight text-left">
              Featured Case Studies
            </h2>
            <p className="text-lg text-muted-foreground text-left">
              Deep dives into recent complex enterprise transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Link href="/case-studies/car-mart-payments" className="group">
              <Card className="overflow-hidden h-full transition-all hover:shadow-lg hover:border-primary/50">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2">America's Car-Mart</h3>
                    <p className="text-muted-foreground">Unified Payments Platform</p>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">
                        Transforming Auto Finance: A Unified Payments Platform
                      </CardTitle>
                      <CardDescription>
                        Led cross-functional team through complex technical transformation, replacing 3+ legacy systems
                        with unified platform serving 100,000+ customers.
                      </CardDescription>
                    </div>
                    {/* <Badge variant="tertiary">4 months</Badge> */}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Impact</h4>
                      <p className="text-sm text-muted-foreground">
                        200% increase in autopay adoption, 15% more active users, unified customer experience
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                      Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/case-studies/jcpenney-pos" className="group">
              <Card className="overflow-hidden h-full transition-all hover:shadow-lg hover:border-primary/50">
                <div className="aspect-video bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2">JCPenney</h3>
                    <p className="text-muted-foreground">Point of Sale Redesign</p>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">Modernizing Retail: Mobile-First POS System</CardTitle>
                      <CardDescription>
                        Transformed 20-year-old point-of-sale system into modern, omnichannel experience across 31+
                        stores.
                      </CardDescription>
                    </div>
                    {/* <Badge variant="tertiary">32 weeks</Badge> */}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Impact</h4>
                      <p className="text-sm text-muted-foreground">
                        $6.2M cost savings, mobile checkout capabilities, unified omnichannel experience
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                      Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Selected Works */}
      <section className="py-20 px-6 bg-background border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display mb-4 uppercase tracking-tight text-left">
              Selected Works
            </h2>
            <p className="text-lg text-muted-foreground text-left max-w-3xl">
              Case Studies of recent projects I worked on. To learn more about any project, or to view a protected
              project reach out on LinkedIn or email.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* America's Car Mart */}
            <Link href="/case-studies/car-mart-payments" className="group block">
              <div className="mb-4">
                <Badge
                  variant="outline"
                  className="rounded-md px-3 py-1 border-muted-foreground/30 text-muted-foreground mb-3"
                >
                  Case Study
                </Badge>
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                  America's Car Mart
                </h3>
                <p className="text-muted-foreground">UX Research | Team Leadership</p>
              </div>
              <div className="aspect-video w-full bg-[#2563EB] rounded-lg overflow-hidden transition-all group-hover:shadow-lg group-hover:opacity-90" />
            </Link>

            {/* Computer Care */}
            <div className="group block">
              <div className="mb-4">
                <Badge
                  variant="outline"
                  className="rounded-md px-3 py-1 border-muted-foreground/30 text-muted-foreground mb-3"
                >
                  Snapshot
                </Badge>
                <h3 className="text-xl font-bold mb-1">Computer Care</h3>
                <p className="text-muted-foreground">AI Design Systems | UX Engineering</p>
              </div>
              <div className="aspect-video w-full bg-[#333333] rounded-lg overflow-hidden" />
            </div>

            {/* Follett Corporation */}
            <div className="group block">
              <div className="mb-4">
                <Badge
                  variant="outline"
                  className="rounded-md px-3 py-1 border-muted-foreground/30 text-muted-foreground mb-3"
                >
                  Case Study
                </Badge>
                <h4 className="text-xl font-bold mb-1">Follett Corporation</h4>
                <p className="text-muted-foreground">Retail POS Experience Design</p>
              </div>
              <div className="aspect-video w-full bg-[#B48140] rounded-lg overflow-hidden" />
            </div>

            {/* JCPenney */}
            <Link href="/case-studies/jcpenney-pos" className="group block">
              <div className="mb-4">
                <Badge
                  variant="outline"
                  className="rounded-md px-3 py-1 border-muted-foreground/30 text-muted-foreground mb-3"
                >
                  Case Study
                </Badge>
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">JCPenney</h3>
                <p className="text-muted-foreground">Retail POS Transformation</p>
              </div>
              <div className="aspect-video w-full bg-[#E5E5E5] rounded-lg overflow-hidden transition-all group-hover:shadow-lg group-hover:opacity-90" />
            </Link>

            {/* Walmart Information Security */}
            <div className="group block">
              <div className="mb-4">
                <Badge
                  variant="outline"
                  className="rounded-md px-3 py-1 border-muted-foreground/30 text-muted-foreground mb-3"
                >
                  Case Study
                </Badge>
                <h3 className="text-xl font-bold mb-1">Walmart Information Security</h3>
                <p className="text-muted-foreground">Design System Governance | Developer Collaboration</p>
              </div>
              <div className="aspect-video w-full bg-[#1F2937] rounded-lg overflow-hidden" />
            </div>

            {/* Walmart Legal Themis */}
            <div className="group block">
              <div className="mb-4">
                <Badge
                  variant="outline"
                  className="rounded-md px-3 py-1 border-muted-foreground/30 text-muted-foreground mb-3"
                >
                  Case Study
                </Badge>
                <h3 className="text-xl font-bold mb-1">Walmart Legal Themis</h3>
                <p className="text-muted-foreground">Team Leadership | Application Design Prototyping</p>
              </div>
              <div className="aspect-video w-full bg-[#1D4ED8] rounded-lg overflow-hidden" />
            </div>

            {/* Walmart Data Ventures Luminate */}
            <div className="group block">
              <div className="mb-4">
                <Badge
                  variant="outline"
                  className="rounded-md px-3 py-1 border-muted-foreground/30 text-muted-foreground mb-3"
                >
                  Case Study
                </Badge>
                <h3 className="text-xl font-bold mb-1">Walmart Data Ventures Luminate</h3>
                <p className="text-muted-foreground">Design Ops | Prototyping</p>
              </div>
              <div className="aspect-video w-full bg-[#E5E5E5] rounded-lg overflow-hidden" />
            </div>

            {/* Handled Home */}
            <div className="group block">
              <div className="mb-4">
                <Badge
                  variant="outline"
                  className="rounded-md px-3 py-1 border-muted-foreground/30 text-muted-foreground mb-3"
                >
                  Case Study
                </Badge>
                <h3 className="text-xl font-bold mb-1">Handled Home</h3>
                <p className="text-muted-foreground">Residential Moving & Home Inventory Management</p>
              </div>
              <div className="aspect-video w-full bg-[#F97316] rounded-lg overflow-hidden" />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Works */}
      <section className="py-20 px-6 bg-muted/30 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display mb-4 uppercase tracking-tight text-left">
              Additional Works
            </h2>
            <p className="text-lg text-muted-foreground text-left">
              Other projects I had the opportunity to work on either in a lesser capacity, or else far far in the past.
            </p>
          </div>

          <div className="space-y-12">
            {/* 2022 */}
            <div>
              <Badge
                variant="outline"
                className="mb-6 rounded-full px-3 py-1 border-muted-foreground/30 text-muted-foreground"
              >
                2022
              </Badge>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm shrink-0 bg-[#D4A353]" />
                  <div>
                    <h4 className="font-bold text-lg">Meatworks</h4>
                    <p className="text-muted-foreground">E-commerce Subscription Development | UX Audit & Design</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2021 */}
            <div className="border-t border-border/30 pt-8">
              <Badge
                variant="outline"
                className="mb-6 rounded-full px-3 py-1 border-muted-foreground/30 text-muted-foreground"
              >
                2021
              </Badge>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm shrink-0 bg-[#5D5236]" />
                  <div>
                    <h4 className="font-bold text-lg">Ozark Natural Foods</h4>
                    <p className="text-muted-foreground">UX Engineering</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm shrink-0 bg-[#4ADE80]" />
                  <div>
                    <h4 className="font-bold text-lg">Unigroup</h4>
                    <p className="text-muted-foreground">Design System Strategy | Native Application White labeling</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm shrink-0 bg-[#1E40AF]" />
                  <div>
                    <h4 className="font-bold text-lg">3E0 Health</h4>
                    <p className="text-muted-foreground">Physical Product Launch | Animation | UX Engineering</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2020 */}
            <div className="border-t border-border/30 pt-8">
              <Badge
                variant="outline"
                className="mb-6 rounded-full px-3 py-1 border-muted-foreground/30 text-muted-foreground"
              >
                2020
              </Badge>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm shrink-0 bg-[#1E40AF]" />
                  <div>
                    <h4 className="font-bold text-lg">Dorel</h4>
                    <p className="text-muted-foreground">Design System & Content Design</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm shrink-0 bg-[#4B5563]" />
                  <div>
                    <h4 className="font-bold text-lg">Hooke</h4>
                    <p className="text-muted-foreground">Walmart Rich Media Application | Product Strategy & Design</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm shrink-0 bg-[#9CA3AF]" />
                  <div>
                    <h4 className="font-bold text-lg">Data Vault</h4>
                    <p className="text-muted-foreground">Single Page Application Design</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm shrink-0 bg-[#F87171]" />
                  <div>
                    <h4 className="font-bold text-lg">Sundae</h4>
                    <p className="text-muted-foreground">White labeled Peer-to-Peer Commerce</p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Before Times */}
            <div className="border-t border-border/30 pt-8">
              <Badge
                variant="outline"
                className="mb-6 rounded-full px-3 py-1 border-muted-foreground/30 text-muted-foreground"
              >
                The Before Times
              </Badge>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm shrink-0 bg-[#F87171]" />
                  <div>
                    <h4 className="font-bold text-lg">Fish Gear IO</h4>
                    <p className="text-muted-foreground">
                      Lifestyle Peer-to-Peer Commerce | Product Design | UX Engineering
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm shrink-0 bg-[#4B5563]" />
                  <div>
                    <h4 className="font-bold text-lg">Lauren James</h4>
                    <p className="text-muted-foreground">E-commerce Lead Product Design & Marketing Strategy</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm shrink-0 bg-[#F87171]" />
                  <div>
                    <h4 className="font-bold text-lg">Scribel</h4>
                    <p className="text-muted-foreground">
                      Lifestyle Peer-to-Peer Commerce | Product Design | UX Engineering
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm shrink-0 bg-[#2563EB]" />
                  <div>
                    <h4 className="font-bold text-lg">City of Little Rock</h4>
                    <p className="text-muted-foreground">Dot gov Website Design</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm shrink-0 bg-[#2563EB]" />
                  <div>
                    <h4 className="font-bold text-lg">Arkansas Native American</h4>
                    <p className="text-muted-foreground">Tourism Website Design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-6 uppercase tracking-tight">Let's Connect</h2>
          <p className="text-lg text-muted-foreground text-balance mb-8">
            I'm looking for my next leadership role where I can build teams and shape product strategy. If you're hiring
            a Principal Designer who knows how to ship, let's talk.
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button size="lg" onClick={() => setIsContactModalOpen(true)}>
              Send Message
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

      {/* Added contact modal */}
      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />

      <Footer />
    </div>
  )
}
