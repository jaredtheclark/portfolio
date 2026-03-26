import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ContactForm } from './contact-form'

const meta = {
  title: 'Components/ContactForm',
  component: ContactForm,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof ContactForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
