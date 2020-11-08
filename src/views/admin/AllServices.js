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
          <NewService
            modalNewServiceVisible={this.state.modalEditServiceVisible}
            serviceToEdit={this.state.serviceToEdit}
            toggleModal={() => this.toggleModalEditService()}
            refreshServiceList={() => this.getAllServices()}
          />
          {this.state.services.map((service) => (
            <ServiceCard
              history={this.props.history}
              key={service._links.self.href}
              serviceData={service}
              editService={(service) => this.editService(service)}
            ></ServiceCard>
          ))}
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
