import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

import s from './scoreRing.module.scss'

type Props = ComponentPropsWithoutRef<'div'> & {
  score: number
  max?: number
  size?: 'sm' | 'lg'
}

const getColorVariant = (pct: number) => {
  if (pct >= 70) return s.high
  if (pct >= 40) return s.mid
  return s.low
}

export const ScoreRing = ({
  className,
  score,
  max = 10,
  size = 'sm',
  ...rest
}: Props) => {
  const pct = Math.round((score / max) * 100)

  return (
    <div
      className={clsx(s.ring, getColorVariant(pct), s[size], className)}
      style={{ '--pct': pct } as React.CSSProperties}
      {...rest}
    >
      <span className={s.value}>
        {pct}
        <sup>%</sup>
      </span>
    </div>
  )
}
