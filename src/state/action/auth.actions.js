export const GET_AUTH_TOKEN = "[AUTH]_GET_TOKEN";
export const getAuthToken = (form, navigate, onError) => ({
    type: GET_AUTH_TOKEN,
    username: form.username.value,
    password: form.password.value,
    navigate,
    onError
});