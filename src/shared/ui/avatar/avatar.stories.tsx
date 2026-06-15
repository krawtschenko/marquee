import type { Meta, StoryObj } from '@storybook/react-vite'

import { Avatar } from './avatar'

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
}

export default meta

type Story = StoryObj<typeof Avatar>

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    fallback: 'JD',
    size: 'md',
  },
}

export const NoFallbackXs: Story = {
  args: { size: 'xs' },
}

export const NoFallbackSm: Story = {
  args: { size: 'sm' },
}

export const NoFallbackMd: Story = {
  args: { size: 'md' },
}

export const NoFallbackLg: Story = {
  args: { size: 'lg' },
}

export const Small: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=5',
    fallback: 'AB',
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=5',
    fallback: 'AB',
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=5',
    fallback: 'AB',
    size: 'lg',
  },
}

export const BrokenSrc: Story = {
  args: {
    src: 'broken-url',
    fallback: 'EK',
    size: 'md',
  },
}
