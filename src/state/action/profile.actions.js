export const GET_USER_DETAILS = "[PROFILE]_GET_USER_DETAILS";
export const getUserDetails = (payload) => ({
    type: GET_USER_DETAILS,
    payload
});

export const SET_USER_DETAILS = "[PROFILE]_SET_USER_DETAILS";
export const setUserDetails = (user) => ({
    type: SET_USER_DETAILS,
    user
});
