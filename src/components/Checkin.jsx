import React from "react";
import { Modal, Form, Input, DatePicker, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import moment from "moment/moment";
import { useDispatch } from "react-redux";

import "../pages/SingleRoomPage/SingleRoomPage.scss";
import { checkin } from "../redux/actions/roomsActions";
import { getRoomsFetch } from "../redux/slices/roomsSlice";

const Checkin = ({isModalOpen, setIsModalOpen, roomId}) => {
    const dispatch = useDispatch();

    const disabledDate = (current) => {
        return current && current < moment().endOf("day");
    };

    const onFinish = (values) => {
        dispatch(checkin({
            id: roomId,
            guest: values.name,
            checkInDate: !values.date ? null : values.date.format("YYYY-MM-DD"),
        }));
        dispatch(getRoomsFetch());
        setIsModalOpen(false);
    };

    const onCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <Modal 
            title="Check In" 
            open={isModalOpen}
            onCancel={onCancel}
            footer={null}
        >
            <hr className="separating-line" />
            <Form
                name="checkin"
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Please, enter the guest's name:"
                    name="name"
                    rules={[
                        {
                        required: true,
                        message: "Please input guest's name!",
                        },
                    ]}
                >
                    <Input placeholder="Guest's name" prefix={<UserOutlined />} />
                </Form.Item>
                <Form.Item
                    label="Please, enter the approximate date of guest checkout:"
                    name="date"
                    rules={[
                        {
                        required: false,
                        },
                    ]}
                >
                    <DatePicker disabledDate={disabledDate} />
                </Form.Item>
                <hr className="separating-line" />
                <div className="modal-btn-group">
                    <Button onClick={() => onCancel()}>
                        Cancel
                    </Button>
                    <Button type="primary" htmlType="submit">
                        Check In
                    </Button>
                </div>
            </Form>
        </Modal>
    );
}

export default Checkin;