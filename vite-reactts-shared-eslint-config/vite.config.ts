import babel from '@rolldown/plugin-babel';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    resolve: {
      tsconfigPaths: true, // Enables automatic TS path resolution
    },
    plugins: [
      react(),
      babel({
        presets: [reactCompilerPreset()],
      }),
    ],
    base: '/',
  };

  if (command !== 'serve') {
    config.base = '/todomvc-tutorials/';
  }

  return config;
});
