'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface reproductionsSliceProps {}

const initialState = {
  value: 0,
};

export const reproductionsSlice = createSlice({
  name: 'reproductions',
  initialState,
  reducers: {
    incement: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
  },
});

export const { incement, decrement } = reproductionsSlice.actions;
export default reproductionsSlice.reducer;
