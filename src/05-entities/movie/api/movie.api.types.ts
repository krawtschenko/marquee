import type { z } from 'zod'

import type { movieSchema, popularMoviesResponseSchema } from './movie.api.schema'

export type MovieDto = z.infer<typeof movieSchema>
export type PopularMoviesResponse = z.infer<typeof popularMoviesResponseSchema>
