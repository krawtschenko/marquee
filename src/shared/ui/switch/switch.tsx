import { type ComponentPropsWithoutRef } from 'react'

import * as SwitchPrimitive from '@radix-ui/react-switch'
import clsx from 'clsx'

import s from './switch.module.scss'

type SwitchProps = ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> & {
  label?: string
  loading?: boolean
}

export function Switch({ className, label, loading, ...rest }: SwitchProps) {
  return (
    <label className={clsx(s.label, className)}>
      <SwitchPrimitive.Root className={clsx(s.root)} {...rest}>
        <SwitchPrimitive.Thumb
          className={clsx(s.thumb, loading && s.loading)}
        />
      </SwitchPrimitive.Root>
      {label}
    </label>
  )
}
