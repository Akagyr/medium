import { put, takeEvery } from "redux-saga/effects";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { SIGN_UP } from "../actionTypes/loginActionTypes"; 
import { auth } from "../../firebase";
import { singupFailure, singupSuccess } from "../slices/loginSlice";

function* signupSagaFetcher(action) {
    const { email, password } = action.payload;
    try {
        yield createUserWithEmailAndPassword(auth, email, password);
        yield put(singupSuccess());
    } catch(e) {
        yield put(singupFailure(e.message));
    }
}

function* loginSaga() {
    yield takeEvery(SIGN_UP, signupSagaFetcher);
}

export default loginSaga;