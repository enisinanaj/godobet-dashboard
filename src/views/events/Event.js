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
import * as moment from "moment";
import TokenManager from "../../components/auth/Token";

import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import FormValidator from "../../template_components/Forms/FormValidator.js";
import config from "../../store/config";

class Event extends Component {
  constructor(props, context) {
    super(props, context);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.state = {
      modal: false,
      NewEventForm: {
        eventDate: "",
        sport: "",
        competition: "",
        gender: "0",
        proposal: "",
        event: "",
        quote: "",
        outcome: "",
        notes: "",
        pool: props.pool,
      },
    };
  }

  toggleModal() {
    this.setState({ modal: !this.state.modal });
  }

  handleGenderChange(selected) {
    console.log(selected.target.value);
    let validate = [];
    validate["required"] = selected.target.value == "0";
    this.setState({
      ["NewEventForm"]: {
        ...this.state["NewEventForm"],
        gender: selected.target.value,
        errors: {
          ...this.state["NewEventForm"].errors,
          ["gender"]: validate,
        },
      },
    });

    this.setState({ gender: selected.target.value });
  }

  saveEventTest() {
    const newEvent = {
      eventDate: this.state.eventDate,
      sport: this.state.sport,
      competition: this.state.competition,
      gender: this.state.gender,
      proposal: this.state.proposal,
      event: this.state.event,
      quote: this.state.quote,
      outcome: this.state.outcome,
      notes: this.state.notes,
      pool: this.state.pool,
    };

    this.props.addEvent(newEvent);
    this.toggleModal();
  }

  async saveEvent(e) {
    e.preventDefault();
    const form = e.target;
    const inputs = [...form.elements].filter((i) =>
      ["INPUT", "SELECT"].includes(i.nodeName)
    );
    inputs[0]["name"] = "eventDate";

    const { errors, hasError } = FormValidator.bulkValidate(inputs);

    let eventDateValidate = [];
    eventDateValidate["required"] = this.state.NewEventForm.eventDate == "";
    errors["eventDate"] = eventDateValidate;

    let genderValidate = [];
    genderValidate["required"] = this.state.NewEventForm.gender == "0";
    errors["gender"] = genderValidate;

    this.setState({
      [form.name]: {
        ...this.state[form.name],
        errors,
      },
    });

    if (
      !(
        hasError ||
        this.state.NewEventForm.gender == "0" ||
        this.state.NewEventForm.eventDate == ""
      )
    ) {
      const newEvent = {
        eventDate: this.state.NewEventForm.eventDate,
        sport: this.state.NewEventForm.sport,
        competition: this.state.NewEventForm.competition,
        gender: this.state.NewEventForm.gender,
        proposal: this.state.NewEventForm.proposal,
        event: this.state.NewEventForm.event,
        quote: this.state.NewEventForm.quote,
        outcome: this.state.NewEventForm.outcome,
        notes: this.state.NewEventForm.notes,
        pool: "LINKPOOL",
        createdOn: "DATA",
      };
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
          this.props.history.push("/serviceDetails");
        });
    */
      this.toggleModal();
    }
  }

  handleEventDateChange(eventDate) {
    console.log(eventDate);
    let validate = [];
    validate["required"] = !(eventDate && eventDate._isValid);
    this.setState({
      ["NewEventForm"]: {
        ...this.state["NewEventForm"],
        eventDate: validate["required"] ? eventDate : eventDate.format(),
        errors: {
          ...this.state["NewEventForm"].errors,
          ["eventDate"]: validate,
        },
      },
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
        isOpen={this.state.modal}
        toggle={this.toggleModal}
        style={{ maxWidth: "70%" }}
      >
        <ModalHeader toggle={this.toggleModal}>Dettaglio evento</ModalHeader>
        <ModalBody>
          <Row>
            <Col lg="12">
              <div className="card card-default">
                <div className="card-body">
                  <div className="row py-8 justify-content-center">
                    <div className="col-12 col-sm-10">
                      <form
                        className="form-horizontal"
                        name="NewEventForm"
                        id="NewEventForm"
                        onSubmit={(e) => this.saveEvent(e)}
                      >
                        <div className="form-group row">
                          <label
                            className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                            htmlFor="inputEventDate"
                          >
                            Data evento
                          </label>
                          <div className="col-xl-10 col-md-9 col-8">
                            <Datetime
                              name="eventDate"
                              dateFormat={moment().format("DD/MM/YYYY")}
                              timeFormat={false}
                              closeOnSelect={true}
                              value={this.state.NewEventForm.eventDate}
                              onChange={(date) =>
                                this.handleEventDateChange(date)
                              }
                            />
                            {this.hasError(
                              "NewEventForm",
                              "eventDate",
                              "required"
                            ) && (
                              <small className="text-danger">
                                Il campo Data evento è obbligatorio
                              </small>
                            )}
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                            htmlFor="inputSport"
                          >
                            Sport
                          </label>
                          <div className="col-xl-10 col-md-9 col-8">
                            <Input
                              className="form-control"
                              name="sport"
                              id="inputSport"
                              type="text"
                              invalid={this.hasError(
                                "NewEventForm",
                                "sport",
                                "required"
                              )}
                              data-validate='["required"]'
                              value={this.state.NewEventForm.description}
                              onChange={(event) => this.validateOnChange(event)}
                            />

                            {this.hasError(
                              "NewEventForm",
                              "sport",
                              "required"
                            ) && (
                              <span className="invalid-feedback">
                                Il campo Sport è obbligatorio
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                            htmlFor="inputCompetition"
                          >
                            Competizione
                          </label>
                          <div className="col-xl-10 col-md-9 col-8">
                            <Input
                              className="form-control"
                              name="competition"
                              id="inputCompetition"
                              type="text"
                              invalid={this.hasError(
                                "NewEventForm",
                                "competition",
                                "required"
                              )}
                              data-validate='["required"]'
                              value={this.state.NewEventForm.competition}
                              onChange={(event) => this.validateOnChange(event)}
                            />

                            {this.hasError(
                              "NewEventForm",
                              "competition",
                              "required"
                            ) && (
                              <span className="invalid-feedback">
                                Il campo Competizione è obbligatorio
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                            htmlFor="inputGender"
                          >
                            Sesso
                          </label>
                          <div className="col-xl-10 col-md-9 col-8">
                            <select
                              name="gender"
                              defaultValue={this.state.gender}
                              onChange={(e) => this.handleGenderChange(e)}
                              className="custom-select custom-select-sm"
                            >
                              <option value="0">Seleziona</option>
                              <option value={config.API_URL + "/items/1"}>
                                M
                              </option>
                              <option value={config.API_URL + "/items/2"}>
                                F
                              </option>
                              <option value={config.API_URL + "/items/3"}>
                                X
                              </option>
                            </select>
                            {this.hasError(
                              "NewEventForm",
                              "gender",
                              "required"
                            ) && (
                              <small className="text-danger">
                                Il campo Sesso è obbligatorio
                              </small>
                            )}
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                            htmlFor="inputProposal"
                          >
                            Proposta
                          </label>
                          <div className="col-xl-10 col-md-9 col-8">
                            <Input
                              className="form-control"
                              name="proposal"
                              id="inputProposal"
                              type="text"
                              invalid={this.hasError(
                                "NewEventForm",
                                "proposal",
                                "required"
                              )}
                              data-validate='["required"]'
                              value={this.state.NewEventForm.proposal}
                              onChange={(event) => this.validateOnChange(event)}
                            />

                            {this.hasError(
                              "NewEventForm",
                              "proposal",
                              "required"
                            ) && (
                              <span className="invalid-feedback">
                                Il campo Proposta è obbligatorio
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                            htmlFor="inputEvent"
                          >
                            Evento
                          </label>
                          <div className="col-xl-10 col-md-9 col-8">
                            <Input
                              className="form-control"
                              name="event"
                              id="inputEvent"
                              type="text"
                              invalid={this.hasError(
                                "NewEventForm",
                                "event",
                                "required"
                              )}
                              data-validate='["required"]'
                              value={this.state.NewEventForm.event}
                              onChange={(event) => this.validateOnChange(event)}
                            />

                            {this.hasError(
                              "NewEventForm",
                              "event",
                              "required"
                            ) && (
                              <span className="invalid-feedback">
                                Il campo Evento è obbligatorio
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                            htmlFor="inputQuote"
                          >
                            Quota
                          </label>
                          <div className="col-xl-10 col-md-9 col-8">
                            <Input
                              className="form-control"
                              name="quote"
                              id="inputQuote"
                              type="number"
                              invalid={this.hasError(
                                "NewEventForm",
                                "quote",
                                "required"
                              )}
                              data-validate='["required"]'
                              value={this.state.NewEventForm.quote}
                              onChange={(event) => this.validateOnChange(event)}
                            />

                            {this.hasError(
                              "NewEventForm",
                              "quote",
                              "required"
                            ) && (
                              <span className="invalid-feedback">
                                Il campo Quota è obbligatorio
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                            htmlFor="inputOutcome"
                          >
                            Risultato
                          </label>
                          <div className="col-xl-10 col-md-9 col-8">
                            <Input
                              className="form-control"
                              name="outcome"
                              id="inputOutcome"
                              type="text"
                              invalid={this.hasError(
                                "NewEventForm",
                                "outcome",
                                "required"
                              )}
                              data-validate='["required"]'
                              value={this.state.NewEventForm.outcome}
                              onChange={(event) => this.validateOnChange(event)}
                            />

                            {this.hasError(
                              "NewEventForm",
                              "outcome",
                              "required"
                            ) && (
                              <span className="invalid-feedback">
                                Il campo Risultato è obbligatorio
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                            htmlFor="inputNotes"
                          >
                            Note
                          </label>
                          <div className="col-xl-10 col-md-9 col-8">
                            <textarea
                              name="notes"
                              className="form-control"
                              id="inputNotes"
                              row="4"
                              value={this.state.NewEventForm.notes}
                              onChange={(event) => this.validateOnChange(event)}
                            ></textarea>
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
          <Button color="primary" form="NewEventForm">
            Salva
          </Button>{" "}
          <Button color="secondary" onClick={this.toggleModal}>
            Annulla
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default Event;
