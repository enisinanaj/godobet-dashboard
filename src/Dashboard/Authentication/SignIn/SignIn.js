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
import TokenManager from "../../../App/auth/TokenManager";
import config from "../../../store/config";
import * as actions from "../../../store/actions";

class SignIn extends React.Component {

    state = {
        formUserLogin: {
            email: "",
            password: "",
        },
        formError: "",
        loginLoading: false,
        loggedIn: false,
    };

    validateOnChange = (event) => {
        const input = event.target;
        const value = input.type === "checkbox" ? input.checked : input.value;

        this.setState({
            formUserLogin: {
                ...this.state.formUserLogin,
                [input.name]: value,
            },
            formError: "",
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

        auth
            .signInWithEmailAndPassword(
                this.state.formUserLogin.email,
                this.state.formUserLogin.password
            )
            .then(this.addUserStateChangeEvent)
            .catch((e) => {
                this.setState({
                    loginLoading: false,
                    formError: e.message,
                });
            });

        // this.addUserStateChangeEvent();

        e.preventDefault();
    };

    addUserStateChangeEvent = () => {
        auth.onAuthStateChanged((user) => {
            if (!user) {
                return;
            }

            this.setState({
                formError: ""
            });

            TokenManager
            .getInstance()
            .getToken()
            .then((jwt) => {
                fetch(
                config.API_URL +
                    "/users/search/findByAccessToken/?accessToken=" +
                    user.uid,
                {
                    headers: {
                    "Content-Type": "application/json",
                    "X-Auth": jwt,
                    },
                }
                )
                .then((e) => e.json())
                .then((localUser) => {
                    this.getUserRole(localUser._links.role.href, user, localUser);
                });
            });
        });
    };

    async getUserRole(url, user, localUser) {
        TokenManager.getInstance()
        .getToken()
        .then((jwt) => {
            fetch(url, {
                headers: {
                "Content-Type": "application/json",
                "X-Auth": jwt,
                },
            })
            .then((e) => e.json())
            .then((role) => {
                const roleData = { role };
                this.props.actions.userLogin({
                    user,
                    ...localUser,
                    ...roleData,
                });
            });
        });
    }

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
                                        <h4 className="mb-3 f-w-400">Accedi</h4>
                                        <div className="input-group mb-3">
                                            <TextInput
                                                name="email"
                                                id="email"
                                                type="email"
                                                placeholder="Email"
                                                validator={validator.isEmail}
                                                errorMessage={{validator:"Inserisci un indirizzo email valido"}}
                                                value={this.state.formUserLogin.email}
                                                onChange={this.validateOnChange}
                                                autoComplete="off"
                                            />
                                        </div>
                                        <div className="input-group mb-4">
                                            <TextInput
                                                name="password"
                                                id="password"
                                                type="password"
                                                placeholder="Password"
                                                required
                                                pattern="(?=.*[a-z]).{6,}"
                                                errorMessage={{required:"Password obbligatoria", pattern: "La password deve essere almeno di 6 caratteri e contenere una maiuscola"}}
                                                value={this.state.formUserLogin.password}
                                                onChange={this.validateOnChange}
                                                autoComplete="off"
                                            />
                                        { this.state.formError && <div><div className="is-invalid"></div><div className="invalid-feedback">{this.state.formError}</div></div>}
                                        </div>
                                        
                                        <button className="btn btn-block btn-primary mb-4">Accedi</button>
                                        <p className="mb-2 text-muted"><NavLink to="/auth/forgot-password" className="f-w-400">Password dimenticata?</NavLink></p>
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
)(SignIn));
