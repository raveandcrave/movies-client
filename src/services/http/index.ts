import axios, {AxiosRequestConfig} from 'axios';

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

export {$host, $authHost};
