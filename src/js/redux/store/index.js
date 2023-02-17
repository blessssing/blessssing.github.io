import { configureStore } from "@reduxjs/toolkit";
import { booksSlice, cartSlice, searchSlice } from "@reducers";
// import { createLogger } from "redux-logger";

// const loggerMiddleware = createLogger();

export default configureStore({
  reducer: {
    books: booksSlice,
    cart: cartSlice,
    search: searchSlice,
  },
  // middleware: [loggerMiddleware],
});
