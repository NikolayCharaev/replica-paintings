'use client';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getPosts } from '@/lib/getPosts';

export const fetchReplications = createAsyncThunk('reproductions', getPosts);

enum ReplicationsStatus {
  Idle = 'idle',
  Pending = 'pending',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

export interface ReproductionsSliceProps {
  replications: [];
  replicationsLoading: ReplicationsStatus;
}

const initialState: ReproductionsSliceProps = {
  replications: [],
  replicationsLoading: ReplicationsStatus.Idle,
};
export const reproductionsSlice = createSlice({
  name: 'reproductions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReplications.pending, (state) => {
      state.replicationsLoading = ReplicationsStatus.Pending;
      state.replications = [];
    });
    builder.addCase(fetchReplications.fulfilled, (state, action: PayloadAction<any>) => {
      state.replicationsLoading = ReplicationsStatus.Succeeded;
      state.replications = action.payload;
    });
    builder.addCase(fetchReplications.rejected, (state) => {
      state.replicationsLoading = ReplicationsStatus.Failed;
      state.replications = [];
    });
  },
});

export default reproductionsSlice.reducer;
