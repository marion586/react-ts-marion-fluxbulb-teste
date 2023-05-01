import { configureStore } from "@reduxjs/toolkit";
import singUpReducer from "../modules/Login/Slice";
export const store = configureStore({
  reducer: {
    singUpReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
