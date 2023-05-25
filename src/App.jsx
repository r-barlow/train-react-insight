import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

import {ROUTE} from "./tool/constant";

import AppLayout from "./page/AppLayout";
import Dashboard from "./page/Dashboard";
import Budget from "./page/Budget";
import Transactions from "./page/Transactions";
import Reports from "./page/Reports";

import "./stylesheet/app.scss";

const appRoute = () => (
    <Route path="/" element={<AppLayout />}>
        <Route exact path="/" element={<Dashboard />}/>
        <Route exact path={ROUTE.DASHBOARD} element={<Dashboard />}/>
        <Route exact path={ROUTE.BUDGET} element={<Budget/>}/>
        <Route exact path={ROUTE.TRANSACTIONS} element={<Transactions/>}/>
        <Route exact path={ROUTE.REPORTS} element={<Reports/>}/>
    </Route>
);

const router = createBrowserRouter(
    createRoutesFromElements(appRoute()));

const App = () => {

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
