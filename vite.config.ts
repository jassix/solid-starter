import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    devtools(),
    solidPlugin(),
  ],
  server: {
    port: 8080,
  },
  build: {
    target: 'esnext',
  },
});
