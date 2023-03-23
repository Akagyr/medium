import { createSlice } from "@reduxjs/toolkit";

const roomsSlice = createSlice({
    name: "rooms",
    initialState: {
        rooms: [],
        isLoading: false,
        fetchError: "",
    },
    reducers: {
        getRoomsFetch: (state) => {
            state.isLoading = true;
        },
        getRoomsSuccess: (state, action) => {
            state.rooms = action.payload;
            state.isLoading = false;
        },
        getRoomsFailure: (state, action) => {
            state.fetchError = action.payload;
            state.isLoading = false;
        },
    },
});

export const {
    getRoomsFetch,
    getRoomsSuccess,
    getRoomsFailure,
} = roomsSlice.actions;

export default roomsSlice.reducer;