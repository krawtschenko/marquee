import { Container } from '@shared/ui'
import { Footer } from '@widgets/footer'
import { Header } from '@widgets/header'
import { useTheme } from 'next-themes'
import { Outlet } from 'react-router-dom'

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
      <Footer />
    </>
  )
}
