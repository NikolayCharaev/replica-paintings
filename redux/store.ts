'use client';

import { configureStore } from '@reduxjs/toolkit';
import reproductionsSlice from './slices/reproductions/reproductionsSlice';

export const store = () => {
  return configureStore({
    reducer: {
      reproductionsSlice: reproductionsSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
