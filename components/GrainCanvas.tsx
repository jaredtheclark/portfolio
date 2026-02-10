'use client';

import { useEffect, useRef, useCallback, useState } from 'react';

export interface GrainCanvasOptions {
  opacity: number; // 0-100
  speed: number; // 1-100
  isActive: boolean;
  placement: 'overlay' | 'background';
  animated: boolean; // true for animated, false for static
  grainSize: number; // 1-100, controls grain particle size
  animateOnScroll: boolean; // only animate during scroll
  animateOnMouseMove: boolean; // only animate during mouse movement
  noiseColor: string; // hex color to tint the noise
  position?: 'fixed' | 'absolute'; // fixed stays in viewport, absolute scrolls with content
}

interface GrainCanvasProps {
  options: GrainCanvasOptions;
}

// Detect mobile/touch devices
function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  );
}

export function GrainCanvas({ options }: GrainCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const frameCountRef = useRef(0);
  const optionsRef = useRef(options);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isMouseMovingRef = useRef(false);
  const mouseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Disable animation on mobile devices to prevent flashing issues
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  // Effective animated state - disabled on mobile
  const isAnimated = options.animated && !isMobile;

  // Keep options ref in sync (with mobile override)
  useEffect(() => {
    optionsRef.current = { ...options, animated: isAnimated };
  }, [options, isAnimated]);

  const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 255, g: 255, b: 255 }; // Default to white
  };

  const generateNoise = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;
    const tint = hexToRgb(optionsRef.current.noiseColor);

    for (let i = 0; i < data.length; i += 4) {
      const noise = Math.random();

      // Apply noise as intensity and tint with color
      data[i] = noise * tint.r;       // R
      data[i + 1] = noise * tint.g;   // G
      data[i + 2] = noise * tint.b;   // B
      data[i + 3] = 255;               // A (fully opaque, we control opacity via CSS)
    }

    ctx.putImageData(imageData, 0, 0);
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx || !optionsRef.current.isActive) {
      if (optionsRef.current.animated) {
        animationRef.current = requestAnimationFrame(animate);
      }
      return;
    }

    // Check if we should animate based on scroll/mouse mode
    let shouldAnimate = true;

    if (optionsRef.current.animateOnScroll && optionsRef.current.animateOnMouseMove) {
      // Both modes: animate when either scrolling or mouse moving
      shouldAnimate = isScrollingRef.current || isMouseMovingRef.current;
    } else if (optionsRef.current.animateOnScroll) {
      // Scroll only mode
      shouldAnimate = isScrollingRef.current;
    } else if (optionsRef.current.animateOnMouseMove) {
      // Mouse only mode
      shouldAnimate = isMouseMovingRef.current;
    }
    // Otherwise always animate (neither mode is enabled)

    if (shouldAnimate) {
      frameCountRef.current++;

      // Calculate frame skip based on speed
      // speed 100 = every frame, speed 1 = ~every 20 frames
      const frameSkip = Math.max(1, Math.ceil((101 - optionsRef.current.speed) / 5));

      if (frameCountRef.current % frameSkip === 0) {
        generateNoise(ctx, canvas.width, canvas.height);
      }
    }

    // Continue animation only if animated is true
    if (optionsRef.current.animated) {
      animationRef.current = requestAnimationFrame(animate);
    }
  }, [generateNoise]);

  // Handle scroll detection
  useEffect(() => {
    if (!options.animateOnScroll || !isAnimated) return;

    const handleScroll = () => {
      isScrollingRef.current = true;

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set timeout to stop animation after scrolling stops
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [options.animateOnScroll, isAnimated]);

  // Handle mouse movement detection
  useEffect(() => {
    if (!options.animateOnMouseMove || !isAnimated) return;

    const handleMouseMove = () => {
      isMouseMovingRef.current = true;

      // Clear existing timeout
      if (mouseTimeoutRef.current) {
        clearTimeout(mouseTimeoutRef.current);
      }

      // Set timeout to stop animation after mouse stops moving
      mouseTimeoutRef.current = setTimeout(() => {
        isMouseMovingRef.current = false;
      }, 150);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (mouseTimeoutRef.current) {
        clearTimeout(mouseTimeoutRef.current);
      }
    };
  }, [options.animateOnMouseMove, isAnimated]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const handleResize = () => {
      // Calculate scale based on grain size
      // grainSize 1 = fine grain (scale 0.2), grainSize 100 = large grain (scale 2.0)
      const scale = 0.2 + (optionsRef.current.grainSize / 100) * 1.8;

      // For absolute positioning, use document dimensions (includes scroll area)
      // For fixed positioning, use viewport dimensions
      const width = optionsRef.current.position === 'absolute'
        ? Math.max(document.documentElement.scrollWidth, window.innerWidth)
        : window.innerWidth;
      const height = optionsRef.current.position === 'absolute'
        ? Math.max(document.documentElement.scrollHeight, window.innerHeight)
        : window.innerHeight;

      canvas.width = width / scale;
      canvas.height = height / scale;

      // If static (or mobile), generate noise immediately after resize
      if (!optionsRef.current.animated && optionsRef.current.isActive) {
        generateNoise(ctx, canvas.width, canvas.height);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // For absolute positioned canvas, observe document body size changes
    let resizeObserver: ResizeObserver | null = null;
    if (optionsRef.current.position === 'absolute') {
      resizeObserver = new ResizeObserver(() => {
        handleResize();
      });
      resizeObserver.observe(document.body);
    }

    // Cancel any existing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    // Always generate initial frame on mount
    if (options.isActive) {
      generateNoise(ctx, canvas.width, canvas.height);
    }

    // Start animation if animated (disabled on mobile)
    if (isAnimated && options.isActive) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, generateNoise, isAnimated, options.isActive, options.grainSize, options.position]);

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined'
    && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion && options.isActive) {
    return null;
  }

  const positionClass = options.position === 'absolute' ? 'absolute' : 'fixed';

  return (
    <canvas
      ref={canvasRef}
      className={`${positionClass} inset-0 w-full h-full pointer-events-none`}
      style={{
        zIndex: options.placement === 'overlay' ? 9999 : 51,
        opacity: options.opacity / 100,
        mixBlendMode: options.placement === 'overlay' ? 'overlay' : 'normal',
      }}
    />
  );
}
