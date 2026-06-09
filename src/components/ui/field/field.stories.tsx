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
    hint: 'Default',
    error: false,
    disabled: false,
  },
}

export const Error: Story = {
  args: {
    label: 'Display name',
    req: true,
    placeholder: 'Enter name',
    hint: 'Error',
    error: true,
    disabled: false,
  },
}
