// uno.config.ts
import { defineConfig, presetIcons } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'ui-sans-serif', 'system-ui'] // Open Sans fontunu varsayılan sans-serif fontu olarak ekleyin
      }
    },
    colors: {
      text: '#1E293B',
      bg: '#f9fafb',
      warning: '#aa2629',
      Slate: '#334155',
      Success: '#3a9e45 ',
      Error: '#8f2228 ',
      Blue: '#0d9aea ',
      Purple: '#6236ff'
    }
  },
  shortcuts: [
    {
      maxW: 'xl:max-w-6xl xl:mx-auto',
      border: '[border:1px_solid_black]',
      bgSlate: 'bg-slate-700 hover:bg-slate-600 active:bg-slate-800',
      bgSuccess: 'bg-#3a9e45 hover:bg-#2e8b38 active:bg-#276e30',
      bgError: 'bg-#8f2228 hover:bg-#aa2629 active:bg-#7a2128',
      bgBlue: 'bg-#0d9aea hover:bg-#0174be active:bg-#0261a2',
      bgPurple: 'bg-#6236ff hover:bg-#4f1ed6 active:bg-#3e1aaf'
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
