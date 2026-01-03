"use client"

import { useState } from "react"
import { ProjectVideo } from "./project-video"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "./ui/dialog"
import { Button } from "./ui/button"
import { X } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  videoSrc?: string
  posterSrc?: string
  fallbackColor?: string
  caseStudyLink?: string
}

export function ProjectCard({
  title,
  description,
  videoSrc,
  posterSrc,
  fallbackColor = "#333333",
  caseStudyLink,
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const hasPreview = videoSrc && posterSrc

  return (
    <div className="group block transition-smooth animate-fade-in-delay-1">
      <div className="mb-4">
        <h5 className="">{title}</h5>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {hasPreview ? (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <div className="cursor-pointer">
              <ProjectVideo
                videoSrc={videoSrc}
                posterSrc={posterSrc}
                alt={`${title} project demo`}
                fallbackColor={fallbackColor}
              />
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-7xl p-0 gap-0 overflow-hidden" showCloseButton={false}>
            {/* Header with title and close button */}
            <div className="flex items-start justify-between p-8 pb-6">
              <DialogTitle className="text-lg font-display">{title}</DialogTitle>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </button>
            </div>

            {/* Large video preview */}
            <div className="relative w-full px-8">
              <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted">
                <video className="w-full h-full object-cover" autoPlay loop muted playsInline src={videoSrc}>
                  <source src={videoSrc} type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Bottom CTA area */}
            {caseStudyLink && (
              <div className="flex justify-end p-8 pt-6">
                <Button
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-lg"
                  asChild
                >
                  <a href={caseStudyLink}>View Case Study</a>
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      ) : (
        <div className="aspect-video w-full rounded-lg" style={{ backgroundColor: fallbackColor }} />
      )}
    </div>
  )
}
