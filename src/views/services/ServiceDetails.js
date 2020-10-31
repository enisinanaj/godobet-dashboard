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
import TokenManager from "../../components/auth/Token";
import { connect } from "react-redux";

class ServiceDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        //this.setState({ pools: response._embedded.pools });
        console.log(response);
      });
  }

  render() {
    return (
      <ContentWrapper>
        <h2>Dettagli pacchetto</h2>
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
            <Row style={{ marginTop: 20 }}>
              <Col md="6">
                <h3>Schedine</h3>
              </Col>
              <Col md="6">
                <div className="form-group row">
                  <div>
                    <Link
                      to={{
                        pathname: "newPool",
                      }}
                      className="btn btn-block btn-secondary"
                    >
                      Aggiungi schedina
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
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

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(ServiceDetails);
