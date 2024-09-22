import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getToken, setToken } from '../services.js';

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (user) => {
    const response = await axios.post('/api/v1/login', user);
    return response.data;
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState: { token: null },
  reducers: {
    getToken(state) {
      const token = getToken();
      state.token = token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        setToken(action.token);
      });
  },
});
export const { actions } = loginSlice;
export default loginSlice.reducer;

// removeToken(state) {
//   localStorage.removeItem('token');
//   state.token = null;
// },
