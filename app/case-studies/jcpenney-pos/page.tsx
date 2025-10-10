import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { ArrowLeft, Clock, Users, Smartphone, Zap, Target, TrendingUp, CheckCircle } from "lucide-react"

export default function JCPenneyCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/case-studies">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
          </Button>

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-balance mb-4">
              Modernizing Retail: How I Led Mobile-First POS Transformation Saving JCPenney $6.2M
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              I led the design strategy for transforming JCPenney's 20-year-old point-of-sale system into a modern,
              mobile-first omnichannel platform across 31+ stores, achieving $6.2M in cost savings and enabling checkout
              anywhere in the store.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Timeline</p>
                <p className="text-sm text-muted-foreground">32 weeks (2 engagements)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Role</p>
                <p className="text-sm text-muted-foreground">Staff Product Designer</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Target className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Stores Impacted</p>
                <p className="text-sm text-muted-foreground">31+ locations</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Cost Savings</p>
                <p className="text-sm text-muted-foreground">$6.2M (17% reduction)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Project Overview & Context</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Company Context</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="mb-4 pb-3 border-b border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Industry:</strong> Department Store Retail
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    <strong className="text-foreground">Challenge:</strong> Legacy 20-year-old POS creating competitive
                    disadvantage
                  </p>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Store Locations</span>
                  <span className="font-medium">650+ nationwide</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Modernization Phase</span>
                  <span className="font-medium">31+ stores</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Project Duration</span>
                  <span className="font-medium">Two 16-week engagements</span>
                </div>
                <div className="mt-4 pt-3 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Engagement:</strong> Contract Staff Product Designer via
                    Kitestring
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Team Composition</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 pb-4 border-b border-border">
                  <p className="text-sm font-medium text-primary mb-1">My Role</p>
                  <p className="text-sm text-muted-foreground">
                    Staff Product Designer leading mobile POS design strategy, JTBD research, and hardware-software
                    integration
                  </p>
                </div>
                <p className="text-sm font-medium mb-3">Cross-Functional Collaboration</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Product Management (strategy alignment)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Engineering Teams (Android POS integration)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Store Operations (workflow optimization)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Business Stakeholders (JTBD workshops)
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">The Challenge</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Legacy System Limitations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  20-year-old POS technology creating competitive disadvantage with slow, inflexible workflows that
                  couldn't adapt to modern retail needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Operational Inefficiencies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Associates tied to fixed registers with no mobile capabilities, creating bottlenecks and limiting
                  customer service flexibility.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Stakeholder Pain Points</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Customers</h4>
                  <p className="text-sm text-muted-foreground">
                    Long wait times and fragmented experience across online and in-store channels
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Sales Associates</h4>
                  <p className="text-sm text-muted-foreground">
                    Limited mobility and inefficient workflows reducing productivity and customer service quality
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Business</h4>
                  <p className="text-sm text-muted-foreground">
                    High operational costs, competitive disadvantage, and lost sales opportunities
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Research & Discovery */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Research & Discovery</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">My Research Methodology</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    <strong>Jobs-to-Be-Done Analysis:</strong> I co-led JTBD and ORCA workshops, mapping every use case
                    team members encounter during transactions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    <strong>Contextual Inquiry:</strong> I conducted on-site observation across multiple store formats
                    to understand workflow variations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    <strong>Stakeholder Interviews:</strong> I facilitated sessions with store managers, associates, and
                    executives to align on requirements
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    <strong>Competitive Analysis:</strong> I benchmarked against modern retail experiences to identify
                    best practices
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Key Insights I Uncovered</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Mobile checkout could reduce customer wait times by 35% during peak hours
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Credit approval integration was critical—70% of transactions involved store card applications
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Unified customer data essential for omnichannel—customers expected seamless online-to-store
                    experience
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Associates needed flexible tools that worked across jewelry, salon, and general merchandise
                    departments
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Strategy */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">My Design Strategy</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Design Principles I Established</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Mobility First</h4>
                    <p className="text-sm text-muted-foreground">
                      I designed for checkout anywhere in the store, untethering associates from fixed registers
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Seamless Integration</h4>
                    <p className="text-sm text-muted-foreground">
                      I unified online and offline experiences through consistent data architecture
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Efficiency Focus</h4>
                    <p className="text-sm text-muted-foreground">
                      I streamlined every transaction step, reducing average checkout time by 40%
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Hardware-Aware Design</h4>
                    <p className="text-sm text-muted-foreground">
                      I leveraged Android POS device capabilities while designing for physical constraints
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Solution Architecture I Designed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Mobile POS Capabilities</h4>
                    <p className="text-sm text-muted-foreground">
                      Created modular design system optimized for handheld Android devices
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Flexible Checkout System</h4>
                    <p className="text-sm text-muted-foreground">
                      Designed seamless transition between mobile and fixed terminals mid-transaction
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Integrated Credit Processing</h4>
                    <p className="text-sm text-muted-foreground">
                      Embedded real-time approval within transaction flow, eliminating context switching
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Unified Customer Database</h4>
                    <p className="text-sm text-muted-foreground">
                      Designed interfaces leveraging single source of truth across all channels
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Delivered */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Solutions Delivered</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-primary" />
                  Mobile Checkout System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Floor-based transaction capabilities</li>
                  <li>• Reduced customer wait times</li>
                  <li>• Increased associate productivity</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Flexible Transaction Flow
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Start transactions on mobile</li>
                  <li>• Transfer seamlessly to docking stations</li>
                  <li>• Complete at fixed terminals</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Integrated Credit Approval</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Real-time store card approval</li>
                  <li>• Single-transaction completion</li>
                  <li>• Improved conversion rates</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Unified Omnichannel Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Connected online and in-store data</li>
                  <li>• Consistent customer experience</li>
                  <li>• Integrated payment processing</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Specialized Workflows</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Jewelry Department</h4>
                  <p className="text-sm text-muted-foreground">
                    Specialized checkout for high-value items with enhanced security protocols
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Salon Services</h4>
                  <p className="text-sm text-muted-foreground">
                    Appointment and service-specific transactions with integrated scheduling
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Windows & Home</h4>
                  <p className="text-sm text-muted-foreground">
                    Large item and installation workflows with delivery coordination
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Impact & Results</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Quantitative Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Cost Savings</span>
                      <span className="text-2xl font-bold text-primary">$6.2M</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      17% reduction in hardware and support costs across 31+ stores
                    </p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Stores Modernized</span>
                      <span className="text-2xl font-bold text-primary">31+</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Within aggressive 32-week timeline across two engagements
                    </p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Checkout Time</span>
                      <span className="text-2xl font-bold text-primary">40% ↓</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Reduced average transaction time through streamlined workflows
                    </p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Mobile Adoption</span>
                      <span className="text-2xl font-bold text-primary">85%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Associates actively using mobile POS within 3 months of rollout
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Business Value I Delivered</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Strategic Foundation:</strong> Established 3-year
                      transformation roadmap enabling omnichannel retail strategy
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Customer Experience:</strong> Reduced wait times by 35% during
                      peak hours, improving satisfaction scores
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Associate Productivity:</strong> Increased transactions per
                      hour by 25% through mobile flexibility
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Technical Modernization:</strong> Replaced 20-year-old legacy
                      system with scalable, maintainable platform
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Process Improvement:</strong> Enhanced agile development
                      practices and change management capabilities
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Long-term Strategic Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Enabled omnichannel retail strategy with unified customer data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Created scalable design system for future store rollouts</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Established hardware-software integration patterns for enterprise retail</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Improved organizational change management capabilities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Client Testimonial</h2>
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <blockquote className="text-lg italic text-muted-foreground mb-4 leading-relaxed">
                "Kitestring has and continues to be a strategic partner by helping to shape and develop our
                transformation journey. From the start Kitestring understood the scope of what JCP was looking to do not
                only modernizing Store's Checkout Technology but also Customer and Associate Experience... Eugene and
                his team are a fantastic partner to work with who brought a level of transparency to the program that
                was required in making critical decisions quickly to continue our forward momentum."
              </blockquote>
              <footer className="text-sm">
                <strong className="text-primary">— Irfan Butt, Director, JCPenney</strong>
              </footer>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Key Learnings & Insights</h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Design Strategy Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">
                    Hardware-Software Integration Requires Deep Contextual Understanding
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Designing for physical Android POS devices taught me that successful hardware-software integration
                    goes beyond screen design. I learned to leverage device-specific capabilities like hardware buttons
                    and barcode scanners while designing around constraints like screen size and processing power. The
                    key insight was that mobile-first retail design requires understanding the physical
                    environment—lighting conditions, counter space, and how associates actually hold and use devices
                    during busy shifts. This contextual awareness shaped every interaction pattern I created.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">
                    Seamless Transitions Are More Critical Than Perfect Endpoints
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    One of the most valuable insights from this project was realizing that the ability to move
                    transactions between devices mid-flow was more important than optimizing any single device
                    experience. Associates needed to start transactions on mobile, transfer to docking stations for
                    complex operations, and complete at fixed terminals—all without losing context or requiring
                    re-entry. I learned that designing these transition states and handoff moments required as much
                    attention as the primary workflows themselves.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Collaboration & Leadership Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">
                    JTBD Workshops Create Shared Language Across Silos
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Co-leading JTBD and ORCA workshops with business stakeholders revealed how powerful this methodology
                    is for breaking down organizational silos. By mapping every use case team members encounter, we
                    created a shared vocabulary that product, engineering, and operations could all reference. This
                    common language accelerated decision-making and reduced misalignment throughout the project. I
                    learned that investing time in rigorous research frameworks upfront pays exponential dividends in
                    execution velocity.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Change Management Requires Design Thinking Too</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Rolling out new technology to 31+ stores taught me that change management is itself a design
                    problem. I learned to design training materials, rollout sequences, and support documentation with
                    the same rigor as product interfaces. The 85% mobile adoption rate within 3 months wasn't just
                    because the product was well-designed—it was because we designed the entire change experience, from
                    initial training to ongoing support. This holistic view of design impact is essential for
                    enterprise-scale transformations.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Technical & Domain Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">
                    Legacy System Replacement Requires Parallel Design Thinking
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Replacing a 20-year-old POS system while maintaining business continuity taught me to design for
                    both the ideal future state and the messy transition period. I learned to create interfaces that
                    could gracefully handle both old and new system states, allowing for phased rollouts and fallback
                    scenarios. This experience reinforced that enterprise design isn't just about the end vision—it's
                    about designing the migration path itself. The ability to think in parallel states and transition
                    strategies is a critical skill for large-scale transformations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">
                    Specialized Workflows Require Modular Design Systems
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Designing for jewelry, salon, and general merchandise departments revealed the importance of
                    modular, composable design systems. Each department had unique requirements—jewelry needed enhanced
                    security protocols, salons required appointment integration, and home goods needed delivery
                    coordination. I learned to create a core design system with specialized modules that could be mixed
                    and matched based on department needs. This modular approach enabled scalability while maintaining
                    consistency, a balance that's essential for enterprise retail design.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Skills Demonstrated</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Design & Research Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Jobs-to-Be-Done (JTBD)</Badge>
                      <Badge variant="outline">ORCA Workshops</Badge>
                      <Badge variant="outline">Contextual Inquiry</Badge>
                      <Badge variant="outline">Stakeholder Interviews</Badge>
                      <Badge variant="outline">Competitive Analysis</Badge>
                      <Badge variant="outline">User Testing</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Technical Design Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Android Platform Design</Badge>
                      <Badge variant="outline">Hardware-Software Integration</Badge>
                      <Badge variant="outline">Modular Design Systems</Badge>
                      <Badge variant="outline">Physical Interaction Design</Badge>
                      <Badge variant="outline">Cross-platform Design</Badge>
                      <Badge variant="outline">Prototype Development</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Leadership & Strategy</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Design Strategy</Badge>
                      <Badge variant="outline">Workshop Facilitation</Badge>
                      <Badge variant="outline">Cross-functional Collaboration</Badge>
                      <Badge variant="outline">Change Management</Badge>
                      <Badge variant="outline">Stakeholder Management</Badge>
                      <Badge variant="outline">Process Improvement</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Business & Domain</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Enterprise Retail</Badge>
                      <Badge variant="outline">Omnichannel Strategy</Badge>
                      <Badge variant="outline">Business Acumen</Badge>
                      <Badge variant="outline">Cost Optimization</Badge>
                      <Badge variant="outline">Agile Methodology</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <Button variant="outline" asChild>
              <Link href="/case-studies">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Case Studies
              </Link>
            </Button>
            <Button asChild>
              <Link href="/case-studies/car-mart-payments">
                View Car-Mart Case Study
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-balance">
            This case study demonstrates enterprise retail transformation expertise, showcasing mobile-first design
            strategy, hardware-software integration, and measurable business impact through strategic UX leadership.
          </p>
        </div>
      </footer>
    </div>
  )
}
