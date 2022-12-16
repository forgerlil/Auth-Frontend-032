import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthContext';

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
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
