import { MovieCard, MovieCardSkeleton } from '@entities/movie'
import { getReleaseYear } from '@shared/lib/format-date'
import { getTmdbPosterUrl } from '@shared/lib/tmdb-image'
import { Carousel } from '@widgets/carousel'

import s from './now-playing.module.scss'
import { useNowPlaying } from './useNowPlaying'

export function NowPlaying() {
  const { results, isLoading } = useNowPlaying()

  if (isLoading || !results) {
    return (
      <div className={s.wrap}>
        <Carousel title="Trending this week" subTitle="Right now">
          {Array.from({ length: 6 }, (_, i) => (
            <MovieCardSkeleton key={i} />
          ))}
        </Carousel>
      </div>
    )
  }

  return (
    <div className={s.wrap}>
      <Carousel title="Trending this week" subTitle="Right now" linkTo="#">
        {results.map(({ id, title, poster_path, vote_average, release_date }) => (
          <MovieCard
            key={id}
            title={title}
            posterPath={getTmdbPosterUrl(poster_path)}
            voteAverage={vote_average}
            releaseDate={getReleaseYear(release_date)}
            runtime="123"
          />
        ))}
      </Carousel>
    </div>
  )
}
