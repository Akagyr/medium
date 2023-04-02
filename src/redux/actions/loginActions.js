import { LOG_IN } from "../actionTypes/loginActionTypes";

export const login = (user) => {
    return {
        type: LOG_IN,
        payload: user,
    };
};