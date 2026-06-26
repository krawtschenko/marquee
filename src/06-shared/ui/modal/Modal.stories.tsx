import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '../button'
import { Modal, ModalClose } from './modal'

const meta: Meta<typeof Modal> = {
  title: 'Shared/Modal',
  component: Modal,
}

export default meta

type Story = StoryObj<typeof Modal>

export const Default: Story = {
  render: () => (
    <Modal trigger={<Button>Open Modal</Button>}>
      <p style={{ padding: '24px' }}>Modal content goes here.</p>
    </Modal>
  ),
}

export const Confirm: Story = {
  render: () => (
    <Modal trigger={<Button variant="danger">Delete item</Button>}>
      <div style={{ padding: '24px 24px 20px' }}>
        <p
          style={{
            marginBottom: 20,
            color: 'var(--text-muted)',
            fontSize: 'var(--text-base)',
            lineHeight: 'var(--lh-relaxed)',
          }}
        >
          Are you sure you want to delete this item? This action cannot be
          undone.
        </p>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <ModalClose>
            <Button variant="ghost">Cancel</Button>
          </ModalClose>
          <Button variant="danger">Delete</Button>
        </div>
      </div>
    </Modal>
  ),
}
