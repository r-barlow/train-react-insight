import {useCallback, useState} from "react";
import {getToken, setAuthTokenCookie} from "../tool/auth.util";
import Input from "../component/form/Input";
import PropTypes from "prop-types";

import './login.scss';

const Login = ({setToken}) => {

    const [username, setUsername] = useState({current: '', error: false});
    const [password, setPassword] = useState({current: '', error: false});
    const [error, setError] = useState('');

    const handleSubmit = async e => {

        e.preventDefault();

        if (username.current === undefined || username.current.length === 0) {
            setUsername({current: username.current, error: true});
            return;
        }

        if (password.current === undefined || password.current.length === 0) {
            setPassword({current: password.current, error: true});
            return;
        }

        const response = await getToken(username.current, password.current);

        if (!response.success) {
            if (response.status === 404 || response.status === 403 || response.status === 401) {
                setError("Invalid username/password!");
            } else {
                setError("Unknown server error!");
            }
            return;
        }

        const token = response.data['token'];
        if (token === undefined) {
            setError("Unknown server error!");
            return;
        }

        setToken(token);
        setAuthTokenCookie(token)
    }

    const onUsernameChange = useCallback((value) => {
        setError('');
        setUsername({current: value, error: false});
    }, [username]);

    const onPasswordChange = useCallback((value) => {
        setError('');
        setPassword({current: value, error: false});
    }, [password]);

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
    setToken: PropTypes.func.isRequired
};

export default Login;