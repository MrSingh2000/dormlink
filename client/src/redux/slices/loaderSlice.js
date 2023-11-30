import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const loaderSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    updateLoading: (state) => {
      state.value = !state.value;
    },
  },
});

export const { updateLoading } = loaderSlice.actions;

export default loaderSlice.reducer;
