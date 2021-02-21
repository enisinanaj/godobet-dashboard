import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import validator from 'validator';
import { ValidationForm, TextInput } from 'react-bootstrap4-form-validation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import logoDark from '../../../assets/images/godobet_logo_small.png';
import { auth } from "../../../App/auth/firebase";
import * as actions from "../../../store/actions";

class FrogotPassword extends React.Component {

    state = {
        formFrogotPassword: {
            email: "",
        },
        formError: "",
        loginLoading: false,
        loggedIn: false,
    };

    validateOnChange = (event) => {
        const input = event.target;
        const value = input.type === "checkbox" ? input.checked : input.value;

        this.setState({
            formFrogotPassword: {
                ...this.state.formFrogotPassword,
                [input.name]: value,
            },
        });
    };

    handleSubmit = (e) => {
        const form = e.target;
        
        this.setState({
            loginLoading: true,
            [form.name]: {
            ...this.state[form.name],
            },
        });

        auth.sendPasswordResetEmail(this.state.formFrogotPassword.email)
        .then(e => {
            alert("Ti abbiamo mandato una mail con le istruzioni per recuperare la tua password");
        })
        .catch(e => {
            console.error(e);
            alert("C'è stato un errore. (" + e.message + ")");
        })

        e.preventDefault();
    };

    handleErrorSubmit = (e, formData, errorInputs) => {
        //console.log(errorInputs);
    };

    render () {
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="card">
                            <div className="row align-items-center text-center">
                                <div className="col-md-12">
                                    <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit} className="card-body">
                                        <img src={logoDark} alt="" className="img-fluid mb-4" />
                                        <h4 className="mb-3 f-w-400">Reset Password</h4>
                                        <p className="mb-3 f-w-400">Inserisci il tuo indirizzo email per ricevere le istruzioni su come resettare il tuo account.</p>
                                        <div className="input-group mb-3">
                                            <TextInput
                                                name="email"
                                                id="email"
                                                type="email"
                                                placeholder="Email"
                                                validator={validator.isEmail}
                                                errorMessage={{validator:"Inserisci un indirizzo email valido"}}
                                                value={this.state.formFrogotPassword.email}
                                                onChange={this.validateOnChange}
                                                autoComplete="off"
                                            />
                                        </div>
                                        <button className="btn btn-block btn-primary mb-4">Invia</button>
                                        <p className="mb-2 text-muted"><NavLink to="/auth/signin" className="f-w-400">Login</NavLink></p>
                                        <p className="mb-0 text-muted"><NavLink to="/auth/signup" className="f-w-400">Registrati</NavLink></p>
                                    </ValidationForm>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = (state) => ({ user: state.user, loggedIn: state.loggedIn });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FrogotPassword));
