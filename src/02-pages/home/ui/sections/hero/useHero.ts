import { useGetPopularMoviesQuery } from '@entities/movie/api/movie.api'

export function useHero() {
  const { data, isLoading } = useGetPopularMoviesQuery()
  const movies = data?.results ?? []

  return { movies, isLoading }
}
