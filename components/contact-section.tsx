"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      })
      if (!response.ok) throw new Error("Failed to send message")
      setSubmitStatus("success")
      setContactForm({ name: "", email: "", company: "", message: "" })
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative border-t border-border overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0" role="presentation">
        <Image
          src="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/homepage-images/wavey-background.jpg"
          alt=""
          fill
          className="object-cover dark:opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ backgroundColor: `var(--background)`, opacity: `var(--footer-overlay-opacity)` }} />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-16 md:py-20 max-w-4xl mx-auto w-full">
        <div className="md:bg-background md:border md:border-border md:rounded-lg md:shadow-lg md:overflow-hidden">
          <div className="md:p-8 lg:p-10">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold leading-tight text-foreground mb-3">
              Ready to build something meaningful?
            </h2>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Whether it's a role, collaboration, or just a thoughtful conversation, email me at{" "}
              <a href="mailto:jared@jaredclark.design" className="text-foreground font-medium underline underline-offset-2 hover:text-primary transition-colors">
                jared@jaredclark.design
              </a>
              , message me on{" "}
              <a
                href="https://www.linkedin.com/in/jaredclarkdesigner/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium underline underline-offset-2 hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              , or contact me using the form below.
            </p>

            {submitStatus === "success" ? (
              <div className="py-10 text-center">
                <p className="text-lg font-medium text-foreground mb-1">Message sent!</p>
                <p className="text-sm text-muted-foreground">I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleContactChange}
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={contactForm.company}
                      onChange={handleContactChange}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    required
                    placeholder="How can I help?"
                    rows={4}
                  />
                </div>

                {submitStatus === "error" && (
                  <p className="text-sm text-destructive">
                    Failed to send. Please try again or email me directly.
                  </p>
                )}

                <Button type="submit" size="lg" className="w-full rounded-lg bg-[#171717] text-[#fafafa] hover:bg-[#171717]/90 font-medium text-sm tracking-[0.07px]" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Start Conversation"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
