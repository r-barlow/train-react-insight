import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import AppLayout from "./page/AppLayout";

import "./stylesheet/app.scss";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout/>}/>
    ));

const App = () => {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
