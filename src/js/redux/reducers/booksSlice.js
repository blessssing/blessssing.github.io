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

export const setAddedToCart = createAsyncThunk(
  "books/setAddedToCart",
  async (id, { rejectWithValue, getState }) => {
    try {
      const response = await new Promise((resolve) => {
        const allBooks = getState().books.allBooks;
        // console.log("allBooks ", allBooks);

        const index = allBooks.findIndex((book) => book.id === id);

        resolve(index);
      });

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const setNotAddedToCart = createAsyncThunk(
  "books/setNotAddedToCart",
  async (id, { rejectWithValue, getState }) => {
    const response = await new Promise((resolve) => {
      try {
        const allBooks = getState().books.allBooks;
        // console.log("allBooks ", allBooks);

        const index = allBooks.findIndex((book) => book.id === id);

        resolve(index);
      } catch (error) {
        return rejectWithValue(error.message);
      }
    });

    return response;
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
    [setAddedToCart.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [setAddedToCart.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.allBooks[action.payload].isAddedToCart = true;
    },
    [setAddedToCart.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [setNotAddedToCart.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [setNotAddedToCart.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.allBooks[action.payload].isAddedToCart = false;
    },
    [setNotAddedToCart.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { setBooks, addAllBooks } = booksSlice.actions;

export default booksSlice.reducer;
