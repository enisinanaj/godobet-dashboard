import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, CustomInput } from 'reactstrap';

import FormValidator from '../../template_components/Forms/FormValidator.js';
import Footer from '../../components/footer';

class Login extends Component {

    state = {
        formLogin: {
            email: '',
            password: ''
        }
    }

    validateOnChange = event => {
        const input = event.target;
        const form = input.form
        const value = input.type === 'checkbox' ? input.checked : input.value;

        const result = FormValidator.validate(input);

        this.setState({
            [form.name]: {
                ...this.state[form.name],
                [input.name]: value,
                errors: {
                    ...this.state[form.name].errors,
                    [input.name]: result
                }
            }
        });

    }

    onSubmit = e => {
        const form = e.target;
        const inputs = [...form.elements].filter(i => ['INPUT', 'SELECT'].includes(i.nodeName))

        const { errors, hasError } = FormValidator.bulkValidate(inputs)

        this.setState({
            [form.name]: {
                ...this.state[form.name],
                errors
            }
        });

        console.log(hasError ? 'Form has errors. Check!' : 'Form Submitted!')

        e.preventDefault()
    }

    hasError = (formName, inputName, method) => {
        return  this.state[formName] &&
                this.state[formName].errors &&
                this.state[formName].errors[inputName] &&
                this.state[formName].errors[inputName][method]
    }

    render() {
        return (
            <div className="block-center mt-4 wd-xl">
                <div className="card card-flat">
                    <div className="card-header text-center bg-dark">
                        <a href="">
                            <img className="block-center rounded" src="img/logo.png" alt="Logo"/>
                        </a>
                    </div>
                    <div className="card-body">
                        <p className="text-center py-2">Accedi</p>
                        <form className="mb-3" name="formLogin" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <div className="input-group with-focus">
                                    <Input type="email"
                                        name="email"
                                        className="border-right-0"
                                        placeholder="Email"
                                        invalid={this.hasError('formLogin','email','required')||this.hasError('formLogin','email','email')}
                                        onChange={this.validateOnChange}
                                        data-validate='["required", "email"]'
                                        value={this.state.formLogin.email}/>
                                    <div className="input-group-append">
                                        <span className="input-group-text text-muted bg-transparent border-left-0">
                                            <em className="fa fa-envelope"></em>
                                        </span>
                                    </div>
                                    { this.hasError('formLogin','email','required') && <span className="invalid-feedback">Il campo indirizzo email è obbligatorio</span> }
                                    { this.hasError('formLogin','email','email') && <span className="invalid-feedback">Inserisci un indirizzo email valido</span> }
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group with-focus">
                                    <Input type="password"
                                        id="id-password"
                                        name="password"
                                        className="border-right-0"
                                        placeholder="Password"
                                        invalid={this.hasError('formLogin','password','required')}
                                        onChange={this.validateOnChange}
                                        data-validate='["required"]'
                                        value={this.state.formLogin.password}
                                    />
                                    <div className="input-group-append">
                                        <span className="input-group-text text-muted bg-transparent border-left-0">
                                            <em className="fa fa-lock"></em>
                                        </span>
                                    </div>
                                    <span className="invalid-feedback">Il campo password è obbligatorio</span>
                                </div>
                            </div>
                            <div className="clearfix">
                                <CustomInput type="checkbox" id="rememberme"
                                    className="float-left mt-0"
                                    name="remember"
                                    label="Ricordami">
                                </CustomInput>
                                <div className="float-right">
                                    <Link to="recover" className="text-muted">Password dimenticata?</Link>
                                </div>
                            </div>
                            <button className="btn btn-block btn-primary mt-3" type="submit">Login</button>
                        </form>
                        <p className="pt-3 text-center">Non hai ancora un account?</p>
                        <Link to="register" className="btn btn-block btn-secondary">Registrati ora</Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Login;
