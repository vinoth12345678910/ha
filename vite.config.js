import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Fixes asset paths for Netlify
  build: {
    outDir: 'dist',  // Ensures build output is in "dist"
    rollupOptions: {
      input: './index.html', // Ensures correct entry point
    },
  },
});

