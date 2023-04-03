import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import "../LoginPage/LoginPage.scss";
import { useDispatch, useSelector} from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import MessageError from "../../components/MessageError";
import { signup } from "../../redux/actions/loginActions";


const SignupPage = () => {
    const { isSignupSuccess } = useSelector(state => state.login);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFinish = (values) => {
        dispatch(signup(values));
    };

    useEffect(() => {
        if(isSignupSuccess) {
            navigate("../login");
        }
    }, [isSignupSuccess]);

    return (
        <>
            <MessageError />
            <div className="auth-container">
                <div className="auth-title">
                    <h2>Sign up</h2>
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
                    <div className="signup-btn">
                        <Button htmlType="submit">
                            <Link to="../login">
                                <LeftOutlined /> Back to login
                            </Link>
                        </Button>
                        <Button type="primary" htmlType="submit">
                            Sign up
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default SignupPage;