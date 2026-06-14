import { type ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'
import { Sun } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Avatar, IconButton, Logo, SearchInput } from '@/components/ui'

import s from './header.module.scss'

export const Header = ({
  className,
  ...rest
}: ComponentPropsWithoutRef<'header'>) => {
  return (
    <header className={clsx(s.header, className)} {...rest}>
      <Link to={'#'} className={s.brand}>
        <Logo size={28} />
        <span className={s.word}>MARQUEE</span>
      </Link>

      <nav className={s.nav}>
        <Link to={'#'}>Discover</Link>
        <Link to={'#'}>Movies</Link>
        <Link to={'#'}>TV</Link>
        <Link to={'#'}>Watchlist</Link>
      </nav>

      <div className={s.search}>
        <SearchInput placeholder="Search movies, TV, people…" />
      </div>

      <div className={s.spacer}></div>

      <div className={s.actions}>
        <IconButton icon={Sun} variant="ghost" />
        <Link to={'#'}>
          <Avatar size="sm" />
        </Link>
      </div>
    </header>
  )
}
