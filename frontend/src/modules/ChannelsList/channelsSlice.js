import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { getChannels } from './channelsThunks.js';

const channelsAdapter = createEntityAdapter();

const channelsSlice = createSlice({
  name: 'channels',
  initialState: channelsAdapter.getInitialState(),
  reducers: {
    addChannel: channelsAdapter.addOne,
    editChannel: channelsAdapter.updateOne,
    removeChannel: channelsAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChannels.fulfilled, channelsAdapter.addMany)
      .addCase(getChannels.rejected, (state, action) => {
        console.log('getChannels:', state, '|', action.error);
      });
  },
});

export const { actions } = channelsSlice;
export const selectors = channelsAdapter.getSelectors((state) => state.channels);
export default channelsSlice.reducer;
