import axios from "axios";
import {all, call, takeLatest} from '@redux-saga/core/effects';

import {setAuthTokenCookie} from "../../tool/auth.util";
import {getAuthorizeRequest} from "../tool/api/auth.endpoint";
import {RESPONSE_STATUS} from "../../tool/constant";
import {GET_AUTH_TOKEN} from "../action/auth.actions";

export function* performAuthToken({payload, navigate, onError, onComplete}) {

    try {
        const [endpoint, requestOptions] = getAuthorizeRequest(payload);

        const {data} = yield call(axios, endpoint, requestOptions);

        const token = data.token;

        yield call(setAuthTokenCookie, token);

        //Refresh current page.
        yield call(navigate, 0);

    } catch ({response}) {
        let error = "Unknown server error!";
        if (
            response?.status === RESPONSE_STATUS.FORBIDDEN ||
            response?.status === RESPONSE_STATUS.UNAUTHORIZED ||
            response?.status === RESPONSE_STATUS.NOT_FOUND
        ) {
            error = "Invalid username/password!";
        }
        yield call(onError, error);
    } finally {
        if (onComplete) {
            yield call(onComplete);
        }
    }
}

export function* watchGetAuthToken() {
    yield takeLatest(GET_AUTH_TOKEN, performAuthToken);
}

export default function* authSaga() {
    yield all([watchGetAuthToken()]);
}