import {POSITION} from "../../tool/constant";

import Tooltip from "../ui/Tooltip";

import {ReactComponent as ErrorIcon} from '../../icon/error.svg';

import "./input-required.scss";

const InputRequired = () => (
    <div className="error-image__frame">
        <ErrorIcon className="error-image" alt="input error"/>
        <Tooltip text="Required" position={POSITION.RIGHT}/>
    </div>
);

export default InputRequired;