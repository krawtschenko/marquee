import { z } from 'zod'

export const movieSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  genre_ids: z.array(z.number().int()),
  id: z.number().int(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string().nullable(),
  release_date: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number().int(),
})

export const popularMoviesResponseSchema = z.object({
  page: z.number().int(),
  results: z.array(movieSchema),
  total_pages: z.number().int(),
  total_results: z.number().int(),
})

export const movieVideoSchema = z.object({
  id: z.string(),
  key: z.string(),
  name: z.string(),
  site: z.string(),
  type: z.string(),
  official: z.boolean(),
})

export const movieDetailSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  overview: z.string(),
  backdrop_path: z.string().nullable(),
  poster_path: z.string().nullable(),
  release_date: z.string(),
  runtime: z.number().int().nullable(),
  vote_average: z.number(),
  vote_count: z.number().int(),
  tagline: z.string(),
  genres: z.array(z.object({ id: z.number().int(), name: z.string() })),
  videos: z.object({ results: z.array(movieVideoSchema) }).optional(),
})

