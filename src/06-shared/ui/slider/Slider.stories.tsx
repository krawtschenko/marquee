import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Slider } from './slider'

const meta: Meta<typeof Slider> = {
  title: 'Shared/Slider',
  component: Slider,
  decorators: [
    (Story) => (
      <div style={{ width: 320, padding: '0 8px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Slider>

const ControlledSlider = (args: React.ComponentProps<typeof Slider>) => {
  const [value, setValue] = useState([50])

  return <Slider {...args} value={value} onValueChange={setValue} />
}

export const Default: Story = {
  render: (args) => <ControlledSlider {...args} min={0} max={100} />,
}

export const WithScale: Story = {
  render: (args) => <ControlledSlider {...args} min={0} max={100} showTicks />,
}

export const Range: Story = {
  render: (args) => {
    const [value, setValue] = useState([20, 80])

    return <Slider {...args} value={value} onValueChange={setValue} min={0} max={100} showTicks />
  },
}

export const Stepped: Story = {
  render: (args) => <ControlledSlider {...args} min={0} max={100} step={10} showTicks />,
}

export const Disabled: Story = {
  args: {
    defaultValue: [60],
    disabled: true,
  },
}
