import React from "react";
import { NavLink, withRouter } from "react-router-dom";

import "./../../../assets/scss/style.scss";
import Aux from "../../../hoc/_Aux";
import validator from "validator";
import { auth } from "../../../App/auth/firebase";
import TokenManager from "../../../App/auth/TokenManager";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";

import logoDark from "../../../assets/images/godobet_logo_small.png";
import { connect } from "react-redux";
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";

import config from "../../../store/config";
import * as actions from "../../../store/actions";
import { bindActionCreators } from "redux";
import { Form } from "react-bootstrap";

class SignUp extends React.Component {
  state = {
    registered: false,
    formRegister: {
      name: "",
      email: "",
      password: "",
      password2: "",
      terms: false,
    },
  };

  validateOnChange = (event) => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : input.value;

    this.setState({
      ...this.state,
      formRegister: {
        ...this.state.formRegister,
        [input.name]: value,
        errors: {
          ...this.state.formRegister.errors,
          [input.name]: "",
        },
      },
    });
  };

  handleSubmit = (e) => {
    var user = {
      name: this.state.formRegister.name,
      role: config.API_URL + "/roles/4",
      email: this.state.formRegister.email,
      loginProvider: config.API_URL + "/items/6",
    };

    auth
      .createUserWithEmailAndPassword(
        this.state.formRegister.email,
        this.state.formRegister.password
      )
      .then((e) => {
        e.user.sendEmailVerification();

        return TokenManager.getInstance()
          .getToken()
          .then((jwt) => {
            return fetch(config.API_URL + "/users", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "X-Auth": jwt,
              },
              body: JSON.stringify({
                ...user,
                password: "",
                accessToken: e.user.uid,
              }),
            });
          });
      })
      .then((_) => {
        this.setState({
          ...this.state,
          registered: true
        })
      })
      .catch((e) => {
        this.setState({
          ...this.state,
          errorMessage: e.code === "auth/email-already-in-use" ? "L'indirizzo email ?? gi?? in uso." : e.message
        });
      });

    e.preventDefault();
  };

  handleErrorSubmit = (e, formData, errorInputs) => {
    //console.log(errorInputs);
  };

  render() {
    return (
      <Aux>
        <Breadcrumb />
        <div className="auth-wrapper">
          <div className="auth-content">
            <div className="card">
              <div className="row align-items-center text-center">
                { !this.state.registered && <div className="col-md-12">
                  <div className="card-body">
                    <ValidationForm
                      onSubmit={this.handleSubmit}
                      onErrorSubmit={this.handleErrorSubmit}
                    >
                      <img src={logoDark} alt="" className="img-fluid mb-4" />
                      <h4 className="mb-3 f-w-400">Registrati</h4>
                      <div className="input-group mb-3">
                        <TextInput
                          name="name"
                          id="name"
                          type="text"
                          placeholder="Nome"
                          errorMessage={{ required: "Il nome ?? obbligatorio" }}
                          value={this.state.formRegister.name}
                          onChange={this.validateOnChange}
                          autoComplete="off"
                          required
                          className="form-control"
                        />
                      </div>
                      <div className="input-group mb-3">
                        <TextInput
                          name="email"
                          id="email"
                          type="email"
                          placeholder="Email"
                          validator={validator.isEmail}
                          errorMessage={{
                            validator: "Inserisci un indirizzo email valido",
                          }}
                          value={this.state.formRegister.email}
                          onChange={this.validateOnChange}
                          autoComplete="off"
                          className="form-control"
                        />
                      </div>
                      <div className="input-group mb-4">
                        <TextInput
                          name="password"
                          id="password"
                          type="password"
                          placeholder="Password"
                          className="form-control"
                          required
                          pattern="(?=.*[a-z]).{6,}"
                          errorMessage={{
                            required: "Password obbligatoria",
                            pattern:
                              "La password deve essere almeno di 6 caratteri e contenere una maiuscola",
                          }}
                          value={this.state.formRegister.password}
                          onChange={this.validateOnChange}
                          autoComplete="off"
                        />
                      </div>
                      <div className="input-group mb-4">
                        <Form.Check 
                          checked={this.state.formRegister.terms} 
                          value={this.state.formRegister.terms} 
                          label={"Accetto i termini e le condizioni d'uso"}
                          name={"terms"}
                          onChange={this.validateOnChange}/>
                      </div>
                      <blockquote className="mb-2 text-danger">
                        {this.state.errorMessage}
                      </blockquote>
                      <button className="btn btn-primary btn-block mb-4" disabled={!this.state.formRegister.terms}>
                        Registrati
                      </button>
                      <p className="mb-2">
                        Hai gi?? un account?{" "}
                        <NavLink to="/auth/signin-1" className="f-w-400">
                          Entra
                        </NavLink>
                      </p>
                    </ValidationForm>
                  </div>
                </div>}
                {
                  this.state.registered &&
                  <div className="col-md-12">
                    <div className="card-body">
                      <h3>Grazie per  esserti registrato!</h3>
                      <br/>
                      <blockquote>Riceverai un'<strong>email di conferma</strong> per attivare l'account.</blockquote>
                      <p className="mb-2">
                        Vai alla pagina di{" "}
                        <NavLink to="/auth/signin-1" className="f-w-400">
                          Login
                        </NavLink>
                      </p>
                    </div>
                  </div>
                }
              </div>
              <div className="footer">
                <div className="footer-links" style={{flexDirection: "row", justifyContent: "flex-start", flex: 1, display: "flex", padding: "0 20px"}}>
                  <a href="https://godobet.it/privacy-policy">
                    <span className="footer-item">Privacy Policy</span>
                  </a>
                  <a href="https://godobet.it/terms-of-service" style={{marginLeft: "15px"}}>
                    <span className="footer-item">Termini di servizio</span>
                  </a>
                </div>
                <div className="footer-footer" style={{flexDirection: "row", justifyContent: "flex-start", flex: 1, display: "flex", padding: "0 20px"}}>
                  <span className="text-muted">{"\u00a9"} GODOBET 2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => ({ app: state.app });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
