import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { getToken } from '../services';

const getMessages = createAsyncThunk(
  'messages/getMessages',
  async () => {
    const response = await axios.get('/api/v1/messages', { headers: { Authorization: `Bearer ${getToken()}` } });
    return response.data;
    // => [{ id: '1', body: 'text message', channelId: '1', username: 'admin }, ...]
  }
);

// Пример: const newMessage = { body: 'new message', channelId: '1', username: 'admin };
const addMessage = createAsyncThunk(
  'messages/addMessage',
  async (newMessage) => {
    const response = await axios.post('/api/v1/messages', newMessage, { headers: { Authorization: `Bearer ${getToken()}` } });
    return response.data; // => { id: '1', body: 'new message', channelId: '1', username: 'admin }
  }
);

// Пример: const editedMessage = { body: 'new body message' };
const editMessage = createAsyncThunk(
  'messages/editMessage',
  async (id, editedMessage) => {
    const response = axios.patch(`/api/v1/messages/${id}`, editedMessage, { headers: { Authorization: `Bearer ${getToken()}` } });
    return response.data;
    // => { id: '1', body: 'new body message', channelId: '1', username: 'admin }
  }
);

const removeMessage = createAsyncThunk(
  'messages/removeMessage',
  async (id) => {
    const response = axios.delete(`/api/v1/messages/${id}`, { headers: { Authorization: `Bearer ${getToken()}` } });
    return response.data; // => { id: '3' }
  }
);

export {
  getMessages, addMessage, editMessage, removeMessage
};
