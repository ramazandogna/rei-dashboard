// uno.config.ts
import { defineConfig } from 'unocss';
import presetWebFonts from '@unocss/preset-web-fonts';
import presetUno from '@unocss/preset-uno';

export default defineConfig({
   theme: {
      colors: {
         //colors
      },
   },
   shortcuts: [
      {
         //shortcuts
      },
   ],
   presets: [
      presetUno(),
      presetWebFonts({
         provider: 'google', // default provider
         fonts: {
            OpenSans: {
               name: 'Open Sans',
               weights: [400, 500, 600, 700],
               italic: true,
            },
         },
      }),
   ],
});
