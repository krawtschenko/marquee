const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'

type BackdropSize = 'w300' | 'w780' | 'w1280' | 'original'
type PosterSize = 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original'

export const getTmdbBackdropUrl = (path: string | null, size: BackdropSize = 'w1280') =>
  path ? `${TMDB_IMAGE_BASE_URL}/${size}${path}` : null

export const getTmdbPosterUrl = (path: string | null, size: PosterSize = 'w500') =>
  path ? `${TMDB_IMAGE_BASE_URL}/${size}${path}` : null
