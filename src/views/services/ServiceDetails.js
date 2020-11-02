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
} from "reactstrap";
import PropTypes from "prop-types";
import NewPool from "../pools/NewPool";
import config from "../../store/config";
import MyPools from "../pools/MyPools";
import { Link } from "react-router-dom";

class ServiceDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      author: config.API_URL + "/users/1",
      taxonomies: [
        config.API_URL + "/taxonomies/2",
        config.API_URL + "/taxonomies/3",
      ],
      serviceName: "vinci ora (Pallavolo)!",
      description: "Tutte le scommesse sulla pallavolo",
      maxSubscribers: 30,
      duration: 30,
      price: 4500,
      version: 2,
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

  render() {
    return (
      <ContentWrapper>
        <Row>
          <Col lg="6">
            <h2>Dettagli pacchetto "{this.state.serviceName}"</h2>
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
            <Link
              to={{
                pathname: "newPool",
              }}
              className="btn btn-block btn-danger"
            >
              Elimina Pacchetto
            </Link>
          </Col>
        </Row>
        <Card className="card-default">
          <CardHeader>
          </CardHeader>
          <CardBody>
            <Row>
              <Col lg="6">
                <FormGroup row>
                  <Col md="4">Descrizione:</Col>
                  <Col md="8">
                    <strong>{this.state.description}</strong>
                  </Col>
                  <Col md="4">Prezzo:</Col>
                  <Col md="8">
                    <strong>{this.state.price} €</strong>
                  </Col>
                  <Col md="4">Durata:</Col>
                  <Col md="8">
                    <strong>{this.state.duration} giorni</strong>
                  </Col>
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup row>
                  <Col md="4">Numero max iscritti:</Col>
                  <Col md="8">
                    <strong>{this.state.maxSubscribers}</strong>
                  </Col>
                  <Col md="4">Tag:</Col>
                  <Col md="8">
                    <strong>tmp</strong>
                  </Col>
                  <Col md="4">Versione:</Col>
                  <Col md="8">
                    <strong>{this.state.version}</strong>
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
          <CardHeader>
          </CardHeader>
          <CardBody>
            <Row>
              <Col md="12">
                <MyPools pools={this.state.pools} />
              </Col>
            </Row>
          </CardBody>
          <CardFooter className="d-flex"></CardFooter>
        </Card>
      </ContentWrapper>
    );
  }
}

export default ServiceDetails;
