import React from 'react';
import { Row, Col, Card, Toast } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DatePicker from "react-datepicker";
import moment from 'moment';

import Aux from "../../hoc/_Aux";
import LineInterpolationChart from '../../Dashboard/Charts/LineInterpolationChart';

import * as actions from '../../store/actions';
import config from '../../store/config';
import TokenManager from '../../App/auth/TokenManager';
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
                <Row>
                    <Col xl={12} md={12}>
                        <Row>
                            <Col sm={12}>
                                <Card>
                                    <Card.Header>
                                        <Card.Title as="h5">Profitti nel tempo</Card.Title>
                                        <Card.Title as="h5">Dal:
                                            <DatePicker
                                                selected={this.state.startDate}
                                                onChange={(e) => this.handleStartDateChange(e)}
                                                className="form-control"
                                                minDate={moment().add(-32, "day").toDate()}
                                                maxDate={moment().add(-1, "day").toDate()}
                                                placeholderText="Seleziona una data"
                                            />
                                        </Card.Title>
                                        <Card.Title as="h5">al:
                                            <DatePicker
                                                selected={this.state.endDate}
                                                onChange={(e) => this.handleEndDateChange(e)}
                                                className="form-control"
                                                minDate={this.state.startDate}
                                                maxDate={new Date()}
                                                placeholderText="Seleziona una data"
                                            />
                                        </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <LineInterpolationChart data={this.state.flotData} />
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

const mapStateToProps = (state) => ({user: state.user});
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  });
export default connect(mapStateToProps, mapDispatchToProps)(Default);