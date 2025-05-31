import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/Portfolio': {
        target: '/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/Portfolio/, '')
      }
    }
  }
}) 