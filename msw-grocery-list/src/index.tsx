import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './index.css';

/* eslint-disable global-require  */
/* eslint-disable @typescript-eslint/no-var-requires  */
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}
/* eslint-enable @typescript-eslint/no-var-requires  */
/* eslint-enable global-require */

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
