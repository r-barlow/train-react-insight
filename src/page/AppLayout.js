import {Outlet} from "react-router-dom";

import {getAuthTokenCookie} from "../tool/auth.util";
import {NAVIGATION_ITEMS, ROUTE} from "../tool/constant";
import {NavigationContext} from "../context/Navigation.context";

import PageHeader from "../component/page/PageHeader";
import LoginContainer from "../container/Login.container";
import NavigationContainer from "../container/Navigation.container";

import "./app-layout.scss";

const tokenCookie = getAuthTokenCookie();

const AppLayout = () => {

    let nav = NAVIGATION_ITEMS.find(item => `/${item.tag}` === window.location.pathname);

    if (nav === undefined) {
        nav = NAVIGATION_ITEMS.find(item => item.tag === ROUTE.DASHBOARD);
    }

    return !tokenCookie ? <LoginContainer/> : (
        <NavigationContext.Provider value={{nav}}>
            <header>
                <NavigationContainer/>
            </header>
            <main>
                <PageHeader title={nav.title}/>
                <Outlet/>
            </main>
        </NavigationContext.Provider>
    );
}

export default AppLayout;