import { useState } from 'react'

import { useGetMovieDetailQuery, useGetPopularMoviesQuery } from '@entities/movie/api/movie.api'
import { skipToken } from '@reduxjs/toolkit/query/react'

export function useHero() {
  const { data: popularData, isLoading: isPopularLoading } = useGetPopularMoviesQuery({})

  const [randomIndex] = useState(() => Math.floor(Math.random() * 20))
  const results = popularData?.results
  const randomMovieId = results?.[randomIndex % results.length]?.id

  const { data: movieDetail, isLoading: isDetailLoading } = useGetMovieDetailQuery(
    randomMovieId ? { id: randomMovieId } : skipToken,
  )

  const trailerKey = movieDetail?.videos?.results.find(
    (v) => v.site === 'YouTube' && v.type === 'Trailer' && v.official,
  )?.key

  return {
    movieDetail,
    trailerUrl: trailerKey ? `https://www.youtube.com/watch?v=${trailerKey}` : null,
    isLoading: isPopularLoading || isDetailLoading,
  }
}
