import {useNavigate} from "react-router-dom";

import {ROUTE} from "../../tool/constant";

import "./not-found.scss";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <section className="not-found__frame">
            <h1 className="not-found__title">4<span className="not-found__title--amber">0</span>4</h1>
            <h2 className="not-found__subtitle">Oh no!</h2>
            <p className="not-found__description">Looks like the page doesn't exist!</p>
            <button className="not-found__button" onClick={() => navigate(ROUTE.DASHBOARD)}>GO HOME</button>
        </section>
    );
}

export default NotFound;