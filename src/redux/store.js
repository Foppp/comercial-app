import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productsInfoReducer from './products.js';
import cartInfoReducer from './cart.js';
import filterProductsInfoReducer from "./filter.js";
import checkoutInfoReducer from './checkout.js';

export default configureStore({
  reducer: {
    productsInfoReducer,
    cartInfoReducer,
    filterProductsInfoReducer,
    checkoutInfoReducer,
  },
  middleware: getDefaultMiddleware(),
  devTools: true,
});
