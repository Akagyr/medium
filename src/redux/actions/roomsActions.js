import { CHECK_IN, CHECK_OUT } from "../actionTypes/roomsActionTypes";

export const checkin = (roomUpdateData) => {
    return {
        type: CHECK_IN,
        payload: roomUpdateData,
    };
};

export const checkout = (roomUpdateData) => {
    return {
        type: CHECK_OUT,
        payload: roomUpdateData,
    };
};