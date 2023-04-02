import { all, call } from "redux-saga/effects";

import roomsSaga from "./roomsSaga";
import loginSaga from "./loginSaga";

function* rootSaga() {
    yield all([
        call(roomsSaga),
        call(loginSaga),
    ]);
}

export default rootSaga;