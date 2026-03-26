import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { LinkedInButton } from './linkedin-button'

const meta = {
  title: 'Components/LinkedInButton',
  component: LinkedInButton,
} satisfies Meta<typeof LinkedInButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const DefaultVariant: Story = {
  args: { variant: 'default' },
}

export const Small: Story = {
  args: { size: 'sm' },
}
