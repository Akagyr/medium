import React, { useEffect } from "react";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Link, useNavigate } from "react-router-dom";

import "./MainLayout.scss";
import RoomsTablePage from "../pages/RoomsTablePage/RoomsTablePage";
import SingleRoomPage from "../pages/SingleRoomPage/SingleRoomPage";
import { loginSuccess, logOut } from "../redux/slices/loginSlice";

const { Header, Content } = Layout;

const MainLayout = () => {
    const { isAuth, user } = useSelector(state => state.login);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuth && !localStorage.getItem("user")) {
            navigate("../login");
        } else {
            dispatch(loginSuccess(JSON.parse(localStorage.getItem("user"))));
        }
    }, [isAuth]);

    return (
        <Layout className="layout">
            <Header className="header">
                <div className="logo">
                    <Link to="/">
                        <h2>HOTEL</h2>
                    </Link>
                </div>
                <div className="user-account">
                    <img 
                        src={user.image 
                            ? user.image 
                            : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                            } 
                        alt="icon-user" />
                    <p onClick={() => dispatch(logOut())}>Log out</p>
                </div>
            </Header>
            <Content className="content">
                <Routes>
                    <Route index element={<RoomsTablePage />} />
                    <Route path="rooms/:roomId" element={<SingleRoomPage />} />
                </Routes>
            </Content>
        </Layout>
    );
}

export default MainLayout;