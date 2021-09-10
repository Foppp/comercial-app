import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productsInfoReducer from './products/products.js';
import cartInfoReducer from './cart/cart.js';
import filterProductsInfoReducer from "./filter/filter.js";
import checkoutInfoReducer from './checkout/checkout.js';
import paymentInfoReducer from "./payment/payment.js";
import notificationInfoReducer from "./notifier/notifier.js";
import contactInfoReducer from "./contact/contact.js";
import sortProductsInfoReducer from "./sort/sort.js";
import paginationInfoReducer from './pagination/pagination.js'

export default configureStore({
  reducer: {
    productsInfoReducer,
    cartInfoReducer,
    filterProductsInfoReducer,
    sortProductsInfoReducer,
    checkoutInfoReducer,
    paymentInfoReducer,
    notificationInfoReducer,
    contactInfoReducer,
    paginationInfoReducer,
  },
  middleware: getDefaultMiddleware(),
  devTools: true,
});
