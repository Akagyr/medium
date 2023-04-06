import { takeEvery } from "redux-saga/effects";
import { updateDoc, doc } from "firebase/firestore";

import { CHECK_IN } from "../actionTypes/roomsActionTypes";
import { db } from "../../firebase";


function* checkinSagaUpdater(action) {
    try {
        yield updateDoc(doc(db, "rooms", action.payload.id), {
            guest: action.payload.guest,
            isCheckedIn: true,
            checkInDate: action.payload.checkInDate,
        });
    } catch(error) {
        console.log(error.message);;
    }
}

function* checkinSaga() {
    yield takeEvery(CHECK_IN, checkinSagaUpdater);
}

export default checkinSaga;