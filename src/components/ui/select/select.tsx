import * as SelectPrimitive from '@radix-ui/react-select'
import clsx from 'clsx'
import { Check, ChevronDown } from 'lucide-react'
import type { ComponentPropsWithoutRef } from 'react'

import s from './select.module.scss'

type Props = {
  placeholder?: string
  label?: string
} & ComponentPropsWithoutRef<typeof SelectPrimitive.Root>

export const Select = ({ children, placeholder, label, ...rest }: Props) => {
  return (
    <SelectPrimitive.Root {...rest}>
      {label && <SelectPrimitive.Label>{label}</SelectPrimitive.Label>}
      <SelectPrimitive.Trigger className={s.trigger}>
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon className={s.icon}>
          <ChevronDown size={16} />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          position="popper"
          sideOffset={8}
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          <SelectPrimitive.Viewport className={s.viewport}>
            {children}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}

type SelectItemProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Item>

export const SelectItem = ({
  children,
  className,
  ...rest
}: SelectItemProps) => {
  return (
    <SelectPrimitive.Item className={clsx(s.item, className)} {...rest}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator>
        <Check size={15} />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}
