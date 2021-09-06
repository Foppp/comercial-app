import { createAsyncThunk } from "@reduxjs/toolkit";
import { commerce } from "../../lib/commerce";

export const fetchCart = createAsyncThunk(
  'cart/fetchCart', async (_, { rejectWithValue }) => {
    try {
      const cart = await commerce.cart.retrieve();
      return cart;
    } catch (e) {
      return rejectWithValue(e.data.error.message);
    }
  }
);

export const addToCart = createAsyncThunk(
  'cart/addToCart', async ({productId, qty}, { rejectWithValue }) => {
    try {
      const response = await commerce.cart.add(productId, qty);
      return response.cart;
    } catch (e) {
      return rejectWithValue(e.data.error.message);
    }
  }
);

export const updateCartQty = createAsyncThunk(
  'cart/updateCartQty', async ({ lineItemId, quantity }, { rejectWithValue }) => {
    try {
      const response = await commerce.cart.update(lineItemId, { quantity } );
      return response.cart;
    } catch (e) {
      return rejectWithValue(e.data.error.message);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart', async (productId, { rejectWithValue }) => {
    try {
      const response = await commerce.cart.remove(productId);
      return response.cart;
    } catch (e) {
      return rejectWithValue(e.data.error.message);
    }
  }
);

export const emptyCart = createAsyncThunk(
  'cart/emptyCart', async (_, { rejectWithValue }) => {
    try {
      const response = await commerce.cart.empty();
      return response.cart;
    } catch (e) {
      return rejectWithValue(e.data.error.message);
    }
  }
);

export const refreshCart = createAsyncThunk(
  'cart/refreshCart', async (_, { rejectWithValue }) => {
    try {
      const newCart = await commerce.cart.refresh();
      return newCart;
    } catch (e) {
      return rejectWithValue(e.data.error.message);
    }
  }
);