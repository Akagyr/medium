import { all, call } from "redux-saga/effects";

import roomsSaga from "./roomsSaga";
import loginSaga from "./loginSaga";
import signupSaga from "./signupSaga";

function* rootSaga() {
    yield all([
        call(roomsSaga),
        call(loginSaga),
        call(signupSaga),
    ]);
}

export default rootSaga;