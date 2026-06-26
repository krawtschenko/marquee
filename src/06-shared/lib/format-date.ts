export const getReleaseYear = (date: string | null | undefined): string | null => {
  if (!date) return null

  return date.slice(0, 4)
}
