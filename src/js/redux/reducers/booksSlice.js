import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import books from "@/js/books";

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await new Promise((resolve) => resolve(books));

      console.log("response ", response);
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    status: null,
    isLoaded: false,
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
      state.isLoaded = true;
      state.books = action.payload;
    },
    [fetchBooks.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { addBookToCart, setBooks } = booksSlice.actions;

export default booksSlice.reducer;
