// https://blog.devgenius.io/how-to-deploy-your-vite-react-app-to-github-pages-with-and-without-react-router-b060d912b10e
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [tsconfigPaths(), react()],
    base: '/',
  };

  if (command !== 'serve') {
    config.base = '/todomvc-tutorials/';
  }

  return config;
});
