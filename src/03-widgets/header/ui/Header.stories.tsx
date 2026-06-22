import type { Meta, StoryObj } from '@storybook/react-vite'
import { MemoryRouter } from 'react-router-dom'

import { Header } from './header'

const meta: Meta<typeof Header> = {
  title: 'Widgets/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  render: (args) => {
    return <Header {...args} />
  },
}

export default meta

type Story = StoryObj<typeof Header>

export const Primary: Story = {}
