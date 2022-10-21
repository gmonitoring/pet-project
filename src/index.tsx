import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { RootStoreProvider } from './utils/rootStoreContext';
import { ThemeProvider } from '@mui/material';
import { ProjectTheme } from './config/theme';
import { Router } from './Router';

ReactDOM.render(
  <React.StrictMode>
    <RootStoreProvider>
      <ThemeProvider theme={ProjectTheme}>
        <Router />
      </ThemeProvider>
    </RootStoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
