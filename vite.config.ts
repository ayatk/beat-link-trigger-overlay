import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: 'public',
    rollupOptions: {
      input: {
        app: './overlay.html',
      },
    },
  },
})
