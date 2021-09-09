import { createSlice } from "@reduxjs/toolkit";
import _ from 'lodash';

export const filterProductsInfo = createSlice({
  name: 'filter',
  initialState: {
    filters: [
      { id: _.uniqueId(), name: 'Price Range', active: true },
      { id: _.uniqueId(), name: 'Manufacturer', active: false },
      { id: _.uniqueId(), name: 'Keys Quantity', active: false },
    ],
    filterBy: {
      price: {
        min: null,
        max: Infinity,
      },
      categories: [],
    },
  },
  reducers: {
    setMinPrice: (state, action) => {
      state.filterBy.price.min = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.filterBy.price.max = action.payload === 0 ? Infinity :  action.payload;
    },
    setManufacturer: (state, action) => {
      state.filterBy.categories = [...state.filterBy.categories, action.payload];
    },
    removeManufacturer: (state, action) => {
      state.filterBy.categories = state.filterBy.categories
        .filter((category) => category !== action.payload);
    },
    setKeys: (state, action) => {
      state.filterBy.categories = [...state.filterBy.categories, action.payload];
    },
    removeKeys: (state, action) => {
      state.filterBy.categories = state.filterBy.categories
        .filter((keys) => keys.id !== action.payload.id);
    },
    setActiveFilter: (state, action) => {
      state.filters = state.filters.map((filter) => filter.id === action.payload
        ? ({ ...filter, active: !filter.active })
        : filter);
    }
  },
});

export const {
  setMinPrice,
  setMaxPrice,
  setManufacturer,
  setKeys,
  removeManufacturer,
  removeKeys,
  setActiveFilter,
} = filterProductsInfo.actions;

export default filterProductsInfo.reducer;