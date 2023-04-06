import { all, call } from "redux-saga/effects";

import roomsSaga from "./roomsSaga";
import loginSaga from "./loginSaga";
import signupSaga from "./signupSaga";
import checkinSaga from "./checkinSaga";
import checkoutSaga from "./checkoutSaga";

function* rootSaga() {
    yield all([
        call(roomsSaga),
        call(loginSaga),
        call(signupSaga),
        call(checkinSaga),
        call(checkoutSaga),
    ]);
}

export default rootSaga;