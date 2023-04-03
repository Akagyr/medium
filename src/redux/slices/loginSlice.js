import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: {
        user: {},
        isAuth: false,
        authError: "",
        signupError: "",
        isSignupSuccess: false,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.isAuth = true;
        },
        loginFailure: (state, action) => {
            state.authError = action.payload;
        },
        singupSuccess: (state) => {
            state.isSignupSuccess = true;
        },
        singupFailure: (state, action) => {
            state.signupError = action.payload;
        },
        logOut: (state) => {
            state.isAuth = false;
            window.localStorage.removeItem("user");
        },
        clearErrors: (state) => {
            state.authError = "";
            state.signupError = "";
        },
    },
});

export const {
    loginSuccess,
    loginFailure,
    singupSuccess,
    singupFailure,
    logOut,
    clearErrors,
} = loginSlice.actions;

export default loginSlice.reducer;