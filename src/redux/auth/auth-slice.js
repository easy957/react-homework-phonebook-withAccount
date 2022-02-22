import { createSlice } from '@reduxjs/toolkit';

import { authOperations } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshingUser: true,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.rejected](state, { payload }) {
      state.error = payload;
    },
    [authOperations.logOut.fulfilled](state, { payload }) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.refreshUser.pending](state, actions) {
      state.isRefreshingUser = true;
    },
    [authOperations.refreshUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isRefreshingUser = false;
    },
    [authOperations.refreshUser.rejected](state, action) {
      state.isRefreshingUser = false;
    },
  },
});

export default authSlice.reducer;
