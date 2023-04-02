import React, { useEffect, useState } from "react";
import { Button, Checkbox, Table } from "antd";
import "./RoomsTablePage.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getRoomsFetch, selectRoom } from "../../redux/slices/roomsSlice";

const RoomsTablePage = () => {
    const { rooms } = useSelector(state => state.rooms);
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const [checkedFreeRooms, setCheckedFreeRooms] = useState(false);
    const typeDataFilter = Array.from(new Set(rooms.map(item => item.type)));
    const occupancyDataFilter = Array.from(new Set(rooms.map(item => item.occupancy)));
    const guestDataFilter = Array.from(new Set(rooms.map(item => item.guest))).filter(item => item !== "");
    const data = rooms.map(item => {
        return {
            key: item.number,
            number: item.number,
            type: item.type,
            occupancy: item.occupancy,
            price: item.price,
            guest: item.guest,
        };
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if(rooms.length === 0) {
            dispatch(getRoomsFetch());
        }
    }, []);

    const handleChange = (pagination, filters, sorter) => {
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };
    
    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
    };

    const columns = [
        {
            title: "Number",
            dataIndex: "number",
        },
        {
            title: "Type",
            dataIndex: "type",
            key: "type",
            filters: typeDataFilter.map(item => {
                return {
                    text: item,
                    value: item,
                };
            }),
            filteredValue: filteredInfo.type || null,
            onFilter: (value, record) => record.type.includes(value),
        },
        {
            title: "Occupancy",
            dataIndex: "occupancy",
            key: "occupancy",
            filters: occupancyDataFilter.map(item => {
                return {
                    text: item,
                    value: item,
                };
            }),
            filteredValue: filteredInfo.occupancy || null,
            onFilter: (value, record) => record.occupancy === value,
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            sorter: (a, b) => a.price - b.price,
            sortOrder: sortedInfo.columnKey === "price" ? sortedInfo.order : null,
        },
        {
            title: "Guest",
            dataIndex: "guest",
            key: "guest",
            filters: guestDataFilter.map(item => {
                return {
                    text: item,
                    value: item,
                };
            }),
            filterSearch: true,
            filteredValue: filteredInfo.guest || null,
            onFilter: (value, record) => record.guest.includes(value),
        },
        {
            title: "",
            dataIndex: "button",
            render: (_, record) => (
                <Button className="more-info-btn" type="primary">
                    <Link to={`rooms/${record.number}`} onClick={() => dispatch(selectRoom(record.number))}>
                        More information
                    </Link>
                </Button>
            ),
            width: "10%",
        },
    ];

    return (
        <>
            <div className="rooms-filters">
                <Button type="primary" onClick={clearAll}>Clear all filters</Button>
                <Checkbox 
                    checked={checkedFreeRooms}
                    onChange={(e) => setCheckedFreeRooms(e.target.checked)}>
                        Free rooms only
                </Checkbox>
            </div>
            <div className="rooms-list">
                <Table 
                    columns={columns} 
                    dataSource={checkedFreeRooms ? data.filter(item => item.guest === "") : data} 
                    onChange={handleChange}
                />
            </div>
        </>
    );
}

export default RoomsTablePage;