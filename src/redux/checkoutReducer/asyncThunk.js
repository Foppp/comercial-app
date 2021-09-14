import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCountries, getSubdivisions, getOptions, getNewToken } from "../../services";

export const fetchShippingCountries = createAsyncThunk(
  'checkout/fetchShippingCountries', async (checkoutTokenId, { rejectWithValue }) => {
    try {
      return getCountries(checkoutTokenId);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const fetchSubdivisions = createAsyncThunk(
  'checkout/fetchSubdivisions', async (countryCode, { rejectWithValue }) => {
    try {
      return getSubdivisions(countryCode);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const fetchShippingOptions = createAsyncThunk(
  'checkout/fetchShippingOptions', async (countriesData, { rejectWithValue }) => {
    try {
      return getOptions(countriesData);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const generateToken = createAsyncThunk(
  'checkout/generateToken', async (cartId, { rejectWithValue }) => {
    try {
      return getNewToken(cartId, { type: 'cart' });
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

