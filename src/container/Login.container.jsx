import {useCallback, useState} from "react";

import {getToken, setAuthTokenCookie} from "../tool/auth.util";

import Login from "../page/Login";

import PropTypes from "prop-types";

const LoginContainer = ({setToken}) => {

    const [form, setForm] = useState({
        username: {value: '', error: false},
        password: {value: '', error: false},
        error: ''
    });

    const handleSubmit = async e => {

        e.preventDefault();

        if (form.username.value === undefined || form.username.value.length === 0) {
            setForm({...form, username: {...form.username, error: true}});
            return;
        }

        if (form.password.value === undefined || form.password.value.length === 0) {
            setForm({...form, password: {...form.password, error: true}});
            return;
        }

        const response = await getToken(form.username.value, form.password.value);

        if (!response.success) {
            if (response.status === 404 || response.status === 403 || response.status === 401) {
                setForm({...form, error: "Invalid username/password!"});
            } else {
                setForm({...form, error: "Unknown server error!"});
            }
            return;
        }

        const token = response.data['token'];
        if (token === undefined) {
            setForm({...form, error: "Unknown server error!"});
            return;
        }

        setToken(token);
        setAuthTokenCookie(token)
    }

    const onChange = useCallback((newState) => {
        setForm({...form, ...newState});
    }, []);

    return (
        <Login handleSubmit={handleSubmit} onChange={onChange} form={form}/>
    );
};

LoginContainer.propTypes = {
    setToken: PropTypes.func.isRequired
};

export default LoginContainer;