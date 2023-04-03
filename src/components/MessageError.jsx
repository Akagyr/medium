import React, { useEffect } from "react";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { clearErrors } from "../redux/slices/loginSlice";

const MessageError = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const { authError, signupError } = useSelector(state => state.login);
    const dispatch = useDispatch();

    useEffect(() => {
        if(authError !== "") {
            messageApi.open({
                type: "error",
                content: "Wrong email or password",
            });
            dispatch(clearErrors());
        }
        if(signupError !== "") {
            messageApi.open({
                type: "error",
                content: signupError,
            });
            dispatch(clearErrors());
        }
    }, [authError, signupError]);

    return (
        <>{contextHolder}</>
    );
}

export default MessageError;