import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Site Styles | Design System Reference",
  description: "Design primitives and style guide for the portfolio site",
}

export default function SiteStylesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Design System</h1>
          <p className="text-muted-foreground mb-12">
            Design primitives, typography, and color palette reference
          </p>

          {/* Typography */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Typography</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Font Families */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Font Families</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Display (BBH Sans Bartle)</p>
                    <p className="font-display text-2xl">The quick brown fox jumps over the lazy dog</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Body (Golos Text)</p>
                    <p className="text-lg">The quick brown fox jumps over the lazy dog</p>
                  </div>
                </div>
              </div>

              {/* Headings */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Headings</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">h1 - text-4xl md:text-5xl</p>
                    <h1 className="text-4xl md:text-5xl font-bold">Heading 1</h1>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">h2 - text-3xl md:text-4xl</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Heading 2</h2>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">h3 - text-2xl</p>
                    <h3 className="text-2xl font-semibold">Heading 3</h3>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">h4 - text-xl</p>
                    <h4 className="text-xl font-semibold">Heading 4</h4>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">h5 - text-lg</p>
                    <h5 className="text-lg font-medium">Heading 5</h5>
                  </div>
                </div>
              </div>

              {/* Body Text */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Body Text</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Large - text-lg</p>
                    <p className="text-lg leading-relaxed">
                      Large body text for case study content and descriptions. This is the primary reading size for
                      longer content.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Base - text-base</p>
                    <p className="text-base">
                      Default body text size for general content. Used in cards and shorter descriptions.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Small - text-sm</p>
                    <p className="text-sm">Small text for labels, captions, and supplementary information.</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Muted - text-muted-foreground</p>
                    <p className="text-muted-foreground">
                      Muted text color for secondary content and supporting information.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Color Palette */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Color Palette</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Semantic Colors */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Semantic Colors</h3>
                  <div className="space-y-3">
                    <ColorSwatch name="Background" className="bg-background border border-border" />
                    <ColorSwatch name="Foreground" className="bg-foreground text-background" />
                    <ColorSwatch name="Primary" className="bg-primary text-primary-foreground" />
                    <ColorSwatch name="Secondary" className="bg-secondary text-secondary-foreground" />
                    <ColorSwatch name="Muted" className="bg-muted text-muted-foreground" />
                    <ColorSwatch name="Accent" className="bg-accent text-accent-foreground" />
                  </div>
                </div>

                {/* UI Colors */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">UI Colors</h3>
                  <div className="space-y-3">
                    <ColorSwatch name="Card" className="bg-card text-card-foreground border border-border" />
                    <ColorSwatch name="Popover" className="bg-popover text-popover-foreground border border-border" />
                    <ColorSwatch name="Border" className="bg-border" />
                    <ColorSwatch name="Input" className="bg-input" />
                    <ColorSwatch name="Ring" className="bg-ring" />
                    <ColorSwatch name="Destructive" className="bg-destructive text-destructive-foreground" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Spacing & Radius */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Spacing & Radius</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Border Radius */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Border Radius</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary rounded-sm"></div>
                      <div>
                        <p className="font-medium">Small</p>
                        <p className="text-sm text-muted-foreground">rounded-sm</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary rounded-md"></div>
                      <div>
                        <p className="font-medium">Medium</p>
                        <p className="text-sm text-muted-foreground">rounded-md</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary rounded-lg"></div>
                      <div>
                        <p className="font-medium">Large</p>
                        <p className="text-sm text-muted-foreground">rounded-lg (default: 0.3rem)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary rounded-xl"></div>
                      <div>
                        <p className="font-medium">Extra Large</p>
                        <p className="text-sm text-muted-foreground">rounded-xl</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shadows */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Shadows</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-card rounded-lg shadow-sm">
                      <p className="font-medium">Small</p>
                      <p className="text-sm text-muted-foreground">shadow-sm</p>
                    </div>
                    <div className="p-4 bg-card rounded-lg shadow">
                      <p className="font-medium">Default</p>
                      <p className="text-sm text-muted-foreground">shadow</p>
                    </div>
                    <div className="p-4 bg-card rounded-lg shadow-md">
                      <p className="font-medium">Medium</p>
                      <p className="text-sm text-muted-foreground">shadow-md</p>
                    </div>
                    <div className="p-4 bg-card rounded-lg shadow-lg">
                      <p className="font-medium">Large</p>
                      <p className="text-sm text-muted-foreground">shadow-lg</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Animations */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Animations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Fade In</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">animate-fade-in</p>
                    <p className="text-sm text-muted-foreground">animate-fade-in-delay-1</p>
                    <p className="text-sm text-muted-foreground">animate-fade-in-delay-2</p>
                    <p className="text-sm text-muted-foreground">animate-fade-in-delay-3</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Slide Up</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">animate-slide-up</p>
                    <p className="text-sm text-muted-foreground">animate-slide-up-delay-1</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Transitions</h3>
                <p className="text-sm text-muted-foreground">transition-smooth - 0.3s cubic-bezier ease</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function ColorSwatch({ name, className }: { name: string; className: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-16 h-16 rounded-lg ${className}`}></div>
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-muted-foreground">{className.split(" ")[0]}</p>
      </div>
    </div>
  )
}
