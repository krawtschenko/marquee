import { addons } from 'storybook/manager-api'
import { themes } from 'storybook/theming'

const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: light)')

const applySystemTheme = ({ matches }: MediaQueryList | MediaQueryListEvent) => {
  addons.setConfig({
    theme: matches ? themes.light : themes.dark,
  })
}

applySystemTheme(colorSchemeQuery)
colorSchemeQuery.addEventListener('change', applySystemTheme)
