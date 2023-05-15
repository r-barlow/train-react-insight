import {getAuthTokenCookie} from "../tool/auth.util";

import LoginContainer from "../container/Login.container";

const tokenCookie = getAuthTokenCookie();

const AppLayout = () => {
    return !tokenCookie ? <LoginContainer/> : (
        <>
            App
        </>
    );
}

export default AppLayout;