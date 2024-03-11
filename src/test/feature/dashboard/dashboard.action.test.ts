import React from 'react';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { getPosts } from '../../../features/dashboard/dashboard.action';
import dashboardSlice from '../../../features/dashboard/dashboard.slice';
const mockfetchPostsData = { "dashboard": { "posts": [{ "id": 1, "text": "this is good", "type": "good" }] } }
jest.mock('../../../api/posts.api', () => ({
  fetchPosts: jest.fn().mockResolvedValue([{ id: 1, type: 'good', text: 'this is good' }]),
}))

const initialState = {
  dashboard: {
    posts: []
  },
}
//TODO: Add 80% test coverage code tests
describe('dashboard actions', () => {
  let store: any;
  beforeEach(() => {
    store = configureStore({
      reducer: { dashboard: dashboardSlice, },
      middleware: [thunk],
    });
  });
  it('should handle initial state successfully', async () => {
    const state = store.getState();
    expect(state).toEqual(initialState);
  })
  it('should handle get posts action successfully', async () => {
    await store.dispatch(getPosts() as any);
    const state = store.getState();
    expect(state).toEqual(mockfetchPostsData);
  })
  it('should handle get posts action successfully on failure', async () => {
  })
})
