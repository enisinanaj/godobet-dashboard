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
      return (
        <ContentWrapper>
          <div className="form-group row">
            <div className="col-md-12">
              <Button color="primary" onClick={() => this.newService()}>
                Aggiungi pacchetto
              </Button>
              <NewService
                modalNewServiceVisible={this.state.modalNewServiceVisible}
                serviceToEdit={this.state.serviceToEdit}
                toggleModal={() => this.toggleModal()}
                refreshServiceList={() => this.getMyServices()}
              ></NewService>
            </div>
          </div>
          {this.state.services.map((service) => (
            <ServiceCard
              history={this.props.history}
              serviceData={service}
              key={service._links.self.href}
              editService={(service) => this.editService(service)}
            ></ServiceCard>
          ))}
        </ContentWrapper>
      );
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
