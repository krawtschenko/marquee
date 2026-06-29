import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Switch } from './switch'

const meta: Meta<typeof Switch> = {
  title: 'Shared/Switch',
  component: Switch,
}

export default meta

type Story = StoryObj<typeof Switch>

const ControlledSwitch = (props: React.ComponentProps<typeof Switch>) => {
  const [checked, setChecked] = useState(props.checked ?? false)
  return <Switch {...props} checked={checked} onCheckedChange={setChecked} />
}

export const Default: Story = {
  render: (args) => <ControlledSwitch {...args} />,
}

export const Checked: Story = {
  render: (args) => <ControlledSwitch {...args} checked={true} />,
}

export const WithLabel: Story = {
  render: (args) => <ControlledSwitch {...args} label="Enable notifications" />,
}

export const WithLabelChecked: Story = {
  render: (args) => <ControlledSwitch {...args} checked={true} label="Enable notifications" />,
}

export const Disabled: Story = {
  render: (args) => <ControlledSwitch {...args} disabled />,
}

export const DisabledChecked: Story = {
  render: (args) => <ControlledSwitch {...args} checked={true} disabled />,
}

export const Loading: Story = {
  render: (args) => <ControlledSwitch {...args} loading />,
}
