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
import CurrencyInput from "../../components/inputs/CurrencyInput";

class NewPool extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      mode: "new",
      NewPoolForm: {
        description: "",
        stake: "",
        bookmaker: "",
      },
    };
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
        mode: "new",
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

  prepareToEdit() {
    this.setState({
      mode: "edit",
      NewPoolForm: {
        description: this.props.poolToEdit.description,
        stake: this.props.poolToEdit.stake,
        bookmaker: this.props.poolToEdit.bookmaker,
      },
    });
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
      if (this.state.mode === "new") {
        var token = await TokenManager.getInstance().getToken();
        const authorUrl = await fetch(
          this.props.app.serviceDetails.links.author.href,
          {
            method: "GET",
            headers: { "Content-Type": "application/json", "X-Auth": token },
          }
        )
          .then((response) => response.json())
          .then((response) => {
            return response._links.self.href;
          });

        const newPool = {
          createdOn: new Date(),
          description: this.state.NewPoolForm.description,
          stake: this.state.NewPoolForm.stake,
          bookmaker: this.state.NewPoolForm.bookmaker,
          events: [],
          author: authorUrl,
          service: this.props.app.serviceDetails.links.self.href,
        };

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
          });
      } else {
        this.editPool();
      }
    }
  }

  async editPool() {
    const editedPool = {
      createdOn: this.props.poolToEdit.createdOn,
      description: this.state.NewPoolForm.description,
      stake: this.state.NewPoolForm.stake,
      bookmaker: this.state.NewPoolForm.bookmaker,
    };

    var token = await TokenManager.getInstance().getToken();
    fetch(this.props.poolToEdit._links.self.href, {
      method: "PUT",
      headers: { "Content-Type": "application/json", "X-Auth": token },
      body: JSON.stringify(editedPool),
    })
      .then((response) => response.json())
      .then(() => {
        this.toggleModal();
        this.props.refreshService();
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
      <Modal
        isOpen={this.props.modalNewPoolVisible}
        onOpened={() => {
          if (this.props.poolToEdit !== null) this.prepareToEdit();
        }}
        toggle={() => this.toggleModal()}
        style={{ maxWidth: "70%" }}
      >
        <ModalHeader toggle={() => this.toggleModal()}>
          <h4>
            {this.state.mode === "new"
              ? "Inserimento schedina"
              : 'Modifica schedina "' + this.props.poolToEdit.description + '"'}
          </h4>
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
                            <CurrencyInput
                              name="stake"
                              max={1000}
                              onValueChange={(val) =>
                                this.setState({
                                  NewPoolForm: {
                                    ...this.state["NewPoolForm"],
                                    stake: val,
                                  },
                                })
                              }
                              invalid={
                                this.hasError(
                                  "NewPoolForm",
                                  "stake",
                                  "required"
                                ) ||
                                this.hasError("NewPoolForm", "stake", "min")
                              }
                              data-validate='["required", "min"]'
                              className={"form-control form-control"}
                              style={{ textAlign: "right" }}
                              value={this.state.NewPoolForm.stake}
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
                            {this.hasError("NewPoolForm", "stake", "min") && (
                              <span className="invalid-feedback">
                                Il campo Stake deve essere maggiore di zero
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
