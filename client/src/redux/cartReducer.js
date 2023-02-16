import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: []
  },
  reducers: {
    addToCart: (state, action) => {
      // checks to see if the same product already exists in the shopping cart
      const item = state.products.find((item) => item.id === action.payload.id);
      // if the same product already exists, only increase the quantity by the quantity requested
      // else push the new product to the cart
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload);
    },
    resetCart: (state) => {
      state.products = [];
    }
  }
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
