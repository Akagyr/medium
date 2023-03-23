import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.scss";
import { getRoomsFetch } from "./redux/slices/roomsSlice";
import { getUsersFetch } from "./redux/slices/usersSlice";

function App() {
  const dispatch = useDispatch();
  const { rooms } = useSelector(state => state.rooms);
  const { users } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(getRoomsFetch());
    dispatch(getUsersFetch());
  }, [dispatch]);

  const showRooms = rooms.map(item => <p key={item.id}>{item.type} - {item.price} - {item.guest}</p>);
  const showUsers = users.map(item => <p key={item.id}>{item.id} - {item.password} - {item.image}</p>);

  return (
    <div className="App">
      <div className="rooms">
        {showRooms}
      </div>
      <div className="users">
        {showUsers}
      </div>
    </div>
  );
}

export default App;
