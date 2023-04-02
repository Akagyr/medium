import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "./LoginPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login } from "../../redux/actions/loginActions";
import MessageError from "../../components/MessageError";

const LoginPage = () => {
    const { isAuth } = useSelector(state => state.login);
    const [checked, setChecked] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(isAuth) {
            navigate("../");
        }
    }, [isAuth]);

    const onFinish = (values) => {
        dispatch(login(values));
    };

    return (
        <>
            <MessageError />
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
                    // autoComplete="off"
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
                        onChange={(e) => setChecked(e.target.checked)}>
                            Remember me
                    </Checkbox>
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

export default LoginPage;