import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ProjectCard } from './project-card'

const meta = {
  title: 'Components/ProjectCard',
  component: ProjectCard,
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProjectCard>

export default meta
type Story = StoryObj<typeof meta>

export const WithPoster: Story = {
  args: {
    title: 'Design System',
    description: 'A comprehensive design system for enterprise applications.',
    posterSrc: '/placeholder.svg?height=400&width=700&query=design-system-preview',
  },
}

export const WithCaseStudyLink: Story = {
  args: {
    title: 'Payments Platform',
    description: 'End-to-end payment processing redesign.',
    posterSrc: '/placeholder.svg?height=400&width=700&query=payments-preview',
    caseStudyLink: '/case-studies/enterprise-payments-platform',
  },
}

export const FallbackColor: Story = {
  args: {
    title: 'Upcoming Project',
    description: 'Details coming soon.',
    fallbackColor: '#2D2A26',
  },
}
