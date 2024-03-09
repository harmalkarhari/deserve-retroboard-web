import { createSlice } from '@reduxjs/toolkit';
import { PostWithId, addPost } from './dashboard.action';

// Define a type for the slice state
interface DashboardState {
  posts: Array<PostWithId>;
}

// Define the initial state using that type
const initialState: DashboardState = {
  posts: []
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.posts.push(action.payload);
    });
    builder.addCase(addPost.rejected, (state, action) => {});
    builder.addCase(addPost.pending, (state, action) => {});
  },
});
// export const { addLoginUserData } = dashboardSlice.actions;

export default dashboardSlice.reducer;
