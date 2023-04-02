import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        user: {},
        isAuth: false,
        authError: "",
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.isAuth = true;
        },
        loginFailure: (state, action) => {
            state.authError = action.payload;
        },
        logOut: (state) => {
            state.isAuth = false;
            window.localStorage.removeItem("user");
        },
        clearAuthError: (state) => {
            state.isAuth = "";
        },
    },
});

export const {
    loginSuccess,
    loginFailure,
    logOut,
    clearAuthError,
} = loginSlice.actions;

export default loginSlice.reducer;