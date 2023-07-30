import './index.css';
import 'modern-normalize';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import { Global } from 'styles/Global';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <Global />
    </ThemeProvider>
  </React.StrictMode>
);
