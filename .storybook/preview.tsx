/// <reference types="vite/client" />

import '../src/styles/fonts'
import '../src/styles/index.scss'

import type { Preview } from '@storybook/react-vite'
import { themes } from 'storybook/theming'

const prefersLightTheme = () =>
  window.matchMedia?.('(prefers-color-scheme: light)').matches ?? false

const preview: Preview = {
  parameters: {
    docs: {
      theme: prefersLightTheme() ? themes.light : themes.dark,
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo',
    },
  },
}

export default preview
