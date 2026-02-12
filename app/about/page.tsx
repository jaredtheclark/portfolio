import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"

export const metadata: Metadata = {
  title: "About Me | Principal UX Product Designer",
  description: "Learn about Jared Clark, a Principal UX Product Designer with expertise in complex enterprise systems, fintech, and human-centered design.",
}

function GradientDivider() {
  return (
    <div className="h-px w-full">
      <div className="h-full w-full pl-4 md:pl-6 lg:pl-[144px]">
        <div className="h-full w-full bg-gradient-to-r from-[#d5d2d0] to-transparent" />
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-background px-4 md:px-6 lg:px-[144px] py-8 md:py-[72px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-x-[13px] lg:gap-y-4">
            <h1 className="lg:col-span-9 font-heading font-medium text-[30px] md:text-[48px] leading-[1] tracking-[-1px] md:tracking-[-1.5px] text-foreground">
              Hey there, my name is Jared I am a Product Designer, Researcher, and Developer.
            </h1>
            <p className="lg:col-span-7 text-lg leading-[1.5] text-foreground max-w-[1000px]">
              I currently live in Northwest Arkansas working on enterprise design challenges and collaborating with the great people at Kitestring.
            </p>
          </div>
        </section>

        <GradientDivider />

        {/* How I started */}
        <section className="px-4 md:px-6 lg:px-[144px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-x-4 py-8 md:py-[72px] text-foreground">
            <h2 className="lg:col-span-4 font-heading font-medium text-[30px] leading-[1] tracking-[-1px]">
              How I started
            </h2>
            <div className="lg:col-start-6 lg:col-span-7 text-lg leading-[1.5] max-w-[1000px] space-y-[18px]">
              <p>
                I&apos;m someone who likes to understand how things work. At work, that instinct pulls me from research and design, through to code. The details between design and implementation are where products quietly break or quietly succeed. Precision isn&apos;t a personality trait for me, it&apos;s a design tool.
              </p>
              <p>
                I got my start in product design in college when I was with a growing startup supporting employee IT needs. In passing I noticed the screen of a designer while he worked on a marketing campaign. That week I changed my major to design and since then I have pursued product design.
              </p>
            </div>
          </div>
        </section>

        {/* That Led me to where I am now - Highlight Section */}
        <section className="bg-white/60 border-y border-[#d5d2d0]">
          <div className="px-4 md:px-6 lg:px-[144px] py-8 md:py-12">
            <div className="py-8 md:py-[72px] text-center text-foreground">
              <div className="max-w-3xl mx-auto space-y-4">
                <h2 className="font-heading font-medium text-2xl md:text-[30px] leading-[1] md:leading-[1] tracking-[-1px]">
                  That Led me to where I am now
                </h2>
                <p className="text-lg leading-[1.5]">
                  I bring design and technology together to create products and design systems for large enterprise projects. I&apos;m often playing with tradeoffs, ensuring products can be built by a team within a timeline.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* I've done this for some really awesome companies */}
        <section className="px-4 md:px-6 lg:px-[144px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-x-12 py-8 md:py-[72px]">
            <h2 className="lg:col-span-5 font-heading font-medium text-[30px] leading-[1] tracking-[-1px] text-foreground">
              I&apos;ve done this for some really awesome companies
            </h2>
            <div className="lg:col-start-6 lg:col-span-7 text-lg leading-[1.5] text-foreground max-w-[1000px] space-y-[18px]">
              <p>
                When I worked with Walmart&apos;s information security team to design tools I provided a research to handoff plan with research, design, and development activities aligned to timelines leading to our product launch date.
              </p>
              <p>
                It&apos;s important to me to communicate effectively, and for things to be right, which my experiences with research, design, and technology allow me to do effectively
              </p>
            </div>
          </div>
        </section>

        <GradientDivider />

        {/* Catch me Outside */}
        <section className="px-4 md:px-6 lg:px-[144px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-x-4 py-8 md:py-[72px] text-foreground">
            <h2 className="lg:col-span-5 font-heading font-medium text-[30px] leading-[1] tracking-[-1px]">
              Catch me Outside
            </h2>
            <div className="lg:col-start-6 lg:col-span-7 text-lg leading-[1.5] max-w-[1000px] space-y-[18px]">
              <p>
                When I&apos;m not working for clients I like to spend my time outdoors. I go hiking and like to canoe with my wife and our two dogs. At home I&apos;m a tinkerer, music maker, and game player.
              </p>
              <p>
                When I&apos;m not working for clients I like to spend my time outdoors. I go hiking and like to canoe with my wife and our two dogs. At home I&apos;m a tinkerer, music maker, and game player.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
