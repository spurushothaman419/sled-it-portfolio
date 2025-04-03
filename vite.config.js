import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/sled-it-portfolio/',
  plugins: [react()],
});
