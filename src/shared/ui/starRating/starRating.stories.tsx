import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { StarRating } from './starRating'

const meta: Meta<typeof StarRating> = {
  title: 'UI/StarRating',
  component: StarRating,
}

export default meta

type Story = StoryObj<typeof StarRating>

const Interactive = (args: React.ComponentProps<typeof StarRating>) => {
  const [value, setValue] = useState(args.value)
  return <StarRating {...args} value={value} onChange={setValue} />
}

export const Default: Story = {
  render: (args) => <Interactive {...args} value={0} />,
}

export const WithValue: Story = {
  render: (args) => <Interactive {...args} value={6} />,
}

export const HalfStar: Story = {
  render: (args) => <Interactive {...args} value={7} showLabel />,
}

export const WithLabel: Story = {
  render: (args) => <Interactive {...args} value={8} showLabel />,
}

export const ReadOnly: Story = {
  args: {
    value: 8,
    readonly: true,
  },
}

export const ReadOnlyWithLabel: Story = {
  args: {
    value: 7,
    readonly: true,
    showLabel: true,
  },
}
