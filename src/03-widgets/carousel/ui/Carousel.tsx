import { useRef } from 'react'

import { IconButton } from '@shared/ui'
import { ChevronLeft, ChevronRight, MoveRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import s from './carousel.module.scss'

type Props = {
  title: string
  subTitle?: string
  linkTo?: string
  children: ReactNode
}

export function Carousel({ title, subTitle, linkTo, children }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current

    if (!el) return

    el.scrollBy({ left: direction === 'left' ? -el.offsetWidth : el.offsetWidth })
  }

  return (
    <div className={s.wrap}>
      <div className={s.headed}>
        <div className={s.left}>
          {subTitle && <div className={s.subTitle}>{subTitle}</div>}
          <div className={s.title}>{title}</div>
        </div>
        <div className={s.right}>
          {linkTo && (
            <Link to={linkTo} className={s.link}>
              See all
              <MoveRight size={14} />
            </Link>
          )}
          <div className={s.carouselButtons}>
            <IconButton size="sm" icon={ChevronLeft} onClick={() => scroll('left')} />
            <IconButton size="sm" icon={ChevronRight} onClick={() => scroll('right')} />
          </div>
        </div>
      </div>

      <div className={s.carousel} ref={scrollRef}>
        {children}
      </div>
    </div>
  )
}
