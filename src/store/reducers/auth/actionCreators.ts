import {$host} from '../../../services/http';

import {AppDispatch} from '../..';
import {loginUserFetching, loginUserFetchingError, loginUserFetchingSuccess} from './authSlice';
import {Credentials} from '../../../types';
import {login} from '../../../services/userAPI';
import {createAsyncThunk} from '@reduxjs/toolkit';

// export const loginUser = (credentials: Credentials) => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(loginUserFetching());
//     const response = await login(credentials);
//     //получаем из ответа токен записываем его в локал сторадж данные из токена собираем в объект с емайлом и ролями и кладем в диспатч
//     const obj = {
//       email: 'asdas',
//       roles: ['user'],
//     };

//     dispatch(loginUserFetchingSuccess(obj));
//   } catch (e) {
//     dispatch(loginUserFetchingError(''));
//   }
// };

export const loginUser = createAsyncThunk('user/login', async (credentials: Credentials, thunkApi) => {
  try {
    const userData = await login(credentials);
    console.log('userData', userData);
    return userData;
  } catch (e) {
    return thunkApi.rejectWithValue('Не удалось войти');
  }
});
