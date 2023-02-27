import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  test: { // <-------------- config de vitest
    environment: 'happy-dom',
    coverage: {
      provider: 'c8' // or 'c8'
    }
  }
})
