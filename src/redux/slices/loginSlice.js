import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  photo: null,
  isLoggedIn: false,
};

export const loginSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    logIn: (state, { payload }) => {
      state.username = payload[0];
      state.photo = payload[1];
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.username = null;
      state.photo = null;
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = loginSlice.actions;

export default loginSlice.reducer;
