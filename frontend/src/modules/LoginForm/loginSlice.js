import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { setToken } from '../services.js';

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (user) => {
    const response = await axios.post('/api/v1/login', user);
    return response.data;
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState: { token: null, username: null },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log('action:', action);
        console.log('token before storage:', action.payload);
        setToken(action.payload);
        // const token = getToken();
        // const username = getUsername();
        // console.log('token:', token);
        // console.log('username:', username);
        state = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.log(state, '|', action.error);
      });
  },
});

export default loginSlice.reducer;

// removeToken(state) {
//   localStorage.removeItem('token');
//   state.token = null;
// },
