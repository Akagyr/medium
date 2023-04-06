import React, { useEffect, useState } from "react";
import { Button, Checkbox, Table } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./RoomsTablePage.scss";
import useRooms from "../../hook/useRooms";
import Preloader from "../../components/Preloader/Preloader";

const RoomsTablePage = () => {
    const rooms = useRooms();
    const { isRoomsLoading } = useSelector(state => state.rooms);
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const [checkedFreeRooms, setCheckedFreeRooms] = useState(false);
    const [typeDataFilter, setTypeDataFilter] = useState([]);
    const [occupancyDataFilter, setOccupancyDataFilter] = useState([]);
    const [guestDataFilter, setGuestDataFilter] = useState([]);
    const [dataTable, setDataTable] = useState([]);

    useEffect(() => {
        if(rooms.length !== 0) {
            setTypeDataFilter(Array.from(new Set(rooms.map(item => item.type))));
            setOccupancyDataFilter(Array.from(new Set(rooms.map(item => item.occupancy))));
            setGuestDataFilter(Array.from(new Set(rooms.map(item => item.guest))).filter(item => item !== ""));
            setDataTable(rooms.map(item => {
                return {
                    key: item.id,
                    id: item.id,
                    number: item.number,
                    type: item.type,
                    occupancy: item.occupancy,
                    price: item.price,
                    guest: item.guest,
                };
            }));
        }
    }, [rooms]);

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
                    <Link to={`rooms/${record.id}`}>
                        More information
                    </Link>
                </Button>
            ),
            width: "10%",
        },
    ];

    return (
        <>
            { isRoomsLoading
            ?<Preloader />
            :<>
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
                        dataSource={checkedFreeRooms ? dataTable.filter(item => item.guest === "") : dataTable} 
                        onChange={handleChange}
                    />
                </div>
            </>}
        </>
    );
}

export default RoomsTablePage;