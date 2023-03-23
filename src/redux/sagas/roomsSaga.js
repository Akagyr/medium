import { takeEvery, put } from "redux-saga/effects";
import { collection, getDocs } from "firebase/firestore";

import { getRoomsFailure, getRoomsFetch, getRoomsSuccess } from "../slices/roomsSlice";
import { db } from "../../firebase";


function* roomsSagaFetcher() {
    try {
        const querySnapshot = yield (getDocs(collection(db, "rooms")));
        let rooms = [];
        querySnapshot.forEach((doc) => {
            rooms.push({...doc.data(), id: doc.id});
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