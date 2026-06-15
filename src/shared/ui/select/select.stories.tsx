import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Select, SelectItem } from './select'

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
}

export default meta

type Story = StoryObj<typeof Select>

export const Default: Story = {
  args: {
    placeholder: 'Select an option...',
  },
  render: (args) => {
    const [value, setValue] = useState<string | undefined>(undefined)
    return (
      <Select {...args} value={value} onValueChange={setValue}>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="cherry">Cherry</SelectItem>
      </Select>
    )
  },
}

export const WithDisabledItem: Story = {
  args: {
    placeholder: 'Select an option...',
  },
  render: (args) => {
    const [value, setValue] = useState<string | undefined>(undefined)
    return (
      <Select {...args} value={value} onValueChange={setValue}>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana" disabled>
          Banana (unavailable)
        </SelectItem>
        <SelectItem value="cherry">Cherry</SelectItem>
      </Select>
    )
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Select an option...',
    disabled: true,
  },
  render: (args) => (
    <Select {...args}>
      <SelectItem value="apple">Apple</SelectItem>
    </Select>
  ),
}
