import type { Meta, StoryObj } from '@storybook/react-vite'

import { Spinner } from './spinner'

const meta: Meta<typeof Spinner> = {
  title: 'UI/Spinner',
  component: Spinner,
  args: {
    size: 'md',
  },
}

export default meta

type Story = StoryObj<typeof Spinner>

export const Small: Story = {
  args: { size: 'sm' },
}

export const Medium: Story = {
  args: { size: 'md' },
}

export const Large: Story = {
  args: { size: 'lg' },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
}
