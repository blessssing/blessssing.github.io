import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const calculateTotal = createAsyncThunk(
  "cart/calculateTotal",
  async (_, { rejectWithValue, getState }) => {
    try {
      console.log("cart/calculateTotal");
      console.group("getState");
      console.log(getState());
      console.groupEnd("getState");

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
      state.error = null;
      state.status = "loading";
    },
    [calculateTotal.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.total = action.payload;
    },
    [calculateTotal.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { addBookToCart, removeBookFromCart } = cartSlice.actions;

export default cartSlice.reducer;
