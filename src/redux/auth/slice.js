import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  loading: false,
  error: null,

  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(login.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(logout.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const authReduser = authSlice.reducer;