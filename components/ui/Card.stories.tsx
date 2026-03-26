import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card'
import { Button } from './button'

const meta = {
  title: 'UI/Card',
  component: Card,
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Bare: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent>
        <p>A bare card with just content.</p>
      </CardContent>
    </Card>
  ),
}

export const WithHeader: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content area.</p>
      </CardContent>
    </Card>
  ),
}

export const FullContent: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Project</CardTitle>
        <CardDescription>Deploy your new project in one click.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          This card demonstrates the full layout with header, content, and footer sections.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
}
