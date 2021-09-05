import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productsInfoReducer from './products/products.js';
import cartInfoReducer from './cart/cart.js';
import filterProductsInfoReducer from "./filter/filter.js";
import checkoutInfoReducer from './checkout/checkout.js';
import paymentInfoReducer from "./payment/payment.js";
import notificationInfoReducer from "./notifier/notifier.js";
import contactInfoReducer from "./contact/contact.js";

export default configureStore({
  reducer: {
    productsInfoReducer,
    cartInfoReducer,
    filterProductsInfoReducer,
    checkoutInfoReducer,
    paymentInfoReducer,
    notificationInfoReducer,
    contactInfoReducer,
  },
  middleware: getDefaultMiddleware(),
  devTools: true,
});
