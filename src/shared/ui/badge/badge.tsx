import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

import s from './badge.module.scss'

type Props = ComponentPropsWithoutRef<'span'> & {
  variant?: 'gold' | 'soft' | 'success' | 'danger' | 'info' | 'outline'
  size?: 'sm' | 'lg'
  dot?: boolean
}

export const Badge = ({
  className,
  variant = 'soft',
  size = 'lg',
  dot,
  children,
  ...rest
}: Props) => {
  return (
    <span
      className={clsx(s.badge, s[variant], s[size], dot && s.dot, className)}
      {...rest}
    >
      {children}
    </span>
  )
}
