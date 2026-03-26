import '../app/globals.css'
import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview } from '@storybook/nextjs-vite'

const preview: Preview = {
  parameters: {
    nextjs: { appDirectory: true },
    backgrounds: { disable: true },
    a11y: {
      test: 'todo',
    },
  },
  decorators: [
    withThemeByClassName({
      themes: { light: '', dark: 'dark' },
      defaultTheme: 'light',
    }),
    (Story) => {
      document.documentElement.style.setProperty('--font-poppins', '"Poppins", sans-serif')
      document.documentElement.style.setProperty('--font-golos-text', '"Golos Text", sans-serif')
      document.documentElement.style.setProperty('--font-roboto-mono', '"Roboto Mono", monospace')
      return Story()
    },
  ],
}
export default preview
