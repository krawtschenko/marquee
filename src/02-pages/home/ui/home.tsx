import { Hero } from './sections/hero'
import { NowPlaying } from './sections/now-playing'
import { PopularTVShow } from './sections/popular-tv'

export function HomePage() {
  return (
    <>
      <Hero />
      <NowPlaying />
      <PopularTVShow />
    </>
  )
}
