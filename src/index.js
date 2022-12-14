import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');

root.classList.add(
  'dark:bg-slate-700',
  'transition-all',
  'w-full',
  'h-fit',
  'dark:text-white',
  'pt-[1px]'
);

if (window.location.hash.length > 0) window.location.hash.replace('#/', '');
window.history.pushState(
  { page: 1 },
  'Some title',
  '/rubber-duck-auth' + window.location.pathname
);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
