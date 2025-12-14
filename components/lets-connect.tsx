"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ContactModal } from "@/components/contact-modal"
import { LinkedInButton } from "@/components/linkedin-button"

export function LetsConnect() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display mb-6 uppercase tracking-tight">Let's Connect</h2>
        <p className="text-lg text-muted-foreground text-balance mb-8">
          I'm looking for my next leadership role where I can build teams and shape product strategy. If you're hiring a
          Principal Designer who knows how to ship, let's talk.
        </p>
        <div className="flex items-center justify-center gap-4 mb-8">
          <Button size="lg" onClick={() => setIsModalOpen(true)}>
            Send Message
          </Button>
          <LinkedInButton />
        </div>
        <p className="text-sm text-muted-foreground">Available for full-time roles</p>
      </div>

      <ContactModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  )
}
