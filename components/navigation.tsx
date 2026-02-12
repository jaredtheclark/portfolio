"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

function Logo() {
  return (
    <svg width="40" height="40" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M36.944 29.992C36.944 30.104 36.936 30.248 36.92 30.424C36.904 30.584 36.832 30.904 36.704 31.384C36.576 31.864 36.4 32.328 36.176 32.776C35.952 33.208 35.6 33.696 35.12 34.24C34.656 34.768 34.096 35.232 33.44 35.632C32.8 36.016 31.952 36.344 30.896 36.616C29.856 36.872 28.696 37 27.416 37C25.64 37 24.096 36.736 22.784 36.208C21.472 35.68 20.504 35.04 19.88 34.288C19.272 33.52 18.792 32.76 18.44 32.008C18.088 31.256 17.888 30.616 17.84 30.088L17.744 29.296H23.216C23.216 29.328 23.216 29.384 23.216 29.464C23.232 29.528 23.264 29.672 23.312 29.896C23.376 30.104 23.448 30.304 23.528 30.496C23.624 30.688 23.768 30.904 23.96 31.144C24.168 31.368 24.408 31.568 24.68 31.744C24.952 31.92 25.304 32.064 25.736 32.176C26.184 32.288 26.68 32.344 27.224 32.344C27.768 32.344 28.264 32.304 28.712 32.224C29.16 32.128 29.52 32.016 29.792 31.888C30.08 31.744 30.328 31.592 30.536 31.432C30.744 31.272 30.896 31.112 30.992 30.952C31.088 30.776 31.168 30.624 31.232 30.496C31.296 30.352 31.336 30.24 31.352 30.16V25.72H24.584V20.152H36.944V29.992Z"
        fill="currentColor"
      />
      <path d="M51.5 4.5V51.5H4.5V4.5H51.5Z" stroke="currentColor" strokeWidth="9" />
    </svg>
  )
}

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 px-4 md:px-6 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="py-4">
        <div className="flex items-center justify-between">
          <Link href="/" aria-label="Jared Clark – Home" className="text-foreground hover:text-primary transition-colors flex items-center gap-3">
            <Logo />
          </Link>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild className={pathname.startsWith("/case-studies") ? "text-foreground" : "text-muted-foreground"}>
              <Link href="/case-studies">Case Studies</Link>
            </Button>

            <Button variant="ghost" size="sm" asChild className={pathname.startsWith("/about") ? "text-foreground" : "text-muted-foreground"}>
              <Link href="/about">About</Link>
            </Button>

            <Button variant="ghost" size="sm" asChild className={pathname.startsWith("/resume") ? "text-foreground" : "text-muted-foreground"}>
              <Link href="/resume">Resume</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
