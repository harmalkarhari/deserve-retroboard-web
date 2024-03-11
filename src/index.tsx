import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/app.store';
import { ThemeProvider } from 'styled-components';
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
  CssBaseline,
} from '@mui/material';
import theme from './app/app.theme';
import { I18nextProvider } from 'react-i18next';
import i18n from './app/app.i18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <Provider store={store}>
            <I18nextProvider i18n={i18n}>
              <CssBaseline />
              <App />
            </I18nextProvider>
          </Provider>
        </MuiThemeProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
);
