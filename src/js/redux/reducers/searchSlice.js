import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: "",
    isLoading: false,
    result: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {},
});

export default searchSlice.reducer;
