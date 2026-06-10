import type { Meta, StoryObj } from '@storybook/react-vite'

import { Switch } from './switch'

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
}

export default meta

type Story = StoryObj<typeof Switch>

export const Default: Story = {}

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Enable notifications',
  },
}

export const WithLabelChecked: Story = {
  args: {
    label: 'Enable notifications',
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}
