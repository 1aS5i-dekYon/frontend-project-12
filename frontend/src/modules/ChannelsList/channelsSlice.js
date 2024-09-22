import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import {
  getChannels, addChannel, editChannel, removeChannel
} from './channelsThunks.js';

const channelsAdapter = createEntityAdapter();

const messagesSlice = createSlice({
  name: 'channels',
  initialState: channelsAdapter.getInitialState(),
  extraReducers: (builder) => {
    builder
      .addCase(getChannels.fulfilled, channelsAdapter.addMany)
      .addCase(addChannel.fulfilled, channelsAdapter.addOne)
      .addCase(editChannel.fulfilled, channelsAdapter.updateOne)
      .addCase(removeChannel.fulfilled, channelsAdapter.removeOne);
  },
});
export const { actions } = messagesSlice;
export default messagesSlice.reducer;
