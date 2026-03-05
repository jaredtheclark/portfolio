"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { ExternalLink } from "lucide-react"

export default function NotFound() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    // Auto-play video when page loads
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full text-center space-y-8">
          {/* Video with Hover Overlay */}
          <a
            href="https://www.youtube.com/watch?v=H947PtHmh0Y"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-lg group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <video
              ref={videoRef}
              className="w-full h-auto"
              muted
              playsInline
              loop
              src="/videos/404-easter-egg.mp4"
              aria-label="Animated illustration for page not found"
            >
              Your browser does not support the video tag.
            </video>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

            {/* Hover Button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-background text-foreground px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 font-medium">
                <span>Listen to Deborah Cox on YouTube</span>
                <ExternalLink className="h-4 w-4" />
              </div>
            </div>
          </a>

          {/* 404 Message */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-primary">404</h1>
            <h2 className="text-3xl md:text-4xl font-semibold">How Did You Get Here?</h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Nobody's supposed to be here. This page doesn't exist, but that's okay—let's get you back on track.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button asChild size="lg">
              <Link href="/">
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <a
                href="https://www.youtube.com/watch?v=g4Vhq2R0jQk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-all duration-300 ease-out"
              >
                <span>Listen to Deborah Cox on YouTube</span>
                <ExternalLink className="h-4 w-0 ml-[-16px] opacity-0 translate-x-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:w-4 group-hover:ml-0" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
