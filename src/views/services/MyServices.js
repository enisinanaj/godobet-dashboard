import React, { Component } from "react";
import ServiceCard from "./ServiceCard";
import { Button, Row, Spinner } from "reactstrap";
import ContentWrapper from "../../components/layout/ContentWrapper";
import TokenManager from "../../components/auth/Token";
import NewService from "./NewService.js";
import { connect } from "react-redux";
import Label from "../../components/layout/Label";

class MyServices extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: true,
      noErrors: true,
      modalNewServiceVisible: false,
      serviceToEdit: null,
      services: [],
    };
    this.getMyServices();
  }

  toggleModal = () => {
    this.setState({
      modalNewServiceVisible: !this.state.modalNewServiceVisible,
    });
  };

  newService() {
    this.setState(
      {
        serviceToEdit: null,
      },
      () => this.toggleModal()
    );
  }

  editService(service) {
    this.setState(
      {
        serviceToEdit: service,
      },
      () => this.toggleModal()
    );
  }

  async getMyServices() {
    var token = await TokenManager.getInstance().getToken();
    this.setState({ loading: true, noErrors: true }, () => {
      try {
        fetch(this.props.app.user._links.services.href.replace("{?projection}", "").replace("http://", "https://"), {
          method: "GET",
          headers: { "Content-Type": "application/json", "X-Auth": token },
        })
          .then((response) => response.json())
          .then((response) => {
            if (response._embedded !== undefined) {
              this.setState({
                services: response._embedded.services,
                loading: false,
              });
            } else this.setState({ noErrors: false, loading: true });
          });
      } catch {
      }
    });
  }

  addService(service) {
    var joined = this.state.services.concat(service);
    this.setState({ services: joined });
  }

  render() {
    if (!this.state.loading)
        if (this.state.services != null)
        return (
          <ContentWrapper>
            <div className="content-heading" style={{flex: 1, flexDirection: "row", justifyContent: "space-between"}}>
              <div>
                <div>I miei pacchetti</div>
                <Label>Qua si trovano tutti i pacchetti che hai creato</Label>
              </div>
              <div>
                <Button color="success" onClick={() => this.newService()}>
                  <em className="fas fa-plus mr-2"></em>Aggiungi pacchetto
                </Button>
              </div>
            </div>

            <Row lg="12" sm="12" md="12">
              {this.state.services.map((service) => (
                <ServiceCard
                  history={this.props.history}
                  serviceData={service}
                  key={service._links.self.href.replace("http://", "https://")}
                  editService={(service) => this.editService(service)}
                ></ServiceCard>
              ))}
            </Row>
            <div className="form-group row text-center mt-5">
              <div className="col-md-12">
                <em className="fa-3x icon-layers mr-2"></em>
              </div>
            </div>
            <div className="form-group row text-center">
              <div className="col-md-12">
                <div className="h2 mb-4 text-center">
                  Crea un pacchetto
                </div>
                <div className="mb-4 text-center">
                  <Label>I pacchetti aiutano gli utenti a capire meglio il servizio che offri.</Label>
                  <Label>Compilalo nei minimi dettagli per aiutare le persone a fare la giusta scelta!</Label>
                </div>
                <Button color="success" onClick={() => this.newService()}>
                  <em className="fas fa-plus mr-2"></em>Aggiungi pacchetto
                </Button>
                <NewService
                  modalNewServiceVisible={this.state.modalNewServiceVisible}
                  serviceToEdit={this.state.serviceToEdit}
                  toggleModal={() => this.toggleModal()}
                  refreshServiceList={() => this.getMyServices()}
                ></NewService>
              </div>
            </div>
          </ContentWrapper>
        );
      else
        return (
          <ContentWrapper>
            <div className="h1 mb-5 text-center">Ancora nessun pacchetto presente ma non temere!</div>
            <div className="form-group row text-center mt-5">
              <div className="col-md-12">
                <em className="fa-3x icon-layers mr-2"></em>
              </div>
            </div>
            <div className="form-group row text-center">
              <div className="col-md-12">
                <div className="h2 mb-4 text-center">
                  Crea un pacchetto
                </div>
                <div className="mb-4 text-center">
                  <Label>I pacchetti aiutano gli utenti a capire meglio il servizio che offri.</Label>
                  <Label>Compilalo nei minimi dettagli per aiutare le persone a fare la giusta scelta!</Label>
                </div>
                <Button color="success" onClick={() => this.newService()}>
                  <em className="fas fa-plus mr-2"></em>Aggiungi pacchetto
                </Button>
                <NewService
                  modalNewServiceVisible={this.state.modalNewServiceVisible}
                  serviceToEdit={this.state.serviceToEdit}
                  toggleModal={() => this.toggleModal()}
                  refreshServiceList={() => this.getMyServices()}
                ></NewService>
              </div>
            </div>
          </ContentWrapper>
        )
    else if (this.state.noErrors)
      return (
        <ContentWrapper>
          <h4> Carico i tuoi pacchetti...</h4>
          <div>
            <Spinner />
          </div>
        </ContentWrapper>
      );
    else
      return (
        <ContentWrapper>
          <div>
            <h4>Errore nel caricamento dei tuoi pacchetti</h4>
          </div>
          <div>
            <Button
              className="btn"
              onClick={() => {
                this.setState({ noErrors: true, loading: true }, () => {
                  this.getMyServices();
                });
              }}
            >
              Riprova
            </Button>
          </div>
        </ContentWrapper>
      );
  }
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(MyServices);
