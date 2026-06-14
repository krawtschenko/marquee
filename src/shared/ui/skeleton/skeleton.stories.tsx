import type { Meta, StoryObj } from '@storybook/react-vite'

import { Skeleton, SkeletonTextBlock } from './skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'UI/Skeleton',
  component: Skeleton,
}

export default meta

type Story = StoryObj<typeof Skeleton>

export const Line: Story = {
  args: {
    variant: 'line',
    style: { width: 200 },
  },
}

export const Circle: Story = {
  args: {
    variant: 'circle',
    style: { width: 48, height: 48 },
  },
}

export const Poster: Story = {
  args: {
    variant: 'poster',
    style: { width: 120 },
  },
}

export const Rectangle: Story = {
  args: {
    style: { width: 200, height: 80 },
  },
}

export const TextBlock: StoryObj<typeof SkeletonTextBlock> = {
  render: () => (
    <SkeletonTextBlock style={{ width: 240 }}>
      <Skeleton variant="line" />
      <Skeleton variant="line" style={{ width: '80%' }} />
      <Skeleton variant="line" style={{ width: '60%' }} />
    </SkeletonTextBlock>
  ),
}
