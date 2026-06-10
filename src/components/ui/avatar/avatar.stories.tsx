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
    alt: 'User avatar',
    fallback: 'JD',
    size: 'md',
  },
}

export const Fallback: Story = {
  args: {
    src: undefined,
    fallback: 'JD',
    size: 'md',
  },
}

export const Small: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=5',
    alt: 'User avatar',
    fallback: 'AB',
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=5',
    alt: 'User avatar',
    fallback: 'AB',
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=5',
    alt: 'User avatar',
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
