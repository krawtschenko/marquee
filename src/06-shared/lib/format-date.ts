export const getReleaseYear = (date: string | null | undefined): string | undefined => {
  if (!date) return undefined

  return date.slice(0, 4)
}
