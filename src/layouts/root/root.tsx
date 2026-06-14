import { useTheme } from 'next-themes'
import { Outlet } from 'react-router-dom'

import { Header } from '@/components/layout/header'

export function RootLayout() {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Outlet />
      </main>
    </>
  )
}
