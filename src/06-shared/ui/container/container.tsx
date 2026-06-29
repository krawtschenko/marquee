import { type ComponentPropsWithoutRef, type ElementType } from 'react'

import clsx from 'clsx'

import s from './container.module.scss'

type Props<T extends ElementType = 'div'> = {
  as?: T
  className?: string
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className'>

export function Container<T extends ElementType = 'div'>({ as, className, ...rest }: Props<T>) {
  const Tag = as ?? 'div'

  return <Tag className={clsx(s.container, className)} {...rest} />
}
