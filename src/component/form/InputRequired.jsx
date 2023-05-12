import {POSITION} from "../../tool/constant";

import Tooltip from "../ui/Tooltip";

import { ReactComponent as ErrorIcon } from '../../icon/error.svg';

import "./input-required.scss";

const InputRequired = () => {
    return (
        <div className="form__input__error__image__frame">
            <ErrorIcon className="form__input__error__image" alt="input error"/>
            <Tooltip text="Required" position={POSITION.RIGHT}/>
        </div>
    );
}

export default InputRequired;