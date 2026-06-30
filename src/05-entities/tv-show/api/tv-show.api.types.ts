import type { z } from 'zod'

import type { tvShowSchema, tvShowsListResponseSchema } from './tv-show.api.schema'

export type TvShowDto = z.infer<typeof tvShowSchema>
export type TvShowsListResponse = z.infer<typeof tvShowsListResponseSchema>
