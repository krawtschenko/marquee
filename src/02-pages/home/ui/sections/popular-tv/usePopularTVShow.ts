import { useGetPopularTvShowsQuery } from '@entities/tv-show'

export function usePopularTVShow() {
  const { data, isLoading } = useGetPopularTvShowsQuery({})

  const results = data?.results

  return {
    results,
    isLoading,
  }
}
