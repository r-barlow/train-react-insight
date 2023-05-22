import Cookies from 'js-cookie';

const ACCESS_TOKEN_ID = 'insight-auth-token';

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

const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
}

export const getUserNameFromCookie = () => {
    const token = getAuthTokenCookie();
    return parseJwt(token)['sub'];
}