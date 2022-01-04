import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const search = createAsyncThunk(
  "search/search",
  async (inputValue, { rejectWithValue }) => {
    try {
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(inputValue);
        });
      }, 2000);
      return response;
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
      console.log("action ", action);
      state.status = "resolved";
      state.isLoading = false;
      state.value = action.payload;
    },
    [search.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default searchSlice.reducer;
