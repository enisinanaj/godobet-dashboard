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
import "react-datetime/css/react-datetime.css";
import { connect } from "react-redux";
import ReactTagInput from "@pathofdev/react-tag-input";
import FormValidator from "../../template_components/Forms/FormValidator.js";
import "@pathofdev/react-tag-input/build/index.css";
import config from "../../store/config";

class NewService extends Component {
  state = {
    NewServiceForm: {
      taxonomies: [],
      serviceName: "",
      description: "",
      maxSubscribers: "",
      duration: "",
      price: "",
      version: 1,
    },
  };

  toggleModal() {
    this.setState(
      {
        NewServiceForm: {
          taxonomies: [],
          serviceName: "",
          description: "",
          maxSubscribers: "",
          duration: "",
          price: "",
          version: 1,
        },
      },
      () => this.props.toggleModal()
    );
  }

  handleTaxonomiesChange(newTaxonomies) {
    let validate = [];
    validate["required"] = newTaxonomies.length <= 0;
    this.setState({
      ["NewServiceForm"]: {
        ...this.state["NewServiceForm"],
        taxonomies: newTaxonomies,
        errors: {
          ...this.state["NewServiceForm"].errors,
          ["taxonomies"]: validate,
        },
      },
    });
  }

  async saveService(e) {
    e.preventDefault();
    const form = e.target;
    const inputs = [...form.elements].filter((i) =>
      ["INPUT", "SELECT"].includes(i.nodeName)
    );
    inputs.splice(5, 1);

    const { errors, hasError } = FormValidator.bulkValidate(inputs);

    let taxonomiesValidate = [];
    taxonomiesValidate["required"] =
      this.state.NewServiceForm.taxonomies.length <= 0;
    errors["taxonomies"] = taxonomiesValidate;

    this.setState({
      [form.name]: {
        ...this.state[form.name],
        errors,
      },
    });

    if (!(hasError || this.state.NewServiceForm.taxonomies.length <= 0)) {
      const newService = {
        author: this.props.app.user._links.user.href,
        taxonomies: [], //this.state.taxonomies,
        serviceName: this.state.NewServiceForm.serviceName,
        description: this.state.NewServiceForm.description,
        maxSubscribers: parseInt(
          this.state.NewServiceForm.maxSubscribers === ""
            ? 0
            : this.state.NewServiceForm.maxSubscribers
        ),
        duration: parseInt(
          this.state.NewServiceForm.duration === ""
            ? 0
            : this.state.NewServiceForm.duration
        ),
        price: parseInt(
          this.state.NewServiceForm.price === ""
            ? 0
            : this.state.NewServiceForm.price
        ),
        version: parseInt(
          this.state.NewServiceForm.version === ""
            ? 0
            : this.state.NewServiceForm.version
        ),
      };
      //carico il nuovo pacchetto online
      var token = await TokenManager.getInstance().getToken();
      fetch(config.API_URL + "/services", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Auth": token },
        body: JSON.stringify(newService),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          this.toggleModal();
          this.props.refreshServiceList();
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

  render() {
    return (
      <Modal
        isOpen={this.props.modalNewServiceVisible}
        toggle={() => this.toggleModal()}
        style={{ maxWidth: "70%" }}
      >
        <ModalHeader toggle={() => this.toggleModal()}>
          Nuovo pacchetto
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col lg="12">
              <div className="card card-default">
                <div className="card-body">
                  <div className="row py-8 justify-content-center">
                    <div className="col-12 col-sm-10">
                      <form
                        name="NewServiceForm"
                        className="form-horizontal"
                        id="NewServiceForm"
                        onSubmit={(e) => this.saveService(e)}
                      >
                        <div className="form-group row">
                          <label
                            className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                            htmlFor="inputServiceName"
                          >
                            Nome
                          </label>
                          <div className="col-xl-10 col-md-9 col-8 input-group with-focus">
                            <Input
                              className="form-control"
                              name="serviceName"
                              id="inputServiceName"
                              type="text"
                              invalid={this.hasError(
                                "NewServiceForm",
                                "serviceName",
                                "required"
                              )}
                              data-validate='["required"]'
                              value={this.state.NewServiceForm.serviceName}
                              onChange={(event) => this.validateOnChange(event)}
                            />

                            {this.hasError(
                              "NewServiceForm",
                              "serviceName",
                              "required"
                            ) && (
                              <span className="invalid-feedback">
                                Il campo Nome è obbligatorio
                              </span>
                            )}
                          </div>
                        </div>
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
                              id="inputDescription"
                              name="description"
                              type="text"
                              invalid={this.hasError(
                                "NewServiceForm",
                                "description",
                                "required"
                              )}
                              data-validate='["required"]'
                              value={this.state.NewServiceForm.description}
                              onChange={(event) => this.validateOnChange(event)}
                            />
                            {this.hasError(
                              "NewServiceForm",
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
                            htmlFor="inputPrice"
                          >
                            Prezzo
                          </label>
                          <div className="col-xl-10 col-md-9 col-8">
                            <Input
                              className="form-control"
                              type="number"
                              name="price"
                              id="inputPrice"
                              invalid={
                                this.hasError(
                                  "NewServiceForm",
                                  "price",
                                  "required"
                                ) ||
                                this.hasError(
                                  "NewServiceForm",
                                  "price",
                                  "integer"
                                )
                              }
                              data-validate='["required", "integer"]'
                              value={this.state.NewServiceForm.price}
                              onChange={(event) => this.validateOnChange(event)}
                            />
                            {this.hasError(
                              "NewServiceForm",
                              "price",
                              "required"
                            ) && (
                              <span className="invalid-feedback">
                                Il campo Prezzo è obbligatorio
                              </span>
                            )}
                            {this.hasError(
                              "NewServiceForm",
                              "price",
                              "integer"
                            ) && (
                              <span className="invalid-feedback">
                                Il prezzo deve essere un numero intero
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                            htmlFor="inputMaxSubscribers"
                          >
                            N° max iscritti
                          </label>
                          <div className="col-xl-10 col-md-9 col-8">
                            <Input
                              className="form-control"
                              name="maxSubscribers"
                              id="inputMaxSubscribers"
                              type="number"
                              invalid={
                                this.hasError(
                                  "NewServiceForm",
                                  "maxSubscribers",
                                  "required"
                                ) ||
                                this.hasError(
                                  "NewServiceForm",
                                  "maxSubscribers",
                                  "integer"
                                )
                              }
                              data-validate='["required", "integer"]'
                              value={this.state.NewServiceForm.maxSubscribers}
                              onChange={(event) => this.validateOnChange(event)}
                            />
                            {this.hasError(
                              "NewServiceForm",
                              "maxSubscribers",
                              "required"
                            ) && (
                              <span className="invalid-feedback">
                                Il campo N° max iscritti è obbligatorio
                              </span>
                            )}
                            {this.hasError(
                              "NewServiceForm",
                              "price",
                              "integer"
                            ) && (
                              <span className="invalid-feedback">
                                Il N° max iscritti deve essere un numero intero
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                            htmlFor="inputDuration"
                          >
                            Durata
                          </label>
                          <div className="col-xl-10 col-md-9 col-8">
                            <Input
                              className="form-control"
                              id="inputDuration"
                              name="duration"
                              type="number"
                              invalid={
                                this.hasError(
                                  "NewServiceForm",
                                  "duration",
                                  "required"
                                ) ||
                                this.hasError(
                                  "NewServiceForm",
                                  "duration",
                                  "integer"
                                )
                              }
                              data-validate='["required", "integer"]'
                              value={this.state.NewServiceForm.duration}
                              onChange={(event) => this.validateOnChange(event)}
                            />
                            {this.hasError(
                              "NewServiceForm",
                              "duration",
                              "required"
                            ) && (
                              <span className="invalid-feedback">
                                Il campo Durata è obbligatorio
                              </span>
                            )}
                            {this.hasError(
                              "NewServiceForm",
                              "duration",
                              "integer"
                            ) && (
                              <span className="invalid-feedback">
                                La durata deve essere un numero intero
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                            htmlFor="inputTaxonomies"
                          >
                            Tag
                          </label>
                          <div className="col-xl-10 col-md-9 col-8">
                            <ReactTagInput
                              id="inputTaxonomies"
                              tags={this.state.NewServiceForm.taxonomies}
                              onChange={(newTags) =>
                                this.handleTaxonomiesChange(newTags)
                              }
                              removeOnBackspace={true}
                              placeholder={"Inserisci un tag e premi invio"}
                            />
                            {this.hasError(
                              "NewServiceForm",
                              "taxonomies",
                              "required"
                            ) && (
                              <small className="text-danger">
                                Il campo Tag è obbligatorio
                              </small>
                            )}
                          </div>
                        </div>

                        <div className="form-group row">
                          <label
                            className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                            htmlFor="inputVersion"
                          >
                            Versione
                          </label>
                          <div className="col-xl-10 col-md-9 col-8">
                            <Input
                              className="form-control"
                              name="version"
                              id="inputVersion"
                              type="number"
                              invalid={
                                this.hasError(
                                  "NewServiceForm",
                                  "version",
                                  "required"
                                ) ||
                                this.hasError(
                                  "NewServiceForm",
                                  "version",
                                  "integer"
                                )
                              }
                              data-validate='["required", "integer"]'
                              value={this.state.NewServiceForm.version}
                              onChange={(event) => this.validateOnChange(event)}
                            />

                            {this.hasError(
                              "NewServiceForm",
                              "version",
                              "required"
                            ) && (
                              <span className="invalid-feedback">
                                Il campo Versione è obbligatorio
                              </span>
                            )}
                            {this.hasError(
                              "NewServiceForm",
                              "version",
                              "integer"
                            ) && (
                              <span className="invalid-feedback">
                                La Versione deve essere un numero intero
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
          <Button form="NewServiceForm" color="primary">
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
export default connect(mapStateToProps)(NewService);
