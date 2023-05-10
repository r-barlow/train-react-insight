import {useCallback, useState} from "react";

import {getToken, setAuthTokenCookie} from "../tool/auth.util";

import Login from "../page/Login";

import PropTypes from "prop-types";

const LoginContainer = ({setToken}) => {

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
    }, []);

    const onPasswordChange = useCallback((value) => {
        setError('');
        setPassword({current: value, error: false});
    }, []);

    return (
        <>
            <Login handleSubmit={handleSubmit} onUsernameChange={onUsernameChange}
                   onPasswordChange={onPasswordChange} username={username} password={password} error={error}/>
        </>
    );
};

LoginContainer.propTypes = {
    setToken: PropTypes.func.isRequired
};

export default LoginContainer;