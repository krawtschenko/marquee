import type { Meta, StoryObj } from '@storybook/react-vite'

import { RatingBadge } from './ratingBadge'

const meta: Meta<typeof RatingBadge> = {
  title: 'UI/RatingBadge',
  component: RatingBadge,
  args: {
    score: 8.4,
    max: 10,
  },
}

export default meta

type Story = StoryObj<typeof RatingBadge>

export const Default: Story = {}

export const Pill: Story = {
  args: {
    pill: true,
  },
}

export const CustomMax: Story = {
  args: {
    score: 4.7,
    max: undefined,
  },
}
