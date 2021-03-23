import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import { withRouter } from "react-router-dom";

import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import moment from 'moment';

import LineInterpolationChart from '../Charts/LineInterpolationChart';

import config from '../../store/config';
import TokenManager from '../../App/auth/TokenManager';
import Events from './events';

class SamplePage extends Component {
    state = {
        pools: [],
        playedEvents: [],
        startDate: moment().add(-1, "month").toDate(),
        endDate: moment().add(-1, "day").toDate(),
        formattedStartDate: moment(moment().add(-1, "month").toDate()).format("YYYY-MM-DDTHH:mm:ss.SSS"),
        formattedEndDate: moment(moment().add(-1, "day").toDate()).format("YYYY-MM-DDTHH:mm:ss.SSS"),
        statusData: [],
        totalProfit: 0
    }
    
    load(url, args = {}) {
        return TokenManager
            .getInstance()
            .getToken()
            .then(jwt => fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                    "X-Auth": jwt,
                },
                ...args
            }))
            .then((e) => e.json());
    }

    loadData() {
        this.getUserPools()
        .then(pools => {
            this.setState({
                pools,
                statusData: pools.map(p => p.profit)
            })
        })
    }

    getUserPools = () => this.load(`${config.API_URL}/pools/search/subscriberStats?start=${this.state.formattedStartDate}&end=${this.state.formattedEndDate}&subscriber=${this.props.user._links.self.href}`)
        .then(pools => pools?._embedded?.pools);

    componentDidMount() {
        this.loadData()
    }

    handleStartDateChange(e) {
        this.setState({
            startDate: e,
            formattedStartDate: moment(e).format("YYYY-MM-DDTHH:mm:ss.SSS")
        });

        this.loadData();
    }

    handleEndDateChange(e) {
        this.setState({
            endDate: e,
            formattedEndDate: moment(e).format("YYYY-MM-DDTHH:mm:ss.SSS")
        });

        this.loadData();
    }

    render() {
        return (
            <Aux>
                <Row>
                    <Col md={12}>
                        <Card>
                            <Card.Header>
                                <Row>
                                    <Col md={10}>
                                        <Card.Title as="h3">
                                            Bilancio
                                        </Card.Title>
                                    </Col>
                                    <Col sm={2}>
                                        <h6 className="text-muted m-b-0">Profitto Totale</h6>
                                        <h4 className="text-c-yellow">{this.props.user.totalProfit}%</h4>
                                    </Col>
                                </Row>
                            </Card.Header>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Card>
                            <Card.Header>
                                <Row>
                                    <Col md={7}/>
                                    <Col md={5}>
                                        <Card.Title as="h5">
                                            Dal: <DatePicker
                                                    selected={this.state.startDate}
                                                    onChange={(e) => this.handleStartDateChange(e)}
                                                    className="form-control"
                                                    minDate={moment().add(-32, "day").toDate()}
                                                    maxDate={moment().add(-1, "day").toDate()}
                                                    placeholderText="Seleziona una data"
                                                />
                                        </Card.Title>
                                        <Card.Title as="h5">
                                            al: <DatePicker
                                                    selected={this.state.endDate}
                                                    onChange={(e) => this.handleEndDateChange(e)}
                                                    className="form-control"
                                                    minDate={this.state.startDate}
                                                    maxDate={new Date()}
                                                    placeholderText="Seleziona una data"
                                                />
                                        </Card.Title>
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Card.Body>
                                <LineInterpolationChart data={this.state.statusData} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Events data={this.state.pools}/>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    loggedIn: state.loggedIn,
    registered: state.registered,
});
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(SamplePage)
);
