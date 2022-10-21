import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as userRequest from "../requests/userRequest";

const userState = {
  loading: false,
  data: {},
  error: "",
};

export const sendSignUpRequest = createAsyncThunk(
  "REGISTER",
  userRequest.sendSignUpRequest
);

export const sendLoginRequest = createAsyncThunk(
  "LOGIN",
  userRequest.sendLoginRequest
);

export const sendLogoutRequest = createAsyncThunk(
  "LOGOUT",
  userRequest.sendLogoutRequest
);

export const persistUser = createAsyncThunk(
  "PERSIST",
  userRequest.persistUserRequest
);

const userSlice = createSlice({
  name: "user",
  initialState: userState,
  extraReducers: {
    [sendSignUpRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [sendSignUpRequest.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [sendSignUpRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [sendLoginRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [sendLoginRequest.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [sendLoginRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [sendLogoutRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [sendLogoutRequest.fulfilled]: (state, action) => {
      state.data = {};
      state.loading = false;
    },
    [sendLogoutRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = {};
    },
    [persistUser.pending]: (state, action) => {
      state.loading = true;
    },
    [persistUser.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [persistUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default userSlice.reducer;








