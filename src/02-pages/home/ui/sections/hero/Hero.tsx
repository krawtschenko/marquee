import { Fragment } from 'react'

import { getReleaseYear } from '@shared/lib/format-date'
import { formatRuntime } from '@shared/lib/format-runtime'
import { getTmdbBackdropUrl } from '@shared/lib/tmdb-image'
import { Button, IconButton, ReadMore, ScoreRing, Spinner } from '@shared/ui'
import { Info, Play, Plus } from 'lucide-react'
import { toast } from 'react-toastify'

import s from './hero.module.scss'
import { useHero } from './useHero'

export function Hero() {
  const { movieDetail, isLoading } = useHero()

  if (isLoading || !movieDetail)
    return (
      <section className={s.hero}>
        <div className={s.bg} />
        <div className={s.scrim} />
        <div className={s.loader}>
          <Spinner size="lg" />
        </div>
      </section>
    )

  const backdropUrl = getTmdbBackdropUrl(movieDetail.backdrop_path, 'original')

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

          <h1>{movieDetail.title}</h1>

          <div className={s.facts}>
            <ScoreRing score={movieDetail.vote_average} />
            <span>{getReleaseYear(movieDetail.release_date)}</span>
            <span className={s.sep} />
            <span>{formatRuntime(movieDetail.runtime)}</span>

            {movieDetail.genres.map((g) => (
              <Fragment key={g.id}>
                <span className={s.sep} />
                <span>{g.name}</span>
              </Fragment>
            ))}
          </div>

          <ReadMore text={movieDetail.overview} className={s.text} />

          <div className={s.actions}>
            <Button size="lg" icon={Play} onClick={() => toast.success('Trailer')}>
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
