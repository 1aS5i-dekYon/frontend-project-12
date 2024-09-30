import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { getToken } from '../services';

const getChannels = createAsyncThunk(
  'channels/getChannels',
  async () => {
    const response = await axios.get('/api/v1/channels', {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data; // => [{ id: '1', name: 'general', removable: false }, ...]
  }
);

// Пример: const newChannel = { name: 'new channel' }
const addChannel = createAsyncThunk(
  'channels/addChannel',
  async (newChannel) => {
    const response = await axios.post('/api/v1/channels', newChannel, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data; // => { id: '3', name: 'new channel', removable: true }
  }
);

// Пример: cconst editedChannel = { name: 'new name channel' };
const editChannel = createAsyncThunk(
  'channels/editChannel',
  async (id, editedChannel) => {
    const response = axios.patch(`/api/v1/channels/${id}`, editedChannel, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data; // => { id: '3', name: 'new name channel', removable: true }
  }
);

const removeChannel = createAsyncThunk(
  'channels/removeChannel',
  async (id) => {
    const response = axios.delete(`/api/v1/channels/${id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    return response.data; // => { id: '3' }
  }
);

export {
  getChannels, addChannel, editChannel, removeChannel
};
