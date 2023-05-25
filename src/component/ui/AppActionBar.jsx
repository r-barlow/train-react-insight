import {useContext} from "react";

import {NavigationContext} from "../../context/Navigation.context";

import Action from "./Action";

import "./app-action-bar.scss";

const AppActionBar = ({children, onActionClick}) => {

    const {nav} = useContext(NavigationContext);

    return (
        <>
            {nav.current.showAction ? <Action onActionClick={onActionClick}/> : null}
            <div className={nav.current.showAction ? "app-action-bar" : "app-action-bar--shadow"}>
                {children}
            </div>
        </>
    )
};

export default AppActionBar;