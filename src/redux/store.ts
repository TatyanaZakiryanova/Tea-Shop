import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import cartReducer from './cartSlice/cartSlice';
import filterReducer from './filterSlice/filterSlice';
import teaReducer from './teaSlice/teaSlice';

export const store = configureStore({
  reducer: {
    filterReducer,
    cartReducer,
    teaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
