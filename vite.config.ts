import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'

export default defineConfig(() => {
  return {
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    envDir: './env',
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:4000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  }
})
