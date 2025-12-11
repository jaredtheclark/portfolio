"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactModal } from "@/components/contact-modal"
import { ProjectVideo } from "@/components/project-video"

export default function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-transparent">
        <div className="max-w-6xl mx-auto text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-balance mb-6 uppercase tracking-tight animate-fade-in">
            Hi, I'm Jared 🤙
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 mx-auto animate-fade-in-delay-1">
            Principal UX Product Designer specializing in enterprise fintech transformation. 10+ years driving
            measurable business outcomes through strategic design leadership at Fortune 500 retailers and financial
            services companies.
          </p>
          <div className="flex items-center justify-left gap-4 animate-fade-in-delay-2">
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
          <div className="mb-12 animate-slide-up">
            <h2 className="text-3xl font-display mb-2 uppercase tracking-tight text-left">Recent Projects</h2>
            <p className="text-lg text-muted-foreground text-left max-w-3xl">
              To learn more about any project and see a case study, reach out on LinkedIn or email.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* America's Car Mart */}
            <div className="group block hover-scale transition-smooth animate-fade-in-delay-1">
              <div className="mb-4">
                <h4 className="mb-1">America's Car Mart</h4>
                <p className="text-muted-foreground">UX Research | Team Leadership</p>
              </div>
              <ProjectVideo
                videoSrc="/videos/car-mart.mp4"
                posterSrc="/images/posters/car-mart.png"
                alt="America's Car Mart project demo"
                fallbackColor="#2563EB"
              />
            </div>

            {/* Computer Care */}
            {/* <div className="group block hover-scale transition-smooth animate-fade-in-delay-1">
              <div className="mb-4">
                <h4 className="mb-1">Computer Care</h4>
                <p className="text-muted-foreground">AI Design Systems | UX Engineering</p>
              </div>
              <ProjectVideo
                videoSrc="/videos/computer-care.mp4"
                posterSrc="/images/posters/computer-care.jpg"
                alt="Computer Care project demo"
                fallbackColor="#333333"
              />
            </div> */}

            {/* Follett Corporation */}
            <div className="group block hover-scale transition-smooth animate-fade-in-delay-2">
              <div className="mb-4">
                <h4 className="mb-1">Follett Corporation</h4>
                <p className="text-muted-foreground">Service Design | Point of Sale</p>
              </div>
              <ProjectVideo
                videoSrc="/videos/follett.mp4"
                posterSrc="/images/posters/follett.png"
                alt="Follett Corporation project demo"
                fallbackColor="#204A65"
              />
            </div>

            {/* JCPenney */}
            <div className="group block hover-scale transition-smooth animate-fade-in-delay-1">
              <div className="mb-4">
                <h4 className="mb-1">JCPenney</h4>
                <p className="text-muted-foreground">Design Systems | Point of Sale</p>
              </div>
              <ProjectVideo
                videoSrc="/videos/jcpenney.mp4"
                posterSrc="/images/posters/jcpenney.png"
                alt="JCPenney project demo"
                fallbackColor="#E5E5E5"
              />
            </div>

            {/* Walmart Information Security */}
            <div className="group block hover-scale transition-smooth animate-fade-in-delay-2">
              <div className="mb-4">
                <h4 className="mb-1">Walmart Information Security</h4>
                <p className="text-muted-foreground">Design System Governance | User Research</p>
              </div>
              <ProjectVideo
                videoSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_7GKaDJbkE1fsPvrgjbG1nZ7C9Lbq/fVfPvmhLT9t5NVNli3WR3p/public/videos/walmart-infosec.mp4"
                posterSrc="/images/posters/walmart-infosec.jpg"
                alt="Walmart Information Security project demo"
                fallbackColor="#1F2937"
              />
            </div>

            {/* Walmart Legal Themis */}
            <div className="group block hover-scale transition-smooth animate-fade-in-delay-3">
              <div className="mb-4">
                <h4 className="mb-1">Walmart Legal Themis</h4>
                <p className="text-muted-foreground">Project Team Leadership | Prototyping</p>
              </div>
              <ProjectVideo
                videoSrc="/videos/walmart-themis.mp4"
                posterSrc="/images/posters/walmart-themis.png"
                alt="Walmart Legal Themis project demo"
                fallbackColor="#1D4ED8"
              />
            </div>

            {/* Walmart Data Ventures Luminate */}
            <div className="group block hover-scale transition-smooth animate-fade-in-delay-1">
              <div className="mb-4">
                <h4 className="mb-1">Walmart Data Ventures Luminate</h4>
                <p className="text-muted-foreground">Data Visualization | Prototyping</p>
              </div>
              <ProjectVideo
                videoSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_7GKaDJbkE1fsPvrgjbG1nZ7C9Lbq/bAGU-KMJYTvs65GPnkfgFP/public/videos/walmart-luminate.mp4"
                posterSrc="/images/posters/walmart-luminate.png"
                alt="Walmart Data Ventures Luminate project demo"
                fallbackColor="#E5E5E5"
              />
            </div>

            {/* Handled Home */}
            <div className="group block hover-scale transition-smooth animate-fade-in-delay-2">
              <div className="mb-4">
                <h4 className="mb-1">Handled Home</h4>
                <p className="text-muted-foreground">Design Systems | Consumer App Design</p>
              </div>
              <ProjectVideo
                videoSrc="/videos/handled-home.mp4"
                posterSrc="/images/posters/handled-home.png"
                alt="Handled Home project demo"
                fallbackColor="#F97316"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Works */}

      {/* Get In Touch */}
      <section className="py-20 px-6 border-t border-border-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-6 uppercase tracking-tight animate-fade-in">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground text-balance mb-8 animate-fade-in-delay-1">
            I'm looking for my next role building teams and shaping product strategy. If you need a design leader who
            ships measurable outcomes, let's talk.
          </p>
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-delay-2">
            <Button size="lg" onClick={() => setIsContactModalOpen(true)}>
              Contact Me
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.linkedin.com/in/jaredclarkdesigner/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground animate-fade-in-delay-3">Available for full-time roles</p>
        </div>
      </section>

      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />

      <Footer />
    </div>
  )
}
