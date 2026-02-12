import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

interface CaseStudyCardProps {
  title: string
  subtitle: string
  description: string
  metrics: { value: string; label: string }[]
  imageSrc?: string
  caseStudyLink?: string
  comingSoon?: boolean
}

export function CaseStudyCard({
  title,
  subtitle,
  description,
  metrics,
  imageSrc,
  caseStudyLink,
  comingSoon = false,
}: CaseStudyCardProps) {
  return (
    <div className="flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#E8E4DB]">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={`${title} project preview`}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
      </div>

      {/* Content */}
      <div className="pt-4 flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-heading font-semibold tracking-tight mb-1">
          {title}
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-muted-foreground mb-3 pr-0">
          {subtitle}
        </p>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {metrics.map((metric, index) => (
            <div key={index} className="text-left">
              <p className="text-base font-semibold text-foreground">
                {metric.value}
              </p>
              <p className="text-xs text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        {!comingSoon && caseStudyLink && (
          <div>
            <Button asChild variant="outline" className="group rounded-lg">
              <Link href={caseStudyLink}>
                Read Case Study
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
