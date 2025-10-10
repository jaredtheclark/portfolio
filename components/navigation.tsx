"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"


export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary">
            Jared Clark
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              href="/case-studies"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname.includes("/case-studies") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Case Studies
            </Link>

            <Button variant="outline" size="sm">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
