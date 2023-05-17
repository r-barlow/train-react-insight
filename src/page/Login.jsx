import PropTypes from "prop-types";

import Input from "../component/form/Input";

import {ReactComponent as Logo} from "../icon/insight.svg";

import './login.scss';

const Login = ({handleSubmit, onChange, form}) => {

    return (<>
        <div className="login__background"/>
        <section className="card__frame">
            <article className="card">
                <div className="image__frame">
                    <Logo className="image" alt="Insight logo"/>
                </div>
                <h1 className="login__header">Insight</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <Input type="text" placeholder="Username"
                           hasError={form.username.error}
                           onChange={value => onChange({
                               username: {value: value, error: false},
                               password: {...form.password, error: false}
                           })}/>

                    <Input type="password" placeholder="Password"
                           hasError={form.password.error}
                           onChange={value => onChange({
                               password: {value: value, error: false},
                               username: {...form.username, error: false}
                           })}/>

                    {form.error.length !== 0 ? <p className="form__error">{form.error}</p> : null}

                    <button type="submit" className="login__button">LOGIN
                    </button>
                </form>
            </article>
        </section>
    </>);
};

Login.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    form: PropTypes.object.isRequired
};

export default Login;