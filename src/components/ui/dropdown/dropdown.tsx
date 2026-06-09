import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import s from './dropdown.module.scss'

type Props = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root> & {
  trigger: ReactNode
  label?: string
}

export const Dropdown = ({ children, trigger, label, ...rest }: Props) => {
  return (
    <DropdownMenuPrimitive.Root {...rest}>
      <DropdownMenuPrimitive.Trigger asChild>
        {trigger}
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          className={s.content}
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          {label && (
            <DropdownMenuPrimitive.Label className={s.label}>
              {label}
            </DropdownMenuPrimitive.Label>
          )}
          {children}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  )
}

type DropdownItemProps = { danger?: boolean } & ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Item
>

export const DropdownItem = ({
  className,
  danger,
  ...rest
}: DropdownItemProps) => {
  return (
    <DropdownMenuPrimitive.Item
      className={clsx(s.item, danger && s.danger, className)}
      {...rest}
    />
  )
}

type DropdownSeparatorProps = ComponentPropsWithoutRef<
  typeof DropdownMenuPrimitive.Separator
>

export const DropdownSeparator = ({
  className,
  ...rest
}: DropdownSeparatorProps) => {
  return (
    <DropdownMenuPrimitive.Separator
      className={clsx(s.separator, className)}
      {...rest}
    />
  )
}
