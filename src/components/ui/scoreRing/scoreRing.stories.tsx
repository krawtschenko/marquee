import type { Meta, StoryObj } from '@storybook/react-vite'

import { ScoreRing } from './scoreRing'

const meta: Meta<typeof ScoreRing> = {
  title: 'UI/ScoreRing',
  component: ScoreRing,
  args: {
    score: 8.4,
    max: 10,
  },
}

export default meta

type Story = StoryObj<typeof ScoreRing>

export const High: Story = {
  args: { score: 8.4 },
}

export const Mid: Story = {
  args: { score: 5.5 },
}

export const Low: Story = {
  args: { score: 2.1 },
}

export const Small: Story = {
  args: { score: 8.4, size: 'sm' },
}

export const Large: Story = {
  args: { score: 8.4, size: 'lg' },
}
