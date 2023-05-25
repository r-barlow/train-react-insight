import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "../reducer";
import createSagaMiddleware from "redux-saga";
import authSaga from '../saga/auth.saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore(
    {
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false
        }).concat(sagaMiddleware)
    });

sagaMiddleware.run(authSaga);

export default store;