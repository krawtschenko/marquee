import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Shared/Accordion',
  component: Accordion,
}

export default meta

type Story = StoryObj<typeof Accordion>

export const Single: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div style={{ width: 480 }}>
        <Accordion
          type="single"
          value={value}
          onValueChange={setValue}
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Marquee?</AccordionTrigger>
            <AccordionContent>
              Marquee is a design system built with React and Radix UI
              primitives, providing accessible and composable UI components.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. All components follow WAI-ARIA guidelines and are built on
              top of Radix UI primitives which handle keyboard navigation and
              focus management.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can I customize the styles?</AccordionTrigger>
            <AccordionContent>
              Absolutely. Every component accepts a className prop and uses CSS
              custom properties for theming, so you can override any visual
              aspect.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    )
  },
}

export const Multiple: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([])
    return (
      <div style={{ width: 480 }}>
        <Accordion type="multiple" value={value} onValueChange={setValue}>
          <AccordionItem value="item-1">
            <AccordionTrigger>Getting started</AccordionTrigger>
            <AccordionContent>
              Install the package via pnpm and import the components you need.
              No additional configuration required.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Component API</AccordionTrigger>
            <AccordionContent>
              Each component forwards all native props. Compound components —
              AccordionItem, AccordionTrigger, and AccordionContent — are
              exported separately.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Theming</AccordionTrigger>
            <AccordionContent>
              All visual tokens are CSS custom properties defined in
              _design.scss and _colors.scss. Override them at the :root level or
              scope them to any container.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    )
  },
}
