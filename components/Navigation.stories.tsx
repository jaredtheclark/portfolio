import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Navigation } from './navigation'

const meta = {
  title: 'Components/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Navigation>

export default meta
type Story = StoryObj<typeof meta>

export const Home: Story = {
  parameters: {
    nextjs: { navigation: { pathname: '/' } },
  },
}

export const CaseStudies: Story = {
  parameters: {
    nextjs: { navigation: { pathname: '/case-studies' } },
  },
}

export const About: Story = {
  parameters: {
    nextjs: { navigation: { pathname: '/about' } },
  },
}

export const Resume: Story = {
  parameters: {
    nextjs: { navigation: { pathname: '/resume' } },
  },
}
