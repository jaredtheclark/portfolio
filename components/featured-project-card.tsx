"use client"

import { useState } from "react"
import Link from "next/link"
import { ProjectVideo } from "./project-video"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "./ui/dialog"
import { Button } from "./ui/button"
import { ArrowRight, X } from "lucide-react"

interface FeaturedProjectCardProps {
  title: string
  subtitle: string
  outcome: string
  metrics: { value: string; label: string }[]
  videoSrc?: string
  posterSrc?: string
  fallbackColor?: string
  caseStudyLink: string
}

export function FeaturedProjectCard({
  title,
  subtitle,
  outcome,
  metrics,
  videoSrc,
  posterSrc,
  fallbackColor = "#333333",
  caseStudyLink,
}: FeaturedProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const hasPreview = videoSrc || posterSrc

  return (
    <div className="w-full rounded-lg border border-border/50 bg-card overflow-hidden animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Video/Image Preview */}
        {hasPreview && (
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <div className="cursor-pointer aspect-video lg:aspect-auto lg:h-full relative overflow-hidden">
                {videoSrc && posterSrc && !videoError ? (
                  <ProjectVideo
                    videoSrc={videoSrc}
                    posterSrc={posterSrc}
                    alt={`${title} project demo`}
                    fallbackColor={fallbackColor}
                  />
                ) : posterSrc ? (
                  <img
                    src={posterSrc}
                    alt={`${title} project preview`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-full"
                    style={{ backgroundColor: fallbackColor }}
                  />
                )}
              </div>
            </DialogTrigger>
            <DialogContent
              className="!max-w-[96vw] max-h-[96vh] w-full h-full p-0 gap-0 overflow-hidden flex flex-col"
              showCloseButton={false}
              aria-describedby={undefined}
            >
              <div className="flex items-start justify-between p-6 md:p-8 pb-4 md:pb-6 flex-shrink-0">
                <DialogTitle className="text-xl md:text-2xl font-heading">
                  {title}
                </DialogTitle>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none ml-4"
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close</span>
                </button>
              </div>
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
                    >
                      <source src={videoSrc} type="video/mp4" />
                    </video>
                  ) : posterSrc ? (
                    <img
                      src={posterSrc}
                      alt={`${title} preview`}
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : null}
                </div>
              </div>
              <div className="flex justify-center md:justify-end p-6 md:p-8 pt-0 md:pt-4 flex-shrink-0">
                <Button
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-lg"
                  asChild
                >
                  <Link href={caseStudyLink}>View Case Study</Link>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* Content */}
        <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
          <div className="mb-4">
            <p className="text-sm font-mono text-primary uppercase tracking-wider mb-2">
              Featured Case Study
            </p>
            <h3 className="text-2xl md:text-3xl font-display tracking-tight mb-1">
              {title}
            </h3>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            {outcome}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-left">
                <p className="text-xl md:text-2xl font-display text-primary">
                  {metric.value}
                </p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div>
            <Button asChild size="lg" className="group">
              <Link href={caseStudyLink}>
                Read Case Study
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
