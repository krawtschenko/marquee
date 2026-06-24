import { baseApi } from '@shared/api/base.api'

import { movieDetailSchema, popularMoviesResponseSchema } from './movie.api.schema'
import type { MovieDetailDto, PopularMoviesResponse } from './movie.api.types'

export const movieApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPopularMovies: build.query<PopularMoviesResponse, void>({
      query: () => '/movie/popular',
      transformResponse: (data) => popularMoviesResponseSchema.parse(data),
    }),
    getMovieDetail: build.query<MovieDetailDto, { id: number }>({
      query: ({ id }) => ({ url: `/movie/${id}`, params: { append_to_response: 'videos' } }),
      transformResponse: (data) => movieDetailSchema.parse(data),
    }),
  }),
})

export const { useGetPopularMoviesQuery, useGetMovieDetailQuery } = movieApi
