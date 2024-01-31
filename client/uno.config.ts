// uno.config.ts
import { defineConfig, presetIcons } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  theme: {
    colors: {
      //colors
    }
  },
  shortcuts: [
    {
      maxW: 'xl:max-w-6xl xl:mx-auto',
      border: '[border:1px_solid_black]'
    }
  ],
  presets: [
    presetUno(),
    presetIcons({}),
    presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        OpenSans: {
          name: 'Open Sans',
          weights: [400, 500, 600, 700],
          italic: true
        }
      }
    })
  ]
})
