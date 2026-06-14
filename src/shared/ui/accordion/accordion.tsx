import { type ComponentPropsWithoutRef } from 'react'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import clsx from 'clsx'
import { ChevronDown } from 'lucide-react'

import s from './accordion.module.scss'

export const Accordion = ({
  className,
  ...rest
}: ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>) => {
  return (
    <AccordionPrimitive.Root className={clsx(s.root, className)} {...rest} />
  )
}

export const AccordionItem = ({
  className,
  ...rest
}: ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>) => {
  return (
    <AccordionPrimitive.Item className={clsx(s.item, className)} {...rest} />
  )
}

export const AccordionTrigger = ({
  className,
  children,
  ...rest
}: ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>) => {
  return (
    <AccordionPrimitive.Trigger
      className={clsx(s.trigger, className)}
      {...rest}
    >
      {children}
      <ChevronDown size={18} className={s.chevron} />
    </AccordionPrimitive.Trigger>
  )
}

export const AccordionContent = ({
  className,
  children,
  ...rest
}: ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>) => {
  return (
    <AccordionPrimitive.Content
      className={clsx(s.content, className)}
      {...rest}
    >
      <div className={s.contentInner}>
        <div className={s.body}>{children}</div>
      </div>
    </AccordionPrimitive.Content>
  )
}
