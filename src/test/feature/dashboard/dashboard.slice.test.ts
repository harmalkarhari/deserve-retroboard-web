import dashboardSlice, { setPostsData } from '../../../features/dashboard/dashboard.slice';
//TODO: Add 80% test coverage code tests

describe('Dashboard slice', () => {
  const initialState = {
    posts: []
  };

  describe('Dashboard reducers', () => {
    it('should handle setPostsData reducer', () => {
      const expectedState = { posts: [{ id: '1', type: 'good', text: 'this is good' }] }
      const response = dashboardSlice(initialState, setPostsData([{ id: '1', type: 'good', text: 'this is good' }]));
      expect(response).toEqual(expectedState);
    });
  });

});
