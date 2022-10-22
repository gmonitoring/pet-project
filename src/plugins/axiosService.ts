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
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  },
);

export default httpClient;
