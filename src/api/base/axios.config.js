import axios from 'axios';
export const instance = axios.create({
  timeout: 60000,
});

export const requestInterceptor = async config => {
  //TODO: add handling details
  return config;
};

export const requestInterceptorError = error => {
  //TODO: add handling details
  return error;
};

// Add a request interceptor
instance.interceptors.request.use(requestInterceptor, requestInterceptorError);

export const responseInterceptorError = async error => {
  //TODO: add handling details
  return error;
};

export const responseInterceptor = response => {
  //TODO: add handling details
  return response;
};

// Add a response interceptor
instance.interceptors.response.use(responseInterceptor, responseInterceptorError);

export default instance;
