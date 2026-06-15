import { useTheme } from 'next-themes'
import { Outlet } from 'react-router-dom'

import { Container } from '@/shared/ui'
import { Header } from '@/widgets/header'

export function RootLayout() {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  )
}
