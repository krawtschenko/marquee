import type { Meta, StoryObj } from '@storybook/react-vite'
import { MemoryRouter } from 'react-router-dom'

import { Carousel } from './Carousel'

const CARD_COLORS = [
  '#e76f51',
  '#2a9d8f',
  '#e9c46a',
  '#264653',
  '#f4a261',
  '#a8dadc',
  '#457b9d',
  '#e63946',
  '#606c38',
  '#dda15e',
]

function MockCard({ label, color }: { label: string; color: string }) {
  return (
    <div
      style={{
        width: 200,
        height: 300,
        borderRadius: 12,
        background: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontWeight: 600,
        fontSize: 14,
      }}
    >
      {label}
    </div>
  )
}

const meta: Meta<typeof Carousel> = {
  title: 'Widgets/Carousel',
  component: Carousel,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ padding: '40px 60px' }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  args: {
    title: 'Trending this week',
    subTitle: 'Right now',
    linkTo: '#',
    children: CARD_COLORS.map((color, i) => (
      <MockCard key={i} label={`Card ${i + 1}`} color={color} />
    )),
  },
}

export default meta

type Story = StoryObj<typeof Carousel>

export const Default: Story = {}

export const WithoutSubTitle: Story = {
  args: {
    subTitle: undefined,
  },
}

export const WithoutLink: Story = {
  args: {
    linkTo: undefined,
  },
}

export const CustomLinkLabel: Story = {
  args: {
    linkLabel: 'View all movies',
  },
}
