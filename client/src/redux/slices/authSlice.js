import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  type: "",
};

const authSlice = createSlice({
  name: "authToken",
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      console.log('action: ', action)
      state.token = action.payload.token;
      state.type = action.payload.type;
    },
  },
});

export const { setAuthToken } = authSlice.actions;

export default authSlice.reducer;
