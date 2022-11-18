import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import * as searchOrderRequest from "../requests/searchRequest";

const searchState = {
    loading: false,
    data: [],
    orders:0,
}

export const getSearchByName = createAsyncThunk(
    "GET-SEARCH-BY-NAME",
    searchOrderRequest.getSearchByNameRequest
);

const searchSlice = createSlice({
    name: "search",
    initialState: searchState,
    extraReducers: {
        [getSearchByName.pending]: (state, action) => {
            state.loading = true;
        },
        [getSearchByName.fulfilled]: (state, action) => {
            state.data = action.payload.data.data;
            state.loading = false;
            state.orders = action.payload.data.cantidad;
        },
        [getSearchByName.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
    }
});

export default searchSlice.reducer;