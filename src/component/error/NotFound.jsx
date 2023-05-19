import {useNavigate} from "react-router-dom";

import {ROUTE} from "../../tool/constant";

import "./not-found.scss";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <section className="error__frame">
            <h1 className="error__title">4<span className="error__title--amber">0</span>4</h1>
            <h2 className="error__subtitle">Oh no!</h2>
            <p className="error__description">Looks like the page doesn't exist!</p>
            <button className="error__button" onClick={() => navigate(ROUTE.DASHBOARD)}>GO HOME</button>
        </section>
    );
}

export default NotFound;