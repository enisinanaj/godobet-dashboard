import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";
import Chart from "react-apexcharts";

import Aux from "../../hoc/_Aux";
// import LineInterpolationChart from "../Charts/LineInterpolationChart";

import * as actions from "../../store/actions";
import config from "../../store/config";
import TokenManager from "../../App/auth/TokenManager";
import satisfactionChart from "./charts/pie";

class Default extends React.Component {
  state = {
    pools: [],
    playedEvents: [],
    pendingTipsCount: 0,
    activeTipsCount: 0,
    totalProfit: 0,
    monthProfit: 0,
    subscribedPools: [],
    startDate: moment().add(-1, "month").toDate(),
    endDate: moment().add(-1, "day").toDate(),
    flotData: [],
  };

  getMyPools = () =>
    this.load(
      `${config.API_URL}/pools/search/subscriberPools?subscriber=${this.props.user._links.self.href}`
    )
      .then((p) => p._embedded.pools)
      .then(this.filterMyPools);

  getStatsForMonth = () =>
    this.load(
      `${config.API_URL}/pools/search/subscriberStats?start=${moment(
        this.state.startDate
      ).format("YYYY-MM-DDTHH:mm:ss.SSS")}&end=${moment(
        this.state.endDate
      ).format("YYYY-MM-DDTHH:mm:ss.SSS")}&subscriber=${
        this.props.user._links.self.href
      }`
    ).then((stats) => stats?._embedded?.pools);

  getUserSubscriptions = () =>
    this.load(
      `${config.API_URL}/users/${this.props.user.userCode}/subscriptions`
    ).then((subs) => subs?._embedded?.subscriptions);

  getTipsterOpenPools = () =>
    this.load(`${config.API_URL}/users/${this.props.user.userCode}/pools`).then(
      (openPools) => openPools?._embedded?.pools
    );

  getTipsterTotalSubscribers = () =>
    this.load(`${config.API_URL}/users/${this.props.user.userCode}`).then(
      (totalSubscribers) => totalSubscribers?.totalSubscribers
    );

  filterMyPools = (pools) => {
    const myPools =
      this.props.user._embedded && this.props.user._embedded.playedPools
        ? this.props.user._embedded.playedPools.map((pool) => pool.id)
        : [];
    return pools.filter((pool) => !(myPools.includes(pool.id) && pool.outcome));
  };
  load(url, args = {}) {
    return TokenManager.getInstance()
      .getToken()
      .then((jwt) =>
        fetch(url, {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
          ...args,
        })
      )
      .then((e) => e.json());
  }

  getUserStats() {
    let activeTipsCount = [];
    if (this.props.user._embedded && this.props.user._embedded.playedPools) {
      activeTipsCount = this.props.user._embedded.playedPools;
    }
    Promise.all([
      this.getMyPools(),
      this.getUserSubscriptions(),
      this.getStatsForMonth(),
      this.getTipsterOpenPools(),
      this.getTipsterTotalSubscribers(),
    ]).then((p) => {
      this.setState({
        totalProfit: this.props.user.totalProfit,
        pendingTipsCount: p[0].length,
        subscribedPools: [...activeTipsCount, ...p[0]],
        activeTipsCount: p[1]?.filter((s) => !s.expired)?.length,
        monthProfit: p[2]?.reduce((a, b) => a + b.profit, 0),
        openPools: p[3].length,
        totalSubscribers: p[4],
      });
    });
  }

  componentDidMount() {
    this.getUserStats();
    this.getCreampieData();
  }

  //creampie is for last
  getCreampieData = () => {
    const data = satisfactionChart;
    if (!this.props.user._embedded || !this.props.user._embedded.playedPools) {
      return {
        options: {
          labels: [],
        },
        data: [],
      };
    }

    const map = this.props.user._embedded.playedPools.reduce((pie, pool) => {
      const h = { ...pie };
      h[pool.outcome] =
        parseInt(pie[pool.outcome]) >= 0 ? parseInt(pie[pool.outcome]) : 1;
      return h;
    }, {});

    data.options.labels = Object.keys(map);
    data.series = Object.values(map);
    return data;
  };

  render() {
    console.log(this.props.user._embedded);
    return (
      <Aux>
        <Col xl={12} md={12}>
          <Row md={12}>
            <Col md={6}>
              <Card md={12}>
                <Card.Body>
                  <Row className="align-items-center">
                    <Col sm={8}>
                      <h6 className="text-muted m-b-0">Pending tips</h6>
                      <h4 className="text-c-yellow">
                        {this.state.pendingTipsCount}
                      </h4>
                    </Col>
                    <Col sm={4} className="text-right">
                      <i className="feather icon-bar-chart-2 f-28" />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card md={12}>
                <Card.Body>
                  <Row className="align-items-center">
                    <Col sm={8}>
                      <h6 className="text-muted m-b-0">Iscrizioni attive</h6>
                      <h4 className="text-c-yellow">
                        {this.state.activeTipsCount}
                      </h4>
                    </Col>
                    <Col sm={4} className="text-right">
                      <i className="feather icon-bar-chart-2 f-28" />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row md={12}>
            <Col md={6}>
              <Card md={12}>
                <Card.Body>
                  <Row className="align-items-center">
                    <Col sm={8}>
                      <h6 className="text-muted m-b-0">Profitto Totale</h6>
                      <h4 className="text-c-yellow">
                        {this.state.totalProfit}%
                      </h4>
                    </Col>
                    <Col sm={4} className="text-right">
                      <i className="feather icon-bar-chart-2 f-28" />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card md={12}>
                <Card.Body>
                  <Row className="align-items-center">
                    <Col sm={8}>
                      <h6 className="text-muted m-b-0">Profitto mensile</h6>
                      <h4 className="text-c-yellow">
                        {this.state.monthProfit}%
                      </h4>
                    </Col>
                    <Col sm={4} className="text-right">
                      <i className="feather icon-bar-chart-2 f-28" />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {this.props.user.roleValue >= 5 && (
            <Row md={12}>
              <Col md={6}>
                <Card md={12}>
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col sm={8}>
                        <h6 className="text-muted m-b-0">Tips da refertare</h6>
                        <h4 className="text-c-yellow">
                          {this.state.openPools}
                        </h4>
                      </Col>
                      <Col sm={4} className="text-right">
                        <i className="feather icon-bar-chart-2 f-28" />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card md={12}>
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col sm={8}>
                        <h6 className="text-muted m-b-0">Numero abbonati</h6>
                        <h4 className="text-c-yellow">
                          {this.state.totalSubscribers}
                        </h4>
                      </Col>
                      <Col sm={4} className="text-right">
                        <i className="feather icon-bar-chart-2 f-28" />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )}
          <Row>
            <Col>
              <Card md={12}>
                <Card.Header>
                  <Card.Title as="h5">Vincita/Perdita</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Chart {...this.getCreampieData()} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => ({ user: state.user, appState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Default);
