import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Textarea } from './textarea'
import { Label } from './label'

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { placeholder: 'Type your message here...' },
}

export const WithValue: Story = {
  args: { defaultValue: 'This is some pre-filled content in the textarea.' },
}

export const Disabled: Story = {
  args: { disabled: true, placeholder: 'Disabled textarea' },
}

export const Invalid: Story = {
  args: { 'aria-invalid': true, defaultValue: 'Invalid content' },
}

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2 w-[400px]">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Tell me about your project..." rows={5} />
    </div>
  ),
}
