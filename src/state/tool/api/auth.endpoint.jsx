import {API_BASE_URL} from "./index";
import {REQUEST_METHOD} from "../../../tool/constant";

const getAuthEndpoint = `${API_BASE_URL}/auth`;

const getAuthorizeEndpoint = () => `${getAuthEndpoint}/authorize`;
export const getAuthorizeRequest = (data) => [
    getAuthorizeEndpoint(),
    {
        method: REQUEST_METHOD.POST,
        data
    }
]