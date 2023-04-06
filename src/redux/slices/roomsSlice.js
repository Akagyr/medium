import { createSlice } from "@reduxjs/toolkit";

const roomsSlice = createSlice({
    name: "rooms",
    initialState: {
        rooms: [],
        isRoomsLoading: false,
        fetchError: "",
    },
    reducers: {
        getRoomsFetch: (state) => {
            state.isRoomsLoading = true;
        },
        getRoomsSuccess: (state, action) => {
            state.rooms = action.payload;
            state.isRoomsLoading = false;
        },
        getRoomsFailure: (state, action) => {
            state.fetchError = action.payload;
            state.isRoomsLoading = false;
        },
    },
});

export const {
    getRoomsFetch,
    getRoomsSuccess,
    getRoomsFailure,
} = roomsSlice.actions;

export default roomsSlice.reducer;