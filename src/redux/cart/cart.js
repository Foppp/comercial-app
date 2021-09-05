import { createSlice } from "@reduxjs/toolkit";
import { fetchCart, addToCart, updateCartQty, removeFromCart, emptyCart } from './asyncThunk';

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
  },
  extraReducers: {
    [fetchCart.pending]: (state, action) => {
      state.status = 'pending';
    },
    [fetchCart.fulfilled]: (state, action) => {
      state.cart = action.payload;
      state.status = 'fulfilled';
      state.cartErrorMessage = null;
    },
    [fetchCart.rejected]: (state, action) => {
      state.status = 'rejected';
      state.cartErrorMessage = action.payload;
    },
    [addToCart.pending]: (state, action) => {
      state.status = 'pending';
    },
    [addToCart.fulfilled]: (state, action) => {
      state.cart = action.payload;
      state.status = 'fulfilled';
      state.cartErrorMessage = null;
    },
    [addToCart.rejected]: (state, action) => {
      state.status = 'rejected';
      state.cartErrorMessage = action.payload;
    }
  }
});

export const {
  setCart,
  setCartErrorMessage,
  setCartStatus,
} = cartInfo.actions;

export default cartInfo.reducer;