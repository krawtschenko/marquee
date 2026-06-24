import { useGetMovieDetailQuery, useGetPopularMoviesQuery } from '@entities/movie/api/movie.api'
import { skipToken } from '@reduxjs/toolkit/query/react'

export function useHero() {
  const { data: popularData, isLoading: isPopularLoading } = useGetPopularMoviesQuery()
  const firstMovieId = popularData?.results[0]?.id

  const { data: movieDetail, isLoading: isDetailLoading } = useGetMovieDetailQuery(
    firstMovieId ? { id: firstMovieId } : skipToken,
  )

  const trailerKey = movieDetail?.videos?.results.find(
    (v) => v.site === 'YouTube' && v.type === 'Trailer' && v.official,
  )?.key

  return {
    movies: popularData?.results ?? [],
    movieDetail,
    trailerUrl: trailerKey ? `https://www.youtube.com/watch?v=${trailerKey}` : null,
    isLoading: isPopularLoading || isDetailLoading,
  }
}
