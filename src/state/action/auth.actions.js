export const GET_AUTH_TOKEN = "[AUTH]_GET_TOKEN";
export const getAuthToken = (payload, navigate, onError) => ({
    type: GET_AUTH_TOKEN,
    payload,
    navigate,
    onError
});