import react from '@vitejs/plugin-react';
import wyw from '@wyw-in-js/vite';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    wyw({
      include: ['**/*.{ts,tsx}'],
      babelOptions: {
        presets: ['@babel/preset-typescript', '@babel/preset-react'],
      },
    }),
    react(),
  ],
});
