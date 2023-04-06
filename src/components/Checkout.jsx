import React from "react";
import { Modal } from "antd";
import { useDispatch } from "react-redux";

import "../pages/SingleRoomPage/SingleRoomPage.scss";
import { checkout } from "../redux/actions/roomsActions";
import { getRoomsFetch } from "../redux/slices/roomsSlice";

const Checkout = ({isModalOpen, setIsModalOpen, roomNumber, roomId}) => {
    const dispatch = useDispatch();

    const handleOk = () => {
        dispatch(checkout(roomId));
        dispatch(getRoomsFetch());
        setIsModalOpen(false);
    };

    const onCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <Modal 
            title="Check Out" 
            open={isModalOpen}
            onCancel={onCancel}
            onOk={handleOk}
            okText="Confirm"
        >
            <hr className="separating-line" />
            <p className="checkout-text">Do you confirm the check-out Room {roomNumber}?</p>
            <hr className="separating-line" />
        </Modal>
    );
}

export default Checkout;