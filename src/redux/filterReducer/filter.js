import { createSlice } from "@reduxjs/toolkit";

export const filterProductsInfo = createSlice({
  name: 'filter',
  initialState: {
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
    setCategory: (state, action) => {
      state.filterBy.categories = [...state.filterBy.categories, action.payload];
    },
    removeCategory: (state, action) => {
      
      state.filterBy.categories = state.filterBy.categories
        .filter((category) => category !== action.payload);

    },
  },
});

export const {
  setMinPrice,
  setMaxPrice,
  setCategory,
  removeCategory,
} = filterProductsInfo.actions;

export default filterProductsInfo.reducer;