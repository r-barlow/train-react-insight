import Cookies from 'js-cookie';

const ACCESS_TOKEN_ID = 'insight-auth-token';
const URL_INSIGHT_API = 'http://localhost:8080/api/v1';

/** Sets the auth token cookie */
export const setAuthTokenCookie = (token) => {
    const parsedToken = parseJwt(token);
    const expiryDate = new Date(parsedToken['exp'] * 1000);
    console.log(expiryDate);
    Cookies.set(ACCESS_TOKEN_ID, token, {expires: expiryDate});
};

/** Get the auth token cookie */
export const getAuthTokenCookie = () => {
    return Cookies.get(ACCESS_TOKEN_ID);
};

/** Remove the auth token cookie */
export const removeAuthTokenCookie = () => {
    Cookies.remove(ACCESS_TOKEN_ID);
};

export const getAuthHeaders = () => {
    return {
        Authorization: `Bearer ${Cookies.get(ACCESS_TOKEN_ID)}`
    };
};

export async function getToken(username, password, callback) {
    const user = {
        username: username,
        password: password
    }

    return fetch(`${URL_INSIGHT_API}/auth/authorize`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeaders()
        },
        body: JSON.stringify(user)
    }).then(response => {
        return response.json().then(result => {
            return {status: response.status, success: response.ok, data: result};
        });
    }).catch(e => console.log(e))
}

const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
}