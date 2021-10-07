import { createSlice } from "@reduxjs/toolkit";
import { fetchCart, addToCart, updateCartQty, removeFromCart, emptyCart, refreshCart } from './asyncThunk';

export const cartInfo = createSlice({
  name: 'cart',
  initialState: {
    cart: {},
    error: null,
    status: null,
  },
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    setCartErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    setCartStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: {
    [fetchCart.pending]: (state, action) => {
      state.status = 'pending';
    },
    [fetchCart.fulfilled]: (state, action) => {
      state.cart = action.payload;
      state.status = 'fulfilled';
      state.error = null;
    },
    [fetchCart.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    [addToCart.pending]: (state, action) => {
      state.status = 'pending';
    },
    [addToCart.fulfilled]: (state, action) => {
      state.cart = action.payload;
      state.status = 'fulfilled';
      state.error = null;
    },
    [addToCart.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    [updateCartQty.pending]: (state, action) => {
      state.status = 'pending';
    },
    [updateCartQty.fulfilled]: (state, action) => {
      state.cart = action.payload;
      state.status = 'fulfilled';
      state.error = null;
    },
    [updateCartQty.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    [removeFromCart.pending]: (state, action) => {
      state.status = 'pending';
    },
    [removeFromCart.fulfilled]: (state, action) => {
      state.cart = action.payload;
      state.status = 'fulfilled';
      state.error = null;
    },
    [removeFromCart.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    [emptyCart.pending]: (state, action) => {
      state.status = 'pending';
    },
    [emptyCart.fulfilled]: (state, action) => {
      state.cart = action.payload;
      state.status = 'fulfilled';
      state.error = null;
    },
    [emptyCart.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    [refreshCart.pending]: (state, action) => {
      state.status = 'pending';
    },
    [refreshCart.fulfilled]: (state, action) => {
      state.cart = action.payload;
      state.status = 'fulfilled';
      state.error = null;
    },
    [refreshCart.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  }
});

export const {
  setCart,
  setCartErrorMessage,
  setCartStatus,
} = cartInfo.actions;

export default cartInfo.reducer;