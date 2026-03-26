import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Label } from './label'
import { Input } from './input'

const meta = {
  title: 'UI/Label',
  component: Label,
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { children: 'Label text' },
}

export const PairedWithInput: Story = {
  render: () => (
    <div className="space-y-2 w-[300px]">
      <Label htmlFor="name">Full Name</Label>
      <Input id="name" placeholder="Enter your name" />
    </div>
  ),
}
