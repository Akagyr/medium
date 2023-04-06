import { takeEvery, put} from "redux-saga/effects";
import { collection, getDocs, updateDoc, doc} from "firebase/firestore";
import moment from "moment";

import { getRoomsFailure, getRoomsFetch, getRoomsSuccess } from "../slices/roomsSlice";
import { db } from "../../firebase";

function* roomsSagaFetcher() {
    try {
        const querySnapshot = yield (getDocs(collection(db, "rooms")));
        let rooms = [];
        querySnapshot.forEach((item) => {
            rooms.push({...item.data(), id: item.id});
            if(item.data().checkInDate < moment().endOf("day").format("YYYY-MM-DD")) {
                try {
                    updateDoc(doc(db, "rooms", item.id), {
                        guest: "",
                        isCheckedIn: false,
                        checkInDate: null,
                    });
                } catch(error) {
                    console.log(error.message);
                }
            }
        });
        yield put(getRoomsSuccess(rooms));
    } catch(error) {
        yield put(getRoomsFailure(error));
    }
}

function* roomsSaga() {
    yield takeEvery(getRoomsFetch, roomsSagaFetcher);
}

export default roomsSaga;