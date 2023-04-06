import { Button, Carousel, Row, Col } from "antd";
import { HomeOutlined, CheckOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./SingleRoomPage.scss";
import Checkin from "../../components/Checkin";
import Checkout from "../../components/Checkout";
import useRooms from "../../hook/useRooms";
import Preloader from "../../components/Preloader/Preloader";

const SingleRoomPage = () => {
    const rooms = useRooms();
    const {roomId} = useParams();
    const {isRoomsLoading} = useSelector(state => state.rooms);
    const [isModalCheckinOpen, setIsModalCheckinOpen] = useState(false);
    const [isModalCheckoutOpen, setIsModalCheckoutOpen] = useState(false);
    const [room, setRoom] = useState({
        gallery: [],
        features: [],
    });

    useEffect(() => {
        if(rooms.length !== 0) {
            setRoom(rooms.find(item => item.id === roomId));
        }
    }, [rooms, roomId]);

    return (
        <>  
            { isRoomsLoading
            ? <Preloader />
            :<>
                <Checkin isModalOpen={isModalCheckinOpen} setIsModalOpen={setIsModalCheckinOpen} roomId={room.id} />
                <Checkout isModalOpen={isModalCheckoutOpen} setIsModalOpen={setIsModalCheckoutOpen} roomNumber={room.number} roomId={room.id} />
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
                            <Button disabled={room.isCheckedIn} onClick={() => setIsModalCheckinOpen(true)}>Check In</Button>
                            <Button disabled={!room.isCheckedIn} type="primary" onClick={() => setIsModalCheckoutOpen(true)}>Check Out</Button>
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
            </>}
        </>
    );
}

export default SingleRoomPage;