import babel from '@rolldown/plugin-babel';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [
      tsconfigPaths(),
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
