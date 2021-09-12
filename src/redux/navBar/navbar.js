import { createSlice } from "@reduxjs/toolkit";

export const navbarInfo = createSlice({
  name: 'navbar',
  initialState: {
    menuItems: [
      { id: 1, title: "Home", path: "/" },
      { id: 2, title: "Products", path: "/products" },
      { id: 3, title: "Contact", path: "/contact" },
    ],
    activePath: '/',
  },
  reducers: {
    toggleNavbar: (state, action) => {
      state.isOpened = !state.isOpened;
    },
    setActivePath : (state, action) => {
      state.activePath = action.payload;
    },
  },
});

export const {
  toggleNavbar,
  setActivePath, 
} = navbarInfo.actions;

export default navbarInfo.reducer;