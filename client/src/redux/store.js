import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import authSlice from "./slices/authSlice";
import loaderSlice from "./slices/loaderSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    authToken: authSlice,
    loading: loaderSlice,
  },
});
