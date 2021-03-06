import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCountries, getSubdivisions, getOptions, getNewToken } from "../../services";

export const fetchShippingCountries = createAsyncThunk(
  'checkout/fetchShippingCountries', async (checkoutTokenId, { rejectWithValue }) => {
    try {
      return await getCountries(checkoutTokenId);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const fetchSubdivisions = createAsyncThunk(
  'checkout/fetchSubdivisions', async (countryCode, { rejectWithValue }) => {
    try {
      return await getSubdivisions(countryCode);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const fetchShippingOptions = createAsyncThunk(
  'checkout/fetchShippingOptions', async (countriesData, { rejectWithValue }) => {
    try {
      return await getOptions(countriesData);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const generateToken = createAsyncThunk(
  'checkout/generateToken', async (cartId, { rejectWithValue }) => {
    try {
      return await getNewToken(cartId, { type: 'cart' });
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

