import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/sled-it-portfolio/', // ✅ Use your repo name prefixed with /
  plugins: [react()],
})