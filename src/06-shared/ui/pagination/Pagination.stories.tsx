import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Pagination } from './pagination'

const meta: Meta<typeof Pagination> = {
  title: 'Shared/Pagination',
  component: Pagination,
}

export default meta

type Story = StoryObj<typeof Pagination>

const Interactive = (args: React.ComponentProps<typeof Pagination>) => {
  const [page, setPage] = useState(args.page)
  return <Pagination {...args} page={page} onChange={setPage} />
}

export const Default: Story = {
  render: (args) => <Interactive {...args} page={1} total={10} />,
}

export const MiddlePage: Story = {
  render: (args) => <Interactive {...args} page={5} total={10} />,
}

export const LastPage: Story = {
  render: (args) => <Interactive {...args} page={10} total={10} />,
}

export const FewPages: Story = {
  render: (args) => <Interactive {...args} page={2} total={4} />,
}

export const ManySiblings: Story = {
  render: (args) => <Interactive {...args} page={6} total={20} siblings={2} />,
}

export const SinglePage: Story = {
  render: (args) => <Interactive {...args} page={1} total={1} />,
}
