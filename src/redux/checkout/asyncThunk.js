import { createAsyncThunk } from "@reduxjs/toolkit";
import { commerce } from "../../lib/commerce";

export const fetchShippingCountries = createAsyncThunk(
  'checkout/fetchShippingCountries', async (checkoutTokenId, { rejectWithValue }) => {
    try {
      const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
      return countries;
    } catch (e) {
      return rejectWithValue(e.data.error.message);
    }
  }
);

export const fetchSubdivisions = createAsyncThunk(
  'checkout/fetchSubdivisions', async (countryCode, { rejectWithValue }) => {
    try {
      const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
      return subdivisions;
    } catch (e) {
      return rejectWithValue(e.data.error.message);
    }
  }
);

export const fetchShippingOptions = createAsyncThunk(
  'checkout/fetchShippingOptions', async (countriesData, { rejectWithValue }) => {
    try {
      const { checkoutTokenId, country, stateProvince } = countriesData;
      const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });
      return options;
    } catch (e) {
      return rejectWithValue(e.data.error.message);
    }
  }
);

export const generateToken = createAsyncThunk(
  'checkout/generateToken', async (cartId, { rejectWithValue }) => {
    try {
      const token = await commerce.checkout.generateToken(cartId, { type: 'cart' });
      return token;
    } catch (e) {
      return rejectWithValue(e.data.error.message);
    }
  }
);

