import clsx from 'clsx'
import type { LucideIcon } from 'lucide-react'
import type { ComponentPropsWithoutRef } from 'react'

import s from './iconButton.module.scss'

type Props = ComponentPropsWithoutRef<'button'> & {
  icon: LucideIcon
  variant?: 'primary' | 'solid' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  active?: boolean
}

export function IconButton({
  icon: Icon,
  variant = 'primary',
  size = 'md',
  active = false,
  className,
  ...rest
}: Props) {
  const iconSize = size === 'sm' ? 15 : size === 'lg' ? 22 : 18

  return (
    <button className={clsx(s.btn, s[variant], s[size], active && s.active, className)} {...rest}>
      <Icon size={iconSize} />
    </button>
  )
}
