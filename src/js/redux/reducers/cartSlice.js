import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [
      {
        id: "8",
        article: "8",
        title: "Brawe New World",
        description: "Далеко-далеко за словесными горами в стране.",
        age: "16+",
        author: "Oldos Hecksley",
        img: "images/oldos hecksley bnw.jpg",
        price: 45,
      },
    ],
  },
  reducers: {
    addBookToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { addBookToCart } = cartSlice.actions;

export default cartSlice.reducer;
