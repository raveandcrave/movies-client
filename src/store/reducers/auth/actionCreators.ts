import {Credentials, RegisterCredentials} from '../../../types';
import {login, registration, logout, refresh} from '../../../services/userAPI';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk('user/login', async (credentials: Credentials, thunkApi) => {
  try {
    const response = await login(credentials.email, credentials.password);
    localStorage.setItem('token', response.data.accessToken);
    return response.data.user;
  } catch (e) {
    return thunkApi.rejectWithValue('Не удалось войти');
  }
});

export const registerUser = createAsyncThunk(
  'user/registration',
  async (credentials: RegisterCredentials, thunkApi) => {
    try {
      const response = await registration(credentials.email, credentials.password, credentials.username);
      localStorage.setItem('token', response.data.accessToken);
      return response.data.user;
    } catch (e) {
      return thunkApi.rejectWithValue('Не удалось зарегестрироваться');
    }
  }
);

export const logoutUser = createAsyncThunk('user/logout', async (_, thunkApi) => {
  try {
    await logout();
    localStorage.removeItem('token');
  } catch (e) {
    return thunkApi.rejectWithValue('Произошла ошибка при выходе');
  }
});

export const checkAuth = createAsyncThunk('user/check-auth', async (_, thunkApi) => {
  try {
    const response = await refresh();
    localStorage.setItem('token', response.data.accessToken);
    return response.data.user;
  } catch (e) {
    return thunkApi.rejectWithValue('Произошла ошибка авторизации');
  }
});
