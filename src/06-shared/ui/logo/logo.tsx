import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

import s from './logo.module.scss'

type Props = ComponentPropsWithoutRef<'div'> & { size: number }

export function Logo({ className, size, ...rest }: Props) {
  return (
    <div
      className={clsx(s.aperture, className)}
      style={{ width: size, height: size }}
      {...rest}
    >
      <div className={s.blade} style={{ transform: 'rotate(0deg)' }}></div>
      <div className={s.blade} style={{ transform: 'rotate(60deg)' }}></div>
      <div className={s.blade} style={{ transform: 'rotate(120deg)' }}></div>
      <div className={s.blade} style={{ transform: 'rotate(180deg)' }}></div>
      <div className={s.blade} style={{ transform: 'rotate(240deg)' }}></div>
      <div className={s.blade} style={{ transform: 'rotate(300deg)' }}></div>
      <div className={s.core}></div>
    </div>
  )
}
