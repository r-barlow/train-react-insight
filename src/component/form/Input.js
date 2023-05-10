import PropTypes from "prop-types";

import {POSITION} from "../../tool/constant";

import Tooltip from "../ui/Tooltip";

import "./input.scss";

const Input = ({type, placeholder, hasError, onChange}) => {

    const inputRequiredError = () => {
        return (
            <div className="form__input-error__image__frame">
                <img className="form__input-error__image" src="/images/error.svg" alt="input error"/>
                <Tooltip text="Required" position={POSITION.RIGHT}/>
            </div>
        );
    }

    return (
        <div className="form__input-group">
            <input type={type}
                   className={`form__form-control${hasError ? " form__input-error" : ""}`}
                   placeholder={placeholder}
                   aria-label={placeholder}
                   onChange={e => {
                       onChange(e.target.value);
                   }}/>
            {hasError ? inputRequiredError() : null}
        </div>
    );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    hasError: PropTypes.bool.isRequired
};

export default Input;