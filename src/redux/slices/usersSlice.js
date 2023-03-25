import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        user: {},
        isAuth: false,
        authError: "",
    },
    reducers: {
        getUsersFetch: () => {
        },
        getUsersSuccess: (state, action) => {
            state.users = action.payload;
        },
        getUsersFailure: (state, action) => {
            state.authError = action.payload;
        },
        authSuccess: (state, action) => {
            state.user = action.payload;
            state.isAuth = true;
        },
    },
});

export const {
    getUsersFetch,
    getUsersSuccess,
    getUsersFailure,
    authSuccess,
} = usersSlice.actions;

export default usersSlice.reducer;