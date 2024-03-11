import configureMockStore from 'redux-mock-store';
import { HomePage } from '../../../pages/home/home-page.component';
import { customRenderWithRouter } from '../../utility/test.util';
import { useAppDispatch } from '../../../app/app.hooks';

const mockStore = configureMockStore();
const store = mockStore({ dashboard: { posts: [] } } as any);

const renderLogin = async (store: any) => {
  return customRenderWithRouter(<HomePage />, store);
};
//TODO: Add 80% test coverage code tests

jest.mock('../../../app/app.hooks', () => {
  return {
    ...(jest.requireActual('../../../app/app.hooks') as any),
    useAppDispatch: jest.fn(),
  };
});
let useDispatchMock: any = useAppDispatch;

describe('HomePage Component', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    useDispatchMock.mockReset();
    useDispatchMock.mockImplementation(() => () => {});
  });
  it('should render without errors', async () => {
    const { container } = await renderLogin(store);
    expect(container).toBeDefined();
  });
});
