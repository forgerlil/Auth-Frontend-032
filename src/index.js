import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

const root = document.getElementById('root');

root.classList.add(
  'dark:bg-slate-700',
  'transition-all',
  'w-full',
  'h-fit',
  'dark:text-white',
  'pt-[1px]'
);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
