import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { GrainCanvas } from "@/components/GrainCanvas"
import { ConsoleEasterEgg } from "@/components/ConsoleEasterEgg"
import { Toaster } from "sonner"

import "./globals.css"

const golosText = Golos_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-golos-text",
})

import { Golos_Text, Roboto_Mono, Poppins, IBM_Plex_Serif as V0_Font_IBM_Plex_Serif, Space_Mono as V0_Font_Space_Mono, Space_Grotesk as V0_Font_Space_Grotesk } from 'next/font/google'

// Initialize fonts
const _ibmPlexSerif = V0_Font_IBM_Plex_Serif({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700"] })
const _spaceMono = V0_Font_Space_Mono({ subsets: ['latin'], weight: ["400","700"] })
const _spaceGrotesk = V0_Font_Space_Grotesk({ subsets: ['latin'], weight: ["300","400","500","600","700"] })

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto-mono",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Jared Clark | Product Designer",
  description: "Product Designer specializing in enterprise fintech transformation.",
  metadataBase: new URL("https://jaredclark.design"),
  openGraph: {
    title: "Jared Clark | Product Designer",
    description: "Product Designer specializing in enterprise fintech transformation.",
    url: "https://jaredclark.design",
    siteName: "Jared Clark Design",
    images: [
      {
        url: "/images/homepage/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jared Clark - Product Designer portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jared Clark | Product Designer",
    description: "Principal UX Product Designer specializing in enterprise fintech transformation.",
    images: ["/images/homepage/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Figma capture script — dev only, never loads in production */}
        {process.env.NODE_ENV === 'development' && (
          <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async></script>
        )}
        {/* JSON-LD Structured Data for Google Sitelinks & Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://jaredclark.design/#website",
                  "name": "Jared Clark | Product Designer",
                  "url": "https://jaredclark.design",
                  "description": "Product Designer specializing in enterprise fintech transformation.",
                  "publisher": {
                    "@id": "https://jaredclark.design/#person"
                  }
                },
                {
                  "@type": "Person",
                  "@id": "https://jaredclark.design/#person",
                  "name": "Jared Clark",
                  "jobTitle": "Principal UX Product Designer",
                  "url": "https://jaredclark.design",
                  "sameAs": [
                    "https://www.linkedin.com/in/jaredclarkdesigner/",
                    "https://github.com/jaredtheclark"
                  ],
                  "knowsAbout": [
                    "Product Design",
                    "UX Design",
                    "Enterprise Software",
                    "Fintech",
                    "Design Systems"
                  ]
                },
                {
                  "@type": "SiteNavigationElement",
                  "@id": "https://jaredclark.design/#navigation",
                  "name": "Main Navigation",
                  "hasPart": [
                    {
                      "@type": "SiteNavigationElement",
                      "name": "Case Studies",
                      "url": "https://jaredclark.design/case-studies"
                    },
                    {
                      "@type": "SiteNavigationElement",
                      "name": "About",
                      "url": "https://jaredclark.design/about"
                    },
                    {
                      "@type": "SiteNavigationElement",
                      "name": "Resume",
                      "url": "https://jaredclark.design/resume"
                    }
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body className={`font-sans ${golosText.variable} ${poppins.variable} ${robotoMono.variable}`}>
        <ConsoleEasterEgg />
        {/* Fixed animated grain (currently commented for testing static version) */}
        {/* <GrainCanvas
          options={{
            opacity: 5,
            speed: 72,
            isActive: true,
            placement: 'background',
            animated: true,
            grainSize: 50,
            animateOnScroll: true,
            animateOnMouseMove: true,
            noiseColor: '#F4F2EC',
            position: 'fixed',
          }}
        /> */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative">
            {/* Static grain that scrolls with content */}
            <GrainCanvas
              options={{
                opacity: 5,
                speed: 72,
                isActive: true,
                placement: 'background',
                animated: false,
                grainSize: 50,
                animateOnScroll: false,
                animateOnMouseMove: false,
                noiseColor: '#F4F2EC',
                position: 'absolute',
              }}
            />
            <Suspense fallback={null}>{children}</Suspense>
          </div>
          <ThemeToggle />
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
