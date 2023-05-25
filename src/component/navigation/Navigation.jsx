import PropTypes from "prop-types";

import {NAVIGATION_ITEMS} from "../../tool/constant";
import useNavigation from "../../hook/useNavigation";

import NavigationHeader from "./NavigationHeader";
import NavigationItem from "./NavigationItem";
import AppActionBar from "../ui/AppActionBar";

import {ReactComponent as MenuIcon} from "../../icon/menu.svg";
import "./navigation.scss";


const Navigation = ({toggle, isToggled, onActionClick}) => {

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

            <AppActionBar onActionClick={onActionClick}>
                <MenuIcon className="action-bar__menu" alt="open menu" onClick={toggle}/>
                <h2 className="action-bar__text">{nav.current.title}</h2>
            </AppActionBar>
            <div className={isToggled ? "nav__shadow" : "nav__shadow nav__shadow--hidden"} onClick={toggle}/>
        </>
    )
};

Navigation.propTypes = {
    isToggled: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
}

export default Navigation;