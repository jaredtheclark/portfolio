import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Building2, Lightbulb, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-balance mb-6 uppercase tracking-tight">
            Research-driven design strategy that delivers results
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
            Principal designer leading enterprise teams through discovery and launch, building products that serve users
            and hit business targets.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/case-studies">
                View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              Let's Connect
            </Button>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display mb-4 uppercase tracking-tight">My Approach</h2>
            <p className="text-lg text-muted-foreground text-balance">
              I lead with research, build with intention, and measure what matters. Every design decision ties back to
              user needs and business goals. Features ship with clear purpose and measurable success criteria.
            </p>
          </div>

          {/* Key Differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Designing at Scale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I've spent my career designing for complex organizations where nothing is simple. I navigate competing
                  priorities, work within legacy system constraints, and design for diverse user bases without
                  sacrificing brand consistency or user experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Research-to-Launch</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I lead the entire process from user research and business alignment through implementation and
                  measurement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>AI Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Leading teams through AI-enhanced design processes that increase velocity while improving quality.
                  I've developed frameworks for designers to leverage AI effectively.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display mb-4 uppercase tracking-tight">Recent Work</h2>
            <p className="text-lg text-muted-foreground">Case studies about recent projects I've worked on.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Link href="/case-studies/car-mart-payments" className="group">
              <Card className="overflow-hidden h-full transition-all hover:shadow-lg hover:border-primary/50">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2">America's Car-Mart</h3>
                    <p className="text-muted-foreground">Unified Payments Platform</p>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">
                        Transforming Auto Finance: A Unified Payments Platform
                      </CardTitle>
                      <CardDescription>
                        Led cross-functional team through complex technical transformation, replacing 3+ legacy systems
                        with unified platform serving 100,000+ customers.
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">4 months</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Impact</h4>
                      <p className="text-sm text-muted-foreground">
                        200% increase in autopay adoption, 15% more active users, unified customer experience
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                      Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/case-studies/jcpenney-pos" className="group">
              <Card className="overflow-hidden h-full transition-all hover:shadow-lg hover:border-primary/50">
                <div className="aspect-video bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-2">JCPenney</h3>
                    <p className="text-muted-foreground">Point of Sale Redesign</p>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">Modernizing Retail: Mobile-First POS System</CardTitle>
                      <CardDescription>
                        Transformed 20-year-old point-of-sale system into modern, omnichannel experience across 31+
                        stores.
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">32 weeks</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Impact</h4>
                      <p className="text-sm text-muted-foreground">
                        $6.2M cost savings, mobile checkout capabilities, unified omnichannel experience
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                      Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Get In Touch */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-6 uppercase tracking-tight">Let's Connect</h2>
          <p className="text-lg text-muted-foreground text-balance mb-8">
            I'm looking for my next leadership role where I can build teams and shape product strategy. If you're hiring
            a Principal Designer who knows how to ship, let's talk.
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <Button size="lg" asChild>
              <a href="mailto:jared@example.com">Email Me</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">Available for full-time roles</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
