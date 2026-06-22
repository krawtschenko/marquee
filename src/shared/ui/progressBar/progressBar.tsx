import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

import s from './progressBar.module.scss'

type ProgressBarProps = ComponentPropsWithoutRef<'div'> & {
  thin?: boolean
}

export function ProgressBar({ thin, className, ...rest }: ProgressBarProps) {
  return (
    <div
      className={clsx(s.progress, thin && s.thin, className)}
      role="progressbar"
      aria-busy
      {...rest}
    >
      <i />
    </div>
  )
}
