import PropTypes from "prop-types";

import InputRequired from "./InputRequired";

import "./input.scss";

const Input = ({type, placeholder, hasError, onChange}) => {

    return (
        <div className="form__input__group">
            <input type={type}
                   className={`form__control${hasError ? " form__input__error" : ""}`}
                   placeholder={placeholder}
                   aria-label={placeholder}
                   onChange={e => {
                       onChange(e.target.value);
                   }}/>
            {hasError ? <InputRequired/> : null}
        </div>
    );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    hasError: PropTypes.bool.isRequired
};

export default Input;