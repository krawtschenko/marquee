import '@app/styles/fonts.ts'
import '@app/styles/index.scss'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from '@app/App.tsx'
import { store } from '@app/store/store'
import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux'

const root = document.getElementById('root')

if (!root) throw new Error('Root element not found')

createRoot(root).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
