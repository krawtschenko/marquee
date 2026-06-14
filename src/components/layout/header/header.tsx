import { type ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'
import { Moon, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Avatar, IconButton, Logo, SearchInput } from '@/components/ui'

import s from './header.module.scss'

type Props = ComponentPropsWithoutRef<'header'> & {
  theme?: string
  setTheme: (theme: string) => void
}

export const Header = ({ className, theme, setTheme, ...rest }: Props) => {
  return (
    <header className={clsx(s.header, className)} {...rest}>
      <Link to={'#'} className={s.brand}>
        <Logo size={28} className={s.logo} />
        <span className={s.word}>MARQUEE</span>
      </Link>

      <nav className={s.nav}>
        <Link to={'#'}>Discover</Link>
        <Link to={'#'}>Movies</Link>
        <Link to={'#'}>TV</Link>
        <Link to={'#'}>Watchlist</Link>
      </nav>

      <div className={s.spacer}></div>

      <div className={s.actions}>
        <div className={s.search}>
          <SearchInput placeholder="Search movies, TV, people…" />
        </div>
        <IconButton
          icon={theme === 'dark' ? Sun : Moon}
          variant="ghost"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
        <Link to={'#'}>
          <Avatar size="sm" />
        </Link>
      </div>
    </header>
  )
}
