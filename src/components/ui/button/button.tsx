import clsx from 'clsx'
import { LoaderCircle, type LucideIcon } from 'lucide-react'
import type { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.scss'

export type Props<T extends ElementType = 'button'> = {
  as?: T
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  icon?: LucideIcon
  loading?: boolean
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: Props<T>) => {
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

  return (
    <Tag className={clsx(s.btn, s[variant], s[size], className)} {...rest}>
      {LeadingIcon && <LeadingIcon size={16} />}
      {children}
    </Tag>
  )
}
