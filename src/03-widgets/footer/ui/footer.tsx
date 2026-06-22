import { type ComponentPropsWithoutRef } from 'react'

import { Container, Logo } from '@shared/ui'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

import s from './footer.module.scss'

type Props = ComponentPropsWithoutRef<'footer'>

const linkItems = {
  discover: [
    { to: 'trending', label: 'Trending' },
    { to: 'top rated', label: 'Top rated' },
    { to: 'coming soon', label: 'Coming soon' },
    { to: 'genres', label: 'Genres' },
  ],
  account: [
    { to: 'watchlist', label: 'Watchlist' },
    { to: 'settings', label: 'Settings' },
    { to: 'notifications', label: 'Notifications' },
    { to: 'sign out', label: 'Sign out' },
  ],
  about: [
    { to: 'privacy', label: 'Privacy' },
    { to: 'terms', label: 'Terms' },
    { to: 'api status', label: 'API status' },
    { to: 'Contact', label: 'Contact' },
  ],
}

export function Footer({ className, ...rest }: Props) {
  return (
    <footer className={clsx(s.footer, className)} {...rest}>
      <Container>
        <div className={s.grid}>
          <div className={s.brand}>
            <div className={s.logo}>
              <Logo size={28} />
              <span>MARQUEE</span>
            </div>

            <p className={s.tag}>
              A premium, cinematic place to find what to watch next — across
              every service, in one quiet room.
            </p>
          </div>

          <div className={s.col}>
            <h5>Discover</h5>
            {linkItems.discover.map(({ to, label }) => (
              <Link key={to} to={to}>
                {label}
              </Link>
            ))}
          </div>

          <div className={s.col}>
            <h5>Account</h5>
            {linkItems.account.map(({ to, label }) => (
              <Link key={to} to={to}>
                {label}
              </Link>
            ))}
          </div>

          <div className={s.col}>
            <h5>About</h5>
            {linkItems.about.map(({ to, label }) => (
              <Link key={to} to={to}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </Container>

      <div className={s.bot}>
        <Container className={s.botWrapper}>
          <div className={s.legal}>© 2026 MARQUEE · All rights reserved</div>
          <div className={s.tmdb}>
            <span></span>
            This product uses the TMDB API but is not endorsed or certified by
            TMDB.
          </div>
        </Container>
      </div>
    </footer>
  )
}
