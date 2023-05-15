export const GET_AUTH_TOKEN = "[AUTH]_GET_TOKEN";
export const getAuthToken = (username, password, navigate, onError) => ({
    type: GET_AUTH_TOKEN,
    username,
    password,
    navigate,
    onError
});