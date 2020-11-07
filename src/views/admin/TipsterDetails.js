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
import ServiceCard from "../services/ServiceCard";
import { Link } from "react-router-dom";
import TokenManager from "../../components/auth/Token";
import Swal from "../../components/elements/Swal";
import NewPool from "../pools/NewPool";
import { connect } from "react-redux";

class TipsterDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipsterLoading: true,
      tipsterNoErrors: true,
      serviceLoading: true,
      serviceNoErrors: true,
      tipster: {},
      services: [],
    };
    this.checkTipsterDetails();
  }

  checkTipsterDetails() {
    try {
      if (Object.keys(this.props.app.tipsterDetails).lenght !== 0) {
        this.getTipsterDetails();
      } else this.props.history.push("/tipsterList");
    } catch {
      this.props.history.push("/tipsterList");
    }
  }

  async getTipsterDetails() {
    var token = await TokenManager.getInstance().getToken();
    this.setState(
      {
        tipsterLoading: true,
        tipsterNoErrors: true,
        serviceLoading: true,
        serviceNoErrors: true,
      },
      () => {
        fetch(this.props.app.tipsterDetails._links.self.href, {
          method: "GET",
          headers: { "Content-Type": "application/json", "X-Auth": token },
        })
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            if (response.accessToken !== undefined) {
              this.setState({
                tipster: response,
                tipsterLoading: false,
                tipsterNoErrors: true,
              });
              this.getTipsterServices();
            } else {
              this.setState({ serviceNoErrors: false });
            }
          });
      }
    );
  }

  async getTipsterServices() {
    var token = await TokenManager.getInstance().getToken();
    this.setState(
      {
        serviceLoading: true,
        serviceNoErrors: true,
      },
      () => {
        fetch(this.props.app.tipsterDetails._links.services.href, {
          method: "GET",
          headers: { "Content-Type": "application/json", "X-Auth": token },
        })
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            if (response._embedded !== undefined) {
              this.setState({
                serviceLoading: false,
                serviceNoErrors: true,
                services: response._embedded.services,
              });
            } else {
              this.setState({ serviceNoErrors: false });
            }
          });
      }
    );
  }

  render() {
    return (
      <ContentWrapper>
        {!this.state.tipsterLoading ? (
          <div>
            <Row>
              <Col lg="6">
                <h2>Dettagli tipster</h2>
              </Col>
            </Row>
            <Card className="card-default">
              <CardHeader>
                <strong>{this.state.tipster.email}</strong>
              </CardHeader>
            </Card>
            <Row>
              <Col lg="6">
                <h3>Pacchetti</h3>
              </Col>
            </Row>
            <Card className="card-default">
              <CardBody>
                {!this.state.serviceLoading ? (
                  <div>
                    {this.state.services.map((service) => (
                      <ServiceCard
                        history={this.props.history}
                        key={service._links.self.href}
                        serviceData={service}
                      ></ServiceCard>
                    ))}
                  </div>
                ) : this.state.serviceNoErrors ? (
                  <div>
                    <h4>Carico i pacchetti...</h4>
                    <div>
                      <Spinner />
                    </div>
                  </div>
                ) : (
                  <div>
                    <div>
                      <h4>Errore nel caricamento dei pacchetti</h4>
                    </div>
                    <div>
                      <Button
                        className="btn"
                        onClick={() => {
                          this.getTipsterServices();
                        }}
                      >
                        Riprova
                      </Button>
                      <Button
                        style={{ marginLeft: 10 }}
                        className="btn"
                        onClick={() => {
                          this.props.history.push("/tipsterList");
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
        ) : this.state.serviceNoErrors ? (
          <div>
            <h4>Carico il Tipster...</h4>
            <div>
              <Spinner />
            </div>
          </div>
        ) : (
          <div>
            <div>
              <h4>Errore nel caricamento del Tipster</h4>
            </div>
            <div>
              <Button
                className="btn"
                onClick={() => {
                  this.getTipsterDetails();
                }}
              >
                Riprova
              </Button>
              <Button
                style={{ marginLeft: 10 }}
                className="btn"
                onClick={() => {
                  this.props.history.push("/tipsterList");
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
export default connect(mapStateToProps)(TipsterDetails);
