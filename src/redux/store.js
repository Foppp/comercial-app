import { configureStore } from "@reduxjs/toolkit";
import productsInfoReducer from './productsReducer/products.js';
import cartInfoReducer from './cartReducer/cart.js';
import filterProductsInfoReducer from "./filterReducer/filter.js";
import checkoutInfoReducer from './checkoutReducer/checkout.js';
import paymentInfoReducer from "./paymentReducer/payment.js";
import notificationInfoReducer from "./notifierReducer/notifier.js";
import contactInfoReducer from "./contactReducer/contact.js";
import sortProductsInfoReducer from "./sortReducer/sort.js";
import paginationInfoReducer from './paginationReducer/pagination.js';
import modalInfoReducer from "./modalReducer/modal.js";
import navbarInfoReducer from "./navBarReducer/navbar.js";
import searchInfoReducer from "./searchReducer/search.js";

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
    modalInfoReducer,
    navbarInfoReducer,
    searchInfoReducer,
  },
});
