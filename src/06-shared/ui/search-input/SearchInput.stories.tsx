import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { SearchInput } from './SearchInput'

const meta: Meta<typeof SearchInput> = {
  title: 'UI/SearchInput',
  component: SearchInput,
}

export default meta

type Story = StoryObj<typeof SearchInput>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <SearchInput
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClear={() => setValue('')}
        placeholder="Search..."
      />
    )
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Search...',
    disabled: true,
  },
}
