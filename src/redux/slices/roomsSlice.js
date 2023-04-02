import { createSlice } from "@reduxjs/toolkit";

const roomsSlice = createSlice({
    name: "rooms",
    initialState: {
        rooms: [],
        room: {},
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
        selectRoom: (state, action) => {
            state.room = state.rooms.find(num => num.number === action.payload);
        },
    },
});

export const {
    getRoomsFetch,
    getRoomsSuccess,
    getRoomsFailure,
    selectRoom,
} = roomsSlice.actions;

export default roomsSlice.reducer;