import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ThemeToggle } from './theme-toggle'
import { ThemeProvider } from './theme-provider'

const meta = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <div className="min-h-[200px] relative">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ThemeToggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
