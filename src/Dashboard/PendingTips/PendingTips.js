import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Aux from "../../hoc/_Aux";
import TipCard from "./TipCard";
import * as actions from "../../store/actions";
import TokenManager from "../../App/auth/TokenManager";
import config from "../../store/config";
import { Tab } from "bootstrap";
import { Tabs } from "react-bootstrap";
import { Alert } from "react-bootstrap";

const DEBUG = false;

const getTipCards = (dropdownHidden) => (pools) => {
  if (pools.length === 0) {
    return (
      <Col lg={12} md={12} sm={12}>
        <Alert variant={"light"}>Nessuna tip in questo momento.</Alert>
      </Col>
    );
  }

  return pools.map((pool, i) => {
    return (
      <Col md={4} key={`tip-card-column-${i + new Date()}`}>
        <TipCard
          key={`tip-card-${i + new Date()}`}
          pool={pool}
          dropdownHidden={dropdownHidden || pool.followed}
          debug={DEBUG}
        />
      </Col>
    );
  });
};

const FOLLOWED = 1;

const loadAllPools = (url, args = {}) => {
  return TokenManager.getInstance()
    .getToken()
    .then((jwt) => {
      return fetch(url, {
        headers: {
          "Content-Type": "application/json",
          "X-Auth": jwt,
        },
        ...args,
      })
        .then((e) => e.json())
        .then((json) =>
          json._embedded && json._embedded.pools
            ? json._embedded.pools
            : json._embedded && json._embedded.playedPools
            ? json._embedded.playedPools
            : []
        );
    });
};

class PendingTips extends Component {
  state = {
    expiredPools: [],
    ongoingPools: [],
    followedPools: [],
  };

  getMyPools = () => {
    return loadAllPools(
      `${config.API_URL}/pools/search/subscriberPools?subscriber=${this.props.user._links.self.href}&page=0&size=1000`
    ).catch(console.error);
  };

  getPlayReference = () => {
    return loadAllPools(
      `${this.props.applicationState.user._links.self.href}/playedPoolsRel?page=0&size=1000`
    ).catch(console.error);
  };

  filterMyPools = (pools) => {
    const myPools =
      this.props.user._embedded && this.props.user._embedded.playedPools
        ? this.props.user._embedded.playedPools.map((pool) => pool.id)
        : [];
    return pools.map((pool) => {
      return { ...pool, followed: myPools.includes(pool.id) };
    });
  };

  getPoolsCards = (pools, filter) => {
    return pools.filter(filter).map((pool) => getTipCards(!filter(pool))(pool));
  };

  getExpiredPoolsCards = (pools, filter) => {
    return (
      pools
        .then((pools) => pools.filter(filter).sort((a, b) => new Date(b.createdOn) - new Date(a.id)))
        .then((pool) => getTipCards(!filter(pool))(pool))
    );
  };

  componentDidMount() {
    let pools = this.getMyPools();
    let playedPools = this.getPlayReference();

    playedPools
      .then((playedPools) => {
        return pools.then((pools) => [pools, playedPools]);
      })
      .then((poolsSets) =>
        poolsSets[0].filter(
          (pool) => !poolsSets[1].find((pp) => pp.references.pool === pool.id)
        )
      )
      //.then((filteredPools) => filteredPools.filter((p) => !p.outcome))
      .then((ongoingPools) => this.setState({ ongoingPools }));

    playedPools
      .then((playedPools) => {
        return pools.then((pools) => [pools, playedPools]);
      })
      .then((poolsSets) => {
        // expired pools are those that aren't played and have an outcome        
        this.getExpiredPoolsCards(pools, (pool) => poolsSets[1].find((pp) => pp.references.pool === pool.id) && !!pool.outcome)
        .then((expiredPools) =>
          this.setState({expiredPools: expiredPools.filter(pool => new Date(pool.createdOn).getTime() > new Date().getTime() + (30 + 24 + 60 + 60 + 1000))})
        );

        return poolsSets[0].filter((pool) =>
          poolsSets[1].find(
            (pp) => pp.references.pool === pool.id && pp.direction === FOLLOWED
          )
        )
      })
      .then((filteredPools) => filteredPools.filter((p) => !p.outcome).sort((a, b) => new Date(b.createdOn) - new Date(a.id)))
      .then((followedPools) => this.setState({ followedPools }));
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
                <Row>
                  <Col md={12} lg={12}>
                    <h4>Nuove tip</h4>
                  </Col>
                </Row>
                <Row>{getTipCards(false)(this.state.ongoingPools)}</Row>
                <Row>
                  <Col md={12} lg={12} className={"mt-3"}>
                    <h4>Tip in corso</h4>
                  </Col>
                </Row>
                <Row>{getTipCards(true)(this.state.followedPools)}</Row>
              </Tab>
              <Tab eventKey="expired" title="Tip concluse">
                <Row>{this.state.expiredPools}</Row>
              </Tab>
            </Tabs>
          </Col>
        </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(PendingTips);
