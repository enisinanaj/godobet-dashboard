import React, { Component } from "react";
import ServiceCard from "../services/ServiceCard";
import { Button, Spinner } from "reactstrap";
import ContentWrapper from "../../components/layout/ContentWrapper";
import TokenManager from "../../components/auth/Token";
import config from "../../store/config";
import { connect } from "react-redux";
import NewService from "../services/NewService.js";

class AllServices extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: true,
      noErrors: true,
      modalEditServiceVisible: false,
      services: [],
    };
    this.getAllServices();
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

  async getAllServices() {
    var token = await TokenManager.getInstance().getToken();
    this.setState({ loading: true, noErrors: true }, () => {
      fetch(config.API_URL + "/services", {
        method: "GET",
        headers: { "Content-Type": "application/json", "X-Auth": token },
      })
        .then((response) => response.json())
        .then((response) => {
          //console.log(response);
          if (response._embedded !== undefined)
            this.setState({
              services: response._embedded.services,
              loading: false,
            });
          else this.setState({ noErrors: false, loading: true });
        });
    });
  }

  render() {
    if (!this.state.loading)
      return (
        <ContentWrapper>
          {this.state.services.map((service) => (
            <ServiceCard
              history={this.props.history}
              key={service._links.self.href}
              serviceData={service}
              editService={(service) => this.editService(service)}
            ></ServiceCard>
          ))}
          <div className="form-group row text-center">
            <div className="col-md-12">
              <em className="fa-4x icon-organization mr-2"></em>
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
    else if (this.state.noErrors)
      return (
        <ContentWrapper>
          <h4> Carico i pacchetti...</h4>
          <div>
            <Spinner />
          </div>
        </ContentWrapper>
      );
    else
      return (
        <ContentWrapper>
          <div>
            <h4>Errore nel caricamento dei pacchetti</h4>
          </div>
          <div>
            <Button
              className="btn"
              onClick={() => {
                this.setState({ noErrors: true, loading: true }, () => {
                  this.getAllServices();
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
export default connect(mapStateToProps)(AllServices);
