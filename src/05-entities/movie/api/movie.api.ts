import { baseApi } from '@shared/api/base.api'

import { movieDetailSchema, moviesListResponseSchema } from './movie.api.schema'
import type { MovieDetailDto, MoviesListResponse } from './movie.api.types'

export const movieApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMovieDetail: build.query<MovieDetailDto, { id: number }>({
      query: ({ id }) => ({ url: `/movie/${id}`, params: { append_to_response: 'videos' } }),
      transformResponse: (data) => movieDetailSchema.parse(data),
    }),
    getPopularMovies: build.query<MoviesListResponse, { page?: number }>({
      query: (params) => ({ url: '/movie/popular', params }),
      transformResponse: (data) => moviesListResponseSchema.parse(data),
    }),
    getNowPlayingMovies: build.query<MoviesListResponse, { page?: number }>({
      query: (params) => ({ url: '/movie/now_playing', params }),
      transformResponse: (data) => moviesListResponseSchema.parse(data),
    }),
  }),
})

export const { useGetPopularMoviesQuery, useGetMovieDetailQuery } = movieApi
