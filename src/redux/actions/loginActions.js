import { LOG_IN, SIGN_UP } from "../actionTypes/loginActionTypes";

export const login = (userData) => {
    return {
        type: LOG_IN,
        payload: userData,
    };
};

export const signup = (userData) => {
    return {
        type: SIGN_UP,
        payload: userData,
    };
};