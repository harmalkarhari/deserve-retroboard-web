import { describe } from 'node:test';
import configureMockStore from 'redux-mock-store';
import { HomePage } from '../../../pages/home/home-page.component';
import { customRenderWithRouter } from '../../utility/test.util';

const mockStore = configureMockStore();
const store = mockStore({} as any);

const renderLogin = async (store: any) => {
  return customRenderWithRouter(<HomePage />, store);
};
//TODO: Add 80% test coverage code tests

describe('HomePage Component', () => {
  it('should render without errors', async () => {
    const { container, debug } = await renderLogin(store);
    expect(container).toBeDefined();
  });
});
