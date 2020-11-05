import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import { Input, CustomInput } from "reactstrap";
import { auth } from "../../components/auth/firebase";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../store/actions/actions";

import FormValidator from "../../template_components/Forms/FormValidator.js";
import Footer from "../../components/footer";
import config from "../../store/config";
import TokenManager from "../../components/auth/Token";

class Login extends Component {
  state = {
    formUserLogin: {
      email: "",
      password: "",
    },
    formError: "",
  };

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

  onSubmit = (e) => {
    const form = e.target;
    const inputs = [...form.elements].filter((i) =>
      ["INPUT", "SELECT"].includes(i.nodeName)
    );
    const { errors } = FormValidator.bulkValidate(inputs);

    this.setState({
      [form.name]: {
        ...this.state[form.name],
        errors,
      },
    });

    auth
      .signInWithEmailAndPassword(
        this.state.formUserLogin.email,
        this.state.formUserLogin.password
      )
      .catch((e) => {
        this.setState({
          formError: e.message,
        });
      });

    this.addUserStateChangeEvent();

    e.preventDefault();
  };

  addUserStateChangeEvent = () => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        return;
      }

      TokenManager.getInstance()
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

      //this.props.actions.userLogin(user);
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
              ...user,
              ...localUser,
              ...roleData,
            });
          });
      });
  }

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
      <div className="block-center mt-4 wd-xl">
        <div className="card card-flat">
          <div
            className="card-header text-center bg-accent"
            style={{
              borderRadius: 0,
              backgroundImage:
                "linear-gradient(-45deg, rgb(233, 233, 233), rgb(242, 242, 242))",
            }}
          >
            <a href="">
              <img
                className="block-center rounded"
                src="img/godobet_logo.png"
                alt="Logo"
                width={100}
              />
            </a>
          </div>
          <div className="card-body">
            <p className="text-center py-2">Accedi</p>
            <form
              className="mb-3"
              name="formUserLogin"
              onSubmit={this.onSubmit}
            >
              <div className="form-group">
                <div className="input-group with-focus">
                  <Input
                    type="text"
                    name="email"
                    className="border-right-0"
                    placeholder="Email"
                    invalid={
                      this.hasError("formUserLogin", "email", "required") ||
                      this.hasError("formUserLogin", "email", "email")
                    }
                    onChange={this.validateOnChange}
                    data-validate='["required", "email"]'
                    value={this.state.formUserLogin.email}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text text-muted bg-transparent border-left-0">
                      <em className="fa fa-envelope"></em>
                    </span>
                  </div>
                  {this.hasError("formUserLogin", "email", "required") && (
                    <span className="invalid-feedback">
                      Il campo indirizzo email è obbligatorio
                    </span>
                  )}
                  {this.hasError("formUserLogin", "email", "email") && (
                    <span className="invalid-feedback">
                      Inserisci un indirizzo email valido
                    </span>
                  )}
                </div>
              </div>
              <div className="form-group">
                <div className="input-group with-focus">
                  <Input
                    type="password"
                    id="id-password"
                    name="password"
                    className="border-right-0"
                    placeholder="Password"
                    invalid={this.hasError(
                      "formUserLogin",
                      "password",
                      "required"
                    )}
                    onChange={this.validateOnChange}
                    data-validate='["required"]'
                    value={this.state.formUserLogin.password}
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
              <div className="clearfix">
                <CustomInput
                  type="checkbox"
                  id="rememberme"
                  className="float-left mt-0"
                  name="remember"
                  label="Ricordami"
                ></CustomInput>
                <div className="float-right">
                  <Link to="recover" className="text-muted">
                    Password dimenticata?
                  </Link>
                </div>
              </div>
              <div className="form-group" style={{ marginTop: 15 }}>
                <div className="input-group with-focus">
                  <span className="is-invalid"></span>
                  <span className="invalid-feedback">
                    {this.state.formError}
                  </span>
                </div>
              </div>
              <button className="btn btn-block btn-primary mt-3" type="submit">
                Login
              </button>
            </form>
            <p className="pt-3 text-center">Non hai ancora un account?</p>
            <Link to="register" className="btn btn-block btn-secondary">
              Registrati ora
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ app: state.app });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNamespaces("translations")(withRouter(Login)));
