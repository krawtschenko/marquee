import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { MovieCard, MovieCardSkeleton } from './MovieCard'

const POSTER = 'https://picsum.photos/seed/movie/300/450'

const meta: Meta<typeof MovieCard> = {
  title: 'Entities/MovieCard',
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
  args: {
    title: 'Interstellar',
    posterPath: POSTER,
    voteAverage: 8.6,
    releaseDate: '2014',
    runtime: '2123',
    onTrailerClick: () => alert('Trailer clicked'),
  },
  render: (args) => {
    const [favorite, setFavorite] = useState(false)

    return <MovieCard {...args} favorite={favorite} onFavoriteChange={setFavorite} />
  },
}

export default meta

type Story = StoryObj<typeof MovieCard>

export const Default: Story = {}

export const HighRated: Story = {
  args: {
    title: 'The Shawshank Redemption',
    voteAverage: 9.3,
    releaseDate: '1994',
    posterPath: 'https://picsum.photos/seed/shawshank/300/450',
  },
}

export const LowRated: Story = {
  args: {
    title: 'Morbius',
    voteAverage: 3.9,
    releaseDate: '2022',
    posterPath: 'https://picsum.photos/seed/morbius/300/450',
  },
}

export const LongTitle: Story = {
  args: {
    title: 'Everything Everywhere All at Once',
    voteAverage: 7.8,
    releaseDate: '2022',
    posterPath: 'https://picsum.photos/seed/everything/300/450',
  },
}

export const NoPoster: Story = {
  args: {
    posterPath: undefined,
  },
}

export const Loading: StoryObj = {
  render: () => <MovieCardSkeleton />,
}
