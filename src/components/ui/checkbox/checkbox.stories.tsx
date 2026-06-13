import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Checkbox } from './checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
}

export default meta

type Story = StoryObj<typeof Checkbox>

const ControlledCheckbox = (props: React.ComponentProps<typeof Checkbox>) => {
  const [checked, setChecked] = useState<boolean | 'indeterminate'>(props.checked ?? false)
  return <Checkbox {...props} checked={checked} onCheckedChange={setChecked} />
}

export const Default: Story = {
  render: (args) => <ControlledCheckbox {...args} />,
}

export const Checked: Story = {
  render: (args) => <ControlledCheckbox {...args} checked={true} />,
}

export const WithLabel: Story = {
  render: (args) => (
    <ControlledCheckbox {...args} label="Accept terms and conditions" />
  ),
}

export const WithLabelChecked: Story = {
  render: (args) => (
    <ControlledCheckbox {...args} checked={true} label="Accept terms and conditions" />
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <ControlledCheckbox {...args} disabled label="Unavailable option" />
  ),
}

export const DisabledChecked: Story = {
  render: (args) => (
    <ControlledCheckbox {...args} checked={true} disabled label="Unavailable option" />
  ),
}

export const Error: Story = {
  render: (args) => <ControlledCheckbox {...args} error label="Required field" />,
}
