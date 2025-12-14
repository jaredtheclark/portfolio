"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface LinkedInButtonProps {
  variant?: "default" | "outline"
  size?: "default" | "lg" | "sm"
}

export function LinkedInButton({ variant = "outline", size = "lg" }: LinkedInButtonProps) {
  return (
    <Button variant={variant} size={size} asChild className="group">
      <a
        href="https://www.linkedin.com/in/jaredclarkdesigner/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 transition-all duration-300 ease-out"
      >
        <span>LinkedIn</span>
        <ExternalLink className="h-4 w-0 ml-[-16px] opacity-0 translate-x-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:w-4 group-hover:ml-0" />
      </a>
    </Button>
  )
}
