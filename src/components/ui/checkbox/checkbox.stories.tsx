import type { Meta, StoryObj } from '@storybook/react-vite'

import { Checkbox } from './checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {}

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
}

export const WithLabelChecked: Story = {
  args: {
    label: 'Accept terms and conditions',
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Unavailable option',
  },
}

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
    label: 'Unavailable option',
  },
}

export const Error: Story = {
  args: {
    error: true,
    label: 'Required field',
  },
}
