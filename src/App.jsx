import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import AppLayout from "./page/AppLayout";
import {getAuthTokenCookie, setAuthTokenCookie} from "./tool/auth.util";
import {useState} from "react";
import Login from "./page/Login";

import "./stylesheet/app.scss";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout/>}/>
    ));

const App = () => {

    const [, setToken] = useState('');
    const tokenCookie = getAuthTokenCookie();

    if (!tokenCookie) {
        return (
            <Login setToken={setToken}/>
        );
    }

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
