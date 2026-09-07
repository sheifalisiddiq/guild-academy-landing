import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Relative base so the built output can be dropped into any host / subfolder
// (GoHighLevel, Netlify, S3) without rewriting asset paths.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        thankyou: resolve(__dirname, 'thank-you.html'),
      },
    },
  },
});
