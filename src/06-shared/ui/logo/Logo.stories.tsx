import type { Meta, StoryObj } from '@storybook/react-vite'

import { Logo } from './logo'

const meta: Meta<typeof Logo> = {
  title: 'Shared/Logo',
  component: Logo,
  args: {
    size: 88,
  },
}

export default meta

type Story = StoryObj<typeof Logo>

export const Default: Story = {}

export const Small: Story = {
  args: { size: 40 },
}

export const Large: Story = {
  args: { size: 160 },
}
