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
  Spinner,
  Button,
} from "reactstrap";
import PropTypes from "prop-types";
import config from "../../store/config";
import MyEvents from "../events/MyEvents";
import { Link } from "react-router-dom";
import * as moment from "moment";
import { connect } from "react-redux";
import TokenManager from "../../components/auth/Token";

class PoolDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      noErrors: true,
      events: [],
    };
    this.checkPoolDetails();
  }

  checkPoolDetails() {
    try {
      if (Object.keys(this.props.app.poolDetails).lenght !== 0) {
        this.getMyEvents();
      } else this.props.history.push("/serviceDetails");
    } catch {
      this.props.history.push("/serviceDetails");
    }
  }

  async getMyEvents() {
    var token = await TokenManager.getInstance().getToken();
    fetch(this.props.app.poolDetails.links.events.href, {
      method: "GET",
      headers: { "Content-Type": "application/json", "X-Auth": token },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response._embedded !== undefined) {
          console.log(response);
          this.setState({
            loading: false,
            noErrors: true,
            events: response._embedded.events,
          });
        } else {
          this.setState({ noErrors: false });
        }
      });
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
                    <strong>{this.props.app.poolDetails.description}</strong>
                  </Col>
                  <Col md="4">Quota:</Col>
                  <Col md="8">
                    <strong>{this.props.app.poolDetails.totalQuote}</strong>
                  </Col>
                  <Col md="4">Bookmaker:</Col>
                  <Col md="8">
                    <strong>{this.props.app.poolDetails.bookmaker}</strong>
                  </Col>
                  <Col md="4">Creato il:</Col>
                  <Col md="8">
                    <strong>{this.props.app.poolDetails.poolCreatedOn}</strong>
                  </Col>
                </FormGroup>
              </Col>
              <Col lg="6">
                <FormGroup row>
                  <Col md="4">Stake:</Col>
                  <Col md="8">
                    <strong>{this.props.app.poolDetails.stake}</strong>
                  </Col>
                  <Col md="4">Profitto:</Col>
                  <Col md="8">
                    <strong>{this.state.profit}</strong>
                  </Col>
                  <Col md="4">Eventi totali:</Col>
                  <Col md="8">
                    <strong>{this.props.app.poolDetails.totalEvents}</strong>
                  </Col>
                  <Col md="4">Modificato il:</Col>
                  <Col md="8">
                    <strong>{this.props.app.poolDetails.poolUpdatedOn}</strong>
                  </Col>
                </FormGroup>
              </Col>
            </Row>
            {!this.state.loading ? (
              <div>
                <Row>
                  <Col md="12">
                    <h3>Eventi</h3>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <MyEvents events={this.state.events} />
                  </Col>
                </Row>
              </div>
            ) : this.state.noErrors ? (
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
                      this.setState({ noErrors: true, loading: true }, () => {
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
          </CardBody>
          <CardFooter className="d-flex"></CardFooter>
        </Card>
      </ContentWrapper>
    );
  }
}
const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(PoolDetails);
