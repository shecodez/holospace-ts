import path from 'path'
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import Icons from "vite-plugin-icons";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(), 
    Icons(),
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
