import React, { Component } from "react";
import ContentWrapper from "../../components/layout/ContentWrapper";
import { Row, Col, Input, Button } from "reactstrap";
import Event from "../events/Event.js";
import MyEvents from "../events/MyEvents";
import EventCard from "../events/EventCard.js";
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
        bookmaker: "0",
      },

      events: [
        {
          eventDate: "oggi",
          sport: "calcio",
          competition: "Serie A",
          gender: config.API_URL + "/items/1",
          proposal: "over 2.5",
          event: "Roma - Parma",
          quote: "1.40",
          outcome: "2.5",
          notes: "alto rischio, non giocatela se non vi fidate",
          pool: props.pool,
        },
      ],
    };
    this.checkServiceDetails();
  }

  numberToBookmaker(number) {
    switch (number) {
      case "1":
        return "William Hill";
        break;
      case "2":
        return "Bet365";
      case "3":
        return "PlanetWin365";
      default:
        return "";
    }
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

  async savePool(e) {
    e.preventDefault();
    const form = e.target;
    const inputs = [...form.elements].filter((i) =>
      ["INPUT", "SELECT"].includes(i.nodeName)
    );

    const { errors, hasError } = FormValidator.bulkValidate(inputs);

    let bookmakerValidate = [];
    bookmakerValidate["required"] = this.state.NewPoolForm.bookmaker == "0";
    errors["bookmaker"] = bookmakerValidate;

    this.setState({
      [form.name]: {
        ...this.state[form.name],
        errors,
      },
    });

    if (!(hasError || this.state.NewPoolForm.bookmaker == "0")) {
      console.log("carico");
      /*
      const newPool = {
        createdOn: new Date(),
        description: this.state.description,
        stake: this.state.stake,
        bookmaker: this.numberToBookmaker(this.state.bookmaker),
        events: [],
        author: this.props.app.user._links.self.href,
        service: this.props.app.serviceDetails.links.self.href,
      };

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
        });*/
    }
  }

  async getMyEvents(data) {
    var token = await TokenManager.getInstance().getToken();
    if (data)
      fetch(data + "/events", {
        method: "GET",
        headers: { "Content-Type": "application/json", "X-Auth": token },
      })
        .then((response) => response.json())
        .then((response) =>
          this.setState({ events: response._embedded.events })
        );
  }

  addEvent(event) {
    var joined = this.state.events.concat(event);
    this.setState({ events: joined }, () => console.log(this.state.events));
  }

  handleBookmakerChange(bookmaker) {
    let validate = [];
    validate["required"] = bookmaker.target.value == "0";
    this.setState({
      ["NewPoolForm"]: {
        ...this.state["NewPoolForm"],
        bookmaker: bookmaker.target.value,
        errors: {
          ...this.state["NewPoolForm"].errors,
          ["bookmaker"]: validate,
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
      <ContentWrapper>
        <Row>
          <Col lg="12">
            <div className="card card-default">
              <div className="card-header d-flex align-items-center">
                <div className="d-flex justify-content-center col">
                  <div className="h4 m-0 text-center">
                    Inserimento schedina per il pacchetto "
                    {this.props.app.serviceDetails.serviceName}"
                  </div>
                </div>
              </div>
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
                          {this.hasError("NewPoolForm", "stake", "integer") && (
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
                          <select
                            name="bookmaker"
                            value={this.state.bookmaker}
                            onChange={(event) =>
                              this.handleBookmakerChange(event)
                            }
                            className="custom-select custom-select-sm"
                          >
                            <option value="0">Seleziona</option>
                            <option value="1">William Hill</option>
                            <option value="2">Bet365</option>
                            <option value="3">PlanetWin365</option>
                          </select>
                          {this.hasError(
                            "NewPoolForm",
                            "bookmaker",
                            "required"
                          ) && (
                            <small className="text-danger">
                              Il campo Bookmaker è obbligatorio
                            </small>
                          )}
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-12">
                          <Button
                            color="success"
                            className="float-right"
                            form="NewPoolForm"
                          >
                            Salva schedina
                          </Button>
                          <Button color="primary" onClick={this.openEvent}>
                            Aggiungi evento
                          </Button>
                          <Event
                            pool={this.state.poolURL}
                            addEvent={(event) => this.addEvent(event)}
                            ref={this.eventModalRef}
                          ></Event>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-12">
                          <h3>Lista eventi</h3>
                          <MyEvents events={this.state.events} />
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

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewPool);