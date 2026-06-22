import { type ComponentPropsWithoutRef, createContext, useContext } from 'react'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import clsx from 'clsx'
import type { LucideIcon } from 'lucide-react'

import s from './viewToggle.module.scss'

type Size = 'sm' | 'lg'

const ViewToggleContext = createContext<Size>('sm')

type Props = ComponentPropsWithoutRef<typeof TabsPrimitive.Root> & {
  size?: Size
}

export function ViewToggle({
  className,
  children,
  size = 'sm',
  ...rest
}: Props) {
  return (
    <ViewToggleContext.Provider value={size}>
      <TabsPrimitive.Root className={clsx(s.root, className)} {...rest}>
        <TabsPrimitive.List className={s.list}>{children}</TabsPrimitive.List>
      </TabsPrimitive.Root>
    </ViewToggleContext.Provider>
  )
}

type ViewTriggerProps = ComponentPropsWithoutRef<
  typeof TabsPrimitive.Trigger
> & { icon?: LucideIcon }

export function ViewTrigger({
  className,
  children,
  icon: Icon,
  ...rest
}: ViewTriggerProps) {
  const size = useContext(ViewToggleContext)

  return (
    <TabsPrimitive.Trigger
      className={clsx(s.trigger, s[size], className)}
      {...rest}
    >
      {Icon && <Icon size={size === 'sm' ? 15 : 16} />}
      {children}
    </TabsPrimitive.Trigger>
  )
}
