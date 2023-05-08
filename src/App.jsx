import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

import Login from "./page/Login";
import AppLayout from "./page/AppLayout";
import Dashboard from "./page/Dashboard";
import Budget from "./page/Budget";
import Transactions from "./page/Transactions";
import Reports from "./page/Reports";

import AppLayout from "./page/AppLayout";

import "./stylesheet/app.scss";

const appRoute = () => (
    <Route path="/" element={<AppLayout/>}>
        <Route exact path={ROUTE.DASHBOARD} element={<AppLayout/>}/>
    </Route>
);

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="budget" element={<Budget/>}/>
            <Route path="transactions" element={<Transactions/>}/>
            <Route path="reports" element={<Reports/>}/>
        </Route>
    ));

const App = () => {

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
