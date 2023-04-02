import { Button, Carousel, Row, Col } from "antd";
import { HomeOutlined, CheckOutlined } from "@ant-design/icons";
import React from "react";
import { useSelector } from "react-redux";
import "./SingleRoomPage.scss";
import { Link } from "react-router-dom";

const SingleRoomPage = () => {
    let room = useSelector(state => state.rooms.room);
    if(Object.keys(room).length === 0 && localStorage.getItem("room")){
        room = JSON.parse(localStorage.getItem("room"));
    }

    return (
        <>
            <Button className="back-home-btn" type="link">
                <Link to="/">
                    <HomeOutlined /> Back Home
                </Link>
            </Button>
            <Row>
                <Col span={10}>
                    <Carousel autoplay dots={false}>
                        {room.gallery.map((item, index) => (
                        <div key={index} className="slide-image">
                            <img src={item} alt={item} />
                        </div>))}
                    </Carousel>
                </Col>
                <Col span={7} className="room-info">
                    <h2>Room {room.number}</h2>
                    <p><b>Type:</b> {room.type}</p>
                    <p><b>Occupancy:</b> {room.occupancy}</p>
                    <p><b>Price</b> {room.price + "$"}</p>
                    <p><b>Guest:</b> {!room.guest ? "free" : room.guest}</p>
                </Col>
                <Col span={7}>
                    <div className="check-btns">
                        <Button>Check In</Button>
                        <Button type="primary">Check Out</Button>
                    </div>
                    <div className="room-features">
                        <h4>Features:</h4>
                        {room.features.map((item, index) => <p key={index}><CheckOutlined /> {item}</p>)}
                    </div>
                </Col>
            </Row>
            <Row className="room-description">
                <Col span={2}>
                    <h4>Description:</h4>
                </Col>
                <Col span={22}>
                    <p className="room-description__text">{room.description}</p>
                </Col>
            </Row>
        </>
    );
}

export default SingleRoomPage;