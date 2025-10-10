import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

import { IBM_Plex_Serif as V0_Font_IBM_Plex_Serif, Space_Mono as V0_Font_Space_Mono, Space_Grotesk as V0_Font_Space_Grotesk } from 'next/font/google'

// Initialize fonts
const _ibmPlexSerif = V0_Font_IBM_Plex_Serif({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700"], variable: '--v0-font-ibm-plex-serif' })
const _spaceMono = V0_Font_Space_Mono({ subsets: ['latin'], weight: ["400","700"], variable: '--v0-font-space-mono' })
const _spaceGrotesk = V0_Font_Space_Grotesk({ subsets: ['latin'], weight: ["300","400","500","600","700"], variable: '--v0-font-space-grotesk' })
const _v0_fontVariables = `${_ibmPlexSerif.variable} ${_spaceMono.variable} ${_spaceGrotesk.variable}`

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
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${_v0_fontVariables}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
