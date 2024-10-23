import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { getMessages } from './messagesThunks.js';

const messagesAdapter = createEntityAdapter();

const messagesSlice = createSlice({
  name: 'messages',
  initialState: messagesAdapter.getInitialState(),
  reducers: {
    addMessage: messagesAdapter.addOne,
    editMessage: messagesAdapter.updateOne,
    removeMessage: messagesAdapter.removeOne,
    removeChannelMessages: messagesAdapter.removeMany,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMessages.fulfilled, messagesAdapter.addMany)
      .addCase(getMessages.rejected, (state, action) => {
        console.log('getMessages:', state, '|', action.error);
      });
  },
});
export const { actions } = messagesSlice;
export const selectors = messagesAdapter.getSelectors((state) => state.messages);
export default messagesSlice.reducer;
