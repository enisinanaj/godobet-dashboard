import React, { Component } from "react";
import ContentWrapper from "../../components/layout/ContentWrapper";
import {
  Row,
  Col,
  Button,
  Spinner,
} from "reactstrap";
import ServiceCard from "../services/ServiceCard";
import TokenManager from "../../components/auth/Token";
import NewService from "../services/NewService.js";
import { connect } from "react-redux";
import DetailGrid from "../../components/layout/DetailGrid";

const styles = {
  col: {
    borderRightColor: "#e0e0e0",
    borderRightWidth: "1px",
    borderRightStyle: "solid",
    padding: 5,
    paddingLeft: 10,
  }
}

class TipsterDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipsterLoading: true,
      tipsterNoErrors: true,
      serviceLoading: true,
      serviceNoErrors: true,
      modalEditServiceVisible: false,
      tipster: {},
      services: [],
    };
    this.checkTipsterDetails();
  }

  toggleModalEditService = () => {
    this.setState({
      modalEditServiceVisible: !this.state.modalEditServiceVisible,
    });
  };

  editService(service) {
    this.setState(
      {
        serviceToEdit: service,
      },
      () => this.toggleModalEditService()
    );
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
        fetch(this.props.app.tipsterDetails._links.self.href.replace("{?projection}", ""), {
          method: "GET",
          headers: { "Content-Type": "application/json", "X-Auth": token },
        })
        .then((response) => response.json())
        .then((response) => {
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
        fetch(this.props.app.tipsterDetails._links.services.href.replace("{?projection}", ""), {
          method: "GET",
          headers: { "Content-Type": "application/json", "X-Auth": token },
        })
          .then((response) => response.json())
          .then((response) => {
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
            <NewService
              modalNewServiceVisible={this.state.modalEditServiceVisible}
              serviceToEdit={this.state.serviceToEdit}
              toggleModal={() => this.toggleModalEditService()}
              refreshServiceList={() => this.getTipsterDetails()}
            />
            <Row className={"mb-5"}>
              <Col lg={12}>
                <DetailGrid>
                  <Col md={2} sm={6} style={{
                      borderRightColor: "#e0e0e0",
                      borderRightWidth: "1px",
                      borderRightStyle: "solid",
                      padding: 5,
                    }} >
                    <div style={{ fontWeight: "300" }}>
                      Name
                    </div>
                    <div>{this.state.tipster.name}</div>
                  </Col>
                  <Col md={2} sm={6} style={styles.col} >
                    <div style={{ fontWeight: "300" }}>
                      <i className="icon-envelope mr-2"></i> Email
                    </div>
                    <div>{this.state.tipster.email}</div>
                  </Col>
                  <Col style={styles.col} md={2} sm={6}>
                    <div style={{ fontWeight: "300" }}>
                      <i className="icon-user mr-2"></i> Role
                    </div>
                    <div>{this.state.tipster.roleName}</div>
                  </Col>
                  { this.state.tipster.roleValue >= 5 && <Col style={styles.col} md={2} sm={6}>
                    <div style={{ fontWeight: "300" }}>
                      <i className="icon-layers mr-2"></i> Pacchetti creati
                    </div>
                    <div>{this.state.tipster._embedded.services.length}</div>
                  </Col>}
                  { this.state.tipster.roleValue >= 5 && <Col style={styles.col} md={2} sm={6}>
                    <div style={{ fontWeight: "300" }}>
                      <i className="icon-present mr-2"></i> Schedine create
                    </div>
                    <div>{this.state.tipster._embedded.pools.length}</div>
                  </Col>}
                  <Col style={styles.col} md={2} sm={6}>
                    <div style={{ fontWeight: "300" }}>
                      <i className="icon-wallet mr-2"></i> Abbonamenti
                    </div>
                    <div>{this.state.tipster._embedded.subscriptions.length}</div>
                  </Col>
                </DetailGrid>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <h3>Pacchetti</h3>
              </Col>
            </Row>
              {!this.state.serviceLoading ? (
                <Row>
                  {this.state.services.map((service) => (
                    <ServiceCard
                      history={this.props.history}
                      key={service._links.self.href}
                      serviceData={service}
                      editService={(service) => this.editService(service)}
                    ></ServiceCard>
                  ))}
                </Row>
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
                      }}>
                      Riprova
                    </Button>
                    <Button
                      style={{ marginLeft: 10 }}
                      className="btn"
                      onClick={() => {
                        this.props.history.push("/tipsterList");
                      }}>
                      Torna indietro
                    </Button>
                  </div>
                </div>
              )}
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
