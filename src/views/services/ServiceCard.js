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
} from "reactstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ServiceCard extends Component {
  static propTypes = {
    id: PropTypes.string,
    author: PropTypes.string,
    taxonomiesDefinition: PropTypes.string,
    serviceName: PropTypes.string,
    description: PropTypes.string,
    maxSubscribers: PropTypes.string,
    duration: PropTypes.string,
    price: PropTypes.string,
    version: PropTypes.string,
    hrefService: PropTypes.string,
  };

  render() {
    return (
      <Card className="card-default">
        <CardHeader>
          <strong>{this.props.serviceName}</strong>
        </CardHeader>
        <CardBody>
          <Row>
            <Col lg="6">
              <FormGroup row>
                <Col md="4">Descrizione:</Col>
                <Col md="8">
                  <strong>{this.props.description}</strong>
                </Col>
                <Col md="4">Prezzo:</Col>
                <Col md="8">
                  <strong>{this.props.price} €</strong>
                </Col>
                <Col md="4">Durata:</Col>
                <Col md="8">
                  <strong>{this.props.duration} giorni</strong>
                </Col>
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup row>
                <Col md="4">Numero max iscritti:</Col>
                <Col md="8">
                  <strong>{this.props.maxSubscribers}</strong>
                </Col>
                <Col md="4">Tag:</Col>
                <Col md="8">
                  <strong></strong>
                </Col>
                <Col md="4">Versione:</Col>
                <Col md="8">
                  <strong>{this.props.version}</strong>
                </Col>
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
        <CardFooter className="d-flex">
          <div>
            <Link
              to={{
                pathname: "serviceDetails",
              }}
              className="btn btn-block btn-secondary"
            >
              Visualizza
            </Link>
          </div>
        </CardFooter>
      </Card>
    );
  }
}

export default ServiceCard;
