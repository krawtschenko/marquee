import type { Meta, StoryObj } from '@storybook/react-vite'

import { MovieCard } from './movieCard'

const meta: Meta<typeof MovieCard> = {
  title: 'Entities/Movie/MovieCard',
  component: MovieCard,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 200 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof MovieCard>

export const Default: Story = {}
