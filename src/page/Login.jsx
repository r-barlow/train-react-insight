import PropTypes from "prop-types";

import Input from "../component/form/Input";

import './login.scss';

const Login = ({handleSubmit, onChange, form}) => {

    return (<>
        <div className="login__background"/>
        <section className="login__card__frame">
            <article className="login__card">
                <div className="login__card__body">
                    <div className="login__image__frame">
                        <img className="login__image" src="/images/insight.svg" alt="Insight logo"/>
                    </div>
                    <h1 className="login__header__text">Insight</h1>
                    <form className="login__form" onSubmit={handleSubmit}>
                        <Input type="text" placeholder="Username"
                               hasError={form.username.error}
                               onChange={value => onChange({username: {value: value, error: false}})}/>

                        <Input type="password" placeholder="Password"
                               hasError={form.password.error}
                               onChange={value => onChange({password: {value: value, error: false}})}/>

                        {form.error.length !== 0 ? <p className="login__form__error">{form.error}</p> : null}

                        <button type="submit" className="login__button">LOGIN
                        </button>
                    </form>
                </div>
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