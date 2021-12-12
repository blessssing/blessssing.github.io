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
  async (currentBook, { rejectWithValue, getState }) => {
    try {
      const response = await new Promise((resolve) => {
        console.log("currentBook ", currentBook);
        console.group("getState");
        console.log(getState());
        console.groupEnd("getState");
        const allBooks = getState().books.allBooks;
        console.log("allBooks ", allBooks);

        const index = allBooks.findIndex((book) => book.id === currentBook.id);
        console.log("index", index);

        resolve(index);
      });

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
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
      console.log("action fulfilled ", action);
      state.allBooks[action.payload].isAddedToCart = true;
    },
    [setAddedToCart.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { setBooks, addAllBooks } = booksSlice.actions;

export default booksSlice.reducer;
