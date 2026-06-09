import type { Meta, StoryObj } from '@storybook/react-vite'
import { Play } from 'lucide-react'

import { IconButton } from './iconButton'

const meta: Meta<typeof IconButton> = {
  title: 'UI/IconButton',
  component: IconButton,
}

export default meta

type Story = StoryObj<typeof IconButton>

export const Primary: Story = {
  args: {
    icon: Play,
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
}

export const Solid: Story = {
  args: {
    icon: Play,
    variant: 'solid',
    size: 'md',
    disabled: false,
  },
}

export const Ghost: Story = {
  args: {
    icon: Play,
    variant: 'ghost',
    size: 'md',
    disabled: false,
  },
}
