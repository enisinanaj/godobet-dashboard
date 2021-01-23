import React, { Component } from "react";
import ContentWrapper from "../../components/layout/ContentWrapper";
import { Row, Col, Button, Spinner, Alert } from "reactstrap";
import config from "../../store/config";
import MyPools from "../pools/MyPools";
import TokenManager from "../../components/auth/Token";
import NewPool from "../pools/NewPool";
import NewService from "./NewService";
import { connect } from "react-redux";
import DetailGrid from "../../components/layout/DetailGrid";
import Label from "../../components/layout/Label";
import moment from "moment";

class ServiceDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swalDeleteService: {
        title: "Conferma eliminazione",
        text: "Sei sicuro di voler eliminare il pacchetto selezionato?",
        icon: "warning",
        buttons: {
          cancel: {
            text: "No",
            value: null,
            visible: true,
            className: "",
            closeModal: false,
          },
          confirm: {
            text: "Si, eliminalo!",
            value: true,
            visible: true,
            className: "bg-danger",
            closeModal: false,
          },
        },
      },
      serviceLoading: true,
      serviceNoErrors: true,
      poolLoading: true,
      poolNoErrors: true,
      modalNewPoolVisible: false,
      modalEditServiceVisible: false,
      serviceToEdit: null,
      poolToEdit: null,
      taxonomies: [],
      service: {},
      pools: [],
    };
    this.checkServiceDetails();
  }

  checkServiceDetails() {
    try {
      if (Object.keys(this.props.app.serviceDetails).lenght !== 0) {
        this.getServiceDetails();
      } else this.props.history.push("/");
    } catch {
      this.props.history.push("/");
    }
  }

  toggleModal = () => {
    this.setState({
      modalNewPoolVisible: !this.state.modalNewPoolVisible,
    });
  };

  toggleModalEditService = () => {
    this.setState({
      modalEditServiceVisible: !this.state.modalEditServiceVisible,
    });
  };

  newPool() {
    this.setState(
      {
        poolToEdit: null,
      },
      () => this.toggleModal()
    );
  }

  editPool(pool) {
    this.setState(
      {
        poolToEdit: pool,
      },
      () => this.toggleModal()
    );
  }

  editService(service) {
    this.setState(
      {
        serviceToEdit: service,
      },
      () => this.toggleModalEditService()
    );
  }

  async getServiceDetails() {
    var token = await TokenManager.getInstance().getToken();
    this.setState(
      {
        serviceLoading: true,
        serviceNoErrors: true,
        poolLoading: true,
        poolNoErrors: true,
      },
      () => {
        fetch(this.props.app.serviceDetails.links.self.href.replace("http://", "https://"), {
          method: "GET",
          headers: { "Content-Type": "application/json", "X-Auth": token },
        })
          .then((response) => response.json())
          .then((response) => {
            if (response.serviceName !== undefined) {
              this.setState({
                service: response,
                serviceLoading: false,
                serviceNoErrors: true,
              });
              this.getTaxonomies();
              this.getMyPools();
            } else {
              this.setState({ serviceNoErrors: false });
            }
          });
      }
    );
  }

  async getMyPools() {
    var token = await TokenManager.getInstance().getToken();
    this.setState(
      {
        poolLoading: true,
        poolNoErrors: true,
      },
      () => {
        fetch(this.props.app.serviceDetails.links.pools.href.replace("{?projection}", ""),
          {
            method: "GET",
            headers: { "Content-Type": "application/json", "X-Auth": token },
          }
        )
          .then((response) => response.json())
          .then((response) => {
            if (response._embedded !== undefined) {
              this.setState({
                poolLoading: false,
                poolNoErrors: true,
                pools: response._embedded.pools,
              });
            } else {
              this.setState({ poolNoErrors: false});
            }
          });
      }
    );
  }

  async getTaxonomies() {
    var token = await TokenManager.getInstance().getToken();
    try {
      fetch(this.props.app.serviceDetails.links.taxonomies.href, {
        method: "GET",
        headers: { "Content-Type": "application/json", "X-Auth": token },
      })
        .then((response) => response.json())
        .then((response) => {
          if (response._embedded) {
            this.setState({
              taxonomies: response._embedded.taxonomy.map(tax => tax.definition),
              taxonomiesObjects: response._embedded.taxonomy,
            });
          }
        });
    } catch {
      // this.props.history.push("/login");
    }
  }

  eventModalRef = (props) => {
    this.showModal = props && props.toggleModal;
  };

  openNewPool = () => {
    this.showModal();
  };

  addService(service) {
    var joined = this.state.services.concat(service);
    this.setState({ services: joined });
  }

  async deleteService(isConfirm, swal) {
    if (isConfirm) {
      var token = await TokenManager.getInstance().getToken();
      /* TODO implementare chiamata a servizio delete service */
      var body = { ...this.state };
      fetch(
        config.API_URL + "/services",
        {
          method: "GET",
          headers: {
            "X-Auth": token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        },
        function () {
          swal("Eliminato!", "Il pacchetto è stato eliminato.", "success");
        }
      );
    } else {
      swal("Annullato", "Il pacchetto non è stato eliminato :)", "error");
    }
  }

  render() {
    return (
      <ContentWrapper>
        {!this.state.serviceLoading ? (
          <div>
            <NewPool
              modalNewPoolVisible={this.state.modalNewPoolVisible}
              poolToEdit={this.state.poolToEdit}
              toggleModal={() => this.toggleModal()}
              refreshService={() => this.getServiceDetails()}
            />

            <NewService
              modalNewServiceVisible={this.state.modalEditServiceVisible}
              serviceToEdit={this.state.serviceToEdit}
              toggleModal={() => this.toggleModalEditService()}
              refreshServiceList={() => this.getServiceDetails()}
            />
            <Col className={"mb-5"}>
              <Row>
                <Col md="12">
                  <h3 style={{ marginBottom: 0 }}>
                    {this.state.service.serviceName}
                  </h3>
                  <p style={{ fontSize: "1rem", fontWeight: "200" }}>
                    {this.state.service.description}
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
                      <div style={{ fontWeight: "300" }}>Versione</div>
                      <div>v {this.state.service.version}</div>
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
                        <i className="icon-wallet mr-2"></i> Prezzo
                      </div>
                      <div>{this.state.service.price} €</div>
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
                        <i className="icon-clock mr-2"></i> Durata abbonamento
                      </div>
                      <div>{this.state.service.duration} giorni</div>
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
                        <i className="mr-2 icon-people"></i> Massimo abbonati
                      </div>
                      <div>{this.state.service.maxSubscribers}</div>
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
                        {moment(this.state.service.createdOn).format(
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
                        {moment(this.state.service.createdOn).format(
                          "DD/MM/YYYY HH:mm"
                        )}
                      </div>
                    </Col>
                  </DetailGrid>
                </Col>
                <Col md="12">
                  <DetailGrid borderTop={0} className={"mb-4"}>
                    <Col style={{ padding: 5 }} md={12} sm={12}>
                      <div style={{ fontWeight: "300" }}>
                        <i className="mr-2 icon-tag"></i> Tags
                      </div>
                      <div>
                        {this.state.taxonomies.map((tax) => (
                          <span className="mr-2" key={tax}>
                            #{tax}
                          </span>
                        ))}
                        {this.state.taxonomies.length === 0 && (
                          <Alert color="info"
                            style={{
                              color: "#125f77",
                              backgroundColor: "#d3f1fa",
                              width: "100%",
                              paddingTop: "5px",
                              paddingBottom: "5px",
                              marginTop: "5px",
                              opacity: 0.8,
                            }}>
                            Non ci sono hashtag per questo pacchetto.
                          </Alert>
                        )}
                      </div>
                    </Col>
                  </DetailGrid>
                </Col>
              </Row>
              <div className="mb-5 mt-5"
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                <div style={{flex: 1, flexDirection: "column", justifyContent: "flex-start"}}>
                  <div style={{flex: 1,flexDirection: "row",justifyContent: "flex-start",}}>
                    <h3 style={{ marginBottom: 0, display: "inline-block" }}>
                      Le tue schedine
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
                      onClick={() => this.newPool()}>
                      <em className="fas fa-plus"></em>
                    </Button>
                    <p style={{ fontSize: "1rem", fontWeight: "200" }}>
                      Qui si trovano le schedine del pacchetto selezionato
                    </p>
                  </div>
                </div>
              </div>

              {!this.state.poolLoading ? (
                <MyPools
                  pools={this.state.pools}
                  history={this.props.history}
                  editPool={(pool) => this.editPool(pool)}
                />
              ) : this.state.poolNoErrors ? (
                <div>
                  <h4>Carico le tue schedine...</h4>
                  <div>
                    <Spinner />
                  </div>
                </div>
              ) : (
                <div>
                  <div>
                    <h4>Errore nel caricamento delle tue schedine</h4>
                  </div>
                  <div>
                    <Button
                      className="btn"
                      onClick={() => {
                        this.setState({ noErrors: true, loading: true }, () => {
                          this.getMyPools();
                        });
                      }}
                    >
                      Riprova
                    </Button>
                    <Button
                      style={{ marginLeft: 10 }}
                      className="btn"
                      onClick={() => {
                        this.props.history.push("/myServices");
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
                <div className="h2 mb-4 text-center">Dettaglio pacchetto</div>
                <div
                  className="h5 mb-4 text-center"
                  style={{ fontWeight: "300", fontSize: "1rem" }}
                >
                  Modifica il pacchetto per aiutare gli utenti a capire meglio
                  il servizio che offri. <br />
                  Aggiungi una nuova schedina e i relativi eventi, fai vincere i
                  tuoi subscribers!
                </div>
                <div className="form-group row text-center">
                  <div className="col-md-4"></div>
                  <div className="col-md-2">
                    <Button
                      color="success"
                      onClick={() => {
                        this.editService({
                          ...this.props.app.serviceDetails,
                          taxonomies: this.state.taxonomies,
                          taxonomiesObjects: this.state.taxonomiesObjects,
                          _links: this.props.app.serviceDetails.links,
                        });
                        console.log();
                      }}
                    >
                      <em className="fas fa-edit mr-2"></em>Modifica pacchetto
                    </Button>
                  </div>
                  <div className="col-md-2">
                    <Button color="warning" onClick={() => this.newPool()}>
                      <em className="fas fa-plus mr-2"></em>Aggiungi schedina
                    </Button>
                  </div>
                  <div className="col-md-4"></div>
                </div>
              </div>
            </div>
          </div>
        ) : this.state.serviceNoErrors ? (
          <div>
            <h4>Carico il pacchetto...</h4>
            <div>
              <Spinner />
            </div>
          </div>
        ) : (
          <div>
            <div>
              <h4>Errore nel caricamento del pacchetto</h4>
            </div>
            <div>
              <Button
                className="btn"
                onClick={() => {
                  this.getServiceDetails();
                }}
              >
                Riprova
              </Button>
              <Button
                style={{ marginLeft: 10 }}
                className="btn"
                onClick={() => {
                  this.props.history.push("/myServices");
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
export default connect(mapStateToProps)(ServiceDetails);
