import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import productsInfoReducer from './products';

export default configureStore({
  reducer: {
    productsInfoReducer,
  },
  middleware: getDefaultMiddleware(),
  devTools: true,
})