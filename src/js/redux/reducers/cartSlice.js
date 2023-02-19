import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setNotAddedToCart } from "@reducers/booksSlice";
import { setError, setLoading } from "./statusHandler";

export const calculateTotal = createAsyncThunk(
  "cart/calculateTotal",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { cart } = getState().cart;

      const response = await new Promise((resolve) => {
        const total = cart.reduce((accumulator, book) => {
          return accumulator + book.price;
        }, 0);

        resolve(total);
      });

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const moveToTrash = createAsyncThunk(
  "cart/moveToTrash",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      dispatch(setNotAddedToCart(id));
      dispatch(removeBookFromCart(id));
      dispatch(calculateTotal());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    status: null,
    error: null,
    total: 0,
    cart: [],
  },
  reducers: {
    addBookToCart: (state, action) => {
      const isAddedToCart = state.cart.some(
        (item) => item.id === action.payload.id
      );
      if (!isAddedToCart) state.cart.push(action.payload);
    },
    removeBookFromCart: (state, action) => {
      state.cart = state.cart.filter(({ id }) => id !== action.payload);
    },
  },
  extraReducers: {
    [calculateTotal.pending]: setLoading,
    [calculateTotal.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.total = action.payload;
    },
    [calculateTotal.rejected]: setError,
    [moveToTrash.pending]: setLoading,
    [moveToTrash.fulfilled]: (state, action) => {
      state.status = "resolved";
    },
    [moveToTrash.rejected]: setError,
  },
});

export const { addBookToCart, removeBookFromCart } = cartSlice.actions;

export default cartSlice.reducer;
