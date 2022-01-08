import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const search = createAsyncThunk(
  "search/search",
  async (inputValue, { rejectWithValue, getState }) => {
    try {
      const { allBooks } = getState().books;
      const filtered = [...allBooks].filter((book) => {
        return (
          book.title.toLowerCase().includes(inputValue.toLowerCase()) ||
          book.author.toLowerCase().includes(inputValue.toLowerCase())
        );
      });

      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(inputValue);
        }, 10);
      });

      return { filtered, response };
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: "",
    isLoading: false,
    results: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [search.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
      state.isLoading = true;
    },
    [search.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.isLoading = false;
      state.value = action.payload.response;
      if (!action.payload.response) {
        state.results = [];
      } else {
        state.results = action.payload.filtered;
      }
    },
    [search.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default searchSlice.reducer;
