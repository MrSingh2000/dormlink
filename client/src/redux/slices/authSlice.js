import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "",
}

const authSlice = createSlice({
  name: 'authToken',
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
        state.value = action.payload
    }
  }
});

export const {setAuthToken} = authSlice.actions

export default authSlice.reducer