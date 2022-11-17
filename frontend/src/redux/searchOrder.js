import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import * as searchOrderRequest from "../requests/searchRequest";

const searchState = {
    loading: false,
    data: [],
    categories:[],
    page:1,
    orders:1,
    search:'',
    limitPage:1,
    orderSense:'',
}

export const getSearchByName = createAsyncThunk(
    "GET-SEARCH-BY-NAME",
    searchOrderRequest.getSearchByName
);

const searchSlice = createSlice({
    name: "search",
    initialState: searchState,
    extraReducers: {
        [getSearchByName.pending]: (state, action) => {
            state.loading = true;
        },
        [getSearchByName.fulfilled]: (state, action) => {
            state.data = action.payload.response.data.data;
            state.loading = false;
            state.categories = action.payload.response.data.categorias;
            state.page = action.payload.page
            state.orders = action.payload.response.data.cantidad;
            state.search = action.payload.search
            state.limitPage = action.payload.limitPage
            state.orderSense = action.payload.orderSense
        },
        [getSearchByName.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
    }
});

export default searchSlice.reducer;