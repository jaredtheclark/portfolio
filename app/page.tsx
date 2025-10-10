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
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          

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
                  Walmart, JCPenney, and Fortune 500 experience. I understand designing at scale: competing priorities,
                  legacy constraints, and diverse user bases while maintaining brand consistency.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Research-to-Launch Pipeline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I lead the entire strategic process from user research and business alignment through implementation
                  and performance measurement. My JTBD methodology has become a client template.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>AI Integration Pioneer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Leading teams through AI-enhanced design processes that increase velocity while improving quality.
                  I've developed frameworks for both junior and senior designers to leverage AI effectively.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">200%</h3>
              <p className="text-muted-foreground">Increase in autopay adoption</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">100K+</h3>
              <p className="text-muted-foreground">Active customers impacted</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">4 Months</h3>
              <p className="text-muted-foreground">Zero-to-one product delivery</p>
            </div>
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
            <Card className="overflow-hidden">
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
                  <Button asChild>
                    <Link href="/case-studies/car-mart-payments">
                      Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
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
                  <Button asChild>
                    <Link href="/case-studies/jcpenney-pos">
                      Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Approach */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Leadership Approach</h2>
            <p className="text-lg text-muted-foreground text-balance mb-8">
              The most sustainable way to drive design excellence in large organizations is by consistently delivering
              measurable business value. When design teams can point to concrete ROI, they earn the trust needed to push
              for more ambitious initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Influence Through Value</h3>
              <p className="text-muted-foreground mb-6">
                I've learned that sustainable design excellence comes from consistently delivering measurable business
                value, earning the trust needed for ambitious initiatives.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Building for Scale</h3>
              <p className="text-muted-foreground mb-6">
                Whether it's design systems, research processes, or team structures, I design solutions that grow with
                the organization and can be maintained by internal teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Path Forward */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">The Path Forward</h2>
          <p className="text-lg text-muted-foreground text-balance mb-8">
            My next career phase focuses on formal people leadership roles where I can scale my impact through others.
            I'm drawn to Director-level positions where strategic design thinking can influence company-wide product
            decisions and help build world-class design organizations.
          </p>
          <p className="text-base text-muted-foreground text-balance mb-8">
            The companies I'm most excited about are those ready to make design a true competitive advantage – not just
            a service function, but a core part of how they innovate and serve their users.
          </p>
          <Button size="lg">Want to discuss how strategic design leadership can accelerate your product goals?</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Principal UX Product Designer Portfolio. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
