import * as AvatarPrimitive from '@radix-ui/react-avatar'
import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

import s from './avatar.module.scss'

type Props = ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
  src?: string
  alt?: string
  fallback?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
}

export const Avatar = ({
  src,
  alt,
  fallback,
  size = 'md',
  className,
  ...rest
}: Props) => {
  return (
    <AvatarPrimitive.Root
      tabIndex={0}
      className={clsx(s.root, s[size], className)}
      {...rest}
    >
      <AvatarPrimitive.Image className={s.image} src={src} alt={alt} />
      <AvatarPrimitive.Fallback className={s.fallback} delayMs={300}>
        {fallback}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  )
}
