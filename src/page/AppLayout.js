import {Outlet} from "react-router-dom";
import {useCallback, useState} from "react";

import {getAuthTokenCookie} from "../tool/auth.util";

import PageHeader from "../component/page/PageHeader";
import LoginContainer from "../container/Login.container";
import NavigationContainer from "../container/Navigation.container";
import NavigationProvider from "../provider/Navigation.provider";

import "./app-layout.scss";

const tokenCookie = getAuthTokenCookie();

const AppLayout = () => {

    return !tokenCookie ? <LoginContainer/> : (
        <NavigationProvider>
            <header>
                <NavigationContainer/>
            </header>
            <main>
                <PageHeader />
                <Outlet/>
            </main>
        </NavigationProvider>
    );
}

export default AppLayout;