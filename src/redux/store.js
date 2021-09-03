import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productsInfoReducer from './products.js';
import cartInfoReducer from './cart.js';
import filterProductsInfoReducer from "./filter.js";
import checkoutInfoReducer from './checkout.js';
import paymentInfoReducer from "./payment.js";
import notificationInfoReducer from "./notification.js";
import contactInfoReducer from "./contact.js";

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
