import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { TvShowCard, TvShowCardSkeleton } from './TvShowCard'

const POSTER = 'https://picsum.photos/seed/tvshow/800/500'

const meta: Meta<typeof TvShowCard> = {
  title: 'Entities/TvShowCard',
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
    episodes: '62 Episodes',
    onTrailerClick: () => alert('Trailer clicked'),
  },
  render: (args) => {
    const [favorite, setFavorite] = useState(false)

    return <TvShowCard {...args} favorite={favorite} onFavoriteChange={setFavorite} />
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
    posterPath: 'https://picsum.photos/seed/thewire/800/500',
  },
}

export const LowRated: Story = {
  args: {
    title: 'Velma',
    voteAverage: 2.9,
    firstAirDate: '2023',
    posterPath: 'https://picsum.photos/seed/velma/800/500',
  },
}

export const LongTitle: Story = {
  args: {
    title: 'The Legend of Vox Machina',
    voteAverage: 8.1,
    firstAirDate: '2022',
    posterPath: 'https://picsum.photos/seed/voxmachina/800/500',
  },
}

export const NoPoster: Story = {
  args: {
    posterPath: undefined,
  },
}

export const Loading: StoryObj = {
  render: () => <TvShowCardSkeleton />,
}
