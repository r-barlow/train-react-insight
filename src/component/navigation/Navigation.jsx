import {useContext} from "react";
import PropTypes from "prop-types";

import {NAVIGATION_ITEMS} from "../../tool/constant";
import {NavigationContext} from "../../context/Navigation.context";

import {ReactComponent as MenuIcon} from "../../icon/menu.svg";
import "./navigation.scss";

const Navigation = ({toggle, isToggled}) => {

    const {nav} = useContext(NavigationContext);

    return (
        <>
            <nav className={!isToggled ? "nav nav--hidden" : "nav"}>
                {NAVIGATION_ITEMS.map(item => {
                    // @todo: Create navigation header & item component.
                    return <div key={item.tag}>{item.title}</div>
                })}
            </nav>
            <section className="action-bar">
                <MenuIcon className="action-bar__menu" alt="open menu" onClick={toggle}/>
                <h2 className="action-bar__text">{nav.title}</h2>
            </section>
            <div className={isToggled ? "nav__shadow" : "nav__shadow nav__shadow--hidden"} onClick={toggle}/>
        </>
    )
};

Navigation.propTypes = {
    isToggled: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
}

export default Navigation;