import React, { Component } from "react";
import ContentWrapper from "../../components/layout/ContentWrapper";
import { Row, Col, Input } from "reactstrap";
import FormValidator from "../../template_components/Forms/FormValidator.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../store/actions/actions";
import config from "../../store/config";
import TokenManager from "../../components/auth/Token";

class Profile extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      formChangePwd: {
        oldPassword: "",
        newPassword: "",
        repeatNewPassword: "",
      },
      formUserInfo: {
        userName: this.props.app.user.name,
        email: this.props.app.user.email,
      },
    };
    console.warn(this.props.app.user);
  }

  async onSubmitUserInfo(e) {
    e.preventDefault();
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

    var updatedUser = {
      name: this.state.formUserInfo.userName,
      role: this.props.app.user.role,
      email: this.state.formUserInfo.email,
      accessToken: this.props.app.user.accessToken,
    };

    const serverUserInfo = {
      loginProvider: config.API_URL + "/items/6",
      password: "",
    };

    console.log({ ...updatedUser, ...serverUserInfo });

    var token = await TokenManager.getInstance().getToken();
    fetch(this.props.app.user._links.self.href, {
      method: "PUT",
      headers: { "Content-Type": "application/json", "X-Auth": token },
      body: JSON.stringify({ ...updatedUser, ...serverUserInfo }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.props.actions.userLogin({
          ...this.props.app.user,
          ...updatedUser,
        });
        window.location.reload(false);
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

  render() {
    return (
      <ContentWrapper>
        <Row>
          <Col lg="8">
            <div className="card card-default">
              <div className="card-header d-flex align-items-center">
                <div className="d-flex justify-content-center col">
                  <div className="h4 m-0 text-center">
                    Informazioni del contatto
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row py-4 justify-content-center">
                  <div className="col-12 col-sm-10">
                    <form
                      className="form-horizontal"
                      name="formUserInfo"
                      id="formUserInfo"
                      onSubmit={(e) => this.onSubmitUserInfo(e)}
                    >
                      <div className="form-group row">
                        <label
                          className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                          htmlFor="inputUserName"
                        >
                          Nome
                        </label>
                        <div className="col-xl-10 col-md-9 col-8">
                          <Input
                            className="form-control"
                            name="userName"
                            id="inputUserName"
                            type="text"
                            invalid={this.hasError(
                              "formUserInfo",
                              "userName",
                              "required"
                            )}
                            data-validate='["required"]'
                            value={this.state.formUserInfo.userName}
                            onChange={(event) => this.validateOnChange(event)}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                          htmlFor="inputEmail"
                        >
                          Email
                        </label>
                        <div className="col-xl-10 col-md-9 col-8">
                          <Input
                            name="email"
                            className="form-control"
                            id="inputEmail"
                            type="email"
                            value={this.state.formUserInfo.email}
                            disabled={true}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-10">
                          <button className="btn btn-info" type="submit">
                            Aggiorna contatto
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4">&nbsp;</Col>
          {false && (
            <Col lg="8">
              <div className="card card-default">
                <div className="card-header d-flex align-items-center">
                  <div className="d-flex justify-content-center col">
                    <div className="h4 m-0 text-center">Cambio password</div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row py-4 justify-content-center">
                    <div className="col-12 col-sm-10">
                      <form className="form-horizontal" name="formChangePwd">
                        <div className="form-group row">
                          <label
                            className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                            htmlFor="input-old-password"
                          >
                            Vecchia password
                          </label>
                          <div className="col-xl-10 col-md-9 col-8">
                            <div className="form-group">
                              <div className="input-group with-focus">
                                <Input
                                  type="password"
                                  id="id-password"
                                  name="oldPassword"
                                  className="border-right-0"
                                  placeholder="Password"
                                  invalid={this.hasError(
                                    "formChangePwd",
                                    "oldPassword",
                                    "required"
                                  )}
                                  onChange={this.validateOnChange}
                                  data-validate='["required"]'
                                  value={this.state.formChangePwd.oldPassword}
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
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                            htmlFor="input-new-password"
                          >
                            Nuova password
                          </label>
                          <div className="col-xl-10 col-md-9 col-8">
                            <div className="form-group">
                              <div className="input-group with-focus">
                                <Input
                                  type="password"
                                  id="id-new-password"
                                  name="newPassword"
                                  className="border-right-0"
                                  placeholder="Password"
                                  invalid={this.hasError(
                                    "formChangePwd",
                                    "newPassword",
                                    "required"
                                  )}
                                  onChange={this.validateOnChange}
                                  data-validate='["required"]'
                                  value={this.state.formChangePwd.newPassword}
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
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                            htmlFor="input-repeat-new-password"
                          >
                            Ripeti nuova password
                          </label>
                          <div className="col-xl-10 col-md-9 col-8">
                            <div className="form-group">
                              <div className="input-group with-focus">
                                <Input
                                  type="password"
                                  id="id-repeat-new-password"
                                  name="repeatNewPassword"
                                  className="border-right-0"
                                  placeholder="Password"
                                  invalid={this.hasError(
                                    "formChangePwd",
                                    "repeatNewPassword",
                                    "required"
                                  )}
                                  onChange={this.validateOnChange}
                                  data-validate='["required"]'
                                  value={
                                    this.state.formChangePwd.repeatNewPassword
                                  }
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
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-md-10">
                            <button className="btn btn-info" type="submit">
                              Conferma
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          )}
        </Row>
      </ContentWrapper>
    );
  }
}

//export default Profile;

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
