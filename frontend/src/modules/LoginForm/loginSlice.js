import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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
      const token = JSON.stringify(localStorage.getItem('token'));
      state.token = token;
    },
    removeToken(state) {
      localStorage.removeItem('token');
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        localStorage.setItem('token', JSON.stringify(action.token));
      });
  },
});
export const { actions } = loginSlice;
export default loginSlice.reducer;
