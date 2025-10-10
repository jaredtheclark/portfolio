# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website for a Principal UX Product Designer, built with Next.js 14 and deployed on Vercel. The project is automatically synced with v0.app deployments and uses modern React patterns with TypeScript.

**Important**: This repository is automatically synced from v0.app. Any changes made to deployed apps on v0.app will be automatically pushed to this repository.

## Development Commands

\`\`\`bash
# Install dependencies (uses Yarn)
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Run linting
yarn lint
\`\`\`

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with custom design tokens
- **UI Components**: shadcn/ui (New York style) + Radix UI primitives
- **Fonts**: Geist Sans and Geist Mono
- **Package Manager**: Yarn 1.22.22
- **Analytics**: Vercel Analytics

## Architecture

### File Structure

\`\`\`
app/
├── layout.tsx              # Root layout with metadata and analytics
├── page.tsx                # Homepage with hero, metrics, case studies
├── globals.css             # Tailwind imports and design tokens
└── case-studies/
    ├── page.tsx            # Case studies index
    ├── car-mart-payments/  # Individual case study
    └── jcpenney-pos/       # Individual case study

components/
├── navigation.tsx          # Global navigation with client-side routing
└── ui/                     # shadcn/ui components (Card, Button, Badge)

lib/
└── utils.ts                # Utility functions (cn helper)
\`\`\`

### Path Aliases

The project uses TypeScript path aliases configured in `tsconfig.json`:

- `@/*` → Root directory
- `@/components` → Components directory
- `@/lib` → Library/utilities
- `@/components/ui` → UI component library
- `@/hooks` → React hooks (when added)

### Styling System

Uses Tailwind CSS v4 with:
- **CSS Variables**: All design tokens defined in `app/globals.css` using OKLCH color space
- **Theme Support**: Light and dark mode variables (dark mode via `.dark` class)
- **Custom Variants**: `@custom-variant dark` for dark mode scoping
- **Animation**: `tw-animate-css` plugin for enhanced animations
- **Class Merging**: `cn()` utility (tailwind-merge + clsx) for conditional classes

### Component Patterns

1. **Client Components**: Use `"use client"` directive for components with hooks (e.g., Navigation uses `usePathname`)
2. **Server Components**: Default for all other components (pages, layouts)
3. **UI Components**: Extend shadcn/ui components from `components/ui/` - these are built on Radix UI primitives
4. **Styling**: Use Tailwind utility classes with the `cn()` helper for conditional styling

## Build Configuration

The `next.config.mjs` has:
- **ESLint**: Ignored during builds (`ignoreDuringBuilds: true`)
- **TypeScript**: Build errors ignored (`ignoreBuildErrors: true`)
- **Images**: Unoptimized for static export compatibility

This configuration suggests the project prioritizes rapid iteration (common for v0.app projects).

## Adding New UI Components

This project uses shadcn/ui. To add new components:

\`\`\`bash
# Example: Add a new component
npx shadcn@latest add [component-name]
\`\`\`

Configuration is in `components.json`:
- Style: `new-york`
- RSC: Enabled
- Icon library: `lucide-react`

## Key Files to Understand

- `app/layout.tsx:9-13` - Metadata configuration for SEO
- `app/globals.css:6-41` - Design system color tokens and theme variables
- `lib/utils.ts:4-6` - The `cn()` utility for merging Tailwind classes
- `components/navigation.tsx:7-43` - Client-side navigation with active state

## Deployment

The project is deployed on Vercel and linked to v0.app:
- Changes from v0.app are automatically pushed to this repo
- Vercel deploys from this repository
- Vercel Analytics is integrated in the root layout

## Portfolio-Specific Guidelines

### Design System: Volca FM Theme

This portfolio uses a custom design system inspired by the Korg Volca FM synthesizer:

**Color Philosophy**:
- **Dark Foundation**: Deep black backgrounds (`--background: 0% 0 0`) for high contrast
- **Cyan Primary**: Bright cyan (`--primary: 70% 0.15 200`) as the main accent - evokes electronic hardware
- **Orange Secondary**: Vibrant orange (`--secondary: 70% 0.18 35`) for highlights and CTAs
- **High Contrast**: All text uses maximum contrast ratios for accessibility

**Visual Language**:
- Technical, precision-engineered aesthetic
- Tight border radius (0.375rem) for sharp, electronic feel
- Cyan focus states and hover effects
- Orange used sparingly for emphasis and calls-to-action

**When Adding Components**:
- Use `bg-background` and `text-foreground` for base colors
- Primary actions use `bg-primary` (cyan)
- Secondary/CTA actions use `bg-secondary` (orange)
- Avoid introducing new colors - work within the 5-color system

### Content Structure & Case Studies

**Case Study Organization**:
Each case study follows a Principal-Level Portfolio Template structure:

1. **Hero Section**: Outcome-focused title, role, timeline, key metrics
2. **Overview**: Project context, team size, personal contribution
3. **Challenge**: Business problem with strategic context
4. **Approach**: Methodology, frameworks created, leadership demonstrated
5. **Solution**: Design decisions with rationale
6. **Results**: Quantified business impact with context
7. **Key Learnings**: Titled paragraphs (not bullets) showing strategic growth
8. **Skills Demonstrated**: Technical and leadership capabilities

**Writing Guidelines**:
- **Balance "I" vs "We"**: Use "I" for personal contributions (research, frameworks, decisions), "We" for team execution
- **Metrics with Context**: ✅ "200% ↑ Autopay Adoption (2% → 4-6%)" vs ❌ "Improved adoption"
- **Strategic Framing**: Show business impact, not just design execution
- **Scannable**: 2-minute scan time, 30-second impact comprehension
- **Length**: 1,500-2,500 words per case study

**Adding New Case Studies**:
1. Create new directory: `app/case-studies/[project-slug]/page.tsx`
2. Follow existing structure (see car-mart-payments or jcpenney-pos)
3. Update `app/case-studies/page.tsx` to include new project card
4. Update `app/page.tsx` if featuring on homepage
5. Use placeholder images: `/placeholder.svg?height=X&width=Y&query=description`

### Navigation & Routing

**Current Structure**:
- `/` - Homepage with hero, metrics, featured case studies
- `/case-studies` - Index of all case studies
- `/case-studies/[slug]` - Individual case study pages

**Navigation Component**:
- Client component using `usePathname()` for active states
- Active link styling: `text-primary` (cyan) with underline
- Mobile-responsive with proper spacing

**Adding New Pages**:
1. Create page in `app/[route]/page.tsx`
2. Add link to `components/navigation.tsx`
3. Ensure active state logic includes new route
4. Update metadata in page file for SEO

### Content Management

**Personal Information**:
The designer's background, expertise, and career goals are defined in text attachments:
- `user_read_only_context/text_attachments/design-*.ts` - Personal background, differentiators, leadership approach
- Reference these when updating homepage hero or about sections

**Case Study Content**:
Original case study content stored in:
- `user_read_only_context/text_attachments/pasted-text-*.txt`
- Contains raw content before template formatting
- Useful for understanding original project scope and outcomes

### Component Conventions

**Consistent Patterns**:
- Use `<Card>` from shadcn/ui for content containers
- Use `<Badge>` for tags, skills, metrics
- Metric displays: Large number + label in vertical stack
- Section spacing: `py-16` or `py-20` for major sections
- Container width: `max-w-4xl mx-auto` for readable content width

**Typography Hierarchy**:
- H1: `text-4xl md:text-5xl font-bold` - Page titles
- H2: `text-3xl md:text-4xl font-bold` - Section headers
- H3: `text-2xl font-semibold` - Subsection headers
- Body: `text-lg leading-relaxed` - Main content
- Muted: `text-muted-foreground` - Supporting text

### SEO & Metadata

Each page should include:
\`\`\`typescript
export const metadata: Metadata = {
  title: "Page Title | Principal UX Product Designer",
  description: "Concise description with key outcomes and metrics",
}
\`\`\`

**Best Practices**:
- Include role/title in page titles
- Descriptions should be 120-160 characters
- Highlight quantifiable outcomes in descriptions
- Use semantic HTML (`<main>`, `<article>`, `<section>`)

### Accessibility Standards

**Required Practices**:
- All images need descriptive `alt` text
- Use semantic HTML elements
- Maintain WCAG AA contrast ratios (already enforced by design system)
- Focus states visible (cyan ring via Tailwind defaults)
- Keyboard navigation supported
- Screen reader text with `sr-only` class when needed

### Development Workflow

**Before Making Changes**:
1. Read relevant files to understand current implementation
2. Check for existing patterns/components that solve similar problems
3. Verify changes align with Volca FM design system
4. Ensure case study content follows template structure

**When Editing Content**:
- Add Change Comments (`// description`) for clarity
- Only edit files that need changes
- Test responsive behavior (mobile, tablet, desktop)

**Quality Checklist**:
- [ ] Design tokens used (no arbitrary colors)
- [ ] Responsive on all breakpoints
- [ ] Semantic HTML structure
- [ ] Proper TypeScript types
- [ ] Metadata/SEO included
- [ ] Accessibility standards met
- [ ] Case study content follows template (if applicable)

## Common Tasks

### Update Homepage Hero
Edit `app/page.tsx` - Hero section includes name, title, value proposition, and CTA

### Add New Case Study
1. Create `app/case-studies/[slug]/page.tsx`
2. Follow template structure (8 sections)
3. Update `app/case-studies/page.tsx` index
4. Add metadata for SEO

### Modify Design System
Edit `app/globals.css` - All design tokens in `@theme inline` block using OKLCH

### Add UI Component
\`\`\`bash
npx shadcn@latest add [component]
\`\`\`
Then customize in `components/ui/[component].tsx`

### Update Navigation
Edit `components/navigation.tsx` - Add new links and update active state logic
