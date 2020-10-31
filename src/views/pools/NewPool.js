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
import * as actions from "../../store/actions/actions";

class NewPool extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      description: "descr",
      quote: "1.02",
      stake: "10.3",
      profit: "1",
      bookmaker: "1",
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
    console.log(this.props);
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

  async savePool() {
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
      });
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
                    <form className="form-horizontal">
                      <div className="form-group row">
                        <label
                          className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                          htmlFor="inputDescription"
                        >
                          Descrizione
                        </label>
                        <div className="col-xl-10 col-md-9 col-8">
                          <input
                            className="form-control"
                            id="inputDescription"
                            type="text"
                            placeholder=""
                            value={this.state.description}
                            onChange={(event) =>
                              this.setState({ description: event.target.value })
                            }
                          />
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
                            id="inputStake"
                            placeholder="Stake"
                            type="number"
                            step="0.1"
                            value={this.state.stake}
                            onChange={(event) =>
                              this.setState({ stake: event.target.value })
                            }
                          />
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
                            value={this.state.bookmaker}
                            onChange={(event) =>
                              this.setState({ bookmaker: event.target.value })
                            }
                            className="custom-select custom-select-sm"
                          >
                            <option>Seleziona</option>
                            <option value="1">William Hill</option>
                            <option value="2">Bet365</option>
                            <option value="3">PlanetWin365</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-12">
                          <Button
                            color="success"
                            className="float-right"
                            onClick={() => this.savePool()}
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
