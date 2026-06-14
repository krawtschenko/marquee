import type { Meta, StoryObj } from '@storybook/react-vite'

import { ProgressBar } from './progressBar'

const meta: Meta<typeof ProgressBar> = {
  title: 'UI/ProgressBar',
  component: ProgressBar,
  decorators: [
    (Story) => (
      <div style={{ width: 340 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof ProgressBar>

export const Default: Story = {}

export const Thin: Story = {
  args: { thin: true },
}
