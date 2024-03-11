import appConfig from '../app/app.config';
import { get, post, put, remove } from './base/common-api.util';

const BASE_URL = `${appConfig.REACT_DESERVE_BASE_URL}/api/posts`;
export const createPost = (payload: any) => {
  const url = BASE_URL;
  return post(url, payload);
};

export const updatePost = (id: string, payload: any) => {
  const url = `${BASE_URL}/${id}`;
  return put(url, payload);
};

export const deletePost = (id: string) => {
  const url = `${BASE_URL}/${id}`;
  return remove(url);
};

export const fetchPosts = () => {
  const url = BASE_URL;
  return get(url);
};
