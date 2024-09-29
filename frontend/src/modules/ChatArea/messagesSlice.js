import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import {
  getMessages, addMessage, editMessage, removeMessage
} from './messagesThunks.js';

const messagesAdapter = createEntityAdapter();

const messagesSlice = createSlice({
  name: 'messages',
  initialState: messagesAdapter.getInitialState(),
  reducers: { removeChannelMessages: messagesAdapter.removeMany },
  extraReducers: (builder) => {
    builder
      .addCase(getMessages.fulfilled, messagesAdapter.addMany)
      .addCase(addMessage.fulfilled, messagesAdapter.addOne)
      .addCase(editMessage.fulfilled, messagesAdapter.updateOne)
      .addCase(removeMessage.fulfilled, messagesAdapter.removeOne)
      .addCase(getMessages.rejected, (state, action) => {
        console.log('getMessages:', state, '|', action.error);
      });
  },
});
export const { actions } = messagesSlice;
export const selectors = messagesAdapter.getSelectors((state) => state.messages);
export default messagesSlice.reducer;
