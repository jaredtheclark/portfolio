"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactModal } from "@/components/contact-modal"
import { LinkedInButton } from "@/components/linkedin-button"
import { ProjectCard } from "@/components/project-card"

export default function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-transparent">
        <div className="max-w-6xl mx-auto text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-balance mb-6 tracking-tight animate-fade-in">
            Hi, I'm Jared. I help teams solve the right problems, make strategic decisions, and ship design systems that scale.
          </h1>
          <p className="font-mono text-xl text-muted-foreground text-balance mb-8 mx-auto animate-fade-in-delay-1">
            Design Systems | UX Research | Strategic Partner
          </p>
          <div className="flex items-center justify-left gap-4 animate-fade-in-delay-2">
            <Button size="lg" onClick={() => setIsContactModalOpen(true)} className="cursor-pointer group">
              <span className="inline-flex items-center transition-all duration-300 ease-out">
                <span>Say Hello</span>
                <span className="inline-block w-0 overflow-hidden opacity-0 translate-x-[-8px] transition-all duration-300 ease-out group-hover:w-[1.25rem] group-hover:opacity-100 group-hover:translate-x-0 group-hover:ml-2">👋</span>
              </span>
            </Button>
            <LinkedInButton />
          </div>
        </div>
      </section>

      {/* Case Studies */}

      {/* Selected Works */}
      <section className="py-20 px-6 bg-background border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 animate-slide-up">
            <h2 className="text-3xl font-display mb-2 tracking-tight text-left">Recent Projects</h2>
            <p className="text-lg text-muted-foreground text-left">
              To learn more about any project and see a case study, reach out on LinkedIn or contact me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* America's Car Mart */}
            <ProjectCard
              title="America's Car Mart"
              description="UX Research | Team Leadership"
              videoSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/car-mart.mp4"
              posterSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/car-mart.png"
              fallbackColor="#2563EB"
            />

            {/* Follett Corporation */}
            <ProjectCard
              title="Follett Corporation"
              description="Service Design | Point of Sale"
              videoSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/follett.mp4"
              posterSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/follett.png"
              fallbackColor="#204A65"
            />

            {/* JCPenney */}
            <ProjectCard
              title="JCPenney"
              description="Design Systems | Point of Sale"
              videoSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/jcpenney.mp4"
              posterSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/jcpenney.png"
              fallbackColor="#E5E5E5"
            />

            {/* Walmart Information Security */}
            <ProjectCard
              title="Walmart Information Security"
              description="Design System Governance | User Research"
              videoSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/walmart-infosec.mp4"
              posterSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/walmart-infosec.png"
              fallbackColor="#1F2937"
            />

            {/* Walmart Legal Themis */}
            <ProjectCard
              title="Walmart Legal Themis"
              description="Project Team Leadership | Prototyping"
              videoSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/walmart-themis.mp4"
              posterSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/walmart-themis.png"
              fallbackColor="#1D4ED8"
            />

            {/* Walmart Data Ventures Luminate */}
            <ProjectCard
              title="Walmart Data Ventures Luminate"
              description="Data Visualization | Prototyping"
              videoSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/walmart-luminate.mp4"
              posterSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/walmart-luminate.png"
              fallbackColor="#E5E5E5"
            />

            {/* Handled Home */}
            <ProjectCard
              title="Handled Home"
              description="Design Systems | Consumer App Design"
              videoSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/handled-home.mp4"
              posterSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/handled-home.png"
              fallbackColor="#F97316"
            />
          </div>
        </div>
      </section>

      {/* Additional Works */}

      {/* Say Hello */}
      <section className="py-20 px-6 border-t border-border-50">
        <div className="max-w-6xl mx-auto text-left">
          <h2 className="text-3xl md:text-4xl font-display mb-6 tracking-tight animate-fade-in">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground text-balance mb-8 animate-fade-in-delay-1">
            I'm looking for my next role building teams and shaping product strategy. If you need a design leader who
            ships measurable outcomes, let's talk.
          </p>
          <div className="flex items-center gap-4 mb-8 animate-fade-in-delay-2 justify-start">
            <Button size="lg" onClick={() => setIsContactModalOpen(true)} className="cursor-pointer group">
              <span className="inline-flex items-center transition-all duration-300 ease-out">
                <span>Say Hello</span>
                <span className="inline-block w-0 overflow-hidden opacity-0 translate-x-[-8px] transition-all duration-300 ease-out group-hover:w-[1.25rem] group-hover:opacity-100 group-hover:translate-x-0 group-hover:ml-2">👋</span>
              </span>
            </Button>
            <LinkedInButton />
          </div>
          <p className="text-sm text-muted-foreground animate-fade-in-delay-3">Available for full-time roles</p>
        </div>
      </section>

      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />

      <Footer />
    </div>
  )
}
