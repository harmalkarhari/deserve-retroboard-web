import * as React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import i18n from '../../app/app.i18n';
import { MemoryRouter as Router } from 'react-router-dom';

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, {
    wrapper: (props: any) => <I18nextProvider i18n={i18n}>{props.children}</I18nextProvider>,
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
        <I18nextProvider i18n={i18n}>{props.children}</I18nextProvider>
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
        <I18nextProvider i18n={i18n}>
          <Router>{props.children}</Router>
        </I18nextProvider>
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
