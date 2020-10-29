import React, { Component } from "react";
import ServiceCard from "./ServiceCard";
import { Row, Col, Input, Button } from "reactstrap";
import ContentWrapper from "../../components/layout/ContentWrapper";
import TokenManager from "../../components/auth/Token";
import config from "../../store/config";
import NewService from "./NewService.js";
import { connect } from "react-redux";

class MyServices extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      modalNewServiceVisible: false,
      services: [],
    };
    this.getMyServices();
  }

  eventModalRef = (props) => {
    console.log(props);
    this.showModal = props && props.toggleModal;
  };

  toggleModal = () => {
    this.setState({
      modalNewServiceVisible: !this.state.modalNewServiceVisible,
    });
    //this.showModal();
  };

  async getMyServices() {
    var token = await TokenManager.getInstance().getToken();
    fetch(this.props.app.user._links.services.href, {
      method: "GET",
      headers: { "Content-Type": "application/json", "X-Auth": token },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({ services: response._embedded.services });
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
    return (
      <ContentWrapper>
        <div className="form-group row">
          <div className="col-md-12">
            <Button color="primary" onClick={this.toggleModal}>
              Aggiungi pacchetto
            </Button>
            <NewService
              pool={this.state.poolURL}
              addService={(newService) => this.addService(newService)}
              modalNewServiceVisible={this.state.modalNewServiceVisible}
              toggleModal={() => this.toggleModal()}
              refreshServiceList={() => this.getMyServices()}
            ></NewService>
          </div>
        </div>
        {this.state.services.map((service) => (
          <ServiceCard
            key={service.key}
            id={service.id}
            author={service.author}
            taxonomies={service.taxonomies}
            taxonomiesDefinition={service.taxonomiesDefinition}
            serviceName={service.serviceName}
            description={service.description}
            maxSubscribers={service.maxSubscribers}
            duration={service.duration}
            price={service.price}
            version={service.version}
            hrefService={""}
          ></ServiceCard>
        ))}
      </ContentWrapper>
    );
  }
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(MyServices);
