import { type ComponentPropsWithoutRef } from 'react'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import clsx from 'clsx'

import s from './tabs.module.scss'

export const Tabs = ({
  className,
  children,
  ...rest
}: ComponentPropsWithoutRef<typeof TabsPrimitive.Root>) => {
  return (
    <TabsPrimitive.Root className={clsx(s.root, className)} {...rest}>
      <TabsPrimitive.List className={s.list}>{children}</TabsPrimitive.List>
    </TabsPrimitive.Root>
  )
}

export const TabsTrigger = ({
  className,
  ...rest
}: ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>) => {
  return (
    <TabsPrimitive.Trigger className={clsx(s.trigger, className)} {...rest} />
  )
}
