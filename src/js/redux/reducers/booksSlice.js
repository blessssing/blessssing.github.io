import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import books from "@/js/books";

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const response = await new Promise((resolve) => resolve(books));

  console.log("response ", response);
  return response;
});

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    status: null,
    error: null,
  },
  reducers: {
    addBookToCart() {},
    setBooks(state, action) {
      state.books = action.payload;
    },
  },
  extraReducers: {
    [fetchBooks.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.books = action.payload;
    },
    [fetchBooks.rejected]: (state, action) => {},
  },
});

export const { addBookToCart, setBooks } = booksSlice.actions;

export default booksSlice.reducer;
