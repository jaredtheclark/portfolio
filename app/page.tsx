import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { ArrowRight, Users, TrendingUp, Target, Building2, Lightbulb, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-balance mb-6">Strategic Design Leadership for Enterprise Scale</h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
            Principal UX Product Designer with enterprise DNA, leading Fortune 500 transformations through
            research-to-launch pipelines and AI-enhanced design processes that deliver measurable business impact.
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

      {/* What Makes Me Different */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Makes Me Different</h2>
            <p className="text-lg text-muted-foreground text-balance">
              I lead with research, build with intention, and measure what matters. Every design decision ties back to
              user needs and business goals—no feature ships without knowing why it exists and how we'll know it worked.
            </p>
          </div>

          {/* Experience Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">10+ Years</h3>
              <p className="text-muted-foreground">Enterprise design experience</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">Fortune 500</h3>
              <p className="text-muted-foreground">Companies including Walmart & JCPenney</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">100K+</h3>
              <p className="text-muted-foreground">Users impacted by my work</p>
            </div>
          </div>

          {/* Key Differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Enterprise DNA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I understand designing at scale: competing priorities, legacy constraints, and diverse user bases
                  while maintaining brand consistency.
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
                  measurement. My JTBD methodology has become a client template.
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

      {/* Featured Case Studies */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Case Studies</h2>
            <p className="text-lg text-muted-foreground">
              Transforming enterprise experiences through strategic UX leadership
            </p>
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
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-muted-foreground text-balance mb-8">
            I'm currently seeking design leadership opportunities where I can scale impact through team
            development and strategic product thinking. If you're building a world-class design organization and want to
            discuss how I can contribute, I'd love to hear from you.
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
          <p className="text-sm text-muted-foreground">
            Available for full-time roles
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            Made with 💙 by Jared
          </p>
        </div>
      </footer>
    </div>
  )
}
