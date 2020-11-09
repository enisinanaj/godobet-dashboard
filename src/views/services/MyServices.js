import React, { Component } from "react";
import ServiceCard from "./ServiceCard";
import { Button, Spinner } from "reactstrap";
import ContentWrapper from "../../components/layout/ContentWrapper";
import TokenManager from "../../components/auth/Token";
import config from "../../store/config";
import NewService from "./NewService.js";
import { connect } from "react-redux";

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
    this.getTaxonomies();
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
        fetch(this.props.app.user._links.services.href, {
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
        console.log(this.props.app);
        // this.props.history.push("/login");
      }
    });
  }

  async getTaxonomies() {
    var token = await TokenManager.getInstance().getToken();
    fetch(config.API_URL + "/taxonomies", {
      method: "GET",
      headers: { "Content-Type": "application/json", "X-Auth": token },
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
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
            {this.state.services.map((service) => (
              <ServiceCard
                history={this.props.history}
                serviceData={service}
                key={service._links.self.href}
                editService={(service) => this.editService(service)}
              ></ServiceCard>
            ))}
            <div className="form-group row text-center">
              <div className="col-md-12">
                <em className="fa-4x icon-layers mr-2"></em>
              </div>
            </div>
            <div className="form-group row text-center">
              <div className="col-md-12">
                <div className="h2 mb-4 text-center">
                  Crea un pacchetto
                </div>
                <div className="h5 mb-4 text-center">
                  I pacchetti aiutano gli utenti a capire meglio il servizio che offri. <br/>
                  Compilalo nei minimi dettagli per aiutare le persone a fare la giusta scelta!
                </div>
                <Button color="primary" onClick={() => this.newService()}>
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
                <em className="fa-4x icon-layers mr-2"></em>
              </div>
            </div>
            <div className="form-group row text-center">
              <div className="col-md-12">
                <div className="h2 mb-4 text-center">
                  Crea un pacchetto
                </div>
                <div className="h5 mb-4 text-center">
                  I pacchetti aiutano gli utenti a capire meglio il servizio che offri. <br/>
                  Compilalo nei minimi dettagli per aiutare le persone a fare la giusta scelta!
                </div>
                <Button color="primary" onClick={() => this.newService()}>
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
