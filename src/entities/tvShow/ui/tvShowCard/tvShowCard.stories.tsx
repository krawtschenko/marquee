import type { Meta, StoryObj } from '@storybook/react-vite'

import { TvShowCard } from './tvShowCard'

const POSTER = 'https://picsum.photos/seed/tvshow/300/450'

const meta: Meta<typeof TvShowCard> = {
  title: 'Entities/TvShow/TvShowCard',
  component: TvShowCard,
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
  args: {
    title: 'Breaking Bad',
    posterPath: POSTER,
    voteAverage: 9.5,
    firstAirDate: '2008',
    seasons: '5 Seasons',
  },
}

export default meta

type Story = StoryObj<typeof TvShowCard>

export const Default: Story = {}

export const HighRated: Story = {
  args: {
    title: 'The Wire',
    voteAverage: 9.3,
    firstAirDate: '2002',
    posterPath: 'https://picsum.photos/seed/thewire/300/450',
  },
}

export const LowRated: Story = {
  args: {
    title: 'Velma',
    voteAverage: 2.9,
    firstAirDate: '2023',
    posterPath: 'https://picsum.photos/seed/velma/300/450',
  },
}

export const LongTitle: Story = {
  args: {
    title: 'The Legend of Vox Machina',
    voteAverage: 8.1,
    firstAirDate: '2022',
    posterPath: 'https://picsum.photos/seed/voxmachina/300/450',
  },
}

export const NoPoster: Story = {
  args: {
    posterPath: undefined,
  },
}
