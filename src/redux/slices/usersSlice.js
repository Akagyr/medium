import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
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
    },
});

export const {
    getUsersFetch,
    getUsersSuccess,
    getUsersFailure,
} = usersSlice.actions;

export default usersSlice.reducer;