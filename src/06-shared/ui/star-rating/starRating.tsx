import { useState } from 'react'

import clsx from 'clsx'
import { Star } from 'lucide-react'

import s from './star-rating.module.scss'

type StarState = 'full' | 'half' | 'empty'

const getStarState = (star: number, val: number): StarState => {
  if (val >= star * 2) return 'full'
  if (val >= star * 2 - 1) return 'half'
  return 'empty'
}

type Props = {
  value: number
  onChange?: (value: number) => void
  showLabel?: boolean
  readonly?: boolean
  className?: string
}

export function StarRating({ value, onChange, showLabel, readonly, className }: Props) {
  const [hovered, setHovered] = useState<number | null>(null)

  const displayed = hovered ?? value
  const interactive = !readonly

  const getHalfValue = (e: React.MouseEvent<HTMLSpanElement>, star: number) => {
    const { left, width } = e.currentTarget.getBoundingClientRect()
    return e.clientX - left < width / 2 ? star * 2 - 1 : star * 2
  }

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>, star: number) => {
    const next = getHalfValue(e, star)
    onChange?.(next === value ? 0 : next)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    let next: number | null = null
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') next = Math.min(value + 1, 10)
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') next = Math.max(value - 1, 0)
    if (next !== null) {
      e.preventDefault()
      onChange?.(next)
    }
  }

  return (
    <div className={clsx(s.root, className)}>
      <div
        className={clsx(s.wrapper, !interactive && s.passive)}
        role={interactive ? 'slider' : undefined}
        aria-valuemin={interactive ? 0 : undefined}
        aria-valuemax={interactive ? 10 : undefined}
        aria-valuenow={interactive ? value : undefined}
        tabIndex={interactive ? 0 : -1}
        onKeyDown={interactive ? handleKeyDown : undefined}
        onMouseLeave={() => setHovered(null)}
      >
        {[1, 2, 3, 4, 5].map((star) => {
          const state = getStarState(star, displayed)
          return (
            <span
              key={star}
              aria-hidden
              className={s.star}
              data-state={state}
              onClick={interactive ? (e) => handleClick(e, star) : undefined}
              onMouseMove={interactive ? (e) => setHovered(getHalfValue(e, star)) : undefined}
            >
              <Star size={26} />
              {state !== 'empty' && <Star size={26} />}
            </span>
          )
        })}
      </div>

      {showLabel && <span className={s.label}>{value > 0 ? `${value} / 10` : '—'}</span>}
    </div>
  )
}
