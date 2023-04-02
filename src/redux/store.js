import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";

import roomsReducer from "./slices/roomsSlice";
import loginReducer from "./slices/loginSlice";

import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: {
        rooms: roomsReducer,
        login: loginReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);