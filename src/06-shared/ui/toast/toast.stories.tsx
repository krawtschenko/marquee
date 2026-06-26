import type { Meta, StoryObj } from '@storybook/react-vite'
import { toast, ToastContainer } from 'react-toastify'

import { Button } from '../button/button'

const meta: Meta = {
  title: 'Shared/Toast',
  tags: ['!autodocs'],
  decorators: [
    (Story) => (
      <>
        <Story />
        <ToastContainer position="top-center" theme="colored" />
      </>
    ),
  ],
}

export default meta

type Story = StoryObj

export const Success: Story = {
  render: () => (
    <Button onClick={() => toast.success('Changes saved successfully')}>Show Success</Button>
  ),
}

export const Error: Story = {
  render: () => (
    <Button variant="danger" onClick={() => toast.error('Something went wrong')}>
      Show Error
    </Button>
  ),
}

export const Warning: Story = {
  render: () => (
    <Button variant="secondary" onClick={() => toast.warning('Proceed with caution')}>
      Show Warning
    </Button>
  ),
}

export const Info: Story = {
  render: () => (
    <Button variant="ghost" onClick={() => toast.info('New update available')}>
      Show Info
    </Button>
  ),
}

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <Button onClick={() => toast.success('Changes saved successfully')}>Success</Button>
      <Button variant="danger" onClick={() => toast.error('Something went wrong')}>
        Error
      </Button>
      <Button variant="secondary" onClick={() => toast.warning('Proceed with caution')}>
        Warning
      </Button>
      <Button variant="ghost" onClick={() => toast.info('New update available')}>
        Info
      </Button>
    </div>
  ),
}
