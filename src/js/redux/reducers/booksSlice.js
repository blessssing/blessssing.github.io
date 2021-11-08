import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
  },
  reducers: {
    addBookToCart() {},
    setBooks(state, action) {
      state.books = action.payload;
    },
  },
});

export const { addBookToCart, setBooks } = booksSlice.actions;

export default booksSlice.reducer;
