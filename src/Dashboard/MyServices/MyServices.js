import React, { Component } from "react";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Aux from "../../hoc/_Aux";
import config from "../../store/config";
import * as actions from "../../store/actions";
import ServiceCard from "../TipsterServices/ServiceCard";
import TokenManager from "../../App/auth/TokenManager";
import NoServicesAlert from "../Marketplace/NoServicesAlert";

const loadAllSubscriptions = (url) => {
  return TokenManager.getInstance()
    .getToken()
    .then((jwt) => {
      return fetch(url, {
        headers: {
          "Content-Type": "application/json",
          "X-Auth": jwt,
        },
      }).then((e) => e.json());
    });
};

class MyServices extends Component {
  state = {
    services: [],
  };

  componentDidMount = () => {
    this.loadMyServices()
    .then(services => services._embedded && services._embedded.services ? services._embedded.services.map(s => s.id) : [])
    .then(serviceIds => this.getSubscriptions(serviceIds))
  };

  getSubscriptions = (myServices) => {
    return loadAllSubscriptions(
      config.API_URL +
        `/users/${this.props.user.userCode}/subscriptions?page=0&size=1000`
    )
      .then((r) => {
        console.warn(r)
        this.setState({
          services:
            r._embedded && r._embedded.subscriptions
              ? r._embedded.subscriptions.filter((s) => s.valid && myServices.indexOf(s.serviceId) < 0)
              : [],
        });
      })
      .catch(console.error);
  };

  loadMyServices = () => {
    if (this.props.user.roleValue < 5) {
      return new Promise((resolve) => {
        resolve([]);
      })
    }
  
    return TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        return fetch(this.props.user._links.services.href.replace("{?projection}", ""), {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
        }).then((e) => e.json());
      });
  };

  getServicesDom() {
    const services = this.state.services.map((service) => ({
      ...service.service,
      remainingDays: service.remainingDays,
      id: service.serviceId,
      media: [{ ...service.media, mediaIteration: 1 }],
    }));

    if (this.state.services.length === 0) {
      return <NoServicesAlert />;
    }

    return (
      <ServiceCard
        disableEdit={true}
        services={services.sort((a, b) => b.id - a.id)}
        showRemainingDays={true}
      ></ServiceCard>
    );
  }

  render() {
    return (
      <Aux>
        <Row md={12}>{this.getServicesDom()}</Row>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => ({
  applicationState: state,
  user: state.user,
  loggedIn: state.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyServices);
