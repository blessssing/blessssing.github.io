import { configureStore } from "@reduxjs/toolkit";
import { booksSlice, cartSlice } from "@reducers";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();

export default configureStore({
  reducer: {
    books: booksSlice,
    cart: cartSlice,
  },
  // middleware: [loggerMiddleware],
});
