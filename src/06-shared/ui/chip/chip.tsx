import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

import s from './chip.module.scss'

export function Chip({
  className,
  ...rest
}: ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>) {
  return (
    <ToggleGroupPrimitive.Root className={clsx(s.group, className)} {...rest} />
  )
}

export function ChipItem({
  className,
  ...rest
}: ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>) {
  return (
    <ToggleGroupPrimitive.Item className={clsx(s.item, className)} {...rest} />
  )
}
