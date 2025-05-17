import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  base: '/pelican-magazine/',
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // ASP.NET Core порт
        changeOrigin: true,
        secure: false
      }
    }
  }
})


// https://vite.dev/config/
