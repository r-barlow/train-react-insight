import PropTypes from "prop-types";

import Input from "../component/form/Input";

import './login.scss';

const Login = ({handleSubmit, onUsernameChange, onPasswordChange, username, password, error}) => {

    return (<>
        <div className="login__background"></div>
        <div className="login__card__frame">
            <div className="login__card">
                <div className="login__card__body">
                    <div className="login__image__frame">
                        <img className="login__image" src="/images/insight.svg" alt="Insight logo"/>
                    </div>
                    <h1 className="login__header__text">Insight</h1>
                    <form className="login__form" onSubmit={handleSubmit}>
                        <Input type="text" placeholder="Username"
                               hasError={username.error} onChange={onUsernameChange}/>

                        <Input type="password" placeholder="Password"
                               hasError={password.error} onChange={onPasswordChange}/>

                        {error.length !== 0 ? <p className="login__form__error">{error}</p> : null}

                        <button type="submit" className="login__button">LOGIN
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>);
};

Login.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onUsernameChange: PropTypes.func.isRequired,
    onPasswordChange: PropTypes.func.isRequired,
    username: PropTypes.object.isRequired,
    password: PropTypes.object.isRequired,
    error: PropTypes.string.isRequired
};

export default Login;