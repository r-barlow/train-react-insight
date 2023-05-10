import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {useState} from "react";

import {getAuthTokenCookie} from "./tool/auth.util";

import AppLayout from "./page/AppLayout";
import LoginContainer from "./container/Login.container";

import "./stylesheet/app.scss";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout/>}/>
    )
);

const App = () => {

    const [, setToken] = useState('');
    const tokenCookie = getAuthTokenCookie();

    if (!tokenCookie) {
        return (
            <LoginContainer setToken={setToken}/>
        );
    }

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
