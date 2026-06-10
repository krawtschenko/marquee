import { type ComponentPropsWithoutRef, createContext, useContext } from 'react'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import clsx from 'clsx'

import s from './tabs.module.scss'

type Variant = 'underline' | 'pill'

const VariantContext = createContext<Variant>('underline')

type TabsProps = {
  variant?: Variant
} & ComponentPropsWithoutRef<typeof TabsPrimitive.Root>

export const Tabs = ({
  className,
  children,
  variant = 'underline',
  ...rest
}: TabsProps) => {
  return (
    <VariantContext.Provider value={variant}>
      <TabsPrimitive.Root className={clsx(s.root, className)} {...rest}>
        <TabsPrimitive.List
          className={clsx(s.list, variant === 'pill' && s.pill)}
        >
          {children}
        </TabsPrimitive.List>
      </TabsPrimitive.Root>
    </VariantContext.Provider>
  )
}

export const TabsTrigger = ({
  className,
  ...rest
}: ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>) => {
  const variant = useContext(VariantContext)

  return (
    <TabsPrimitive.Trigger
      className={clsx(
        s.trigger,
        variant === 'pill' && s.pillTrigger,
        className,
      )}
      {...rest}
    />
  )
}
