import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import {
  getChannels, addChannel, editChannel, removeChannel
} from './channelsThunks.js';

const channelsAdapter = createEntityAdapter();

const channelsSlice = createSlice({
  name: 'channels',
  initialState: channelsAdapter.getInitialState(),
  extraReducers: (builder) => {
    builder
      .addCase(getChannels.fulfilled, channelsAdapter.addMany)
      .addCase(addChannel.fulfilled, channelsAdapter.addOne)
      .addCase(editChannel.fulfilled, channelsAdapter.updateOne)
      .addCase(removeChannel.fulfilled, channelsAdapter.removeOne)
      .addCase(getChannels.rejected, (state, action) => {
        console.log('getChannels:', state, '|', action.error);
      });
  },
});

export const selectors = channelsAdapter.getSelectors((state) => state.channels);
export default channelsSlice.reducer;
