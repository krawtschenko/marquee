/// <reference types="vite/client" />

import '../src/app/styles/fonts'
import '../src/app/styles/index.scss'

import type { Preview } from '@storybook/react-vite'
import { themes } from 'storybook/theming'

const prefersLightTheme = () =>
  window.matchMedia?.('(prefers-color-scheme: light)').matches ?? false

const preview: Preview = {
  tags: ['autodocs'],

  parameters: {
    layout: 'centered',

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
