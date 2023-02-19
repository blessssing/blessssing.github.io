import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import books from "@/js/books";
import { setError, setLoading } from "./statusHandler";

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
    allBooks: [], //* modify books depth 1 lvl
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
    [fetchBooks.pending]: setLoading,
    [fetchBooks.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.isLoaded = true;
      state.books = action.payload;
    },
    [fetchBooks.rejected]: setError,
  },
});

export const { setBooks, addAllBooks } = booksSlice.actions;

export default booksSlice.reducer;
