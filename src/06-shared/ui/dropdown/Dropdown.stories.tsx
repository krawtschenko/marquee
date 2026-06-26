import type { Meta, StoryObj } from '@storybook/react-vite'
import { LogOut } from 'lucide-react'

import { Dropdown, DropdownItem, DropdownSeparator } from './dropdown'

const meta: Meta<typeof Dropdown> = {
  title: 'Shared/Dropdown',
  component: Dropdown,
}

export default meta

type Story = StoryObj<typeof Dropdown>

export const Default: Story = {
  args: {
    trigger: <button>Open</button>,
  },
  render: (args) => (
    <Dropdown {...args} label="Label">
      <DropdownItem>Profile</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem danger>
        <LogOut size={16} /> Logout
      </DropdownItem>
    </Dropdown>
  ),
}

export const WithLabelAndSeparator: Story = {
  args: {
    trigger: <button>Open</button>,
  },
  render: (args) => (
    <Dropdown {...args}>
      <DropdownItem>Profile</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownSeparator />
      <DropdownItem>Logout</DropdownItem>
    </Dropdown>
  ),
}

export const WithDisabledItem: Story = {
  args: {
    trigger: <button>Open</button>,
  },
  render: (args) => (
    <Dropdown {...args}>
      <DropdownItem>Profile</DropdownItem>
      <DropdownItem disabled>Settings (unavailable)</DropdownItem>
      <DropdownItem>Logout</DropdownItem>
    </Dropdown>
  ),
}
