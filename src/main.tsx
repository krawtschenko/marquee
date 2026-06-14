import '@/app/styles/index.scss'
import '@/app/styles/fonts.ts'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux'

import App from './app/App.tsx'
import { store } from './app/store'

const root = document.getElementById('root')

if (!root) throw new Error('Root element not found')

createRoot(root).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" enableSystem={false}>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
