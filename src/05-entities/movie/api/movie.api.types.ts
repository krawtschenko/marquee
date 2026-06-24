import type { z } from 'zod'

import type {
  movieDetailSchema,
  movieSchema,
  movieVideoSchema,
  popularMoviesResponseSchema,
} from './movie.api.schema'

export type MovieDto = z.infer<typeof movieSchema>
export type PopularMoviesResponse = z.infer<typeof popularMoviesResponseSchema>
export type MovieDetailDto = z.infer<typeof movieDetailSchema>
export type MovieVideoDto = z.infer<typeof movieVideoSchema>
