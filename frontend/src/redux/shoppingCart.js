import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as shoppingCartRequest from "../requests/shoppingCartRequest";


const shoppingCartState = {
  loading: false,
  data: {},
  error: "",
};

export const addToShoppingCart = createAsyncThunk(
  "ADD_TO_SHOPPINGCART",
  shoppingCartRequest.addToShoppingCartRequest
);

export const removeFromShoppingCart = createAsyncThunk(
  "REMOVE_FROM_SHOPPINGCART",
  shoppingCartRequest.removeFromShoppingCartRequest
);

export const getShoppingCart = createAsyncThunk(
  "GET_SHOPPINGCART",
  shoppingCartRequest.getShoppingCartRequest
);

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: shoppingCartState,
  extraReducers: {
    [addToShoppingCart.pending]: (state, action) => {
      state.loading = true;
    },
    [addToShoppingCart.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [addToShoppingCart.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [removeFromShoppingCart.pending]: (state, action) => {
      state.loading = true;
    },
    [removeFromShoppingCart.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [removeFromShoppingCart.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getShoppingCart.pending]: (state, action) => {
      state.loading = true;
    },
    [getShoppingCart.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getShoppingCart.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default shoppingCartSlice.reducer;
