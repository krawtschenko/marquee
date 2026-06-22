import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

import s from './skeleton.module.scss'

type SkeletonProps = ComponentPropsWithoutRef<'div'> & {
  variant?: 'line' | 'circle' | 'poster'
}

export function Skeleton({ className, variant, ...rest }: SkeletonProps) {
  return (
    <div className={clsx(s.skel, variant && s[variant], className)} {...rest} />
  )
}

type SkeletonTextBlockProps = ComponentPropsWithoutRef<'div'>

export function SkeletonTextBlock({
  className,
  children,
  ...rest
}: SkeletonTextBlockProps) {
  return (
    <div className={clsx(s.textBlock, className)} {...rest}>
      {children}
    </div>
  )
}
