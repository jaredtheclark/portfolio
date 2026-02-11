import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

interface FeaturedProjectCardProps {
  title: string
  subtitle: string
  outcome: string
  metrics: { value: string; label: string }[]
  imageSrc?: string
  fallbackColor?: string
  caseStudyLink: string
}

export function FeaturedProjectCard({
  title,
  subtitle,
  outcome,
  metrics,
  imageSrc,
  fallbackColor = "#333333",
  caseStudyLink,
}: FeaturedProjectCardProps) {
  return (
    <div className="w-full rounded-2xl border border-border/50 bg-card overflow-hidden animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Image Preview */}
        <div className="aspect-video lg:aspect-auto lg:h-full relative overflow-hidden">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={`${title} project preview`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : (
            <div
              className="w-full h-full min-h-[300px]"
              style={{ backgroundColor: fallbackColor }}
            />
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
          <div className="mb-4">
            <p className="text-sm font-mono uppercase tracking-wider mb-2">
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
                <p className="text-xl md:text-2xl font-display">
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
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
