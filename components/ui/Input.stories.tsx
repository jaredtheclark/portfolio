import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Input } from './input'
import { Label } from './label'

const meta = {
  title: 'UI/Input',
  component: Input,
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { placeholder: 'Enter text...' },
}

export const WithValue: Story = {
  args: { defaultValue: 'Hello world' },
}

export const Email: Story = {
  args: { type: 'email', placeholder: 'you@example.com' },
}

export const Disabled: Story = {
  args: { disabled: true, placeholder: 'Disabled input' },
}

export const Invalid: Story = {
  args: { 'aria-invalid': true, defaultValue: 'Invalid value' },
}

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2 w-[300px]">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  ),
}
