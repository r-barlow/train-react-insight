import {API_BASE_URL} from "./index";
import {REQUEST_METHOD} from "../../../tool/constant";
import {getAuthHeaders} from "../../../tool/auth.util";

const getUsersEndpoint = `${API_BASE_URL}/users`;

const getFindUserEndpoint = (username) => `${getUsersEndpoint}/find/${username}`;
export const getFindUserRequest = (username) => [
    getFindUserEndpoint(username),
    {
        method: REQUEST_METHOD.GET,
        headers: getAuthHeaders()
    }
]