import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductList, getCategories, getCategoryProducts } from "../../services";

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts', async(_, { rejectWithValue }) => {
    try {
      return await getProductList();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const fetchCategories = createAsyncThunk(
  'products/fetchCategories', async(_, { rejectWithValue }) => {
    try {
      return await getCategories();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const fetchCategoryProducts = createAsyncThunk(
  'products/fetchCategoryProducts', async(categoryId, { rejectWithValue }) => {
    try {
      return await getCategoryProducts(categoryId);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
