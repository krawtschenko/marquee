import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

import s from './spinner.module.scss'

type SpinnerProps = ComponentPropsWithoutRef<'span'> & {
  size?: 'sm' | 'md' | 'lg'
}

export function Spinner({ size = 'md', className, ...rest }: SpinnerProps) {
  return <span className={clsx(s.spinner, s[size], className)} {...rest} />
}
