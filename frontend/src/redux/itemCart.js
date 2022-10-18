import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as itemCartRequest from "../requests/itemCartRequest";


const itemCardInitialState = {
  loading: false,
  data: [],
  error: "",
};

export const addOrCreateItemCart = createAsyncThunk(
  "ADD_OR_CREATE_ITEMCART",
  itemCartRequest.addOrCreateItemCartRequest
);

export const deleteItemCart = createAsyncThunk(
  "REMOVE_ITEMCART",
  itemCartRequest.deleteItemCartRequest
);

export const getItemCart = createAsyncThunk(
  "GET_ITEMCARTS",
  itemCartRequest.getItemCartRequest
);

const itemCartSlice = createSlice({
  name: "itemCard",
  initialState: itemCardInitialState,
  extraReducers: {
    [addOrCreateItemCart.pending]: (state, action) => {
      state.loading = true;
    },
    [addOrCreateItemCart.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [addOrCreateItemCart.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [deleteItemCart.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteItemCart.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [deleteItemCart.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getItemCart.pending]: (state, action) => {
      state.loading = true;
    },
    [getItemCart.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getItemCart.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default itemCartSlice.reducer;