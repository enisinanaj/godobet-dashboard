import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Aux from '../../hoc/_Aux';
import TipCard from './TipCard';
import * as actions from '../../store/actions';
import TokenManager from '../../App/auth/TokenManager';
import config from '../../store/config';

const getTipCards = (dropdownHidden) => (pools) => {
  return pools.map((pool, i) => {
    return (
      <Col md={6} key={`tip-card-column-${i + (new Date())}`}>
        <TipCard key={`tip-card-${i + (new Date())}`} pool={pool} dropdownHidden={dropdownHidden} />
      </Col>
    );
  });
};

const loadAllPools = (url) => {
  return TokenManager
    .getInstance()
    .getToken()
    .then(jwt => {
        return fetch(url, {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
        })
        .then((e) => e.json())
        .then(json => json._embedded.pools)
      }
    );
}

class PendingTips extends Component {

  state = {
    expiredPools: [],
    ongoingPools: []
  }

  filterPools = (condition) => {
    return loadAllPools(config.API_URL + "/pools")
      .then(pools => pools.filter(condition))
      .catch(console.error);
  }

  filterMyPools = (pools) => {
    const myPools = this.props.user._embedded.playedPools.map(pool => pool.id);
    return pools.filter(pool => !myPools.includes(pool.id));
  }

  getPoolsCards = (filter) => {
    return this.filterPools(filter)
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
        <Card>
          <Card.Body>
            <Card.Title>
              <Card.Text as="h3">Tip in corso</Card.Text>
            </Card.Title>
            <Row>{this.state.ongoingPools}</Row>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              <Card.Text as="h3">Tip conclusi</Card.Text>
            </Card.Title>
            <Row>{this.state.expiredPools}</Row>
          </Card.Body>
        </Card>
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
