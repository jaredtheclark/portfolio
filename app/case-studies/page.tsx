import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, TrendingUp, Users } from "lucide-react"

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
          <div className="max-w-xl">
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
                      Launching a zero-to-one platform in 4 months—while holding the line
                    </CardTitle>
                    <CardDescription>
                      Led enterprise payments modernization achieving 200% autopay increase, while blocking a C-level
                      directive that would have broken the customer experience.
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
                  <Link href="/case-studies/enterprise-payments-platform">
                    Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-16">
        <Footer />
      </section>
    </div>
  )
}
