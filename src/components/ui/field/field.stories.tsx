import type { Meta, StoryObj } from '@storybook/react-vite'

import { Field } from './field'

const meta: Meta<typeof Field> = {
  title: 'UI/Field',
  component: Field,
}

export default meta

type Story = StoryObj<typeof Field>

export const Default: Story = {
  args: {
    label: 'Display name',
    req: false,
    placeholder: 'Enter name',
    hint: 'Hint text',
    error: false,
    disabled: false,
  },
}

export const Required: Story = {
  args: {
    label: 'Display name',
    req: true,
    placeholder: 'Enter name',
    hint: 'This field is required',
    error: false,
    disabled: false,
  },
}

export const Error: Story = {
  args: {
    label: 'Display name',
    req: true,
    placeholder: 'Enter name',
    hint: 'This field is required',
    error: true,
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Display name',
    req: false,
    placeholder: 'Enter name',
    hint: 'Hint text',
    error: false,
    disabled: true,
  },
}

export const NoLabel: Story = {
  args: {
    placeholder: 'Enter name',
    error: false,
    disabled: false,
  },
}
