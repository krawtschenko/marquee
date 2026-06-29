import { useGetNowPlayingMoviesQuery } from '@entities/movie/api/movie.api'

export function useNowPlaying() {
  const { data, isLoading } = useGetNowPlayingMoviesQuery({})

  const results = data?.results

  return {
    results,
    isLoading,
  }
}
