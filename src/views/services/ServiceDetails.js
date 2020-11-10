import React, { Component } from "react";
import ContentWrapper from "../../components/layout/ContentWrapper";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Row,
  Col,
  FormGroup,
  Button,
  Spinner,
} from "reactstrap";
import config from "../../store/config";
import MyPools from "../pools/MyPools";
import { Link } from "react-router-dom";
import ReactTagInput from "@pathofdev/react-tag-input";
import TokenManager from "../../components/auth/Token";
import Swal from "../../components/elements/Swal";
import NewPool from "../pools/NewPool";
import NewService from "./NewService";
import { connect } from "react-redux";

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
        fetch(this.props.app.serviceDetails.links.self.href, {
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
        fetch(
          this.props.app.serviceDetails.links.pools.href.replace(
            "{?projection}",
            ""
          ),
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
              this.setState({ poolNoErrors: false });
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
            let arrayTaxonomies = [];
            for (let taxonomy of response._embedded.taxonomy) {
              arrayTaxonomies.push(taxonomy.definition);
            }
            this.setState({
              taxonomies: arrayTaxonomies,
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
            <Row>
              <Col lg="6">
                <h2>Dettagli pacchetto "{this.state.service.serviceName}"</h2>
              </Col>
            </Row>
            <Card className="card-default">
              <CardHeader>
                <strong>{this.state.service.serviceName}</strong>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col lg="6">
                    <FormGroup row>
                      <Col md="4">Descrizione:</Col>
                      <Col md="8">
                        <strong>{this.state.service.description}</strong>
                      </Col>
                      <Col md="4">Prezzo:</Col>
                      <Col md="8">
                        <strong>{this.state.service.price} €</strong>
                      </Col>
                      <Col md="4">Durata:</Col>
                      <Col md="8">
                        <strong>{this.state.service.duration} giorni</strong>
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup row>
                      <Col md="4">Numero max iscritti:</Col>
                      <Col md="8">
                        <strong>{this.state.service.maxSubscribers}</strong>
                      </Col>
                      <Col md="4">Tag:</Col>
                      <Col md="8">
                        <ReactTagInput
                          tags={this.state.taxonomies}
                          readOnly={true}
                        />
                      </Col>
                      <Col md="4">Versione:</Col>
                      <Col md="8">
                        <strong>{this.state.service.version}</strong>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Row>
              <Col lg="6">
                <h3>Schedine</h3>
              </Col>
            </Row>
            <Card className="card-default">
              <CardBody>
                {!this.state.poolLoading ? (
                  <div>
                    <MyPools
                      pools={this.state.pools}
                      history={this.props.history}
                      editPool={(pool) => this.editPool(pool)}
                    />
                  </div>
                ) : this.state.poolNoErrors ? (
                  <div>
                    <h4> Carico le tue schedine...</h4>
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
                          this.setState(
                            { noErrors: true, loading: true },
                            () => {
                              this.getMyPools();
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
                          this.props.history.push("/myServices");
                        }}
                      >
                        Torna indietro
                      </Button>
                    </div>
                  </div>
                )}
              </CardBody>
            </Card>
            <div className="form-group row text-center">
              <div className="col-md-12">
                <em className="fa-4x mr-2 fas fa-box-open"></em>
              </div>
            </div>
            <div className="form-group row text-center">
              <div className="col-md-12">
                <div className="h2 mb-4 text-center">
                  Dettaglio pacchetto
                </div>
                <div className="h5 mb-4 text-center">
                  Modifica il pacchetto per aiutare gli utenti a capire meglio il servizio che offri. <br/>
                  Aggiungi una nuova schedina e i relativi eventi, fai vincere i tuoi subscribers!
                </div>
                <div className="form-group row text-center">
                  <div className="col-md-4"></div>
                  <div className="col-md-2">
                    <Button
                      color="primary"
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
                    <Button
                      color="primary"
                      onClick={() => this.newPool()}
                    >
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
