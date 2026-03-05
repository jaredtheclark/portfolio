import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Point of Sale System | Jared Clark - Product Designer",
  description:
    "UX case study: Redesigned retail POS experience achieving 15% increase in transaction throughput and reduced checkout friction.",
  openGraph: {
    title: "Point of Sale System | Jared Clark - Product Designer",
    description:
      "UX case study: Redesigned retail POS experience achieving 15% increase in transaction throughput and reduced checkout friction.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://jaredclark.design"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Case Studies",
          "item": "https://jaredclark.design/case-studies"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Point of Sale System"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Point of Sale System",
      "description": "Redesigned retail POS experience achieving 15% increase in transaction throughput and reduced checkout friction.",
      "author": {
        "@type": "Person",
        "name": "Jared Clark",
        "url": "https://jaredclark.design"
      },
      "publisher": {
        "@type": "Person",
        "name": "Jared Clark",
        "url": "https://jaredclark.design"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://jaredclark.design/case-studies/point-of-sale"
      },
      "keywords": ["UX Design", "Product Design", "Retail", "Point of Sale", "POS"]
    }
  ]
}

export default function PointOfSaleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
