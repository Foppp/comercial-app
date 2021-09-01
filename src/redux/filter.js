import { createSlice } from "@reduxjs/toolkit";

export const filterProductsInfo = createSlice({
  name: 'filter',
  initialState: {
    filterBy: {
      price: {
        min: null,
        max: null,
      },
      manufacturer: [],
      keys: [],
    },
  },
  reducers: {
    setMinPrice: (state, action) => {
      state.filterBy.price.min = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.filterBy.price.max = action.payload;
    },
    setManufacturer: (state, action) => {
      state.filterBy.manufacturer = [...state.filterBy.manufacturer, action.payload];
    },
    removeManufacturer: (state, action) => {
      state.filterBy.manufacturer = state.filterBy.manufacturer
        .filter((manufacturer) => manufacturer.id !== action.payload.id);
    },
    setKeys: (state, action) => {
      state.filterBy.keys = [...state.filterBy.keys, action.payload];
    },
    removeKeys: (state, action) => {
      state.filterBy.keys = state.filterBy.keys
        .filter((keys) => keys.id !== action.payload.id);
    },
  },
});

export const {
  setMinPrice,
  setMaxPrice,
  setManufacturer,
  setKeys,
  removeManufacturer,
  removeKeys,
} = filterProductsInfo.actions;

export default filterProductsInfo.reducer;