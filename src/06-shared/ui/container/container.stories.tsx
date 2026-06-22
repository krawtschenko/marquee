import type { Meta, StoryObj } from '@storybook/react-vite'

import { Container } from './container'

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
}

export default meta

type Story = StoryObj<typeof Container>

const Block = ({ label }: { label: string }) => (
  <div
    style={{
      padding: '12px 16px',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-sm)',
      color: 'var(--text-subtle)',
      fontSize: 'var(--text-sm)',
    }}
  >
    {label}
  </div>
)

export const Default: Story = {
  render: () => (
    <div style={{ background: 'var(--surface-sunken)', minHeight: '100vh' }}>
      <Container style={{ paddingBlock: 32 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Block label="Resize the viewport to see padding adjust at each breakpoint" />
          <Block label="sm ≥ 480px · md ≥ 768px · lg ≥ 1024px · xl ≥ 1280px · 2xl ≥ 1536px" />
          <Block label="max-width: 1440px · centered · responsive gutter" />
        </div>
      </Container>
    </div>
  ),
}

export const AsMain: Story = {
  render: () => (
    <div style={{ background: 'var(--surface-sunken)', minHeight: '100vh' }}>
      <Container as="main" style={{ paddingBlock: 32 }}>
        <Block label="Rendered as <main>" />
      </Container>
    </div>
  ),
}

export const AsSection: Story = {
  render: () => (
    <div style={{ background: 'var(--surface-sunken)', minHeight: '100vh' }}>
      <Container as="section" style={{ paddingBlock: 32 }}>
        <Block label="Rendered as <section>" />
      </Container>
    </div>
  ),
}
