import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Aux from '../../hoc/_Aux';
import TipCard from './TipCard';
import * as actions from '../../store/actions';
import TokenManager from '../../App/auth/TokenManager';
import config from '../../store/config';
import { Tab } from 'bootstrap';
import { Tabs } from 'react-bootstrap';

const getTipCards = (dropdownHidden) => (pools) => {
  return pools.map((pool, i) => {
    return (
      <Col md={6} key={`tip-card-column-${i + (new Date())}`}>
        <TipCard key={`tip-card-${i + (new Date())}`} pool={pool} dropdownHidden={dropdownHidden} />
      </Col>
    );
  });
};

const loadAllPools = (url, args = {}) => {
  return TokenManager
    .getInstance()
    .getToken()
    .then(jwt => {
        return fetch(url, {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
          ...args
        })
        .then((e) => e.json())
        .then(json => json._embedded ? json._embedded.pools : [])
      }
    );
}

class PendingTips extends Component {
  state = {
    expiredPools: [],
    ongoingPools: []
  }

  getMyPools = (condition) => {
    return loadAllPools(`${config.API_URL}/pools/search/subscriberPools?subscriber=${this.props.user._links.self.href}`)
      .then(pools => pools.filter(condition))
      .catch(console.error);
  }

  filterPools = (condition) => {
    return loadAllPools(config.API_URL + "/pools")
      .then(pools => pools.filter(condition))
      .catch(console.error);
  }

  filterMyPools = (pools) => {
    const myPools = this.props.user._embedded && this.props.user._embedded.playedPools 
      ? this.props.user._embedded.playedPools.map(pool => pool.id)
      : [];
    return pools.filter(pool => !myPools.includes(pool.id));
  }

  getPoolsCards = (filter) => {
    return this.getMyPools(filter)
      .then(this.filterMyPools)
      .then(pool => getTipCards( !filter(pool) )(pool))
  }

  componentDidMount() {
    this.getPoolsCards(p => !p.outcome)
    .then(ongoingPools => this.setState({
      ...this.state,
      ongoingPools
    }));

    this.getPoolsCards(p => !!p.outcome)
    .then(expiredPools => this.setState({
      ...this.state,
      expiredPools
    }));
  }

  render() {
    return (
      <Aux>
        <Row>
          <Col sm={12} className="tab-user-card">
            <Tabs
              variant="pills"
              defaultActiveKey="pending"
              id="uncontrolled-tab-example"
            >
              <Tab eventKey="pending" title="Tip in corso">
                <Row>{this.state.ongoingPools}</Row>
              </Tab>
              <Tab eventKey="expired" title="Tip conclusi">
                <Row>{this.state.expiredPools}</Row>
              </Tab>
            </Tabs>
        </Col>
      </Row>
    </Aux>
    );
  }
}

const mapStateToProps = state => ({
  applicationState: state,
  user: state.user,
  loggedIn: state.loggedIn
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PendingTips);
