import React, { useEffect } from "react";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { clearAuthError } from "../redux/slices/loginSlice";

const MessageError = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const { authError } = useSelector(state => state.login);
    const dispatch = useDispatch();

    useEffect(() => {
        if(authError !== "") {
            messageApi.open({
                type: "error",
                content: "Invalid username or password",
            });
            dispatch(clearAuthError());
        }
    }, [authError]);

    return (
        <>{contextHolder}</>
    );
}

export default MessageError;