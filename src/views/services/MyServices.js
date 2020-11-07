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
      services: [],
    };
    this.getMyServices();
  }

  toggleModal = () => {
    this.setState({
      modalNewServiceVisible: !this.state.modalNewServiceVisible,
    });
  };

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
              console.log(response);
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
      .then((response) =>
        this.setState({ taxonomiesDefinition: response._embedded.taxonomies })
      );
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
              <Button color="primary" onClick={this.toggleModal}>
                Aggiungi pacchetto
              </Button>
              <NewService
                addService={(newService) => this.addService(newService)}
                modalNewServiceVisible={this.state.modalNewServiceVisible}
                toggleModal={() => this.toggleModal()}
                refreshServiceList={() => this.getMyServices()}
              ></NewService>
            </div>
          </div>
          {this.state.services.map((service) => (
            <ServiceCard
              history={this.props.history}
              key={service._links.self.href}
              serviceName={service.serviceName}
              description={service.description}
              maxSubscribers={service.maxSubscribers}
              duration={service.duration}
              price={service.price}
              version={service.version}
              links={service._links}
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
