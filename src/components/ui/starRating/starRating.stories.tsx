import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { StarRating } from './starRating'

const meta: Meta<typeof StarRating> = {
  title: 'UI/StarRating',
  component: StarRating,
}

export default meta

type Story = StoryObj<typeof StarRating>

export const Default: Story = {}

export const WithValue: Story = {
  args: {
    defaultValue: 6,
  },
}

export const HalfStar: Story = {
  args: {
    defaultValue: 7,
    showLabel: true,
  },
}

export const WithLabel: Story = {
  args: {
    defaultValue: 8,
    showLabel: true,
  },
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

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState(0)

    return <StarRating {...args} value={value} onChange={setValue} showLabel />
  },
}
