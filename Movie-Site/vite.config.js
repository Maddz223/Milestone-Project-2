import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import { createHtmlPlugin } from 'vite-plugin-html';
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/Milestone-Project-2/',
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip', // or 'brotliCompress'
      ext: '.gz', // output extension
      deleteOriginFile: false, // keep original files too
    }),
    createHtmlPlugin({ minify: true }),
    tailwindcss(),
  ],
  build: {
    minify: "esbuild",
    sourcemap: false,
    target: "esnext",
  },
  server: {
    compress: true, // for gzip compression
  },
});