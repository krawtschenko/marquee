import { type ComponentPropsWithoutRef } from 'react'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import clsx from 'clsx'
import { Check } from 'lucide-react'

import s from './checkbox.module.scss'

type CheckboxProps = ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
  label?: string
  error?: boolean
}

export function Checkbox({ className, label, error, ...rest }: CheckboxProps) {
  return (
    <label className={clsx(s.label, className)}>
      <CheckboxPrimitive.Root className={clsx(s.box, error && s.error)} {...rest}>
        <CheckboxPrimitive.Indicator className={s.indicator}>
          <Check size={14} aria-hidden />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {label}
    </label>
  )
}
