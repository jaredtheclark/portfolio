import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Enterprise Payments Platform | Jared Clark - Product Designer",
  description:
    "UX case study: Designed a zero-to-one payments platform achieving 200% increase in autopay enrollment and 15% growth in active portal users.",
  openGraph: {
    title: "Enterprise Payments Platform | Jared Clark - Product Designer",
    description:
      "UX case study: Designed a zero-to-one payments platform achieving 200% increase in autopay enrollment and 15% growth in active portal users.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Payments Platform | Jared Clark - Product Designer",
    description:
      "UX case study: Designed a zero-to-one payments platform achieving 200% increase in autopay enrollment and 15% growth in active portal users.",
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
          "name": "Enterprise Payments Platform"
        }
      ]
    },
    {
      "@type": "Article",
      "headline": "Enterprise Payments Platform",
      "description": "Designed a zero-to-one payments platform achieving 200% increase in autopay enrollment and 15% growth in active portal users.",
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
        "@id": "https://jaredclark.design/case-studies/enterprise-payments-platform"
      },
      "keywords": ["UX Design", "Product Design", "Fintech", "Payments", "Enterprise Software"]
    }
  ]
}

export default function EnterprisePaymentsLayout({
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
