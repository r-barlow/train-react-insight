import {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {getAuthToken} from "../state/action/auth.actions";

import Login from "../page/Login";

const LoginContainer = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: {value: '', error: false},
        password: {value: '', error: false},
        error: ''
    });

    const handleOnError = message => {
        setForm({...form, error: message});
    };

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

        const payload = {
            username: form.username.value,
            password: form.password.value
        }

        dispatch(getAuthToken(payload, navigate, handleOnError));
    }

    const onChange = useCallback((newState) => {
        setForm({...form, ...newState});
    }, [form]);

    return (
        <Login handleSubmit={handleSubmit} onChange={onChange} form={form}/>
    );
};

export default LoginContainer;