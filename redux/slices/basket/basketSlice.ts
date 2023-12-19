'use client';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getBasketItems } from '@/lib/basket';

export const fetchBacket = createAsyncThunk('basket', getBasketItems);

enum BasketStatus {
  Idle = 'idle',
  Pending = 'pending',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

export interface BasketSliceProps {
  basketItems: [];
  basketLoading: BasketStatus;
}

const initialState: BasketSliceProps = {
  basketItems: [],
  basketLoading: BasketStatus.Idle,
};
export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBacket.pending, (state) => {
      state.basketLoading = BasketStatus.Pending;
      state.basketItems = [];
    });
    builder.addCase(fetchBacket.fulfilled, (state, action: PayloadAction<any>) => {
      state.basketLoading = BasketStatus.Succeeded;
      state.basketItems = action.payload;

    });
    builder.addCase(fetchBacket.rejected, (state) => {
      state.basketLoading = BasketStatus.Failed;
      state.basketItems = [];
    });
  },
});

export default basketSlice.reducer;
