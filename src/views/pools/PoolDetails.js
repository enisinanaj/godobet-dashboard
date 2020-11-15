import React, { Component } from "react";
import ContentWrapper from "../../components/layout/ContentWrapper";
import {
  Card,
  CardBody,
  Row,
  Col,
  FormGroup,
  Spinner,
  Button,
} from "reactstrap";
import * as moment from "moment";
import MyEvents from "../events/MyEvents";
import { connect } from "react-redux";
import NewEvent from "../events/NewEvent";
import NewPool from "./NewPool";

import TokenManager from "../../components/auth/Token";

class PoolDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poolLoading: true,
      poolNoErrors: true,
      eventLoading: true,
      eventNoErrors: true,
      modalNewEventVisible: false,
      modalEditPoolVisible: false,
      events: [],
      pool: {},
    };
    this.checkPoolDetails();
    //this.test();
  }

  toggleModal = () => {
    this.setState({
      modalNewEventVisible: !this.state.modalNewEventVisible,
    });
  };

  toggleModalEditPool = () => {
    this.setState({
      modalEditPoolVisible: !this.state.modalEditPoolVisible,
    });
  };

  newEvent() {
    this.setState(
      {
        eventToEdit: null,
      },
      () => this.toggleModal()
    );
  }

  editEvent(event) {
    this.setState(
      {
        eventToEdit: event,
      },
      () => this.toggleModal()
    );
  }

  editPool(pool) {
    this.setState(
      {
        poolToEdit: pool,
      },
      () => this.toggleModalEditPool()
    );
  }

  checkPoolDetails() {
    try {
      if (Object.keys(this.props.app.poolDetails).lenght !== 0) {
        this.getPoolDetails();
      } else this.props.history.push("/serviceDetails");
    } catch {
      this.props.history.push("/serviceDetails");
    }
  }

  async getPoolDetails() {
    var token = await TokenManager.getInstance().getToken();
    this.setState(
      {
        poolLoading: true,
        poolNoErrors: true,
        eventLoading: true,
        eventNoErrors: true,
      },
      () => {
        fetch(this.props.app.poolDetails.links.self.href, {
          method: "GET",
          headers: { "Content-Type": "application/json", "X-Auth": token },
        })
          .then((response) => response.json())
          .then((response) => {
            if (response.description !== undefined) {
              this.setState({
                pool: response,
                poolLoading: false,
                poolNoErrors: true,
              });
              this.getMyEvents();
            } else {
              this.setState({ poolNoErrors: false });
            }
          });
      }
    );
  }

  async getMyEvents() {
    var token = await TokenManager.getInstance().getToken();
    this.setState(
      {
        eventLoading: true,
        eventNoErrors: true,
      },
      () => {
        fetch(this.props.app.poolDetails.links.events.href, {
          method: "GET",
          headers: { "Content-Type": "application/json", "X-Auth": token },
        })
          .then((response) => response.json())
          .then((response) => {
            if (response._embedded !== undefined) {
              this.setState({
                eventLoading: false,
                eventNoErrors: true,
                events: response._embedded.events,
              });
            } else {
              this.setState({ eventNoErrors: false });
            }
          });
      }
    );
  }

  render() {
    return (
      <ContentWrapper>
        {!this.state.poolLoading ? (
          <div>
            <NewEvent
              //addService={(newService) => this.addService(newService)}
              modalNewEventVisible={this.state.modalNewEventVisible}
              eventToEdit={this.state.eventToEdit}
              toggleModal={() => this.toggleModal()}
              refreshPool={() => this.getPoolDetails()}
            />

            <NewPool
              modalNewPoolVisible={this.state.modalEditPoolVisible}
              poolToEdit={this.state.poolToEdit}
              toggleModal={() => this.toggleModalEditPool()}
              refreshService={() => this.getPoolDetails()}
            />
            <Row>
              <Col lg="6">
                <h2>Dettagli schedina "{this.state.pool.description}"</h2>
              </Col>

              <Col lg="2">
                <Button
                  className="btn btn-block btn-secondary"
                  onClick={() => {
                    this.editPool(this.state.pool);
                  }}
                >
                  Modifica schedina
                </Button>
              </Col>
              <Col lg="2">
                <Button
                  className="btn btn-block btn-secondary"
                  onClick={() => this.newEvent()}
                >
                  Aggiungi evento
                </Button>
              </Col>
            </Row>
            <Card className="card-default">
              <CardBody>
                <Row>
                  <Col lg="6">
                    <FormGroup row>
                      <Col md="4">Descrizione:</Col>
                      <Col md="8">
                        <strong>{this.state.pool.description}</strong>
                      </Col>
                      <Col md="4">Quota:</Col>
                      <Col md="8">
                        <strong>{(this.state.pool.quote / 100).toLocaleString("it-IT", {minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong>
                      </Col>
                      <Col md="4">Bookmaker:</Col>
                      <Col md="8">
                        <strong>{this.state.pool.bookmaker}</strong>
                      </Col>
                      <Col md="4">Creato il:</Col>
                      <Col md="8">
                        <strong>
                          {moment(this.state.pool.createdOn).format(
                            "DD/MM/YYYY HH:mm"
                          )}
                        </strong>
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup row>
                      <Col md="4">Stake:</Col>
                      <Col md="8">
                        <strong>{(this.state.pool.stake / 100).toLocaleString("it-IT", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%"}</strong>
                      </Col>
                      <Col md="4">Profitto:</Col>
                      <Col md="8">
                        <strong>{(this.state.pool.profit / 10000).toLocaleString("it-IT", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%"}</strong>
                      </Col>
                      <Col md="4">Modificato il:</Col>
                      <Col md="8">
                        <strong>
                          {moment(this.state.pool.updatedOn).format(
                            "DD/MM/YYYY HH:mm"
                          )}
                        </strong>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Row>
              <Col lg="6">
                <h3>Eventi</h3>
              </Col>
            </Row>
            <Card className="card-default">
              <CardBody>
                {!this.state.eventLoading ? (
                  <div>
                    <Row>
                      <Col md="12">
                        <MyEvents
                          events={this.state.events}
                          editEvent={(event) => this.editEvent(event)}
                        />
                      </Col>
                    </Row>
                  </div>
                ) : this.state.eventNoErrors ? (
                  <div>
                    <h4> Carico gli eventi...</h4>
                    <div>
                      <Spinner />
                    </div>
                  </div>
                ) : (
                  <div>
                    <div>
                      <h4>Errore nel caricamento degli eventi</h4>
                    </div>
                    <div>
                      <Button
                        className="btn"
                        onClick={() => {
                          this.setState(
                            { eventNoErrors: true, eventLoading: true },
                            () => {
                              this.getMyEvents();
                            }
                          );
                        }}
                      >
                        Riprova
                      </Button>
                      <Button
                        style={{ marginLeft: 10 }}
                        className="btn"
                        onClick={() => {
                          this.props.history.push("/serviceDetails");
                        }}
                      >
                        Torna indietro
                      </Button>
                    </div>
                  </div>
                )}
              </CardBody>
            </Card>
          </div>
        ) : this.state.poolNoErrors ? (
          <div>
            <h4>Carico la schedina...</h4>
            <div>
              <Spinner />
            </div>
          </div>
        ) : (
          <div>
            <div>
              <h4>Errore nel caricamento della schedina</h4>
            </div>
            <div>
              <Button
                className="btn"
                onClick={() => {
                  this.setState(
                    { poolNoErrors: true, poolLoading: true },
                    () => {
                      this.getPoolDetails();
                    }
                  );
                }}
              >
                Riprova
              </Button>
              <Button
                style={{ marginLeft: 10 }}
                className="btn"
                onClick={() => {
                  this.props.history.push("/serviceDetails");
                }}
              >
                Torna indietro
              </Button>
            </div>
          </div>
        )}
      </ContentWrapper>
    );
  }
}
const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(PoolDetails);
