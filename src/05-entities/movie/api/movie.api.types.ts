import type { z } from 'zod'

import type {
  movieDetailSchema,
  movieSchema,
  moviesListResponseSchema,
  movieVideoSchema,
} from './movie.api.schema'

export type MovieDto = z.infer<typeof movieSchema>
export type MoviesListResponse = z.infer<typeof moviesListResponseSchema>
export type MovieDetailDto = z.infer<typeof movieDetailSchema>
export type MovieVideoDto = z.infer<typeof movieVideoSchema>
