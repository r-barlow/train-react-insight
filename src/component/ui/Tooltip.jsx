import PropTypes from "prop-types";

import "./tooltip.scss";

const Tooltip = (props) =>{

    const position = `tooltip__text tooltip--${props.position}`;

    return (
        <div className="tooltip__container">
            <span className={position}>{props.text}</span>
        </div>
    );
}

Tooltip.propTypes = {
    text: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
};

export default Tooltip;