import React from 'react';
import { Row, Col, Card, Toast } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import Chart from "react-apexcharts";

import Aux from "../../hoc/_Aux";
import LineInterpolationChart from '../Charts/LineInterpolationChart';

import * as actions from '../../store/actions';
import config from '../../store/config';
import TokenManager from '../../App/auth/TokenManager';
import satisfactionChart from './charts/pie';
// import FlotChart from '../../Dashboard/Charts/Flot';

class Default extends React.Component {
    state = {
        pools: [],
        playedEvents: [],
        startDate: moment().add(-1, "month").toDate(),
        endDate: moment().add(-1, "day").toDate(),
        flotData: [],
    }

    loadData() {
        let {startDate, endDate} = this.state;
        startDate = moment(startDate).format("YYYY-MM-DDTHH:mm:ss.SSS");
        endDate = moment(endDate).format("YYYY-MM-DDTHH:mm:ss.SSS");

        if (this.props.user.roleName === 'Subscriber') {
            this.loadSubscriperDashboard(startDate, endDate);
        } else {
            this.loadTipsterDashboard(startDate, endDate);
        }
    }

    notify = function(message) {
        Toast(message, {
            type: "info",
            position: "top-right"
        })
    }

    loadSubscriperDashboard(startDate, endDate) {
        this.loadDashboardWithUrl(`${config.API_URL}/pools/search/subscriberStats?start=${startDate}&end=${endDate}&subscriber=${this.props.user._links.self.href}`)
        .then(pools => {
            TokenManager.getInstance().getToken()
            .then(token => {
                return fetch(this.props.user._links.playedEvents.href.replace("{?projection}", "").replace("http://", "https://"), {
                    headers: {
                        "Content-Type": "application/json",
                        "X-AUTH": token
                    }
                })
            })
            .then(body => body.json())
            .then(events => {
                var chartData = [];
                pools.forEach(pool => {
                    chartData.push([`${pool.description} <br /> Bookmaker: <em>${pool.bookmaker}</em>`, pool.profit])
                });
                
                if (events._embedded.events.length === 0) {
                    this.notify("Non hai giocato nessun evento!");
                }

                this.setState({playedEvents: events._embedded.events, pools, flotData: [ {...this.state.flotData[0], data: chartData} ], flotOptions: {...this.state.flotOptions}});
            })
        })
    }

    loadTipsterDashboard(startDate, endDate) {
        this.loadDashboardWithUrl(`${config.API_URL}/pools/search/stats?start=${startDate}&end=${endDate}&author=${this.props.user._links.self.href}`)
        .then(pools => {
            var chartData = [];
            pools.forEach(pool => {
                chartData.push([`${pool.description} <br /> Bookmaker: <em>${pool.bookmaker}</em>`, pool.profit])
            });

            console.log(chartData);

            this.setState({pools, flotData: [ {...this.state.flotData[0], data: chartData} ], flotOptions: {...this.state.flotOptions}})
        });
    }

    async loadDashboardWithUrl(url) {
        let token = await TokenManager.getInstance().getToken()
        let body = await fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json", "X-Auth": token },
        });

        let response = await body.json();
        return response._embedded.pools;
    }

    calculateProfit() {
        return this.state.pools.reduce((accumulator, pool) => {
            return accumulator + pool.profit
        }, 0)
    }

    componentDidMount() {
        this.loadData()
    }

    handleStartDateChange(e) {
        this.setState({
            startDate: e
        });

        this.loadData();
    }

    handleEndDateChange(e) {
        this.setState({
            endDate: e
        });

        this.loadData();
    }

    render() {
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
                                            <h4 className="text-c-yellow">1540</h4>
                                        </Col>
                                        <Col sm={4} className="text-right">
                                            <i className="feather icon-bar-chart-2 f-28"/>
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
                                            <h4 className="text-c-yellow">25</h4>
                                        </Col>
                                        <Col sm={4} className="text-right">
                                            <i className="feather icon-bar-chart-2 f-28"/>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row md={12}>
                        <Col md={6}>
                            <Card md={12}>
                                <Card.Header>
                                    <Card.Title as="h5">Profitto mensile</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <LineInterpolationChart data={this.state.flotData} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card md={12}>
                                <Card.Header>
                                    <Card.Title as="h5">Profitto totale</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <LineInterpolationChart data={this.state.flotData} />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card md={12}>
                                <Card.Header>
                                    <Card.Title as="h5">Vincita/Perdita</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Chart {...satisfactionChart}/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Aux>
        );
    }
}

const mapStateToProps = (state) => ({user: state.user});
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  });
export default connect(mapStateToProps, mapDispatchToProps)(Default);