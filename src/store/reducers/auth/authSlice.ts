import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../../../types';
import {loginUser, registerUser, logoutUser, checkAuth} from './actionCreators';

interface AuthState {
  isAuth: boolean;
  user: User;
  error: string;
  isLoading: boolean;
}

const initialState: AuthState = {
  isAuth: false,
  error: '',
  isLoading: false,
  user: {} as User,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [loginUser.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuth = true;
      state.error = '';
    },
    [loginUser.pending.type]: (state) => {
      state.isLoading = true;
    },
    [loginUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [registerUser.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuth = true;
      state.error = '';
    },
    [registerUser.pending.type]: (state) => {
      state.isLoading = true;
    },
    [registerUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [logoutUser.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.user = {} as User;
      state.isAuth = false;
      state.error = '';
    },
    [logoutUser.pending.type]: (state) => {
      state.isLoading = true;
    },
    [logoutUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [checkAuth.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuth = true;
      state.error = '';
    },
    [checkAuth.pending.type]: (state) => {
      state.isLoading = true;
    },
    [checkAuth.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
