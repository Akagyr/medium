import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import "./Auth.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getUsersFetch, authSuccess } from "../../redux/slices/usersSlice";

const Auth = () => {
    const [checked, setChecked] = useState(true);
    const { users } = useSelector(state => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        dispatch(getUsersFetch());
    }, [dispatch]);

    const authError = () => {
        messageApi.open({
            type: "error",
            content: "Invalid username or password",
        });
    };

    const onFinish = (values) => {
        let user = users.find(item => {
            return item.id === values.username && item.password === values.password;
        });
        if(!user) {
            authError();
        } else if(Object.keys(user).length) {
            if(checked) {
                window.localStorage.setItem("user", JSON.stringify(user));
            }
            dispatch(authSuccess(user));
            navigate("../");
        }
    };

    return (
        <>
            {contextHolder}
            <div className="auth-container">
                <div className="auth-title">
                    <h2>Authorization</h2>
                    <hr />
                </div>
                <Form 
                    name="auth-form"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 20 }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                        ]}
                    >
                    <Input />
                    </Form.Item>
                    <Form.Item 
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Checkbox 
                        checked={checked}
                        onChange={(e) => setChecked(e.target.checked)}
                    >Remember me</Checkbox>
                    <Form.Item wrapperCol={{ offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
}

export default Auth;