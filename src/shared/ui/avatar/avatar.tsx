import * as AvatarPrimitive from '@radix-ui/react-avatar'
import clsx from 'clsx'
import { UserRound } from 'lucide-react'
import type { ComponentPropsWithoutRef } from 'react'

import s from './avatar.module.scss'

const iconSize = { xs: 12, sm: 14, md: 24, lg: 32 }

type Props = ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
  src?: string
  fallback?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
}

export function Avatar({
  src,
  fallback,
  size = 'md',
  className,
  ...rest
}: Props) {
  return (
    <AvatarPrimitive.Root
      tabIndex={0}
      className={clsx(s.root, s[size], className)}
      {...rest}
    >
      <AvatarPrimitive.Image className={s.image} src={src} alt={fallback} />
      <AvatarPrimitive.Fallback className={s.fallback} delayMs={300}>
        {fallback ?? <UserRound size={iconSize[size]} />}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  )
}
