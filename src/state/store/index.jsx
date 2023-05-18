import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "../reducer";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore(
    {
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
    });

//TODO Create and run sagas.

export default store;