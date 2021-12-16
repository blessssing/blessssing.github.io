import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setNotAddedToCart } from "@reducers/booksSlice";

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
    cart: [
      //* plug
      // {
      //   id: "8",
      //   article: "8",
      //   title: "Brawe New World",
      //   description: "Далеко-далеко за словесными горами в стране.",
      //   age: "16+",
      //   author: "Oldos Hecksley",
      //   img: "images/oldos hecksley bnw.jpg",
      //   price: 45,
      // },
    ],
  },
  reducers: {
    addBookToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeBookFromCart: (state, action) => {
      state.cart = state.cart.filter(({ id }) => id !== action.payload);
    },
  },
  extraReducers: {
    [calculateTotal.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [calculateTotal.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.total = action.payload;
    },
    [calculateTotal.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [moveToTrash.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [moveToTrash.fulfilled]: (state, action) => {
      state.status = "resolved";
    },
    [moveToTrash.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { addBookToCart, removeBookFromCart } = cartSlice.actions;

export default cartSlice.reducer;
