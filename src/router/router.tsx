import { createBrowserRouter } from 'react-router-dom'

import { RootLayout } from '@/layouts/root'
import { HomePage } from '@/pages/home'

import { paths } from './paths'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: paths.home,
        element: <HomePage />,
      },
    ],
  },
])
