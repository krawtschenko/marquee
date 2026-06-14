import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

import s from './divider.module.scss'

type Props = ComponentPropsWithoutRef<'div'> & {
  orientation?: 'horizontal' | 'vertical'
  label?: string
}

export const Divider = ({ className, orientation = 'horizontal', label, ...rest }: Props) => {
  if (orientation === 'vertical') {
    return <div className={clsx(s.vert, className)} role="separator" aria-orientation="vertical" {...rest} />
  }

  if (label) {
    return (
      <div className={clsx(s.label, className)} role="separator" aria-orientation="horizontal" {...rest}>
        {label}
      </div>
    )
  }

  return <hr className={clsx(s.hr, className)} {...rest} />
}
