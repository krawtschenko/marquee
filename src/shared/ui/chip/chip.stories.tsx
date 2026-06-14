import type { Meta, StoryObj } from '@storybook/react-vite'

import { Chip, ChipItem } from './chip'

const meta: Meta<typeof Chip> = {
  title: 'UI/Chip',
  component: Chip,
}

export default meta

type Story = StoryObj<typeof Chip>

export const Single: Story = {
  args: {
    type: 'single',
  },
  render: args => (
    <Chip {...args}>
      <ChipItem value="all">All</ChipItem>
      <ChipItem value="design">Design</ChipItem>
      <ChipItem value="engineering">Engineering</ChipItem>
      <ChipItem value="marketing">Marketing</ChipItem>
    </Chip>
  ),
}

export const Multiple: Story = {
  args: {
    type: 'multiple',
  },
  render: args => (
    <Chip {...args}>
      <ChipItem value="react">React</ChipItem>
      <ChipItem value="typescript">TypeScript</ChipItem>
      <ChipItem value="css">CSS</ChipItem>
      <ChipItem value="testing">Testing</ChipItem>
    </Chip>
  ),
}

export const WithDisabled: Story = {
  args: {
    type: 'multiple',
  },
  render: args => (
    <Chip {...args}>
      <ChipItem value="active">Active</ChipItem>
      <ChipItem value="disabled" disabled>
        Disabled
      </ChipItem>
      <ChipItem value="another">Another</ChipItem>
    </Chip>
  ),
}
