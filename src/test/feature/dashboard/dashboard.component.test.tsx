import configureMockStore from 'redux-mock-store';
import { renderWithProvider } from '../../utility/test.util';
import { useAppDispatch } from '../../../app/app.hooks';
import Dashboard from '../../../features/dashboard/dashboard.component';
import { screen } from '@testing-library/react';

const mockStore = configureMockStore();
const store = mockStore({ dashboard: { posts: [] } } as any);

const renderComponent = async (store: any) => {
  return renderWithProvider(<Dashboard />, store);
};
//TODO: Add 80% test coverage code tests

jest.mock('../../../app/app.hooks', () => {
  return {
    ...(jest.requireActual('../../../app/app.hooks') as any),
    useAppDispatch: jest.fn(),
  };
});
let useDispatchMock: any = useAppDispatch;

describe('Dashboard Component', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    useDispatchMock.mockReset();
    useDispatchMock.mockImplementation(() => () => {});
  });
  it('should render retro board without errors', async () => {
    await renderComponent(store);
    const retroboard = screen.getByTestId('retro-board-testid');
    expect(retroboard).toBeDefined();
  });

  it('should render went well block on retro board', async () => {
    await renderComponent(store);
    const wentwell = screen.getByTestId('good-testid');
    expect(wentwell).toBeDefined();
  });

  it('should render to improve block on retro board', async () => {
    await renderComponent(store);
    const toimprove = screen.getByTestId('bad-testid');
    expect(toimprove).toBeDefined();
  });

  it('should render action items block on retro board', async () => {
    await renderComponent(store);
    const actionitems = screen.getByTestId('missed-testid');
    expect(actionitems).toBeDefined();
  });

  it('should render 3 blocks on retro board', async () => {
    //TODO: add code handling
  });
});
