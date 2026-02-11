'use client'

import { useState, useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'

interface SplineHeroProps {
  fallbackVideoSrc: string
  className?: string
}

// Check if device can handle 3D rendering
function canHandle3D(): boolean {
  if (typeof window === 'undefined') return false

  // Check WebGL support
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) return false
  } catch {
    return false
  }

  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return false
  }

  // Check device memory (if available) - fallback if < 4GB
  const nav = navigator as Navigator & { deviceMemory?: number }
  if (nav.deviceMemory && nav.deviceMemory < 4) {
    return false
  }

  // Check CPU cores - fallback if < 4 cores
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
    return false
  }

  return true
}

export function SplineHero({ fallbackVideoSrc, className }: SplineHeroProps) {
  const [useSpline, setUseSpline] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [containerReady, setContainerReady] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Check device capabilities on mount
  useEffect(() => {
    if (!canHandle3D()) {
      setUseSpline(false)
      setIsLoading(false)
    }
  }, [])

  // Withhold Spline until container has non-zero dimensions.
  // Prevents WebGL framebuffer errors when the instance is hidden via display:none.
  useEffect(() => {
    if (!useSpline) return

    const el = containerRef.current
    if (!el) return

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect
        if (width > 0 && height > 0) {
          setContainerReady(true)
          observer.disconnect()
        }
      }
    })

    observer.observe(el)
    return () => { observer.disconnect() }
  }, [useSpline])

  const handleSplineLoad = () => {
    setIsLoading(false)
  }

  const handleSplineError = () => {
    setHasError(true)
    setUseSpline(false)
    setIsLoading(false)
  }

  // Show video fallback
  if (!useSpline || hasError) {
    return (
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={className}
      >
        <source src={fallbackVideoSrc} type="video/mp4" />
      </video>
    )
  }

  return (
    <div ref={containerRef} className={`${className} pointer-events-none relative overflow-hidden`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-muted-foreground/20 border-t-muted-foreground rounded-full animate-spin" />
        </div>
      )}
      {containerReady && !hasError && (
        <Spline
          scene="https://draft.spline.design/SQ-B52c3p0xU9hxg/scene.splinecode"
          onLoad={handleSplineLoad}
          onError={handleSplineError}
        />
      )}
    </div>
  )
}
