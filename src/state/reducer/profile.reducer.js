import {SET_USER_DETAILS} from "../action/profile.actions";

export const initialState = {
    user: {initial: "", fullName: "", username: ""}
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DETAILS:
            return {...state, user: action.user};
        default:
            return state;
    }
}