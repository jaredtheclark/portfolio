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
  const [videoError, setVideoError] = useState(false)
  const hasPreview = videoSrc || posterSrc

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
              {videoSrc && posterSrc && !videoError ? (
                <ProjectVideo
                  videoSrc={videoSrc}
                  posterSrc={posterSrc}
                  alt={`${title} project demo`}
                  fallbackColor={fallbackColor}
                />
              ) : posterSrc ? (
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <img src={posterSrc} alt={`${title} project preview`} className="w-full h-full object-cover" />
                </div>
              ) : null}
            </div>
          </DialogTrigger>
          <DialogContent className="!max-w-[96vw] max-h-[96vh] w-full h-full p-0 gap-0 overflow-hidden flex flex-col" showCloseButton={false} aria-describedby={undefined}>
            {/* Header with title and close button */}
            <div className="flex items-start justify-between p-6 md:p-8 pb-4 md:pb-6 flex-shrink-0">
              <DialogTitle className="text-xl md:text-2xl font-heading">{title}</DialogTitle>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none ml-4"
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </button>
            </div>

            {/* Large preview - takes up most of the space */}
            <div className="flex-1 relative w-full px-6 md:px-8 pb-6 md:pb-8 flex items-center justify-center">
              <div className="w-full h-full rounded-lg overflow-hidden flex items-center justify-center">
                {videoSrc && !videoError ? (
                  <video
                    className="max-w-full max-h-full object-contain"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={videoSrc}
                    onError={() => setVideoError(true)}
                    aria-label={`${title} demo video`}
                  >
                    <source src={videoSrc} type="video/mp4" />
                  </video>
                ) : posterSrc ? (
                  <img src={posterSrc} alt={`${title} preview`} className="max-w-full max-h-full object-contain" />
                ) : null}
              </div>
            </div>

            {/* Bottom CTA area */}
            {caseStudyLink && (
              <div className="flex justify-center md:justify-end p-6 md:p-8 pt-0 md:pt-4 flex-shrink-0">
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
