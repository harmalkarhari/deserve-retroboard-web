import * as React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from '../../app/app.theme';
import i18n from '../../app/app.i18n';
import { MemoryRouter as Router } from 'react-router-dom';

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, {
    wrapper: (props: any) => (
      <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18n}>{props.children}</I18nextProvider>
      </ThemeProvider>
    ),
    ...options,
  });

const customRenderWithProvider = (
  ui: React.ReactElement,
  store: any,
  options?: Omit<RenderOptions, 'queries'>,
) =>
  render(ui, {
    wrapper: (props: any) => (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <I18nextProvider i18n={i18n}>{props.children}</I18nextProvider>
        </ThemeProvider>
      </Provider>
    ),
    ...options,
  });

const customRenderWithRouter = (
  ui: React.ReactElement,
  store: any,
  options?: Omit<RenderOptions, 'queries'>,
) =>
  render(ui, {
    wrapper: (props: any) => (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <I18nextProvider i18n={i18n}>
            <Router>{props.children}</Router>
          </I18nextProvider>
        </ThemeProvider>
      </Provider>
    ),
    ...options,
  });

export * from '@testing-library/react';
export {
  customRender as render,
  customRenderWithProvider as renderWithProvider,
  customRenderWithRouter,
};
