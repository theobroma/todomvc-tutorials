import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'todomvc-app-css/index.css';

import App from './App.tsx';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root container missing in index.html');
}

const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
