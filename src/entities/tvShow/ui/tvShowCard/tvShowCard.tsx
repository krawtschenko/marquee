import { Heart, ImageOff, Play } from 'lucide-react'
import type { ComponentPropsWithoutRef } from 'react'

import { Button, IconButton, RatingBadge } from '@/shared/ui'

type Props = ComponentPropsWithoutRef<'article'> & {
  title: string
  posterPath?: string
  voteAverage: number
  firstAirDate: string
  seasons: string
}

export const TvShowCard = ({
  title,
  posterPath,
  voteAverage,
  firstAirDate,
  seasons,
  ...rest
}: Props) => {
  return (
    <article {...rest}>
      <div>
        {posterPath ? (
          <img src={posterPath} alt={`poster ${title}`} />
        ) : (
          <div>
            <ImageOff size={28} />
          </div>
        )}
        <RatingBadge score={voteAverage} pill />
        <div></div>
        <div>
          <Button icon={Play} size="sm">
            Trailer
          </Button>
          <IconButton icon={Heart} size="sm" />
        </div>
      </div>

      <div>
        <div>{title}</div>
        <div>
          {firstAirDate} <span></span>
          {seasons}
        </div>
      </div>
    </article>
  )
}
