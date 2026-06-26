import type { Meta, StoryObj } from '@storybook/react-vite'

import { ReadMore } from './ReadMore'

const meta: Meta<typeof ReadMore> = {
  title: 'Shared/ReadMore',
  component: ReadMore,
}

export default meta

type Story = StoryObj<typeof ReadMore>

const longText =
  'Marquee is a design system built with React and Radix UI primitives, providing accessible and composable UI components. It uses CSS custom properties for theming, so every visual token can be overridden at the :root level or scoped to any container. Components follow WAI-ARIA guidelines and handle keyboard navigation and focus management out of the box. Every component accepts a className prop for easy customization.'

const shortText = 'Short text that fits within three lines — no toggle shown.'

export const Truncated: Story = {
  args: {
    text: longText,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 480 }}>
        <Story />
      </div>
    ),
  ],
}

export const NoOverflow: Story = {
  args: {
    text: shortText,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 480 }}>
        <Story />
      </div>
    ),
  ],
}
