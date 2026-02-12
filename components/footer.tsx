import Link from "next/link"
import Image from "next/image"
import { Linkedin, Github, Mail, Copyright } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-[#fafafa]">
      {/* Upper footer */}
      <div className="px-6 md:px-36 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          {/* Identity */}
          <div className="flex items-start gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
              <Image
                src="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/homepage-images/headshot-designer.jpg"
                alt="Jared Clark"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold text-[#fafafa]">Jared Clark</span>
              <span className="text-xs text-[#a3a3a3]">Principal Product Designer</span>
              <span className="text-xs text-[#a3a3a3]"><a href="mailto:jared@jaredclark.design" className="text-[#a3a3a3] hover:text-[#fafafa] transition-colors">jared@jaredclark.design</a></span>
            </div>
          </div>

          {/* Nav columns */}
          <div className="flex w-full justify-between pr-4 md:w-auto md:gap-12 md:justify-start md:pr-0">
            {/* Learn */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#a3a3a3]">Learn</span>
              <Link href="/" className="text-sm text-[#d4d4d4] hover:text-[#fafafa] transition-colors">Home</Link>
              <Link href="/about" className="text-sm text-[#d4d4d4] hover:text-[#fafafa] transition-colors">About</Link>
            </div>

            {/* Portfolio */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#a3a3a3]">Portfolio</span>
              <Link href="/case-studies" className="text-sm text-[#d4d4d4] hover:text-[#fafafa] transition-colors">Case Studies</Link>
              <a href="/resume" className="text-sm text-[#d4d4d4] hover:text-[#fafafa] transition-colors">Resume</a>
            </div>

            {/* Connect */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#a3a3a3]">Connect</span>
              <a
                href="https://www.linkedin.com/in/jaredclarkdesigner/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#d4d4d4] hover:text-[#fafafa] transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/jaredtheclark"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#d4d4d4] hover:text-[#fafafa] transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="mailto:jared@jaredclark.design"
                className="flex items-center gap-2 text-sm text-[#d4d4d4] hover:text-[#fafafa] transition-colors"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lower footer */}
      <div className="border-t border-[#383838] px-6 md:px-36 py-8">
        <div className="flex flex-col gap-2 md:flex-row md:justify-between">
          <p className="text-xs text-[#a3a3a3]">
            Created with ⌨️, 🖱️, and 🤖 by Jared Clark 👨‍💻
          </p>
          <p className="flex items-center gap-1 text-xs text-[#a3a3a3]">
            <Copyright className="h-3.5 w-3.5" />
            Copyright Jared Clark 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
