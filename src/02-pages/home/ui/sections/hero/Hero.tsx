import { getTmdbBackdropUrl } from '@shared/lib/tmdb-image'
import { Button, IconButton, ReadMore, ScoreRing } from '@shared/ui'
import { Info, Play, Plus } from 'lucide-react'

import s from './hero.module.scss'
import { useHero } from './useHero'

export function Hero() {
  const { movies, isLoading } = useHero()
  const movie = movies[0]
  const backdropUrl = getTmdbBackdropUrl(movie?.backdrop_path, 'original')

  // if (isLoading) return

  return (
    <section className={s.hero}>
      <div
        className={s.bg}
        style={{ backgroundImage: backdropUrl ? `url(${backdropUrl})` : undefined }}
      />
      <div className={s.scrim} />

      <div className={s.content}>
        <div className={s.meta}>
          <div className={s.kicker}>
            <span />
            <span>Popular Movies</span>
          </div>

          <h1>{movie?.title}</h1>

          <div className={s.facts}>
            <ScoreRing score={movie?.vote_average} />
            <span>{movie?.release_date}</span>
            <span className={s.sep} />
            <span>Runtime</span>
            <span className={s.sep} />
            <span>{movie?.genre_ids}</span>
          </div>

          <ReadMore text={movie?.overview} className={s.text} />

          <div className={s.actions}>
            <Button size="lg" icon={Play}>
              Watch trailer
            </Button>
            <Button size="lg" variant="secondary" icon={Plus}>
              Watchlist
            </Button>
            <IconButton size="lg" icon={Info} />
          </div>
        </div>
      </div>
    </section>
  )
}
