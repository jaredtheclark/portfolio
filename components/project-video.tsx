"use client"

import { useEffect, useRef, useState } from "react"

interface ProjectVideoProps {
  videoSrc: string
  posterSrc: string
  alt: string
  fallbackColor?: string
}

export function ProjectVideo({ videoSrc, posterSrc, alt, fallbackColor = "#333333" }: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const [posterError, setPosterError] = useState(false)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasLoaded) {
            setIsInView(true)
            setHasLoaded(true)
          }
        })
      },
      {
        rootMargin: "50px", // Start loading slightly before it comes into view
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [hasLoaded])

  useEffect(() => {
    if (videoRef.current && isInView && !videoError) {
      videoRef.current.play().catch(() => {
        // Autoplay failed - this is fine, video will show poster
      })
    }
  }, [isInView, videoError])

  const handleMouseEnter = () => {
    if (videoRef.current && !videoError) {
      videoRef.current.play().catch(() => {
        // Play failed - ignore
      })
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current && !videoError) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  const handlePosterError = () => {
    setPosterError(true)
  }

  const handleVideoError = () => {
    setVideoError(true)
  }

  return (
    <div
      ref={containerRef}
      className="aspect-video w-full rounded-lg overflow-hidden transition-all group-hover:shadow-lg group-hover:opacity-90"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {posterError && videoError ? (
        // Fallback to colored background only if both video and poster fail
        <div className="w-full h-full" style={{ backgroundColor: fallbackColor }} />
      ) : isInView ? (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={posterError ? undefined : posterSrc}
          muted
          loop
          playsInline
          preload="metadata"
          onError={handleVideoError}
          aria-label={alt}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : posterError ? (
        // If poster failed but we haven't loaded video yet, show fallback color
        <div className="w-full h-full" style={{ backgroundColor: fallbackColor }} />
      ) : (
        // Show poster image until component is in view
        <img src={posterSrc} alt={alt} className="w-full h-full object-cover" onError={handlePosterError} />
      )}
    </div>
  )
}
