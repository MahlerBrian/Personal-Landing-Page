import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Standard Vite config for a React app.
// `base: './'` makes asset paths relative, which keeps the build working on
// any static host (including GitHub Pages served from a subfolder).
export default defineConfig({
  plugins: [react()],
  base: './',
})
