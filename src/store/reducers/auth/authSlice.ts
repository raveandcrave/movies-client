import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User, Credentials} from '../../../types';
import {loginUser} from './actionCreators';

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
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    loginUserFetching(state) {
      state.isLoading = true;
    },
    loginUserFetchingSuccess(state, action: PayloadAction<User>) {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuth = true;
    },
    loginUserFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
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
  },
});

export const {setAuth, loginUserFetching, loginUserFetchingSuccess, loginUserFetchingError} = authSlice.actions;
export default authSlice.reducer;
