import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RouterComp from './routercomp';
import { AuthProvider } from '../src/components/Admin/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterComp />
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
