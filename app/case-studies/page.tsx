import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { ArrowRight, TrendingUp, DollarSign, Users, Clock } from "lucide-react"

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold">Case Studies</h1>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-0 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* America's Car-Mart Case Study */}
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
                      Doubling autopay enrollment while simplifying payments for 100K users
                    </CardTitle>
                    <CardDescription>
                      Doubled autopay adoption and replaced 3 fragmented systems with a single platform for 100K customers—all in 4 months.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">200% autopay increase</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">100K+ customers</span>
                  </div>
                </div>

                <Button asChild className="w-full">
                  <Link href="/case-studies/car-mart-payments">
                    Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* JCPenney Case Study */}
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
                    <CardTitle className="text-xl mb-2">Getting checkout off the counter and onto the sales floor</CardTitle>
                    <CardDescription>
                      Transformed 20-year-old point-of-sale system into modern, omnichannel experience across 31+ stores
                      with mobile checkout capabilities.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">$6.2M savings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">50% faster checkout</span>
                  </div>
                </div>


                <Button asChild className="w-full">
                  <Link href="/case-studies/jcpenney-pos">
                    Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Combined Impact</h2>
          <p className="text-lg text-muted-foreground text-balance mb-12">
            Strategic UX leadership delivering measurable business value across enterprise transformations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">$6.2M+</h3>
              <p className="text-muted-foreground">Total cost savings delivered</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">100K+</h3>
              <p className="text-muted-foreground">Users impacted across projects</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">2</h3>
              <p className="text-muted-foreground">Fortune 500 transformations led</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Jared Clark. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
