import { type ComponentPropsWithoutRef, type ElementType } from 'react'

import clsx from 'clsx'

import s from './container.module.scss'

type ContainerProps<T extends ElementType = 'div'> = {
  as?: T
  className?: string
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className'>

export const Container = <T extends ElementType = 'div'>({
  as,
  className,
  ...rest
}: ContainerProps<T>) => {
  const Tag = as ?? 'div'

  return <Tag className={clsx(s.container, className)} {...rest} />
}
