import axios from 'axios';
import { getSession, signOut } from 'next-auth/react';
// Set config defaults when creating the instance

const baseURL: string | undefined = process.env.NEXT_PUBLIC_API_URL;
const instance = axios.create({
  baseURL: baseURL,
  timeout: 2000,
  headers: {
    Accept: 'application/json',
    // ContentType: 'application/json',
  },
});

// Add a request interceptor
instance.interceptors.request.use(
  async function (config) {
    const session: any = await getSession();
    if (session) {
      config.headers['Authorization'] = `Bearer ${session?.accessToken}`;
      // config.headers['Content-Type'] = 'application/json';
      config.headers['Accept'] = 'application/json';
    }

    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // get response error code

    return response;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    const { status } = error.response;
    if (status === 401) {
      await signOut({
        redirect: false,
      });
    }
    // Do something with response error
    return Promise.reject(error);
  }
);
export default instance;
