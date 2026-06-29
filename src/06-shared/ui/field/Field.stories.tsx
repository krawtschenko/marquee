import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Field } from './field'

const meta: Meta<typeof Field> = {
  title: 'Shared/Field',
  component: Field,
}

export default meta

type Story = StoryObj<typeof Field>

const ControlledField = (props: React.ComponentProps<typeof Field>) => {
  const [value, setValue] = useState('')
  return <Field {...props} value={value} onChange={(e) => setValue(e.target.value)} />
}

export const Default: Story = {
  render: (args) => <ControlledField {...args} />,
  args: {
    label: 'Display name',
    required: false,
    placeholder: 'Enter name',
    hint: 'Hint text',
    error: false,
    disabled: false,
  },
}

export const Required: Story = {
  render: (args) => <ControlledField {...args} />,
  args: {
    label: 'Display name',
    required: true,
    placeholder: 'Enter name',
    hint: 'This field is required',
    error: false,
    disabled: false,
  },
}

export const Error: Story = {
  render: (args) => <ControlledField {...args} />,
  args: {
    label: 'Display name',
    required: true,
    placeholder: 'Enter name',
    hint: 'This field is required',
    error: true,
    disabled: false,
  },
}

export const Disabled: Story = {
  render: (args) => <ControlledField {...args} />,
  args: {
    label: 'Display name',
    required: false,
    placeholder: 'Enter name',
    hint: 'Hint text',
    error: false,
    disabled: true,
  },
}

export const NoLabel: Story = {
  render: (args) => <ControlledField {...args} />,
  args: {
    placeholder: 'Enter name',
    error: false,
    disabled: false,
  },
}
