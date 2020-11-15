import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

import FormValidator from "../../template_components/Forms/FormValidator.js";
import { connect } from "react-redux";
import { auth } from "../../components/auth/firebase.js";
import TokenManager from "../../components/auth/Token.js";
import config from "../../store/config.js";

class Register extends Component {
  state = {
    formRegister: {
      nomeTipster: "",
      email: "",
      password: "",
      password2: "",
      terms: false,
    },
  };

  /**
   * Validate input using onChange event
   * @param  {String} formName The name of the form in the state object
   * @return {Function} a function used for the event
   */
  validateOnChange = (event) => {
    const input = event.target;
    const form = input.form;
    const value = input.type === "checkbox" ? input.checked : input.value;

    const result = FormValidator.validate(input);

    this.setState({
      [form.name]: {
        ...this.state[form.name],
        [input.name]: value,
        errors: {
          ...this.state[form.name].errors,
          [input.name]: result,
        },
      },
    });
  };

  toggleModal() {
    this.setState(
      {
        formRegister: {
          nomeTipster: "",
          email: "",
          password: "",
          password2: "",
          terms: false,
        },
      },
      () => {
        this.props.toggleModal();
      }
    );
  }

  onSubmit = (e) => {
    const form = e.target;
    const inputs = [...form.elements].filter((i) =>
      ["INPUT", "SELECT"].includes(i.nodeName)
    );

    const { errors, hasError } = FormValidator.bulkValidate(inputs);

    this.setState({
      [form.name]: {
        ...this.state[form.name],
        errors,
      },
    });
    if (!hasError) {
      var user = {
        name: this.state.formRegister.nomeTipster,
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
          user.name = e.user.displayName;

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
        .then((e) => {
          alert("Utente creato!");
          this.toggleModal();
          this.props.refreshTipsterList();
        })
        .catch((_) => {});
    }

    e.preventDefault();
  };

  /* Simplify error check */
  hasError = (formName, inputName, method) => {
    return (
      this.state[formName] &&
      this.state[formName].errors &&
      this.state[formName].errors[inputName] &&
      this.state[formName].errors[inputName][method]
    );
  };

  render() {
    return (
      <Modal
        isOpen={this.props.modalNewTipsterVisible}
        toggle={() => this.toggleModal()}
        style={{ maxWidth: "70%" }}
      >
        <ModalHeader toggle={() => this.toggleModal()}>
          Registrazione nuovo Tipster
        </ModalHeader>
        <ModalBody>
          <div className="block-center mt-4 wd-xl">
            {/* START card */}
            <div className="card card-default">
              <div className="card-body">
                <p className="text-center py-2">
                  Crea un nuovo account Tipster su GodoBet
                </p>
                <form
                  className="mb-3"
                  name="formRegister"
                  onSubmit={this.onSubmit}
                >
                  <div className="form-group">
                    <label className="text-muted" htmlFor="signupInputEmail1">
                      Nome Tipster
                    </label>
                    <div className="input-group with-focus">
                      <Input
                        type="text"
                        name="nomeTipster"
                        className="border-right-0"
                        placeholder="Nome"
                        invalid={this.hasError(
                          "formRegister",
                          "nomeTipster",
                          "required"
                        )}
                        onChange={this.validateOnChange}
                        data-validate='["required"]'
                        value={this.state.formRegister.nomeTipster}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text text-muted bg-transparent border-left-0">
                          <em className="fa fa-user"></em>
                        </span>
                      </div>
                      {this.hasError(
                        "formRegister",
                        "nomeTipster",
                        "required"
                      ) && (
                        <span className="invalid-feedback">
                          Il campo Nome Tipster è obbligatorio
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="text-muted" htmlFor="signupInputEmail1">
                      Indirizzo email
                    </label>
                    <div className="input-group with-focus">
                      <Input
                        autoComplete="new-password"
                        type="email"
                        name="email"
                        className="border-right-0"
                        placeholder="Email"
                        invalid={
                          this.hasError("formRegister", "email", "required") ||
                          this.hasError("formRegister", "email", "email")
                        }
                        onChange={this.validateOnChange}
                        data-validate='["required", "email"]'
                        value={this.state.formRegister.email}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text text-muted bg-transparent border-left-0">
                          <em className="fa fa-envelope"></em>
                        </span>
                      </div>
                      {this.hasError("formRegister", "email", "required") && (
                        <span className="invalid-feedback">
                          Il campo indirizzo email è obbligatorio
                        </span>
                      )}
                      {this.hasError("formRegister", "email", "email") && (
                        <span className="invalid-feedback">
                          Inserisci un indirizzo email valido
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="form-group">
                    <label
                      className="text-muted"
                      htmlFor="signupInputPassword1"
                    >
                      Password
                    </label>
                    <div className="input-group with-focus">
                      <Input
                        autoComplete="new-password"
                        type="password"
                        id="id-password"
                        name="password"
                        className="border-right-0"
                        placeholder="Password"
                        invalid={this.hasError(
                          "formRegister",
                          "password",
                          "required"
                        )}
                        onChange={this.validateOnChange}
                        data-validate='["required"]'
                        value={this.state.formRegister.password}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text text-muted bg-transparent border-left-0">
                          <em className="fa fa-lock"></em>
                        </span>
                      </div>
                      <span className="invalid-feedback">
                        Il campo password è obbligatorio
                      </span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label
                      className="text-muted"
                      htmlFor="signupInputRePassword1"
                    >
                      Ripeti password
                    </label>
                    <div className="input-group with-focus">
                      <Input
                        type="password"
                        name="password2"
                        className="border-right-0"
                        placeholder="Ripeti password"
                        invalid={this.hasError(
                          "formRegister",
                          "password2",
                          "equalto"
                        )}
                        onChange={this.validateOnChange}
                        data-validate='["equalto"]'
                        value={this.state.formRegister.password2}
                        data-param="id-password"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text text-muted bg-transparent border-left-0">
                          <em className="fa fa-lock"></em>
                        </span>
                      </div>
                      <span className="invalid-feedback">
                        Il campo deve essere uguale al precedente
                      </span>
                    </div>
                  </div>
                  <button
                    className="btn btn-block btn-primary mt-3"
                    type="submit"
                  >
                    Crea account
                  </button>
                </form>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({ app: state.app });

export default connect(mapStateToProps)(withRouter(Register));
