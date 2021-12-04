import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addBookToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { addBookToCart } = cartSlice.actions;

export default cartSlice.reducer;
