import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge } from './badge'

const meta: Meta<typeof Badge> = {
  title: 'Shared/Badge',
  component: Badge,
}

export default meta

type Story = StoryObj<typeof Badge>

export const Gold: Story = {
  args: {
    children: 'Gold',
    variant: 'gold',
  },
}

export const Soft: Story = {
  args: {
    children: 'Soft',
    variant: 'soft',
  },
}

export const Success: Story = {
  args: {
    children: 'Success',
    variant: 'success',
  },
}

export const Danger: Story = {
  args: {
    children: 'Danger',
    variant: 'danger',
  },
}

export const Info: Story = {
  args: {
    children: 'Info',
    variant: 'info',
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
}

export const Small: Story = {
  args: {
    children: 'Small',
    variant: 'soft',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    children: 'Large',
    variant: 'soft',
    size: 'lg',
  },
}

export const Dot: Story = {
  args: {
    children: 'Dot',
    variant: 'soft',
    dot: true,
  },
}
