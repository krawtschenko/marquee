import clsx from 'clsx'
import { Heart, ImageOff, Play } from 'lucide-react'
import type { ComponentPropsWithoutRef } from 'react'

import { Button, IconButton, RatingBadge } from '@/shared/ui'

import s from './movieCard.module.scss'

type Props = ComponentPropsWithoutRef<'article'> & {
  title: string
  posterPath?: string
  voteAverage: number
  releaseDate: string
  runtime: string
}

export const MovieCard = ({
  title,
  posterPath,
  voteAverage,
  releaseDate,
  runtime,
  className,
  ...rest
}: Props) => {
  return (
    <article className={clsx(s.card, className)} {...rest}>
      <div className={s.poster}>
        {posterPath ? (
          <img src={posterPath} alt={`poster ${title}`} />
        ) : (
          <div className={s.noImg}>
            <ImageOff size={28} />
          </div>
        )}
        <RatingBadge score={voteAverage} className={s.rank} pill />
        <div className={s.scrim}></div>
        <div className={s.actions}>
          <Button icon={Play} size="sm" className={s.trailer}>
            Trailer
          </Button>
          <IconButton icon={Heart} size="sm" />
        </div>
      </div>

      <div className={s.info}>
        <div className={s.title}>{title}</div>
        <div className={s.sub}>
          {releaseDate} <span></span>
          {runtime}
        </div>
      </div>
    </article>
  )
}
