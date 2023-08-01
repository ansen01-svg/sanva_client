import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "./app_thunks";


export const getCurrentUser = createAsyncThunk('appSlice/getUser', getUser)

const initialState = {
    mode: localStorage.getItem('mode') || 'light',
    isUserLoggedIn: false,
    user: null,
}

export const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        setMode: (state, { payload }) => {
            if(state.mode === payload) return;
            state.mode = payload
        },
        setSidebar: state => state.isSidebarOpen = true,
        setUserLogIn: state => state.isUserLoggedIn = true,
    },
    extraReducers: {
        [getUser.fulfilled]: (state, { payload }) => {
            state.user = payload
        }
    }
})

export const { setMode, setSidebar, setUserLogIn } = appSlice.actions;


export default appSlice.reducer;