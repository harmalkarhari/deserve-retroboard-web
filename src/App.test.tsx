import React from 'react';
import configureMockStore from 'redux-mock-store';
import App from './App';
import { renderWithProvider } from './test/utility/test.util';
import { useAppDispatch } from './app/app.hooks';

const mockStore = configureMockStore();
const store = mockStore({ dashboard: { posts: [] } } as any);
jest.mock('./app/app.hooks', () => {
  return {
    ...(jest.requireActual('./app/app.hooks') as any),
    useAppDispatch: jest.fn(),
  };
});
let useDispatchMock: any = useAppDispatch;
describe('App Component', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    useDispatchMock.mockReset();
    useDispatchMock.mockImplementation(() => () => {});
  });
  it('should render without errors', async () => {
    const { container } = renderWithProvider(<App />, store);
    expect(container).toBeDefined();
  });
});
