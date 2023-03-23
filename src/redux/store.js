import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";

import roomsReducer from "./slices/roomsSlice";
import usersReducer from "./slices/usersSlice";

import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: {
        rooms: roomsReducer,
        users: usersReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);