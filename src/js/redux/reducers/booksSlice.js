import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import books from "@/js/books";

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await new Promise((resolve) => resolve(books));
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
    allBooks: [],
    status: null,
    isLoaded: false,
    error: null,
  },
  reducers: {
    setBooks(state, action) {
      state.books = action.payload;
    },
    addAllBooks(state, action) {
      state.allBooks = [...books].reduce(
        (accumulator, item) => [...accumulator, ...item.books],
        []
      );
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

export const { setBooks, addAllBooks } = booksSlice.actions;

export default booksSlice.reducer;
