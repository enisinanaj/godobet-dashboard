import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { auth } from '../../components/auth/firebase';
import Footer from '../../components/footer';
import FormValidator from '../../template_components/Forms/FormValidator';

class Recover extends Component {

    state = {
        formLogin: {
            email: ''
        }
    }

    onSubmit = e => {
        const form = e.target;
        const inputs = [...form.elements].filter(i => ['INPUT', 'SELECT'].includes(i.nodeName))

        const { errors } = FormValidator.bulkValidate(inputs)

        this.setState({
            [form.name]: {
                ...this.state[form.name],
                errors
            }
        }, _ => {
            if (!errors) {
                auth.sendPasswordResetEmail(this.state.formLogin.email)
                .then(e => {
                    console.warn(e)
                })
                .catch(e => {
                    console.warn(e)
                    this.setState({
                        formError: e + ""
                    })
                })
            }
        })
    }

    hasError = (formName, inputName, method) => {
        return this.state[formName] &&
                this.state[formName].errors &&
                this.state[formName].errors[inputName] &&
                this.state[formName].errors[inputName][method]
    }

    validateOnChange = event => {
        const input = event.target;
        const form = input.form
        const value = input.value;

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

    render() {
        return (
            <div className="block-center mt-4 wd-xl">
                {/* START card */}
                <div className="card card-flat">
                    <div className="card-header text-center bg-accent" style={{borderRadius: 0, backgroundImage: "linear-gradient(-45deg, rgb(233, 233, 233), rgb(242, 242, 242))"}}>
                        <a href="">
                            <img className="block-center" src="img/godobet_logo.png" alt="Logo" width={100}/>
                        </a>
                    </div>
                    <div className="card-body">
                        <p className="text-center py-2">RESET PASSWORD</p>
                        <form className="mb-3" name="formLogin" onSubmit={this.onSubmit}>
                            <p className="text-center">Inserisci il tuo indirizzo email per ricevere le istruzioni su come resettare il tuo account.</p>
                            <div className="form-group">
                                <label className="text-muted" htmlFor="resetInputEmail1">Indirizzo email</label>
                                <div className="input-group with-focus">
                                    <Input className="form-control border-right-0" 
                                        id="resetInputEmail1" 
                                        type="email"
                                        name="email"
                                        placeholder="Email" 
                                        invalid={this.hasError('formLogin','email','required') || this.hasError('formLogin','email','email')}
                                        onChange={this.validateOnChange}
                                        data-validate='["required", "email"]'
                                        autoComplete="off"/>
                                    <div className="input-group-append">
                                        <span className="input-group-text text-muted bg-transparent border-left-0">
                                            <em className="fa fa-envelope"></em>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group" style={{marginTop: 15}}>
                                <div className="input-group with-focus">
                                    <span className="is-invalid"></span>
                                    <span className="invalid-feedback">{this.state.formError}</span>
                                </div>
                            </div>
                            <button className="btn btn-danger btn-block" type="submit">Invia</button>
                        </form>
                    </div>
                </div>
                {/* END card */}
                <Footer />
            </div>
        );
    }
}

export default Recover;
