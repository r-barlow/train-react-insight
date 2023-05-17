import PropTypes from "prop-types";

import InputRequired from "./InputRequired";

import "./input.scss";

const Input = ({type, placeholder, hasError, onChange}) => (
    <div className="input__group">
        <input type={type}
               className={`input__control${hasError ? " input__error" : ""}`}
               placeholder={placeholder}
               aria-label={placeholder}
               onChange={e => {
                   onChange(e.target.value);
               }}/>
        {hasError ? <InputRequired/> : null}
    </div>
);

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    hasError: PropTypes.bool.isRequired
};

export default Input;