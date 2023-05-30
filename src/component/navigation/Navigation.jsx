import PropTypes from "prop-types";

import {NAVIGATION_ITEMS} from "../../tool/constant";
import useNavigation from "../../hook/useNavigation";

import NavigationHeader from "./NavigationHeader";
import NavigationItem from "./NavigationItem";

import {ReactComponent as MenuIcon} from "../../icon/menu.svg";
import "./navigation.scss";

const Navigation = ({toggle, isToggled}) => {

    const {nav} = useNavigation();

    const handleClick = (item) => {
        toggle();
    };

    return (
        <>
            <nav className={!isToggled ? "nav nav--hidden" : "nav"}>
                <NavigationHeader toggle={toggle}/>
                {NAVIGATION_ITEMS.map(item =>
                    <NavigationItem key={item.tag}
                                    navItem={item}
                                    active={item.tag === nav.tag}
                                    onClick={() => handleClick(item)}/>)}
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