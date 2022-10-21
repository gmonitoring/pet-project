import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://www.anapioficeandfire.com/api/', // add to env
  timeout: 5000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
});

httpClient.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */

  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  },
);

httpClient.interceptors.request.use(
  config => {
    // config.headers['Authorization'] = 'Bearer '

    return config;
  },
  error => {
    console.log(error); // for debugging
    return Promise.reject(error);
  },
);

export default httpClient;
