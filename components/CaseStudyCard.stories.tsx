import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { CaseStudyCard } from './case-study-card'

const meta = {
  title: 'Components/CaseStudyCard',
  component: CaseStudyCard,
  decorators: [
    (Story) => (
      <div className="max-w-lg">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CaseStudyCard>

export default meta
type Story = StoryObj<typeof meta>

export const WithMetrics: Story = {
  args: {
    title: 'Enterprise Payments Platform',
    subtitle: 'Fintech • B2B SaaS',
    description: 'Redesigned the payment processing flow to reduce transaction failures by 40% and improve merchant onboarding time.',
    metrics: [
      { value: '40%', label: 'Fewer failures' },
      { value: '3x', label: 'Faster onboarding' },
      { value: '$2M', label: 'Revenue impact' },
      { value: '95%', label: 'Satisfaction' },
    ],
    imageSrc: '/placeholder.svg?height=400&width=600&query=payments-dashboard',
    caseStudyLink: '/case-studies/enterprise-payments-platform',
  },
}

export const WithoutMetrics: Story = {
  args: {
    title: 'Design System Overhaul',
    subtitle: 'Enterprise • Internal Tools',
    description: 'Led the creation of a unified design system serving 12 product teams across the organization.',
    imageSrc: '/placeholder.svg?height=400&width=600&query=design-system',
    caseStudyLink: '/case-studies/design-system',
  },
}

export const ComingSoon: Story = {
  args: {
    title: 'Mobile Banking App',
    subtitle: 'Fintech • Consumer',
    description: 'A ground-up redesign of the mobile banking experience for 2M+ users.',
    imageSrc: '/placeholder.svg?height=400&width=600&query=mobile-banking',
    comingSoon: true,
  },
}
