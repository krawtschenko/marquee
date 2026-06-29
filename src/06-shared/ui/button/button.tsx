import clsx from 'clsx'
import { LoaderCircle, type LucideIcon } from 'lucide-react'
import type { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.scss'

type Props<T extends ElementType = 'button'> = ComponentPropsWithoutRef<T> & {
  as?: T
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  icon?: LucideIcon
  loading?: boolean
}

export function Button<T extends ElementType = 'button'>(props: Props<T>) {
  const {
    as: Tag = 'button',
    children,
    className,
    variant = 'primary',
    size = 'md',
    icon: Icon,
    loading,
    ...rest
  } = props

  const LeadingIcon = loading ? LoaderCircle : Icon
  const iconSize = size === 'sm' ? 14 : size === 'lg' ? 18 : 16

  return (
    <Tag className={clsx(s.btn, s[variant], s[size], className)} {...rest}>
      {LeadingIcon && <LeadingIcon size={iconSize} className={clsx(loading && s.loading)} />}
      {children}
    </Tag>
  )
}
