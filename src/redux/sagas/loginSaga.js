import { put, takeEvery } from "redux-saga/effects";
import { signInWithEmailAndPassword } from "firebase/auth";

import { LOG_IN } from "../actionTypes/loginActionTypes";
import { auth } from "../../firebase";
import { loginSuccess, loginFailure } from "../slices/loginSlice";


function* loginSagaFetcher(action) {
    const { username, password } = action.payload;
    try {
        const data = yield signInWithEmailAndPassword(auth, username, password);
        window.localStorage.setItem("user", JSON.stringify(data.user));
        yield put(loginSuccess(data.user));
    } catch(e) {
        yield put(loginFailure(e.message));
    }
}

function* loginSaga() {
    yield takeEvery(LOG_IN, loginSagaFetcher);
}

export default loginSaga;