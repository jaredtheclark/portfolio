import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About Me | Principal UX Product Designer",
  description: "Learn about Jared Clark, a Principal UX Product Designer with expertise in complex enterprise systems, fintech, and human-centered design.",
}

export default function AboutPage() {
  return (
    <>
    <Navigation />
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="px-4 md:px-6 lg:px-[144px] py-20 border-b border-border">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl mb-6">
            Placeholder headline about who I am and what drives my work.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Placeholder introduction. This is where a short bio goes — a sentence or two about background,
            focus, and what makes this designer's perspective unique. More detail follows below.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-4 md:px-6 lg:px-[144px] py-16 border-b border-border">
        <div className="max-w-4xl grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-xl font-semibold text-foreground">My Story</h2>
          </div>
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Placeholder paragraph. This section tells the career journey — where it started, key inflection
              points, and how experience has shaped the current design philosophy.
            </p>
            <p>
              Placeholder paragraph. This continues the narrative, touching on specific industries or domains
              (e.g., fintech, enterprise software) and the types of problems that are most energizing to solve.
            </p>
            <p>
              Placeholder paragraph. Closing thoughts on what "good design" means personally and professionally.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="px-4 md:px-6 lg:px-[144px] py-16 border-b border-border">
        <div className="max-w-4xl grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-xl font-semibold text-foreground">Expertise</h2>
          </div>
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-base font-semibold text-foreground mb-3">Design Practice</h3>
              <div className="flex flex-wrap gap-2">
                {["Product Strategy", "Systems Thinking", "User Research", "Interaction Design", "Prototyping", "Design Systems"].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground mb-3">Domains</h3>
              <div className="flex flex-wrap gap-2">
                {["Fintech", "Enterprise SaaS", "Point of Sale", "Payments", "Developer Tools", "B2B Platforms"].map((domain) => (
                  <Badge key={domain} variant="outline">{domain}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground mb-3">Tools & Methods</h3>
              <div className="flex flex-wrap gap-2">
                {["Figma", "FigJam", "Maze", "UserTesting", "JTBD", "Design Sprints", "Agile / Scrum"].map((tool) => (
                  <Badge key={tool} variant="secondary">{tool}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 md:px-6 lg:px-[144px] py-16 border-b border-border">
        <div className="max-w-4xl grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-xl font-semibold text-foreground">What I Value</h2>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
            {[
              { title: "Clarity over cleverness", body: "Placeholder — good design communicates instantly and earns trust before it earns admiration." },
              { title: "Craft at every scale", body: "Placeholder — details compound. A well-considered micro-interaction signals care throughout the entire product." },
              { title: "Evidence before opinion", body: "Placeholder — intuition is a starting point, not a conclusion. Research and data sharpen every decision." },
              { title: "Collaboration as a design tool", body: "Placeholder — the best solutions come from multidisciplinary teams who argue productively and ship together." },
            ].map((value) => (
              <div key={value.title}>
                <h3 className="text-sm font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outside of work */}
      <section className="px-4 md:px-6 lg:px-[144px] py-16">
        <div className="max-w-4xl grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-xl font-semibold text-foreground">Outside of Work</h2>
          </div>
          <div className="md:col-span-2 text-muted-foreground leading-relaxed space-y-4">
            <p>
              Placeholder paragraph. A brief, human glimpse into life outside the screen — hobbies, interests,
              what recharges creativity and keeps perspective fresh.
            </p>
            <p>
              Placeholder paragraph. Optional second thought here — travel, music, sport, community involvement,
              or anything else that rounds out the person behind the portfolio.
            </p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}
