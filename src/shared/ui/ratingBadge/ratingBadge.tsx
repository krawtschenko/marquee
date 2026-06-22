import clsx from 'clsx'
import { Star } from 'lucide-react'
import type { ComponentPropsWithoutRef } from 'react'

import s from './ratingBadge.module.scss'

type Props = ComponentPropsWithoutRef<'div'> & {
  score: number
  max?: number
  pill?: boolean
}

export function RatingBadge({
  className,
  score,
  max,
  pill,
  ...rest
}: Props) {
  return (
    <div className={clsx(s.rating, pill && s.pill, className)} {...rest}>
      <span className={s.star}>
        <Star />
      </span>
      <span className={s.score}>{score}</span>
      {max !== undefined && <span className={s.max}>/ {max}</span>}
    </div>
  )
}
