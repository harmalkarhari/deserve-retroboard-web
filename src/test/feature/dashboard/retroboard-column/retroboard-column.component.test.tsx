import { useAppDispatch } from '../../../../app/app.hooks';
import { RetroboardColumn } from '../../../../features/dashboard/retroboard-column/retroboard-column.component';
import { renderWithProvider } from '../../../utility/test.util';
import configureMockStore from 'redux-mock-store';
import { screen } from '@testing-library/react';

const mockStore = configureMockStore();
const store = mockStore({ dashboard: { posts: [] } } as any);

const render = async (store: any) => {
  return renderWithProvider(<RetroboardColumn title="To Improve" type="good" cards={[]} />, store);
};
//TODO: Add 80% test coverage code tests

jest.mock('../../../../app/app.hooks', () => {
  return {
    ...(jest.requireActual('../../../../app/app.hooks') as any),
    useAppDispatch: jest.fn(),
  };
});
let useDispatchMock: any = useAppDispatch;

describe('Retro board column Component', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    useDispatchMock.mockReset();
    useDispatchMock.mockImplementation(() => () => {});
  });

  it('should render column component without errors', async () => {
    await render(store);
    const goodcolumn = screen.getByTestId('good-testid');
    expect(goodcolumn).toBeDefined();
  });

  it('should render column header text on column component', async () => {
    await render(store);
    const goodcolumn = screen.getByTestId('column-text-testid');
    expect(goodcolumn).toBeDefined();
  });

  it('should render text box component when adding new card on column', async () => {
    //TODO:add handling
  });

  it('should render already added cards on column', async () => {
    //TODO:add handling
  });
});
