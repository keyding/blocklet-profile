import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { createBlockletPlugin } from 'vite-plugin-blocklet'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [vue(), createBlockletPlugin()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
