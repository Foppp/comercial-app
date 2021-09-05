import { createAsyncThunk } from "@reduxjs/toolkit";
import { commerce } from "../../lib/commerce";

export const fetchCart = createAsyncThunk(
  'cart/fetchCart', async(_, { rejectWithValue }) => {
    try {
      const cart = await commerce.cart.retrieve();
      return cart;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addToCart = createAsyncThunk(
  'cart/addToCart', async(product, { rejectWithValue }) => {
    try {
      const { productId, qty } = product;
      const item = await commerce.cart.add(productId, qty);
      return item.cart;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const updateCartQty = createAsyncThunk(
  'cart/updateCartQty', async({ productId, quantity }, { rejectWithValue }) => {
    try {
      const cart = await commerce.cart.update(productId, { quantity });
      return cart;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart', async(productId, { rejectWithValue }) => {
    try {
      const cart = await commerce.cart.remove(productId);
      return cart;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const emptyCart = createAsyncThunk(
  'cart/emptyCart', async(_, { rejectWithValue }) => {
    try {
      const cart = await commerce.cart.empty();
      return cart;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);