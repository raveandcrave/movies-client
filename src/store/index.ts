import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import reducers from "./reducers";

export const store = configureStore({
  reducer: {},
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware();
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
