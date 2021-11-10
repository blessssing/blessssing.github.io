import { configureStore } from "@reduxjs/toolkit";
import { booksSlice } from "@reducers";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();

export default configureStore({
  reducer: {
    books: booksSlice,
  },
  // middleware: [loggerMiddleware],
});
