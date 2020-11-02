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
import PropTypes from "prop-types";
import NewPool from "../pools/NewPool";
import config from "../../store/config";
import MyPools from "../pools/MyPools";
import { Link } from "react-router-dom";
import TokenManager from "../../components/auth/Token";
import Swal from "../../components/elements/Swal";
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
      loading: true,
      noErrors: true,
      pools: [
        {
          id: 1,
          description: "descrizione",
          totalQuote: 50,
          stake: 10,
          profit: 1000,
          bookmaker: "William Hill",
          totalEvents: [],
          poolCreatedOn: "data",
          poolUpdatedOn: "2",
          hrefPool: "link",
        },
      ],
    };
    this.checkServiceDetails();
  }

  checkServiceDetails() {
    if (Object.keys(this.props.app.serviceDetails).lenght === 0) {
      this.props.history.push("/");
      return;
    } else {
      this.getMyPools();
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
  async getMyPools() {
    var token = await TokenManager.getInstance().getToken();
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
          console.log(response);
          this.setState({ loading: false, noErrors: true });
        } else {
          this.setState({ noErrors: false });
        }
      });
  }

  render() {
    return (
      <ContentWrapper>
        <Row>
          <Col lg="6">
            <h2>
              Dettagli pacchetto "{this.props.app.serviceDetails.serviceName}"
            </h2>
          </Col>
          <Col lg="2">
            <Link
              to={{
                pathname: "newPool",
              }}
              className="btn btn-block btn-primary"
            >
              Modifica Pacchetto
            </Link>
          </Col>
          <Col lg="2">
            <Link
              to={{
                pathname: "newPool",
              }}
              className="btn btn-block btn-secondary"
            >
              Aggiungi schedina
            </Link>
          </Col>
          <Col lg="2">
            <Swal
              options={this.state.swalDeleteService}
              callback={this.deleteService}
              className="btn btn-danger"
            >
              Elimina pacchetto
            </Swal>
          </Col>
        </Row>
        <Card className="card-default">
          <CardHeader>
            <strong>{this.props.app.serviceDetails.serviceName}</strong>
          </CardHeader>
          <CardBody>
            <Row>
              <Col lg="6">
                <FormGroup row>
                  <Col md="4">Descrizione:</Col>
                  <Col md="8">
                    <strong>{this.props.app.serviceDetails.description}</strong>
                  </Col>
                  <Col md="4">Prezzo:</Col>
                  <Col md="8">
                    <strong>{this.props.app.serviceDetails.price} €</strong>
                  </Col>
                  <Col md="4">Durata:</Col>
                  <Col md="8">
                    <strong>
                      {this.props.app.serviceDetails.duration} giorni
                    </strong>
                  </Col>
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup row>
                  <Col md="4">Numero max iscritti:</Col>
                  <Col md="8">
                    <strong>
                      {this.props.app.serviceDetails.maxSubscribers}
                    </strong>
                  </Col>
                  <Col md="4">Tag:</Col>
                  <Col md="8">
                    <strong>tmp</strong>
                  </Col>
                  <Col md="4">Versione:</Col>
                  <Col md="8">
                    <strong>{this.props.app.serviceDetails.version}</strong>
                  </Col>
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
          <CardFooter className="d-flex"></CardFooter>
        </Card>
        <Row>
          <Col lg="6">
            <h3>Schedine</h3>
          </Col>
        </Row>
        <Card className="card-default">
          <CardBody>
            {!this.state.loading ? (
              <div>
                <Row style={{ marginTop: 20 }}>
                  <Col md="6">
                    <h3>Schedine</h3>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <MyPools pools={this.state.pools} />
                  </Col>
                </Row>
              </div>
            ) : this.state.noErrors ? (
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
          </CardBody>
        </Card>
      </ContentWrapper>
    );
  }
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(ServiceDetails);
