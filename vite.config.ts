import path from 'path'
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from 'vite-plugin-components'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import vueI18n from '@intlify/vite-plugin-vue-i18n';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    Components({
      customComponentResolvers: ViteIconsResolver(),
    }),
    ViteIcons(),
    vueI18n({
      // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
      // compositionOnly: false,

      include: path.resolve(__dirname, './src/i18n/locales/**')
    })
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src')
      }
    ]
  }
});
