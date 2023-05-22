import {all, call, put, takeLatest} from "@redux-saga/core/effects";
import axios from "axios";

import {getFindUserRequest} from "../tool/api/profile.endpoint";
import {GET_USER_DETAILS, SET_USER_DETAILS} from "../action/profile.actions";

export function* performGetUserDetails({payload, onComplete}) {
    try {
        const [endpoint, requestOptions] = getFindUserRequest(payload);

        const {data} = yield call(axios, endpoint, requestOptions);

        // @todo: Return details from API instead.
        const user = {
            ...data,
            fullName: `${data.firstName} ${data.lastName}`,
            initial: data.firstName[0].toUpperCase()
        };

        yield put({type: SET_USER_DETAILS, user});

    } catch ({response}) {
        // @todo: Logout user
    } finally {
        if (onComplete) {
            yield call(onComplete);
        }
    }
}

export function* watchGetUserDetails() {
    yield takeLatest(GET_USER_DETAILS, performGetUserDetails);
}

export default function* profileSaga() {
    yield all([watchGetUserDetails()]);
}