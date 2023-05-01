import { configureStore } from "@reduxjs/toolkit";
import university from "../modules/universityList/reducers";
export const store = configureStore({
  reducer: {
    universityReducer: university,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
