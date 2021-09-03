import { createSlice } from "@reduxjs/toolkit";

export const cartInfo = createSlice({
  name: 'cart',
  initialState: {
    cart: {},
    cartErrorMessage: null,
    cartStatus: null,
  },
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    setCartErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    setCartStatus: (state, action) => {
      state.cartStatus = action.payload;
    },
  }
});

export const {
  setCart,
  setCartErrorMessage,
  setCartStatus,
} = cartInfo.actions;

export default cartInfo.reducer;