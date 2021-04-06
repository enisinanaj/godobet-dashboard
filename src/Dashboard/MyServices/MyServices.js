import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Aux from '../../hoc/_Aux';
import config from '../../store/config';
import * as actions from '../../store/actions';
import ServiceCard from '../TipsterServices/ServiceCard';
import TokenManager from '../../App/auth/TokenManager';

const loadAllSubscriptions = (url) => {
  return TokenManager.getInstance()
    .getToken()
    .then((jwt) => {
      return fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'X-Auth': jwt,
        },
      }).then((e) => e.json());
    });
};

class MyServices extends Component {
  state = {
    services: [],
  };

  componentDidMount = () => {
    this.getSubscriptions();
  };

  getSubscriptions = () => {
    return loadAllSubscriptions(
      config.API_URL + `/users/${this.props.user.userCode}/subscriptions?page=0&size=1000`
    )
      .then((r) => {
        this.setState({
          services:
            r._embedded && r._embedded.subscriptions
              ? r._embedded.subscriptions.filter(s => s.valid)
              : [],
        });
      })
      .catch(console.error);
  };

  getServicesDom() {
    const services = this.state.services.map((service) => ({...service.service, remainingDays: service.remainingDays, id: service.serviceId, media: [{...service.media, mediaIteration: 1}]}));
    return (
      <ServiceCard disableEdit={true} services={services.sort((a, b) => b.id - a.id)} showRemainingDays={true} ></ServiceCard>
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
