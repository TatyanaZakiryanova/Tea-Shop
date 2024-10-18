import { createSlice,PayloadAction } from '@reduxjs/toolkit';

import { fetchTeas } from './asyncActions';
import { Status, Tea, TeaState } from './types';

const initialState: TeaState = {
  items: [],
  status: Status.LOADING,
};

const teaSlice = createSlice({
  name: 'tea',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Tea[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeas.pending, (state) => {
        state.items = [];
        state.status = Status.LOADING;
      })
      .addCase(fetchTeas.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchTeas.rejected, (state) => {
        state.items = [];
        state.status = Status.ERROR;
      });
  },
});

export const { setItems } = teaSlice.actions;
export default teaSlice.reducer;
