import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import { Row, Col } from 'reactstrap';
import ContentWrapper from '../../components/layout/ContentWrapper';
import config from '../../store/config'
import TokenManager from '../../components/auth/Token'
import { connect } from 'react-redux';
import moment from 'moment';
import PoolData from './PoolData';

import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import FlotChart from '../../template_components/Charts/Flot';
import ShadowCard from '../../components/layout/ShadowCard';
import Label from '../../components/layout/Label';

class DashboardV1 extends Component {

    state = {
        pools: [],
        startDate: moment().add(-1, "month"),
        endDate: moment().add(-1, "day"),
        flotData: [{
            "label": "Profitto nel tempo",
            "color": "#828282", //"#1e983b",
            "data": []
        }],
        flotOptions: {
            legend: {
                show: false
            },
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: true,
                    radius: 4,
                    symbol: "circle", 
                    symbolTriangle: (ctx, x, y) => {
                    ctx.beginPath();
                        ctx.moveTo(x-1.5, y-1.5);
                        ctx.lineTo(x+1.5, y-1.5);
                        ctx.lineTo(x, y+1.5);
                        ctx.closePath();
                        
                        // the outline
                        ctx.lineWidth = 3;
                        ctx.strokeStyle = '#ff0000';
                        ctx.stroke();
                        
                        // the fill color
                        ctx.fillStyle = "#FF0000";
                        ctx.fill();
                    }
                },
                spline: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 1
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc',
                markings: [{ xaxis: { from: 0 }, yaxis: { from: 0 }, color: "#00ff0005" }, { xaxis: { from: 0 }, yaxis: { from: 0, to: -1000000 }, color: "#ff000005" }]
            },
            tooltip: true,
            tooltipOpts: {
                content: (_, x, y) => y.toLocaleString("it-IT", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%"
            },
            xaxis: {
                mode: 'categories',
                min: 0
            },
            yaxis: {
                tickFormatter: v => v.toLocaleString("it-IT", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%"
            },
            shadowSize: 0
        },
    }

    componentDidMount() {
        this.loadData()
    }
    
    loadData() {
        let {startDate, endDate} = this.state;
        startDate = startDate.format("YYYY-MM-DDTHH:mm:ss.SSS");
        endDate = endDate.format("YYYY-MM-DDTHH:mm:ss.SSS");

        if (this.props.user.roleName === 'Subscriber') {
            this.loadSubscriperDashboard(startDate, endDate);
        } else {
            this.loadTipsterDashboard(startDate, endDate);
        }
    }

    loadSubscriperDashboard(startDate, endDate) {
        this.loadDashboardWithUrl(`${config.API_URL}/pools/search/subscriberStats?start=${startDate}&end=${endDate}&subscriber=${this.props.user._links.self.href}`)
    }

    loadTipsterDashboard(startDate, endDate) {
        this.loadDashboardWithUrl(`${config.API_URL}/pools/search/stats?start=${startDate}&end=${endDate}&author=${this.props.user._links.self.href}`);
    }

    loadDashboardWithUrl(url) {
        TokenManager.getInstance().getToken()
        .then(token => {
            return fetch(url, {
                method: "GET",
                headers: { "Content-Type": "application/json", "X-Auth": token },
            })
        })
        .then(result => result.json())
        .then(response => {
            let {pools} = response._embedded;

            var chartData = [];

            pools.forEach(pool => {
                chartData.push([`${pool.description} <br /> Bookmaker: <em>${pool.bookmaker}</em>`, pool.profit])
            });

            this.setState({pools, flotData: [ {...this.state.flotData[0], data: chartData} ], flotOptions: {...this.state.flotOptions}})
        })
    }

    calculateProfit() {
        return this.state.pools.reduce((accumulator, pool) => {
            return accumulator + pool.profit
        }, 0)
    }

    render() {
        let totalPorfit = this.calculateProfit();

        return (
            <ContentWrapper>
                <Row className="content-heading" style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Col xl={2} lg={3} md={3} sm={12} >Dashboard
                        <Label>Panoramica dei tuoi tip</Label>
                    </Col>
                    <Col xl={8} lg={7} md={9} sm={12} style={{justifyContent: 'flex-end', flex: 'row'}}>
                        <Row style={{justifyContent: 'flex-end', marginRight: 10}}>
                            <Col xl={ 3 } md={ 4 }>
                                <div className="card flex-row align-items-center align-items-stretch border-0" style={{margin: 0, fontSize: "1rem"}}>
                                    <div className={"col-2 d-flex align-items-center " + (totalPorfit >= 0 ? "bg-success-dark" : "bg-danger-dark") + " justify-content-center rounded-left"}>
                                        {totalPorfit === 0
                                        ? <em className="icon-graph"></em>
                                        : totalPorfit > 0
                                        ? <em className="icon-arrow-up"></em>
                                        : <em className="icon-arrow-down"></em> }
                                    </div>
                                    <div className={"col-10 " + (totalPorfit >= 0 ? "bg-success" : "bg-danger") +  " rounded-right"} style={{paddingTop: "0.4rem", paddingBottom: "0.3rem"}}>
                                        <div className="h3 mt-0" style={{margin: 0, paddingTop: 5, paddingBottom: 5, textAlign: 'right', fontSize: '1.3rem'}}>
                                            {totalPorfit.toLocaleString("it-IT", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%"}
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={6} md={8} style={{padding: "0 5px"}}>
                                <div className="card flex-row align-items-center align-items-stretch border-0" style={{margin: 0, fontSize: '0.839rem'}}>
                                    <div className={"col-6 d-flex align-items-center bg-gray justify-content-center rounded-left"}>
                                        <Datetime closeOnSelect={true}  inputProps={{className: 'form-control'}} onChange={startDate => this.setState({startDate}, this.loadData)} value={this.state.startDate} />
                                    </div>
                                    <div className={"col-6 bg-gray-lighter rounded-right"} style={{paddingTop: "5px", paddingBottom: "5px"}}>
                                        <Datetime closeOnSelect={true} inputProps={{className: 'form-control'}} onChange={endDate => this.setState({endDate}, this.loadData)} value={this.state.endDate} />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                { /* START cards box */ }
                <Row className={"mb-3"}>
                    <Col xl={ 12 }>
                        { /* START card */ }
                        <ShadowCard className="card bg-light mb-3">
                            <div className="card-header">
                                <Label>Profitti nel tempo</Label>
                            </div>
                            <div className="card-body">
                                <FlotChart data={this.state.flotData} options={this.state.flotOptions} height="250px" />
                            </div>
                        </ShadowCard>
                        { /* END widget */ }
                    </Col>
                </Row>
                { /* END cards box */ }
                <Row style={{justifyContent: 'center'}}>
                    <Col lg={12} md={12} >
                        <PoolData pools={this.state.pools} endDate={this.state.endDate} ></PoolData>
                    </Col>
                </Row>
            </ContentWrapper>
            );

    }

}

const mapStateToProps = (state) => ({user: state.app.user});
export default withNamespaces('translations')(connect(mapStateToProps)(DashboardV1));
