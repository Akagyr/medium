import { takeEvery, put } from "redux-saga/effects";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../../firebase";
import { getUsersFetch, getUsersSuccess, getUsersFailure } from "../slices/usersSlice";


function* usersSagaFetcher() {
    try {
        const querySnapshot = yield (getDocs(collection(db, "accounts")));
        let users = [];
        querySnapshot.forEach((doc) => {
            users.push({...doc.data(), id: doc.id});
        });
        yield put(getUsersSuccess(users));
    } catch(error) {
        yield put(getUsersFailure(error));
    }
}

function* usersSaga() {
    yield takeEvery(getUsersFetch, usersSagaFetcher);
}

export default usersSaga;