import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";

import "./navigation-item.scss";

const NavigationItem = ({navItem, active, onClick}) => {

    const NavIcon = navItem.icon;

    return (
        <NavLink to={`/${navItem.tag}`}
                 className={active ? 'nav-item--active nav-item nav-item--hover' : 'nav-item nav-item--hover'}
                 style={navItem.style} onClick={onClick}>
            <NavIcon className="nav-item__icon" alt={navItem.icon}/>
            <h2 className="nav-item__text">{navItem.title}</h2>
            <div className="nav-item__selector"></div>
        </NavLink>
    );
};

NavigationItem.propTypes = {
    navItem: PropTypes.object.isRequired,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

export default NavigationItem;