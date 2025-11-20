import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/AmmarAhmedl200961.github.io/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
