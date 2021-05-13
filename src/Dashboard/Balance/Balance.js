import React, { Component } from "react";
import { Row, Col, Card, Button, ButtonGroup } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import { withRouter } from "react-router-dom";

import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import DatePicker, {registerLocale} from "react-datepicker";
import moment from 'moment';
import {it} from 'date-fns/esm/locale'
import LineInterpolationChart from '../Charts/LineInterpolationChart';
import config from '../../store/config';
import TokenManager from '../../App/auth/TokenManager';
import Events from './events';
import LocaleNumber from "../../App/components/LocaleNumber";

registerLocale('it', it);

class Balance extends Component {
    state = {
        pools: [],
        playedEvents: [],
        startDate: moment().add(-1, "month").toDate(),
        endDate: moment().toDate(),
        formattedStartDate: moment(moment().add(-1, "month").toDate()).format("YYYY-MM-DDTHH:mm:ss.SSS"),
        formattedEndDate: moment(moment().toDate()).format("YYYY-MM-DDTHH:mm:ss.SSS"),
        statusData: [],
        cumulativeData: [],
        type: 'cumulative',
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
            var balance = [];
            
            pools.reduce((previous, current, index, array) => {
                if (!previous) {
                    balance.push({y: current.profit, x: moment(current.updatedOn).format("DD MMM YYYY")})
                    return {y: current.profit, x: moment(current.updatedOn).format("DD MMM YYYY")}
                } else {
                    balance.push({y: previous.y + current.profit, x: moment(current.updatedOn).format("DD MMM YYYY")})
                    return {y: previous.y + current.profit, x: moment(current.updatedOn).format("DD MMM YYYY")}
                }
            }, {y: pools[0].profit, x: moment(pools[0].updatedOn).format("DD MMM YYYY")})

            this.setState({
                pools,
                statusData: pools.map(p => ({y: p.profit.toFixed(2), x: moment(p.updatedOn).format("DD MMM YYYY")})),
                cumulativeData: balance.map(p => ({y: p.y.toFixed(2), x: p.x}))
            })
        })
    }

    getUserPools = () => this.load(`${config.API_URL}/pools/search/subscriberStats?start=${this.state.formattedStartDate}&end=${this.state.formattedEndDate}&subscriber=${this.props.user._links.self.href}&page=0&size=1000`)
        .then(pools => pools?._embedded?.pools);

    componentDidMount() {
        this.loadData()
    }

    handleStartDateChange(e) {
        this.setState({
            startDate: e,
            formattedStartDate: moment(e).format("YYYY-MM-DDTHH:mm:ss.SSS")
        }, this.loadData);
    }

    handleEndDateChange(e) {
        this.setState({
            endDate: e,
            formattedEndDate: moment(e).format("YYYY-MM-DDTHH:mm:ss.SSS")
        }, this.loadData);
    }

    loadDataFor(period) {
        switch (period) {
            case "24H":
                this.setState({
                    startDate: moment().add(-1, "days").toDate(),
                    endDate: moment().toDate(),
                    formattedStartDate: moment().add("-1", "days").format("YYYY-MM-DDTHH:mm:ss.SSS"),
                    formattedEndDate: moment().format("YYYY-MM-DDTHH:mm:ss.SSS")
                }, this.loadData);
                break;
            case "1W":
                this.setState({
                    startDate: moment().add(-7, "days").toDate(),
                    endDate: moment().toDate(),
                    formattedStartDate: moment().add("-7", "days").format("YYYY-MM-DDTHH:mm:ss.SSS"),
                    formattedEndDate: moment().format("YYYY-MM-DDTHH:mm:ss.SSS")
                }, this.loadData);
                break;
            case "1Y":
                this.setState({
                    startDate: moment().add(-1, "year").toDate(),
                    endDate: moment().toDate(),
                    formattedStartDate: moment().add("-1", "year").format("YYYY-MM-DDTHH:mm:ss.SSS"),
                    formattedEndDate: moment().format("YYYY-MM-DDTHH:mm:ss.SSS")
                }, this.loadData);
                break;
            case "YTD":
                this.setState({
                    startDate: moment().set("month", 0).set("dayOfYear", 1).toDate(),
                    endDate: moment().toDate(),
                    formattedStartDate: moment().set("month", 0).set("dayOfYear", 1).format("YYYY-MM-DDTHH:mm:ss.SSS"),
                    formattedEndDate: moment().format("YYYY-MM-DDTHH:mm:ss.SSS")
                }, this.loadData);
                break;
            default:
            case "1M":
                this.setState({
                    startDate: moment().add(-1, "months").toDate(),
                    endDate: moment().toDate(),
                    formattedStartDate: moment().add("-1", "months").format("YYYY-MM-DDTHH:mm:ss.SSS"),
                    formattedEndDate: moment().format("YYYY-MM-DDTHH:mm:ss.SSS")
                }, this.loadData);
                break;
        }
    }

    changeType(type) {
        switch(type) {
            case 'cumulative':
                this.setState({type: type});
                break;
            case 'day2day':
                this.setState({type: type});
                break;
        }
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
                                        <h4 className="text-c-yellow"> <LocaleNumber amount={this.props.user.totalProfit} symbol={"%"}></LocaleNumber></h4>
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
                                    <Col md={7}>
                                    <ButtonGroup aria-label="Time" size={"sm"} className={"btn-glow-light"}>
                                        <Button variant="light" onClick={() => this.loadDataFor("24H")}>24H</Button>
                                        <Button variant="light" onClick={() => this.loadDataFor("1W")}>1W</Button>
                                        <Button variant="light" onClick={() => this.loadDataFor("1M")}>1M</Button>
                                        <Button variant="light" onClick={() => this.loadDataFor("1Y")}>1Y</Button>
                                        <Button variant="light" onClick={() => this.loadDataFor("YTD")} >YTD</Button>
                                    </ButtonGroup>
                                    <ButtonGroup aria-label="Type" size={"sm"} className={"btn-glow-light"}>
                                        <Button variant="light" onClick={() => this.changeType("cumulative")}>Cumulativo</Button>
                                        <Button variant="light" onClick={() => this.changeType("day2day")}>Giornaliero</Button>
                                    </ButtonGroup>
                                    </Col>
                                    <Col md={5} style={{flexDirection: "row", justifyContent: "flex-start"}}>
                                        <div style={{display: 'inline-block'}}>
                                            Dal: <DatePicker
                                                    locale={'it'}
                                                    dateFormat={"dd/MM/yyyy"}
                                                    selected={this.state.startDate}
                                                    onChange={(e) => this.handleStartDateChange(e)}
                                                    className="form-control"
                                                    //minDate={moment().add(-32, "day").toDate()}
                                                    maxDate={moment().add(-1, "day").toDate()}
                                                    placeholderText="Seleziona una data"
                                                    wrapperClassName={"wid-110"}
                                                />
                                        </div>
                                        <div style={{display: 'inline-block'}}>
                                            al: <DatePicker
                                                    locale={'it'}
                                                    dateFormat={"dd/MM/yyyy"}
                                                    selected={this.state.endDate}
                                                    onChange={(e) => this.handleEndDateChange(e)}
                                                    className="form-control"
                                                    minDate={this.state.startDate}
                                                    maxDate={new Date()}
                                                    placeholderText="Seleziona una data"
                                                    wrapperClassName={"wid-110"}
                                                />
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Card.Body>
                                <LineInterpolationChart data={this.state.type === 'cumulative' ? this.state.cumulativeData : this.state.statusData} />
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
    connect(mapStateToProps, mapDispatchToProps)(Balance)
);
