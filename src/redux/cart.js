import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { commerce } from "../lib/commerce";

export const fetchCart = createAsyncThunk(
  'cart/fetchCart', async(obj, { rejectWithValue }) => {
    try {
      const cart = await commerce.cart.retrieve();
    return cart;
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
);

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
    }
  }
});

export const {
  setCart,
  setCartErrorMessage,
  setCartStatus,
} = cartInfo.actions;

export default cartInfo.reducer;