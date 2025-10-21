import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"



import { Golos_Text, IBM_Plex_Serif as V0_Font_IBM_Plex_Serif, Space_Mono as V0_Font_Space_Mono, Space_Grotesk as V0_Font_Space_Grotesk } from 'next/font/google'
import localfont from 'next/font/local'

import "./globals.css"

// Initialize fonts
const _ibmPlexSerif = V0_Font_IBM_Plex_Serif({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700"], variable: '--v0-font-ibm-plex-serif' })
const _spaceMono = V0_Font_Space_Mono({ subsets: ['latin'], weight: ["400","700"], variable: '--v0-font-space-mono' })
const _spaceGrotesk = V0_Font_Space_Grotesk({ subsets: ['latin'], weight: ["300","400","500","600","700"], variable: '--v0-font-space-grotesk' })
const _v0_fontVariables = `${_ibmPlexSerif.variable} ${_spaceMono.variable} ${_spaceGrotesk.variable}`

const golosText = Golos_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-golos-text",
})

const bbhSansBartle = localfont({
  src: './fonts/BBHSansBartle-Regular.ttf',
  variable: "--font-bbh-sans-bartle",
  display: 'swap', 
})

export const metadata: Metadata = {
  title: "Principal UX Product Designer Portfolio",
  description: "Strategic UX leadership and complex B2B project portfolio showcasing measurable business impact",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${golosText.variable} ${bbhSansBartle.variable} ${_v0_fontVariables}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
