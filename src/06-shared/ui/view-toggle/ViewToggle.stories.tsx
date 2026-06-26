import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'
import { Grid2X2, LayoutList, Table2 } from 'lucide-react'

import { ViewToggle, ViewTrigger } from './ViewToggle'

const meta: Meta<typeof ViewToggle> = {
  title: 'Shared/ViewToggle',
  component: ViewToggle,
}

export default meta

type Story = StoryObj<typeof ViewToggle>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('grid')
    return (
      <ViewToggle value={value} onValueChange={setValue}>
        <ViewTrigger value="grid" icon={Grid2X2}>
          Grid
        </ViewTrigger>
        <ViewTrigger value="list" icon={LayoutList}>
          List
        </ViewTrigger>
      </ViewToggle>
    )
  },
}

export const IconOnly: Story = {
  render: () => {
    const [value, setValue] = useState('grid')
    return (
      <ViewToggle value={value} onValueChange={setValue}>
        <ViewTrigger value="grid" icon={Grid2X2} />
        <ViewTrigger value="list" icon={LayoutList} />
        <ViewTrigger value="table" icon={Table2} />
      </ViewToggle>
    )
  },
}

export const Large: Story = {
  render: () => {
    const [value, setValue] = useState('list')
    return (
      <ViewToggle value={value} onValueChange={setValue} size="lg">
        <ViewTrigger value="grid" icon={Grid2X2}>
          Grid
        </ViewTrigger>
        <ViewTrigger value="list" icon={LayoutList}>
          List
        </ViewTrigger>
        <ViewTrigger value="table" icon={Table2}>
          Table
        </ViewTrigger>
      </ViewToggle>
    )
  },
}

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState('grid')
    return (
      <ViewToggle value={value} onValueChange={setValue}>
        <ViewTrigger value="grid" icon={Grid2X2}>
          Grid
        </ViewTrigger>
        <ViewTrigger value="list" icon={LayoutList} disabled>
          List
        </ViewTrigger>
        <ViewTrigger value="table" icon={Table2}>
          Table
        </ViewTrigger>
      </ViewToggle>
    )
  },
}
