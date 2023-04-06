import { takeEvery } from "redux-saga/effects";
import { updateDoc, doc } from "firebase/firestore";

import { CHECK_OUT } from "../actionTypes/roomsActionTypes";
import { db } from "../../firebase";


function* checkoutSagaUpdater(action) {
    try {
        yield updateDoc(doc(db, "rooms", action.payload), {
            guest: "",
            isCheckedIn: false,
            checkInDate: null,
        });
    } catch(error) {
        console.log(error.message);;
    }
}

function* checkoutSaga() {
    yield takeEvery(CHECK_OUT, checkoutSagaUpdater);
}

export default checkoutSaga;