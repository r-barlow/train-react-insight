import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

import {ROUTE} from "./tool/constant";

import AppLayout from "./page/AppLayout";

import "./stylesheet/app.scss";

const appRoute = () => (
    <Route path="/" element={<AppLayout/>}>
        <Route exact path={ROUTE.DASHBOARD} element={<AppLayout/>}/>
    </Route>
);

const router = createBrowserRouter(
    createRoutesFromElements(appRoute())
);

const App = () => {

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
