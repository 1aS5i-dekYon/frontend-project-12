import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { setToken } from '../services.js';

export const registrationUser = createAsyncThunk(
  'registration/registrationUser',
  async (user) => {
    const response = await axios.post('/api/v1/signup', user);
    return response.data;
  }
);

const registrationSlice = createSlice({
  name: 'registration',
  initialState: { token: null, username: null },
  extraReducers: (builder) => {
    builder
      .addCase(registrationUser.fulfilled, (state, action) => {
        console.log('action:', action);
        console.log('token before storage:', action.payload);
        setToken(action.payload);
        // const token = getToken();
        // const username = getUsername();
        // console.log('token:', token);
        // console.log('username:', username);
        state = action.payload;
      })
      .addCase(registrationUser.rejected, (state, action) => {
        console.log(state, '|', action.error);
      });
  },
});

export default registrationSlice.reducer;
