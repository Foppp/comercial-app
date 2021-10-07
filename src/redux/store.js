import { configureStore } from "@reduxjs/toolkit";
import productsInfoReducer from './productsReducer/products.js';
import cartInfoReducer from './cartReducer/cart.js';
import checkoutInfoReducer from './checkoutReducer/checkout.js';
import paymentInfoReducer from "./paymentReducer/payment.js";
import notificationInfoReducer from "./notifierReducer/notifier.js";
import contactInfoReducer from "./contactReducer/contact.js";
import modalInfoReducer from "./modalReducer/modal.js";
import navbarInfoReducer from "./navBarReducer/navbar.js";
import searchInfoReducer from "./searchReducer/search.js";

export default configureStore({
  reducer: {
    productsInfoReducer,
    cartInfoReducer,
    checkoutInfoReducer,
    paymentInfoReducer,
    notificationInfoReducer,
    contactInfoReducer,
    modalInfoReducer,
    navbarInfoReducer,
    searchInfoReducer,
  },
});
