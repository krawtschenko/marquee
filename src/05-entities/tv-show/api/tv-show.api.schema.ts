import { z } from 'zod'

export const tvShowSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  genre_ids: z.array(z.number().int()),
  id: z.number().int(),
  origin_country: z.array(z.string()),
  original_language: z.string(),
  original_name: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string().nullable(),
  first_air_date: z.string(),
  name: z.string(),
  vote_average: z.number(),
  vote_count: z.number().int(),
})

export const tvShowsListResponseSchema = z.object({
  page: z.number().int(),
  results: z.array(tvShowSchema),
  total_pages: z.number().int(),
  total_results: z.number().int(),
})
