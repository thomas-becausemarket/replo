import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/replo/",
  build: {
    rollupOptions: {
      output: {
        dir: 'dist',
        entryFileNames: 'assets/bundle.js', // Specify the desired output file name
      }
    }
  }
})
