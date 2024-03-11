import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PostWithId, addPost, editPost, getPosts, removePost } from './dashboard.action';

// Define a type for the slice state
interface DashboardState {
  posts: Array<PostWithId>;
  loginError?: string;
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
    setPostsData: (state, action: PayloadAction<Array<PostWithId>>) => {
      state.posts = action.payload;
    },
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.posts.push(action.payload);
    });
    // builder.addCase(addPost.rejected, (state, action) => {});
    // builder.addCase(addPost.pending, (state, action) => {});
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(editPost.fulfilled, (state, action) => {
      const existingPosts = JSON.parse(JSON.stringify(state.posts));
      let foundItem = existingPosts.find((item: any) => item.id === action.payload.id);
      if (foundItem) {
        foundItem.text = action.payload.text;
        state.posts = existingPosts;
      }
    });
    builder.addCase(removePost.fulfilled, (state, action) => {
      const existingPosts = JSON.parse(JSON.stringify(state.posts));
      state.posts = existingPosts.filter((item: any) => item.id !== action.payload.id);
    });
  },
});
export const { setPostsData } = dashboardSlice.actions;

export default dashboardSlice.reducer;
