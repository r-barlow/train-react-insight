import Logo from "../../icon/Logo";
import {ReactComponent as CloseIcon} from "../../icon/close.svg";
import PropTypes from "prop-types";

import "./navigation-header.scss";
import UserDetailsComponent from "../../container/UserDetails.component";

const NavigationHeader = ({toggle}) => {
    return (
        <section className="header">
            <UserDetailsComponent isMobile={true} />
            <Logo uniqueId="nav-header" className="header__logo" alt="insight logo"/>
            <CloseIcon className="header__close" alt="close menu" onClick={toggle}/>
        </section>
    )
};

NavigationHeader.propTypes = {
    toggle: PropTypes.func.isRequired
}
export default NavigationHeader;