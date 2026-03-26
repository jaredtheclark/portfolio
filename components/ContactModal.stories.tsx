import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ContactModal } from './contact-modal'
import { Button } from './ui/button'

const meta = {
  title: 'Components/ContactModal',
  component: ContactModal,
} satisfies Meta<typeof ContactModal>

export default meta
type Story = StoryObj<typeof meta>

export const WithTrigger: Story = {
  args: {
    trigger: <Button>Contact Me</Button>,
  },
}

export const OpenByDefault: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
  },
}

export const CustomTitle: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
    title: 'Let\'s Collaborate',
    description: 'Have a project in mind? I\'d love to hear about it.',
  },
}
