import { all, call } from "redux-saga/effects";

import roomsSaga from "./roomsSaga";
import usersSaga from "./usersSaga";

function* rootSaga() {
    yield all([
        call(roomsSaga),
        call(usersSaga),
    ]);
}

export default rootSaga;