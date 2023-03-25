import React from "react";

import { Breadcrumb, Layout } from "antd";
import "./MainLayout.scss";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const { Header, Content } = Layout;

const MainLayout = () => {
    const { isAuth, user } = useSelector(state => state.users);

    return (
        <>
            {!isAuth && <Navigate to="auth" />}
            <Layout className="layout">
                <Header className="header">
                    <div className="logo">
                        <h2>HOTEL</h2>
                    </div>
                    <div className="user-account">
                        <img 
                            src={user.image 
                                ? user.image 
                                : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                                } 
                            alt="icon-user" />
                        <p>Log out</p>
                    </div>
                </Header>
                <Content className="content">
                    <Breadcrumb style={{ margin: "16px 0" }}>
                    </Breadcrumb>
                    <div style={{ padding: 24, minHeight: 380, background: "white"}}>Content</div>
                </Content>
            </Layout>
        </>
    );
}

export default MainLayout;