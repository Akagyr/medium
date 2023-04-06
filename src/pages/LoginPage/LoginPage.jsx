import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import "./LoginPage.scss";
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
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Please input your email!",
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
                    <div className="signup-link">
                        <p>Do not account? <Link to="../signup">Signup now</Link></p>
                    </div>
                    <div className="login-btn">
                        <Button type="primary" htmlType="submit">
                            Log in
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default LoginPage;