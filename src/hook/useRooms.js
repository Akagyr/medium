import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getRoomsFetch } from "../redux/slices/roomsSlice";

const useRooms = () => {
    const {rooms} = useSelector(state => state.rooms);
    const dispatch = useDispatch();

    useEffect(() => {
        if(rooms.length === 0) {
            dispatch(getRoomsFetch());
        }
    }, [rooms]);

    return rooms;
}

export default useRooms;