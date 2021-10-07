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
      return await getCart();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addToCart = createAsyncThunk(
  'cart/addToCart', async ({productId, qty}, { rejectWithValue }) => {
    try {
      return await addProduct(productId, qty);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const updateCartQty = createAsyncThunk(
  'cart/updateCartQty', async ({ lineItemId, quantity }, { rejectWithValue }) => {
    try {
      return await updateProductQty(lineItemId, quantity);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart', async (productId, { rejectWithValue }) => {
    try {
      return await removeProduct(productId);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const emptyCart = createAsyncThunk(
  'cart/emptyCart', async (_, { rejectWithValue }) => {
    try {
      return await removeAllProducts();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const refreshCart = createAsyncThunk(
  'cart/refreshCart', async (_, { rejectWithValue }) => {
    try {
      return await refresh();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);