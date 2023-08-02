import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "./app_thunks";


export const getCurrentUser = createAsyncThunk('appSlice/getCurrentUser', getUser)

const initialState = {
    mode: localStorage.getItem('mode') || 'light',
    user: (localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null),
    userProfile: {},
}

export const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        setMode: (state, { payload }) => {
            if(state.mode === payload) return;
            state.mode = payload
        },
    },
    extraReducers: {
        [getCurrentUser.fulfilled]: (state, { payload }) => {
            state.user = payload
        }
    }
});

export const { setMode, setUserLogIn } = appSlice.actions;


export default appSlice.reducer;