import { configureStore } from "@reduxjs/toolkit";
import { booksSlice } from "../reducers";

export default configureStore({
  reducer: {
    booksSlice,
  },
});
