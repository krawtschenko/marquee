import clsx from 'clsx'
import { Heart, ImageOff, Play } from 'lucide-react'
import type { ComponentPropsWithoutRef } from 'react'

import { Badge, Button, IconButton, RatingBadge, Skeleton, SkeletonTextBlock } from '@/shared/ui'

import s from './tvShowCard.module.scss'

type Props = ComponentPropsWithoutRef<'article'> & {
  title: string
  posterPath?: string
  voteAverage: number
  firstAirDate: string
  seasons: string
  episodes: string
  favorite?: boolean
  onFavoriteChange?: (favorite: boolean) => void
  onTrailerClick?: () => void
}

export const TvShowCard = ({
  title,
  posterPath,
  voteAverage,
  firstAirDate,
  seasons,
  episodes,
  favorite = false,
  onFavoriteChange,
  onTrailerClick,
  className,
  ...rest
}: Props) => {
  const handleFavoriteClick = () => onFavoriteChange?.(!favorite)

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

        <div className={s.badge}>
          <Badge variant="soft">Series</Badge>
        </div>

        <div className={s.scrim}></div>

        <div className={s.actions}>
          <Button icon={Play} size="sm" className={s.trailer} onClick={onTrailerClick}>
            Trailer
          </Button>

          <IconButton
            icon={Heart}
            size="sm"
            active={favorite}
            onClick={handleFavoriteClick}
          />
        </div>
      </div>

      <div className={s.info}>
        <div className={s.title}>{title}</div>
        <div className={s.sub}>
          {firstAirDate}
          <span></span>
          {seasons}
          <span></span>
          {episodes}
        </div>
      </div>
    </article>
  )
}

export const TvShowCardSkeleton = ({ className, ...rest }: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div className={clsx(s.skeletonCard, className)} {...rest}>
      <Skeleton className={s.skeletonPoster} />
      <SkeletonTextBlock className={s.skeletonInfo}>
        <Skeleton variant="line" />
        <Skeleton variant="line" style={{ width: '60%' }} />
      </SkeletonTextBlock>
    </div>
  )
}
