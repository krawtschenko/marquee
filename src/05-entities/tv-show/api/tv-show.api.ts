import { baseApi } from '@shared/api/base.api'

import { tvShowsListResponseSchema } from './tv-show.api.schema'
import type { TvShowsListResponse } from './tv-show.api.types'

export const tvShowApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPopularTvShows: build.query<TvShowsListResponse, { page?: number }>({
      query: (params) => ({ url: '/tv/popular', params }),
      transformResponse: (data) => tvShowsListResponseSchema.parse(data),
    }),
  }),
})

export const { useGetPopularTvShowsQuery } = tvShowApi
