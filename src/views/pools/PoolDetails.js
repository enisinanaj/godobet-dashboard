import React, { Component } from "react";
import ContentWrapper from "../../components/layout/ContentWrapper";
import {
  Row,
  Col,
  Spinner,
  Button
} from "reactstrap";
import * as moment from "moment";
import MyEvents from "../events/MyEvents";
import { connect } from "react-redux";
import NewEvent from "../events/NewEvent";
import NewPool from "./NewPool";
import DetailGrid from "../../components/layout/DetailGrid";
import Label from "../../components/layout/Label";

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
            <Col className={"mb-5"}>
              <Row>
                <Col md="12">
                  <h3 style={{ marginBottom: 0 }}>
                    {this.state.pool.description}
                  </h3>
                  <p style={{ fontSize: "1rem", fontWeight: "200" }}>
                    Questo è il dettaglio della schedina selezionata e dei relativi eventi collegati
                  </p>
                  <DetailGrid className={"mt-4"}>
                    <Col
                      style={{
                        borderRightColor: "#e0e0e0",
                        borderRightWidth: "1px",
                        borderRightStyle: "solid",
                        padding: 5,
                      }}
                      md={2}
                      sm={6}
                    >
                      <div style={{ fontWeight: "300" }}>
                        <i className="icon-graph mr-2"></i> Quota
                      </div>
                      <div>{(this.state.pool.quote).toLocaleString("it-IT", {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                    </Col>
                    <Col
                      style={{
                        borderRightColor: "#e0e0e0",
                        borderRightWidth: "1px",
                        borderRightStyle: "solid",
                        padding: 5,
                        paddingLeft: 10,
                      }}
                      md={2}
                      sm={6}
                    >
                      <div style={{ fontWeight: "300" }}>
                        <i className="icon-book-open mr-2"></i> Bookmaker
                      </div>
                      <div>{this.state.pool.bookmaker}</div>
                    </Col>
                    <Col
                      style={{
                        borderRightColor: "#e0e0e0",
                        borderRightWidth: "1px",
                        borderRightStyle: "solid",
                        padding: 5,
                        paddingLeft: 10,
                      }}
                      md={2}
                      sm={6}
                    >
                      <div style={{ fontWeight: "300" }}>
                        <i className="icon-pie-chart mr-2"></i> Stake
                      </div>
                      <div>{(this.state.pool.stake / 100).toLocaleString("it-IT", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%"}</div>
                    </Col>
                    <Col
                      style={{
                        borderRightColor: "#e0e0e0",
                        borderRightWidth: "1px",
                        borderRightStyle: "solid",
                        padding: 5,
                        paddingLeft: 10,
                      }}
                      md={2}
                      sm={6}
                    >
                      <div style={{ fontWeight: "300" }}>
                        <i className="icon-trophy mr-2"></i> Profitto
                      </div>
                      <div style={{color: this.state.pool.profit < 0 ? 'red' : 'green'}}>
                        {(this.state.pool.profit).toLocaleString("it-IT", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%"}
                      </div>
                    </Col>
                    <Col
                      style={{
                        borderRightColor: "#e0e0e0",
                        borderRightWidth: "1px",
                        borderRightStyle: "solid",
                        padding: 5,
                        paddingLeft: 10,
                      }}
                      md={2}
                      sm={6}
                    >
                      <Label style={{ fontWeight: "300" }}>
                        <i className="mr-2 icon-clock"></i> Creato il
                      </Label>
                      <div>
                        {moment(this.state.pool.createdOn).format(
                          "DD/MM/YYYY HH:mm"
                        )}
                      </div>
                    </Col>
                    <Col style={{ padding: 5, paddingLeft: 10 }} md={2} sm={6}>
                      <Label
                        style={{ fontSize: "1em", display: "inline-block" }}
                      >
                        <i className="mr-2 icon-clock"></i> Modificato il
                      </Label>
                      <div>
                        {moment(this.state.pool.updatedOn).format(
                          "DD/MM/YYYY HH:mm"
                        )}
                      </div>
                    </Col>
                  </DetailGrid>
                </Col>
              </Row>
              <div
                className="mb-5 mt-5"
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "flex-start",
                    }}
                  >
                    <h3 style={{ marginBottom: 0, display: "inline-block" }}>
                      Eventi collegati
                    </h3>
                    <Button
                      style={{
                        position: "absolute",
                        marginTop: "-2px",
                        height: "30px",
                        width: "30px",
                        lineHeight: "31px",
                      }}
                      className={"btn bg-primary btn-circle btn-outline ml-2"}
                      onClick={() => this.newEvent()}
                    >
                      <em className="fas fa-plus"></em>
                    </Button>
                    <p style={{ fontSize: "1rem", fontWeight: "200" }}>
                      Qui si trovano gli eventi della schedina selezionata
                    </p>
                  </div>
                </div>
              </div>
              {!this.state.eventLoading ? (
                <div>
                  <Row lg="12" sm="12" md="12">
                    <MyEvents
                      events={this.state.events}
                      editEvent={(event) => this.editEvent(event)}
                    />
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
                        this.setState({ eventNoErrors: true, eventLoading: true }, () => {
                          this.getMyEvents();
                        });
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
            </Col>
            <div className="form-group row text-center">
              <div className="col-md-12">
                <em className="fa-3x mr-2 fas fa-box-open"></em>
              </div>
            </div>
            <div className="form-group row text-center">
              <div className="col-md-12">
                <div className="h2 mb-4 text-center">Dettaglio schedina</div>
                <div
                  className="h5 mb-4 text-center"
                  style={{ fontWeight: "300", fontSize: "1rem" }}
                >
                  Modifica la schedina inserendo una descrizione accurata sulla giocata. <br />
                  Aggiungi un nuovo evento, fai vincere i tuoi subscribers!
                </div>
                <div className="form-group row text-center">
                  <div className="col-md-4"></div>
                  <div className="col-md-2">
                    <Button
                      color="success"
                      onClick={() => {
                        this.editPool(this.state.pool);
                        console.log();
                      }}
                    >
                      <em className="fas fa-edit mr-2"></em>Modifica schedina
                    </Button>
                  </div>
                  <div className="col-md-2">
                    <Button color="warning" onClick={() => this.newEvent()}>
                      <em className="fas fa-plus mr-2"></em>Aggiungi evento
                    </Button>
                  </div>
                  <div className="col-md-4"></div>
                </div>
              </div>
            </div>
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
