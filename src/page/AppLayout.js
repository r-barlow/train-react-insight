import {Outlet} from "react-router-dom";
import PageHeader from "../component/page/PageHeader";

import LoginContainer from "../container/Login.container";

import "./app-layout.scss";

const tokenCookie = getAuthTokenCookie();

const AppLayout = () => {
    return !tokenCookie ? <LoginContainer/> : (
        <>
            <header>
                <h1>App Header</h1>
            </header>
            <main>
                <PageHeader title={window.location.pathname}/>
                <Outlet/>
            </main>
        </>
    );
}

export default AppLayout;