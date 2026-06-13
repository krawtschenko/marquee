import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Tabs, TabsTrigger } from './tabs'

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
}

export default meta

type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('tab1')
    return (
      <Tabs value={value} onValueChange={setValue}>
        <TabsTrigger value="tab1">Account</TabsTrigger>
        <TabsTrigger value="tab2">Password</TabsTrigger>
        <TabsTrigger value="tab3">Settings</TabsTrigger>
      </Tabs>
    )
  },
}

export const WithDisabled: Story = {
  render: () => {
    const [value, setValue] = useState('tab1')
    return (
      <Tabs value={value} onValueChange={setValue}>
        <TabsTrigger value="tab1">Active</TabsTrigger>
        <TabsTrigger value="tab2" disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value="tab3">Another</TabsTrigger>
      </Tabs>
    )
  },
}
