/* eslint-disable no-useless-computed-key */
import React, { Component } from "react";
import {
  Row,
  Col,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import TokenManager from "../../components/auth/Token";
import config from "../../store/config";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FormValidator from "../../template_components/Forms/FormValidator.js";
import * as actions from "../../store/actions/actions";

class NewPool extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      NewPoolForm: {
        description: "",
        stake: "",
        bookmaker: "",
      },
    };
    this.checkServiceDetails();
  }

  checkServiceDetails() {
    if (Object.keys(this.props.app.serviceDetails).lenght === 0) {
      this.props.history.push("/");
      return;
    }
  }

  eventModalRef = (props) => {
    this.showModal = props && props.toggleModal;
  };

  openEvent = () => {
    this.showModal();
  };

  toggleModal() {
    this.setState(
      {
        NewPoolForm: {
          description: "",
          stake: "",
          bookmaker: "",
        },
      },
      () => {
        this.props.toggleModal();
      }
    );
  }

  async savePool(e) {
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

    if (!(hasError || this.state.NewPoolForm.bookmaker === "0")) {
      const newPool = {
        createdOn: new Date(),
        description: this.state.NewPoolForm.description,
        stake: this.state.NewPoolForm.stake,
        bookmaker: this.state.NewPoolForm.bookmaker,
        events: [],
        author: this.props.app.user._links.self.href,
        service: this.props.app.serviceDetails.links.self.href,
      };
      console.log(newPool);
      /*
      var token = await TokenManager.getInstance().getToken();
      fetch(config.API_URL + "/pools", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Auth": token },
        body: JSON.stringify(newPool),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          this.toggleModal();
          this.props.refreshService();
        });*/
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

  render() {
    return (
      <Modal
        isOpen={this.props.modalNewPoolVisible}
        toggle={() => this.toggleModal()}
        style={{ maxWidth: "70%" }}
      >
        <ModalHeader toggle={() => this.toggleModal()}>
          Inserimento schedina per il pacchetto "
          {this.props.app.serviceDetails.serviceName}"
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col lg="12">
              <div className="card card-default">
                <div className="card-body">
                  <div className="row py-4 justify-content-center">
                    <div className="col-12 col-sm-10">
                      <form
                        className="form-horizontal"
                        name="NewPoolForm"
                        id="NewPoolForm"
                        onSubmit={(e) => this.savePool(e)}
                      >
                        <div className="form-group row">
                          <label
                            className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                            htmlFor="inputDescription"
                          >
                            Descrizione
                          </label>
                          <div className="col-xl-10 col-md-9 col-8">
                            <Input
                              className="form-control"
                              name="description"
                              id="inputDescription"
                              type="text"
                              invalid={this.hasError(
                                "NewPoolForm",
                                "description",
                                "required"
                              )}
                              data-validate='["required"]'
                              value={this.state.NewPoolForm.description}
                              onChange={(event) => this.validateOnChange(event)}
                            />

                            {this.hasError(
                              "NewPoolForm",
                              "description",
                              "required"
                            ) && (
                              <span className="invalid-feedback">
                                Il campo Descrizione è obbligatorio
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                            htmlFor="inputStake"
                          >
                            Stake
                          </label>
                          <div className="col-xl-10 col-md-9 col-8">
                            <Input
                              className="form-control"
                              name="stake"
                              id="inputStake"
                              type="number"
                              invalid={
                                this.hasError(
                                  "NewPoolForm",
                                  "stake",
                                  "required"
                                ) ||
                                this.hasError("NewPoolForm", "stake", "integer")
                              }
                              data-validate='["required", "integer"]'
                              value={this.state.NewPoolForm.stake}
                              onChange={(event) => this.validateOnChange(event)}
                            />

                            {this.hasError(
                              "NewPoolForm",
                              "stake",
                              "required"
                            ) && (
                              <span className="invalid-feedback">
                                Il campo Stake è obbligatorio
                              </span>
                            )}
                            {this.hasError(
                              "NewPoolForm",
                              "stake",
                              "integer"
                            ) && (
                              <span className="invalid-feedback">
                                Il campo Stake deve essere un intero
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                            htmlFor="inputBookmaker"
                          >
                            Bookmaker
                          </label>
                          <div className="col-xl-10 col-md-9 col-8">
                            <Input
                              className="form-control"
                              name="bookmaker"
                              id="inputBookmaker"
                              type="text"
                              invalid={this.hasError(
                                "NewPoolForm",
                                "bookmaker",
                                "required"
                              )}
                              data-validate='["required"]'
                              value={this.state.NewPoolForm.bookmaker}
                              onChange={(event) => this.validateOnChange(event)}
                            />

                            {this.hasError(
                              "NewPoolForm",
                              "bookmaker",
                              "required"
                            ) && (
                              <span className="invalid-feedback">
                                Il campo Bookmaker è obbligatorio
                              </span>
                            )}
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" form="NewPoolForm">
            Salva
          </Button>{" "}
          <Button color="secondary" onClick={() => this.toggleModal()}>
            Annulla
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewPool);
