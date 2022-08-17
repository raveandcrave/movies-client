import axios, {AxiosRequestConfig} from 'axios';
import {refresh} from '../userAPI';

const $host = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL,
});

const $authHost = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL,
});

const authInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const token = localStorage.getItem('token');

  if (token && config.headers) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
};

//TODO: добавить интерцепторы на ошибки и разбить логику по кодам ошибок(код 401 --- редирект на стр логина и тд)

$authHost.interceptors.request.use(authInterceptor);

$authHost.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await refresh();
        localStorage.setItem('token', response.data.accessToken);

        return $authHost.request(originalRequest);
      } catch {
        console.error('Не авторизован');
      }
    }
    throw error;
  }
);

export {$host, $authHost};
