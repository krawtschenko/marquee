export const formatRuntime = (minutes: number | null | undefined): string | null => {
  if (!minutes) return null

  const h = Math.floor(minutes / 60)
  const min = minutes % 60

  if (h === 0) return `${min}M`
  if (min === 0) return `${h}H`

  return `${h}H ${min}M`
}
