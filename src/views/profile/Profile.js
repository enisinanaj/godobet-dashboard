import React, { Component } from "react";
import ContentWrapper from "../../components/layout/ContentWrapper";
import { Row, Col, Input } from "reactstrap";
import FormValidator from "../../template_components/Forms/FormValidator.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../store/actions/actions";
import config from "../../store/config";
import TokenManager from "../../components/auth/Token";
import { auth } from "../../components/auth/firebase.js";

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
      formBankInfo: {
        IBAN: "",
        bankName: "",
        bankAddress: "",
        swiftCode: "",
        ABICode: "",
        CABCode: "",
      }
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

    if (!hasError) {
      var updatedUser = {
        name: this.state.formUserInfo.userName,
      };

      const serverUserInfo = {
        loginProvider: config.API_URL + "/items/6",
        password: "",
        role: this.props.app.user.role._links.self.href,
        email: this.state.formUserInfo.email,
        accessToken: this.props.app.user.accessToken,
      };

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

  async changeUserPassword(e) {
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

    if (!hasError) {
      //controllo se la password è giusta

      var user = auth.currentUser;
      auth
        .signInWithEmailAndPassword(
          user.email,
          this.state.formChangePwd.oldPassword
        )
        .then((response) => {
          //password vecchia giusta
          user
            .updatePassword(this.state.formChangePwd.newPassword)
            .then(() => {
              // Update successful.
              alert("Cambio password riuscito! Esegui di nuovo il login");
              auth.signOut().then((e) => {
                this.props.actions.userLogin(null);
                this.props.actions.serviceDetails(null);
                this.props.actions.poolDetails(null);
              });
            })
            .catch(function (error) {
              alert(
                "Cambio password non riuscito, assicurati di usare una password di almeno 6 lettere"
              );
            });
        })
        .catch((error) => {
          alert("Password errata!");
        });
      // Prompt the user to re-provide their sign-in credentials
    }
  }

  async changePaymentInfo(e) {
    //ToDo
  }

  render() {
    return (
      <ContentWrapper>
        <Row>
          <Col lg="12">
            <div className="card card-default">
              <div className="card-header d-flex align-items-center">
                <div className="d-flex col">
                  <div className="col-md-2">
                    <img
                      className="img-thumbnail rounded-circle thumb128"
                      src="img/user/09.jpg"
                      alt="Avatar"
                    />
                  </div>
                  <div className="col-md-10 pl-0">
                    <div className="h1 mt-4 mb-4 ml-0 mr-0 text-left">
                      Informazioni del contatto
                    </div>
                    <div className="h5 mt-4 mb-4 ml-0 mr-0 text-left">
                      Inserisci qui le informazioni base riguardanti il tuo
                      profilo.
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body mt-0">
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
                          <span className="invalid-feedback">
                            Il campo Nome è obbligatorio
                          </span>
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
                        <div className="col-md-2"></div>
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

          <Col lg="12">
            <div className="card card-default">
              <div className="card-header d-flex align-items-center">
                <div className="d-flex col">
                  <div className="h4 m-0 text-center">Cambio password</div>
                </div>
              </div>
              <div className="card-body">
                <div className="row py-4 justify-content-center">
                  <div className="col-12 col-sm-10">
                    <form
                      className="form-horizontal"
                      name="formChangePwd"
                      onSubmit={(e) => this.changeUserPassword(e)}
                    >
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
                                invalid={
                                  this.hasError(
                                    "formChangePwd",
                                    "repeatNewPassword",
                                    "required"
                                  ) ||
                                  this.hasError(
                                    "formChangePwd",
                                    "repeatNewPassword",
                                    "equalto"
                                  )
                                }
                                onChange={this.validateOnChange}
                                data-validate='["required", "equalto"]'
                                data-param="id-new-password"
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
                                Le due password devono coincidere
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

          <Col lg="12">
            <div className="card card-default">
              <div className="card-header d-flex align-items-center">
                <div className="d-flex col">
                  <div className="h4 m-0 text-center">Informazioni di pagamento</div>
                </div>
              </div>
              <div className="card-body">
                <div className="row py-4 justify-content-center">
                  <div className="col-12 col-sm-10">
                    <form
                      className="form-horizontal"
                      name="formChangePaymentInfo"
                      onSubmit={(e) => this.changePaymentInfo(e)}
                    >
                      <div className="form-group row">
                        <label
                          className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                          htmlFor="input-iban"
                        >
                          IBAN
                        </label>
                        <div className="col-xl-10 col-md-9 col-8">
                          <div className="form-group">
                            <div className="input-group with-focus">
                              <Input
                                className="form-control"
                                name="IBAN"
                                id="inputIBAN"
                                type="text"
                                invalid={this.hasError(
                                  "formBankInfo",
                                  "IBAN",
                                  "required"
                                )}
                                data-validate='["required"]'
                                value={this.state.formBankInfo.IBAN}
                                onChange={(event) => this.validateOnChange(event)}
                              />
                              <span className="invalid-feedback">
                                Il campo IBAN è obbligatorio
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                          htmlFor="input-bank-name"
                        >
                          Nome banca
                        </label>
                        <div className="col-xl-10 col-md-9 col-8">
                          <div className="form-group">
                            <div className="input-group with-focus">
                              <Input
                                className="form-control"
                                name="bankName"
                                id="inputBankName"
                                type="text"
                                invalid={this.hasError(
                                  "formBankInfo",
                                  "bankName",
                                  "required"
                                )}
                                data-validate='["required"]'
                                value={this.state.formBankInfo.bankName}
                                onChange={(event) => this.validateOnChange(event)}
                              />
                              <span className="invalid-feedback">
                                Il nome della banca è obbligatorio
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                          htmlFor="input-bank-address"
                        >
                          Indirizzo banca
                        </label>
                        <div className="col-xl-10 col-md-9 col-8">
                          <div className="form-group">
                            <div className="input-group with-focus">
                              <Input
                                className="form-control"
                                name="bankAddress"
                                id="inputBankAddress"
                                type="text"
                                invalid={this.hasError(
                                  "formBankInfo",
                                  "bankAddress",
                                  "required"
                                )}
                                data-validate='["required"]'
                                value={this.state.formBankInfo.bankAddress}
                                onChange={(event) => this.validateOnChange(event)}
                              />
                              <span className="invalid-feedback">
                                L'indirizzo della banca è obbligatorio
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                          htmlFor="input-swift-code"
                        >
                          BIC / SWIFT
                        </label>
                        <div className="col-xl-10 col-md-9 col-8">
                          <div className="form-group">
                            <div className="input-group with-focus">
                              <Input
                                className="form-control"
                                name="swiftCode"
                                id="inputSwiftCode"
                                type="text"
                                invalid={this.hasError(
                                  "formBankInfo",
                                  "swiftCode",
                                  "required"
                                )}
                                data-validate='["required"]'
                                value={this.state.formBankInfo.swiftCode}
                                onChange={(event) => this.validateOnChange(event)}
                              />
                              <span className="invalid-feedback">
                                Il codice SWIFT / BIC è obbligatorio
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                          htmlFor="input-ABI-code"
                        >
                          ABI
                        </label>
                        <div className="col-xl-10 col-md-9 col-8">
                          <div className="form-group">
                            <div className="input-group with-focus">
                              <Input
                                className="form-control"
                                name="ABICode"
                                id="inputABICode"
                                type="text"
                                invalid={this.hasError(
                                  "formBankInfo",
                                  "ABICode",
                                  "required"
                                )}
                                data-validate='["required"]'
                                value={this.state.formBankInfo.ABICode}
                                onChange={(event) => this.validateOnChange(event)}
                              />
                              <span className="invalid-feedback">
                                Il codice ABI è obbligatorio
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                          htmlFor="input-CAB-code"
                        >
                          CAB
                        </label>
                        <div className="col-xl-10 col-md-9 col-8">
                          <div className="form-group">
                            <div className="input-group with-focus">
                              <Input
                                className="form-control"
                                name="CABCode"
                                id="inputCABCode"
                                type="text"
                                invalid={this.hasError(
                                  "formBankInfo",
                                  "CABCode",
                                  "required"
                                )}
                                data-validate='["required"]'
                                value={this.state.formBankInfo.CABCode}
                                onChange={(event) => this.validateOnChange(event)}
                              />
                              <span className="invalid-feedback">
                                Il codice CAB è obbligatorio
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
