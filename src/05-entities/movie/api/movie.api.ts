import { baseApi } from '@shared/api/base.api'

import { popularMoviesResponseSchema } from './movie.api.schema'
import type { PopularMoviesResponse } from './movie.api.types'

export const movieApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPopularMovies: build.query<PopularMoviesResponse, void>({
      query: () => '/movie/popular',
      transformResponse: (data) => popularMoviesResponseSchema.parse(data),
    }),
  }),
})

export const { useGetPopularMoviesQuery } = movieApi
