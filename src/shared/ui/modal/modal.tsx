import * as DialogPrimitive from '@radix-ui/react-dialog'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import s from './modal.module.scss'

type Props = ComponentPropsWithoutRef<typeof DialogPrimitive.Root> & {
  trigger: ReactNode
}

export function Modal({ children, trigger, ...rest }: Props) {
  return (
    <DialogPrimitive.Root {...rest}>
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={s.overlay} />
        <DialogPrimitive.Content className={s.content}>
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

type ModalCloseProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Close>

export function ModalClose({ ...rest }: ModalCloseProps) {
  return <DialogPrimitive.Close asChild {...rest} />
}
