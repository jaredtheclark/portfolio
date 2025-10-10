import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { ArrowLeft, Calendar, Users, Target, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"

export default function CarMartCaseStudy() {
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
              Transforming Auto Finance: How I Led a Unified Payments Platform That Tripled Autopay Adoption
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              I led the strategic UX transformation of America's Car-Mart's payment infrastructure, replacing 3+ legacy
              systems with a unified platform serving 100,000+ customers across 150+ dealerships, achieving 200%
              increase in autopay adoption and 15% growth in active users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Timeline</p>
                <p className="text-sm text-muted-foreground">4 months</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Role</p>
                <p className="text-sm text-muted-foreground">Principal UX Architect</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Target className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Users Impacted</p>
                <p className="text-sm text-muted-foreground">100,000+</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Key Metric</p>
                <p className="text-sm text-muted-foreground">200% ↑ autopay (2% to 6%)</p>
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
                    <strong className="text-foreground">Industry:</strong> Auto Finance & Buy-Here-Pay-Here Retail
                  </p>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dealerships</span>
                  <span className="font-medium">150+ across 12 states</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Active Customers</span>
                  <span className="font-medium">100,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Q3 Revenue</span>
                  <span className="font-medium">$325.7M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Associates</span>
                  <span className="font-medium">2,200+</span>
                </div>
                <div className="mt-4 pt-3 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Engagement:</strong> Contract Principal UX Architect via
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
                    Principal UX Architect leading design strategy, research, and cross-functional collaboration
                  </p>
                </div>
                <p className="text-sm font-medium mb-3">Cross-Functional Team</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Business Analysts (JTBD workshops)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Technology Architects (system integration)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Senior Designers (I mentored on AI tools)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Development Team (Azure DevOps collaboration)
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">The Challenge</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Business Problems</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Fragmented Systems:</strong> Multiple payment platforms (CheckFree, Repay, Payment Mate)
                    creating operational complexity
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Poor Customer Experience:</strong> Manual workarounds, inconsistent interfaces, limited
                    payment options
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Compliance Risk:</strong> Manual fund routing to bond groups, NACHA liability exposure
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Missed Revenue:</strong> Low autopay adoption (2%), limited digital engagement
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">User Pain Points</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Complex payment processes across multiple systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Limited payment method options</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>No unified view of payment history</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Difficult autopay enrollment process</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Inconsistent experience across channels</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">My Approach & Process</h2>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Research & Discovery Phase</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Jobs-to-Be-Done (JTBD) Workshop Leadership</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• I led cross-functional stakeholders through structured JTBD methodology</li>
                    <li>• Collaborated with Business Analysts to facilitate ORCA workshop sessions</li>
                    <li>
                      • <strong>Core JTBD I Identified:</strong> "When I process a payment I want a unified system to
                      handle every payment method (cash, card, ACH, etc.) So that I don't rely on multiple programs or
                      manual workarounds."
                    </li>
                    <li>• This insight became the strategic foundation for the entire platform redesign</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Custom UX Research Framework Development</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• I created a comprehensive research kit tailored to auto finance context</li>
                    <li>• Conducted onsite contextual inquiry at multiple dealership locations</li>
                    <li>• Led stakeholder interviews with lot managers, associates, and customers</li>
                    <li>• Facilitated user testing sessions during prototype and build phases</li>
                    <li>• Developed persona framework based on real customer segments and payment behaviors</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Strategic AI Integration & Team Enablement</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• I pioneered generative AI adoption to accelerate research synthesis by 40%</li>
                    <li>• Developed AI-assisted wireframing process that maintained design quality standards</li>
                    <li>
                      • Mentored senior designer in AI tool adoption, aligning with company leadership initiatives
                    </li>
                    <li>• Created quality safeguards ensuring AI outputs met enterprise standards</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Design Strategy & Leadership</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Design System Selection & Strategy</h4>
                  <p className="text-muted-foreground text-sm">
                    I evaluated and selected the appropriate design library to ensure team consistency and scalability.
                    Established Figma-to-React component alignment strategy that reduced design-development handoff
                    friction by 50%. Created comprehensive design-development workflow processes adopted across the
                    organization.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Cross-Functional Collaboration & Influence</h4>
                  <p className="text-muted-foreground text-sm">
                    I translated JTBD insights into actionable user stories that development teams could execute. Built
                    comprehensive product backlog in Azure DevOps with embedded design links and acceptance criteria.
                    Established design quality standards and review processes that ensured consistency throughout
                    development cycles.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Solution & Design Decisions</h2>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Unified Payment Platform Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Customer-Facing Capabilities</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Single interface for all payment methods</li>
                      <li>• Autopay with debit card support</li>
                      <li>• Self-service portal with complete payment history</li>
                      <li>• Mobile-responsive design</li>
                      <li>• Real-time payment confirmation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Administrative Tools</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Automated fund routing to bond groups</li>
                      <li>• Real-time reporting dashboard</li>
                      <li>• Compliance tracking and audit trails</li>
                      <li>• Enhanced reconciliation capabilities</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Payment Methods Supported</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">ACH (Personal/Business)</Badge>
                  <Badge variant="outline">Debit Cards</Badge>
                  <Badge variant="outline">Credit Cards</Badge>
                  <Badge variant="outline">Venmo</Badge>
                  <Badge variant="outline">PayPal</Badge>
                  <Badge variant="outline">Apple Pay</Badge>
                  <Badge variant="outline">Google Pay</Badge>
                  <Badge variant="outline">Cash (Walletron)</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Key Design Principles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary">1. Simplification</h4>
                      <p className="text-muted-foreground text-sm">
                        Consolidated complex multi-system process into single intuitive interface
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">2. Accessibility</h4>
                      <p className="text-muted-foreground text-sm">
                        Designed for customers with varying technical literacy
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary">3. Trust</h4>
                      <p className="text-muted-foreground text-sm">
                        Clear confirmation flows and transparent fee structure ($2.50 per transaction)
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">4. Efficiency</h4>
                      <p className="text-muted-foreground text-sm">
                        Reduced manual interventions and support ticket volume
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Results & Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quantitative Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Autopay Adoption</span>
                    <span className="text-2xl font-bold text-primary">200% ↑</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    From 2% to 4-6% of customer base, reducing delinquency risk
                  </p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Active Website Users</span>
                    <span className="text-2xl font-bold text-primary">15% ↑</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Increased digital engagement and self-service adoption
                  </p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">System Uptime</span>
                    <span className="text-2xl font-bold text-primary">99.9%</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Enterprise-grade reliability across all 150+ locations
                  </p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Delinquency Reduction</span>
                    <span className="text-2xl font-bold text-primary">30% ↓</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Improved payment consistency through easier access</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Business Value Delivered</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Strategic Infrastructure:</strong> Modernized payment platform
                      supporting 5-year growth roadmap
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Technical Debt Reduction:</strong> Eliminated dependency on 3+
                      legacy systems, reducing maintenance costs
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Risk Mitigation:</strong> Enhanced compliance and reduced
                      NACHA liability exposure
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Operational Efficiency:</strong> Streamlined workflows for
                      2,200+ associates across 150+ locations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Customer Retention:</strong> Improved payment experience
                      positioning company for long-term loyalty
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Key Learnings & Insights</h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Design Strategy Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">AI as Strategic Accelerator, Not Replacement</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Successfully integrating AI tools into the design process required establishing clear quality gates
                    and human oversight. I learned that AI excels at accelerating initial exploration and synthesis, but
                    strategic design decisions still require human judgment and contextual understanding. The key was
                    creating a framework where AI handled repetitive tasks while designers focused on strategic
                    problem-solving. This approach increased our velocity by 40% while maintaining enterprise-grade
                    quality standards.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">JTBD as Foundation for Cross-Functional Alignment</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Leading the JTBD workshop revealed how powerful this methodology is for creating shared
                    understanding across business, technology, and design teams. The core job statement we identified
                    became the north star for every design and development decision. I learned that investing time
                    upfront in rigorous research methodology pays exponential dividends in reducing scope creep and
                    maintaining strategic focus throughout implementation.
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
                  <h4 className="font-semibold text-primary mb-3">Translating Design into Development Language</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    One of the most impactful aspects of this project was learning to bridge the gap between design
                    artifacts and development execution. By embedding design links directly into Azure DevOps user
                    stories and creating detailed acceptance criteria, I reduced back-and-forth questions by 60%. This
                    taught me that Principal-level design work isn't just about creating beautiful interfaces—it's about
                    creating systems and processes that enable teams to execute with confidence.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Stakeholder Management in Regulated Industries</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Working in auto finance required balancing user needs with strict compliance requirements and
                    business constraints. I learned that successful stakeholder management means understanding each
                    group's priorities and finding solutions that serve multiple objectives. The autopay feature, for
                    example, addressed customer convenience, business revenue stability, and compliance tracking
                    simultaneously. This multi-stakeholder value creation is essential for Principal-level impact.
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
                  <h4 className="font-semibold text-primary mb-3">Legacy System Integration Complexity</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Replacing three legacy payment systems while maintaining business continuity taught me the
                    importance of phased rollouts and comprehensive testing strategies. I learned to design with
                    migration paths in mind, creating interfaces that could gracefully handle both old and new system
                    states during transition periods. This experience reinforced that enterprise design requires
                    thinking beyond the ideal end state to consider the messy reality of implementation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Designing for Financial Accessibility</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Working with buy-here-pay-here customers revealed unique challenges around financial literacy and
                    technology access. I learned to design payment interfaces that were simple enough for users with
                    limited digital experience while still providing the sophistication needed for complex financial
                    transactions. This balance between simplicity and capability is a design challenge that extends far
                    beyond this project and has shaped my approach to inclusive design.
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
                    <h4 className="font-semibold text-sm mb-2">Leadership & Strategy</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Strategic Leadership</Badge>
                      <Badge variant="outline">Change Management</Badge>
                      <Badge variant="outline">Cross-functional Collaboration</Badge>
                      <Badge variant="outline">Stakeholder Management</Badge>
                      <Badge variant="outline">Team Enablement</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Research & Discovery</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Jobs-to-Be-Done (JTBD)</Badge>
                      <Badge variant="outline">Contextual Inquiry</Badge>
                      <Badge variant="outline">Stakeholder Interviews</Badge>
                      <Badge variant="outline">User Testing</Badge>
                      <Badge variant="outline">Persona Development</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Design & Technical</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Design Systems</Badge>
                      <Badge variant="outline">Interaction Design</Badge>
                      <Badge variant="outline">Information Architecture</Badge>
                      <Badge variant="outline">Figma</Badge>
                      <Badge variant="outline">Azure DevOps</Badge>
                      <Badge variant="outline">AI Integration</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Business & Domain</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Business Acumen</Badge>
                      <Badge variant="outline">Financial Services</Badge>
                      <Badge variant="outline">Compliance & Regulation</Badge>
                      <Badge variant="outline">Agile Methodology</Badge>
                      <Badge variant="outline">Enterprise Architecture</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <Button variant="outline" asChild>
              <Link href="/case-studies">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Case Studies
              </Link>
            </Button>
            <Button asChild>
              <Link href="/case-studies/jcpenney-pos">
                Next Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-balance">
            This case study demonstrates comprehensive UX leadership in a complex, regulated industry environment,
            showcasing strategic thinking, cross-functional influence, and measurable business impact essential for
            Principal-level positions.
          </p>
        </div>
      </footer>
    </div>
  )
}
