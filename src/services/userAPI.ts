import jwt_decode, {JwtPayload} from 'jwt-decode';

import {$host, $authHost} from './http';
import {Credentials, User} from '../types';

type TokenDto = {};
//нужно объединить интерфейсы user и jwtpayload в один

export const registration = async (email: string, password: string) => {
  const response = await $host.post('auth/registration', {email, password});
  return response;
};

export const login = async ({email, password}: Credentials) => {
  const {data} = await $host.post('auth/login', {email, password});
  const decodedToken = jwt_decode<TokenDto>(data.token);

  console.log('decodedToken', decodedToken);

  return decodedToken;
};
