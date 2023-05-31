import {useContext, useEffect, useState} from "react";

import {NavigationContext} from "../../context/Navigation.context";

import AppBar from "./AppBar";

import "./action.scss";

const Action = ({onActionClick}) => {

    const {nav} = useContext(NavigationContext);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const ActionIcon = nav.actionIcon;

    return (
        <>
            <AppBar width={windowWidth}/>
            <div className="action__button" onClick={() => onActionClick(nav.tag)}>
                <ActionIcon className="action__icon"/>
            </div>
        </>
    )
};

export default Action;