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
import config from "../../store/config";
import MyEvents from "../events/MyEvents";
import { Link } from "react-router-dom";

class PoolDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poolId: null,
      description: "descr",
      quote: "1.02",
      stake: "10.3",
      profit: "1",
      bookmaker: "1",
      events: [],
      poolURL: props.location.data,
    };
  }
  render() {
    return (
      <ContentWrapper>
        <h2>Dettagli schedina</h2>
        <Card className="card-default">
          <CardBody>
            <Row>
              <Col lg="6">
                <FormGroup row>
                  <Col md="4">Descrizione:</Col>
                  <Col md="8">
                    <strong>{this.state.description}</strong>
                  </Col>
                  <Col md="4">Quota:</Col>
                  <Col md="8">
                    <strong>{this.state.quote}</strong>
                  </Col>
                  <Col md="4">Bookmaker:</Col>
                  <Col md="8">
                    <strong>{this.state.bookmaker}</strong>
                  </Col>
                  <Col md="4">Creato il:</Col>
                  <Col md="8">
                    <strong>{this.state.poolCreatedOn}</strong>
                  </Col>
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup row>
                  <Col md="4">Stake:</Col>
                  <Col md="8">
                    <strong>{this.state.stake}</strong>
                  </Col>
                  <Col md="4">Profitto:</Col>
                  <Col md="8">
                    <strong>{this.state.profit}</strong>
                  </Col>
                  <Col md="4">Eventi totali:</Col>
                  <Col md="8">
                    <strong>{this.state.totalEvents}</strong>
                  </Col>
                  <Col md="4">Modificato il:</Col>
                  <Col md="8">
                    <strong>{this.state.poolUpdatedOn}</strong>
                  </Col>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md="12">
                <h3>Eventi</h3>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <MyEvents />
              </Col>
            </Row>
          </CardBody>
          <CardFooter className="d-flex"></CardFooter>
        </Card>
      </ContentWrapper>
    );
  }
}

export default PoolDetails;
