import clsx from 'clsx'
import { Heart, ImageOff } from 'lucide-react'
import type { ComponentPropsWithoutRef } from 'react'

import { IconButton, RatingBadge } from '@/shared/ui'

import s from './movieCard.module.scss'

type Props = ComponentPropsWithoutRef<'article'> & {
  title: string
  posterPath: string | null
  voteAverage: number
  releaseDate: string
}

export const MovieCard = ({
  title,
  posterPath,
  voteAverage,
  releaseDate,
  className,
  ...rest
}: Props) => {
  return (
    <article className={clsx(s.card, className)} {...rest}>
      <div className={s.poster}>
        <img src="#" alt="#" className={s.fill} />
        <RatingBadge score={4.6} className={s.rank} pill />
        <div className={s.scrim}></div>
        <div className={s.favorite}>
          <IconButton icon={Heart} size="sm" />
        </div>
      </div>
      <div className={s.play}></div>

      <div className={s.info}>
        <div className={s.title}>Title</div>
        <div className={s.sub}>
          Year
          <span className={s.dot}></span>
          Ganre
          <span className={s.dot}></span>
          Runtime
        </div>
      </div>
    </article>
  )
}
