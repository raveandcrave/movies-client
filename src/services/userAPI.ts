import {$host} from './http';
import {AuthResponse} from '../types';
import {AxiosResponse} from 'axios';

export const login = async (email: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
  return $host.post<AuthResponse>('auth/login', {email, password});
};

export const registration = async (email: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
  return $host.post<AuthResponse>('auth/registration', {email, password});
};

export const logout = async (): Promise<void> => {
  return $host.post('auth/logout');
};

export const refresh = async (): Promise<AxiosResponse<AuthResponse>> => {
  return $host.get<AuthResponse>('auth/refresh');
};
