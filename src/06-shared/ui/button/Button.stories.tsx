import type { Meta, StoryObj } from '@storybook/react-vite'
import { Play, Plus, Trash } from 'lucide-react'

import { Button } from './button'

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'md',
    icon: Play,
    disabled: false,
  },
}

export const Secondary: Story = {
  args: {
    children: 'Click me',
    variant: 'secondary',
    size: 'md',
    icon: Plus,
    disabled: false,
  },
}

export const Ghost: Story = {
  args: {
    children: 'Click me',
    variant: 'ghost',
    size: 'md',
    icon: Plus,
    disabled: false,
  },
}

export const Danger: Story = {
  args: {
    children: 'Delete',
    variant: 'danger',
    size: 'md',
    icon: Trash,
    disabled: false,
  },
}

export const WithoutIcon: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
}

export const Loading: Story = {
  args: {
    children: 'Loading',
    variant: 'primary',
    size: 'md',
    loading: true,
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'md',
    icon: Play,
    disabled: true,
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    href: '#',
    children: 'Go somewhere',
    variant: 'primary',
    size: 'md',
  },
}
