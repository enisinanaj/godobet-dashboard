import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";
import Chart from "react-apexcharts";
import Aux from "../../hoc/_Aux";
import * as actions from "../../store/actions";
import config from "../../store/config";
import TokenManager from "../../App/auth/TokenManager";
import satisfactionChart from "./charts/pie";
import LocaleNumber from "../../App/components/LocaleNumber";

class Default extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pools: [],
      user: this.props.user,
      playedEvents: [],
      pendingTipsCount: 0,
      activeTipsCount: 0,
      totalProfit: 0,
      monthProfit: 0,
      subscribedPools: [],
      startDate: moment().add(-3, "month").toDate(),
      endDate: moment().add(-1, "day").toDate(),
      flotData: [],
    };
  }

  getMyPools = () =>
    this.load(
      `${config.API_URL}/pools/search/subscriberPools?subscriber=${this.state.user._links?.self?.href}&page=0&size=1000`
    ).then((p) => p._embedded?.pools);

  getStatsForMonth = () =>
    this.load(
      `${config.API_URL}/pools/search/subscriberStats?start=${moment(
        this.state.startDate
      ).format("YYYY-MM-DDTHH:mm:ss.SSS")}&end=${moment(
        this.state.endDate
      ).format("YYYY-MM-DDTHH:mm:ss.SSS")}&subscriber=${
        this.state.user._links?.self?.href
      }`
    ).then((stats) => {
      console.warn(stats?._embedded?.pools);
      return stats?._embedded?.pools;
    });

  getUserSubscriptions = () =>
    this.load(
      `${config.API_URL}/users/${this.state.user.userCode}/subscriptions?page=0&size=1000`
    ).then((subs) => subs?._embedded?.subscriptions);

  getTipsterOpenPools = () =>
    this.load(
      `${config.API_URL}/users/${this.state.user.userCode}/pools?page=0&size=1000`
    ).then((openPools) => openPools?._embedded?.pools);

  getTipsterTotalSubscribers = () =>
    this.load(`${config.API_URL}/users/${this.state.user.userCode}`).then(
      (totalSubscribers) => totalSubscribers?.totalSubscribers
    );

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
    const FOLLOWED = 1;
    let activeTipsCount = [];
    if (this.state.user._embedded && this.state.user._embedded.playedPools) {
      activeTipsCount = this.state.user._embedded.playedPools;
    }
    Promise.all([
      this.getMyPools(),
      this.getUserSubscriptions(),
      this.getStatsForMonth(),
      this.getTipsterOpenPools(),
      this.getTipsterTotalSubscribers(),
    ])
      .then((p) => {
        this.setState({
          totalProfit: this.state.user.totalProfit,
          pendingTipsCount: p[0].filter((p) => !p.outcome).length,
          subscribedPools: [...activeTipsCount, ...p[0]],
          activeTipsCount: p[1]?.filter((s) => !s.expired && s.captured === 1)?.length,
          monthProfit: p[2]?.reduce((a, b) => a + b.profit, 0),
          openPools: p[3].filter((p) => !p.outcome).length,
          totalSubscribers: p[4],
        });

        return p[0];
      })
      .then((pendingTips) => {
        return this.load(
          `${this.state.user._links?.self?.href}/playedPoolsRel?page=0&size=1000`
        ).then((playedPools) => [
          pendingTips.filter((p) => !p.outcome),
          playedPools._embedded.playedPools,
        ]);
      })
      .then((poolsSets) =>
        poolsSets[0].filter((pool) => !poolsSets[1].find((pp) => pp.references.pool === pool.id && pp.direction !== FOLLOWED))
      )
      .then((pendingTips) =>
        this.setState({ pendingTipsCount: pendingTips.length })
      );
  }

  componentDidMount() {
    this.getUserStats();
  }

  //creampie is for last
  getCreampieData = () => {
    const data = satisfactionChart;
    if (!this.state.user._embedded || !this.state.user._embedded.playedPools) {
      return {
        options: {
          labels: [],
        },
        ...data,
        series: [0, 0, 100],
      };
    }

    const map = this.state.user._embedded.playedPools.reduce((pie, pool) => {
      const h = { ...pie };

      if (!pool.outcome) {
        return h;
      }

      h[pool.outcome] =
        parseInt(pie[pool.outcome]) >= 0 ? 1 + parseInt(pie[pool.outcome]) : 1;
      return h;
    }, {});

    data.options.labels = Object.keys(map);
    data.series = Object.values(map);
    return data;
  };

  render() {
    const creamPieData = this.getCreampieData();

    return (
      <Aux>
        <Row
          style={{
            background: "#ecf0f5",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <Col xl={12} md={12}>
            <Row md={12}>
              <Col md={12} lg={12}>
                <h4>
                  Iscrizioni{" "}
                  <small style={{ fontSize: "12px" }}>
                    (Statistiche sui servizi a cui sei iscritto)
                  </small>
                </h4>
              </Col>
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
                        <h6 className="text-muted m-b-0">Servizi</h6>
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
                          <LocaleNumber
                            amount={this.state.totalProfit}
                            symbol={"%"}
                          />
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
                          <LocaleNumber
                            amount={this.state.monthProfit}
                            symbol={"%"}
                          />
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
            {this.state.user.roleValue >= 5 && (
              <Row md={12}>
                <Col md={12} lg={12}>
                  <h4>
                    Gestione{" "}
                    <small style={{ fontSize: "12px" }}>
                      (Panoramica dei servizi che hai creato e gestisci)
                    </small>
                  </h4>
                </Col>
                <Col md={6}>
                  <Card md={12}>
                    <Card.Body>
                      <Row className="align-items-center">
                        <Col sm={8}>
                          <h6 className="text-muted m-b-0">
                            Tips da refertare
                          </h6>
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
                          <h6 className="text-muted m-b-0">Iscrizioni</h6>
                          <h4 className="text-c-yellow">
                            {this.state.totalSubscribers === -1
                              ? 0
                              : this.state.totalSubscribers}
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
              <Col md={12} lg={12}>
                <h4>
                  Tip seguite{" "}
                  <small style={{ fontSize: "12px" }}>
                    (Distribuzione dell'esito delle tip che hai seguito)
                  </small>
                </h4>
              </Col>
              <Col>
                <Card md={12}>
                  <Card.Header>
                    <Card.Title as="h5">Vincita/Perdita</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Chart {...creamPieData} />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => ({ user: state.user, appState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Default);
