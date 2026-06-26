import React from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Divider } from './divider'

const meta: Meta<typeof Divider> = {
  title: 'Shared/Divider',
  component: Divider,
}

export default meta

type Story = StoryObj<typeof Divider>

const withWidth = (Story: React.ComponentType) => (
  <div style={{ width: 320 }}>
    <Story />
  </div>
)

export const Horizontal: Story = {
  decorators: [withWidth],
}

export const HorizontalWithLabel: Story = {
  args: {
    label: 'or',
  },
  decorators: [withWidth],
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', height: 40, alignItems: 'center' }}>
        <span>Left</span>
        <Story />
        <span>Right</span>
      </div>
    ),
  ],
}
