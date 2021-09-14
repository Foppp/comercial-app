import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCart,
  addProduct,
  updateProductQty,
  removeProduct,
  removeAllProducts,
  refresh,
} from "../../services";

export const fetchCart = createAsyncThunk(
  'cart/fetchCart', async (_, { rejectWithValue }) => {
    try {
      return getCart();
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const addToCart = createAsyncThunk(
  'cart/addToCart', async ({productId, qty}, { rejectWithValue }) => {
    try {
      return addProduct(productId, qty);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const updateCartQty = createAsyncThunk(
  'cart/updateCartQty', async ({ lineItemId, quantity }, { rejectWithValue }) => {
    try {
      return updateProductQty(lineItemId, quantity);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart', async (productId, { rejectWithValue }) => {
    try {
      return removeProduct(productId);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const emptyCart = createAsyncThunk(
  'cart/emptyCart', async (_, { rejectWithValue }) => {
    try {
      return removeAllProducts();
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const refreshCart = createAsyncThunk(
  'cart/refreshCart', async (_, { rejectWithValue }) => {
    try {
      return refresh();
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);