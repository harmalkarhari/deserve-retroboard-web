import { createAsyncThunk } from '@reduxjs/toolkit';
import { createPost, deletePost, fetchPosts, updatePost } from '../../api/posts.api';

export interface Post {
  text: string;
  type: string;
}

export interface PostWithId extends Post {
  id: string;
}

export const getPosts = createAsyncThunk<Array<PostWithId>, void>(
  'post/getall',
  async (payload, { rejectWithValue }) => {
    try {
      const response: any = await fetchPosts();
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const addPost = createAsyncThunk<PostWithId, Post>(
  'post/add',
  async (payload, { rejectWithValue }) => {
    try {
      const response: any = await createPost(payload);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const editPost = createAsyncThunk<PostWithId, PostWithId>(
  'post/edit',
  async (payload, { rejectWithValue }) => {
    const { id, ...other } = payload;
    try {
      const response: any = await updatePost(id, other);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const removePost = createAsyncThunk<{ id: string }, PostWithId>(
  'post/remove',
  async (payload, { rejectWithValue }) => {
    const { id } = payload;
    try {
      const response: any = await deletePost(id);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
