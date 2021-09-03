import { createSlice } from "@reduxjs/toolkit";

export const cartInfo = createSlice({
  name: 'cart',
  initialState: {
    cart: {},
    errorMessage: null,
    cartStatus: '',
  },
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    cartCartErrorMessage: (state, action) => {
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