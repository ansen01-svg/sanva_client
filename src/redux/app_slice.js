import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "./app_thunks";

export const getCurrentUser = createAsyncThunk(
  "appSlice/getCurrentUser",
  getUser
);

const initialState = {
  mode: localStorage.getItem("mode") || "light",
  user: null,
  userProfile: {},
};

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setMode: (state, { payload }) => {
      if (state.mode === payload) return;
      state.mode = payload;
    },
    setUser: (state) => {
      const user = localStorage.getItem("user");

      if (user) {
        const currentUser = JSON.parse(localStorage.getItem("user"));
        state.user = currentUser.user;
      } else {
        state.user = null;
      }
    },
  },
  extraReducers: {
    [getCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { setMode, setUser } = appSlice.actions;

export default appSlice.reducer;
