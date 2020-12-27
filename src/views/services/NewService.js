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
    mode: "new",
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

  componentDidMount() {
  }

  async uploadTaxonomy(taxonomy) {
    var token = await TokenManager.getInstance().getToken();

    try {
      return fetch(config.API_URL + "/taxonomies/", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Auth": token },
        body: JSON.stringify({ definition: taxonomy }),
      })
      .then((response) => response.json());
    } catch {}
  }

  toggleModal() {
    this.setState(
      {
        mode: "new",
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

  prepareToEdit() {
    this.setState({
      mode: "edit",
      NewServiceForm: {
        taxonomies: this.props.serviceToEdit.taxonomies,
        serviceName: this.props.serviceToEdit.serviceName,
        description: this.props.serviceToEdit.description,
        maxSubscribers: this.props.serviceToEdit.maxSubscribers,
        duration: this.props.serviceToEdit.duration,
        price: this.props.serviceToEdit.price,
        version: "1",
      },
    });
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
      if (this.props.serviceToEdit !== null) {
        //devo modificare
        this.editService();
      } else {
        //carico le taxonomies
        const arrayDefinitions = this.state.NewServiceForm.taxonomies;
        let arrayFetch = [];

        for (let definition of arrayDefinitions) {
          arrayFetch.push(this.uploadTaxonomy(definition));
        }

        let arrayUrlTaxonomies = [];
        await Promise.all(arrayFetch).then((results) => {
          for (let result of results) {
            arrayUrlTaxonomies.push(result._links.self.href);
          }
        });

        const newService = {
          author: this.props.app.user._links.user.href,
          taxonomies: arrayUrlTaxonomies,
          serviceName: this.state.NewServiceForm.serviceName,
          description: this.state.NewServiceForm.description,
          maxSubscribers: parseInt(this.state.NewServiceForm.maxSubscribers),
          duration: parseInt(this.state.NewServiceForm.duration),
          price: parseInt(this.state.NewServiceForm.price),
          version: parseInt(this.state.NewServiceForm.version),
        };
        //carico il nuovo pacchetto online

        var token = await TokenManager.getInstance().getToken();
        fetch(config.API_URL + "/services", {
          method: "POST",
          headers: { "Content-Type": "application/json", "X-Auth": token },
          body: JSON.stringify(newService),
        })
          .then((response) => response.json())
          .then((_) => {
            this.toggleModal();
            this.props.refreshServiceList();
          });
      }
    }
  }

  async editService() {
    //associo le taxonomies a link gia esistenti
    let arrayUrlExistingTaxonomies = [];
    let arrayTaxonomiesWithNoUrl = [];
    for (let taxonomy of this.state.NewServiceForm.taxonomies) {
      const existingUrl = this.props.serviceToEdit.taxonomiesObjects.filter(
        (obj) => {
          return obj.definition === taxonomy;
        }
      );
      if (existingUrl.length === 0) arrayTaxonomiesWithNoUrl.push(taxonomy);
      else arrayUrlExistingTaxonomies.push(existingUrl[0]._links.self.href);
    }

    //carico le taxonomies rimanenti

    let arrayFetch = [];

    for (let definition of arrayTaxonomiesWithNoUrl) {
      arrayFetch.push(this.uploadTaxonomy(definition));
    }

    await Promise.all(arrayFetch).then((results) => {
      for (let result of results) {
        arrayUrlExistingTaxonomies.push(result._links.self.href);
      }
    });

    var token = await TokenManager.getInstance().getToken();
    var userUrl = await fetch(this.props.serviceToEdit._links.author.href, {
      method: "GET",
      headers: { "Content-Type": "application/json", "X-Auth": token },
    })
      .then((response) => response.json())
      .then((response) => {
        return response._links.self.href;
      });

    const editTaxonomies = {
      taxonomies: arrayUrlExistingTaxonomies,
    };
    //carico i nuovi tag
    await fetch(this.props.serviceToEdit._links.self.href, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "X-Auth": token },
      body: JSON.stringify(editTaxonomies),
    })
    .then((response) => response.json());

    const editService = {
      author: userUrl,
      serviceName: this.state.NewServiceForm.serviceName,
      description: this.state.NewServiceForm.description,
      maxSubscribers: parseInt(this.state.NewServiceForm.maxSubscribers),
      duration: parseInt(this.state.NewServiceForm.duration),
      price: parseInt(this.state.NewServiceForm.price),
      version: parseInt(this.state.NewServiceForm.version),
    };

    fetch(this.props.serviceToEdit._links.self.href, {
      method: "PUT",
      headers: { "Content-Type": "application/json", "X-Auth": token },
      body: JSON.stringify(editService),
    })
    .then((response) => response.json())
    .then((_) => {
      this.toggleModal();
      this.props.refreshServiceList();
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
        isOpen={this.props.modalNewServiceVisible}
        onOpened={() => {
          if (this.props.serviceToEdit !== null) this.prepareToEdit();
        }}
        toggle={() => this.toggleModal()}
        style={{ maxWidth: "70%" }}
      >
        <ModalHeader toggle={() => this.toggleModal()}>
          <span>{this.state.mode === "new" ? "Nuovo" : "Modifica"} pacchetto</span>
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
                              disabled={this.props.serviceToEdit !== null}
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
                                ) ||
                                this.hasError("NewServiceForm", "price", "min")
                              }
                              data-validate='["required", "integer", "min"]'
                              data-param={1}
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
                            {this.hasError(
                              "NewServiceForm",
                              "price",
                              "min"
                            ) && (
                              <span className="invalid-feedback">
                                Il prezzo deve essere maggiore di zero
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
                              disabled={this.props.serviceToEdit !== null}
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
                                ) ||
                                this.hasError(
                                  "NewServiceForm",
                                  "maxSubscribers",
                                  "min"
                                )
                              }
                              data-validate='["required", "integer", "min"]'
                              data-param={1}
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
                            {this.hasError(
                              "NewServiceForm",
                              "price",
                              "integer"
                            ) && (
                              <span className="invalid-feedback">
                                Il N° max iscritti deve essere un maggiore di
                                zero
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
                              disabled={this.props.serviceToEdit !== null}
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
                                ) ||
                                this.hasError(
                                  "NewServiceForm",
                                  "duration",
                                  "min"
                                )
                              }
                              data-validate='["required", "integer", "min"]'
                              data-param={1}
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
                            {this.hasError(
                              "NewServiceForm",
                              "duration",
                              "min"
                            ) && (
                              <span className="invalid-feedback">
                                La durata deve essere maggiore di zero
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
                              disabled={this.props.serviceToEdit !== null}
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
                                ) ||
                                this.hasError(
                                  "NewServiceForm",
                                  "version",
                                  "min"
                                )
                              }
                              data-validate='["required", "integer", "min"]'
                              data-param={1}
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
                            {this.hasError(
                              "NewServiceForm",
                              "version",
                              "min"
                            ) && (
                              <span className="invalid-feedback">
                                La Versione deve essere maggiore di zero
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
