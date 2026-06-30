import { TvShowCard, TvShowCardSkeleton } from '@entities/tv-show'
import { getReleaseYear } from '@shared/lib/format-date'
import { getTmdbPosterUrl } from '@shared/lib/tmdb-image'
import { Carousel } from '@widgets/carousel'

import s from './popular-tv.module.scss'
import { usePopularTVShow } from './usePopularTVShow'

export function PopularTVShow() {
  const { results, isLoading } = usePopularTVShow()

  if (isLoading || !results) {
    return (
      <div className={s.wrap}>
        <Carousel title="Popular TV shows" subTitle="On the small screen">
          {Array.from({ length: 6 }, (_, i) => (
            <TvShowCardSkeleton key={i} />
          ))}
        </Carousel>
      </div>
    )
  }

  return (
    <div className={s.wrap}>
      <Carousel title="Popular TV shows" subTitle="On the small screen" linkTo="#">
        {results.map(({ id, name, poster_path, vote_average, first_air_date }) => (
          <TvShowCard
            key={id}
            title={name}
            posterPath={getTmdbPosterUrl(poster_path)}
            voteAverage={vote_average}
            firstAirDate={getReleaseYear(first_air_date)}
            seasons="—"
            episodes="—"
          />
        ))}
      </Carousel>
    </div>
  )
}
