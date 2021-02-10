import React from 'react';
import Chart from "react-apexcharts";
import Rating from 'react-rating';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {Row, Col, Card, Dropdown, Table, ProgressBar} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

import amountProcessed from './chart/amount-processed';
import amountSpent from './chart/amount-spent';
import profitProcessed from './chart/profit-processed';

import secEcommerceChartLine from './chart/sec-ecommerce-chart-line';
import secEcommerceChartBar from './chart/sec-ecommerce-chart-bar';
import secEcommerceChartBar1 from './chart/sec-ecommerce-chart-bar-1';

import saleIncome from './chart/sale-income';
import rentIncome from './chart/rent-income';
import incomeAnalysis from './chart/income-analysis';

import saleReport1 from './chart/sale-report-1';
import saleReport2 from './chart/sale-report-2';
import saleReport3 from './chart/sale-report-3';
import saleReport4 from './chart/sale-report-4';

import saleChart1 from './chart/sale-chart-1';
import thisMonthBar from './chart/this-month-bar';

import powerCard1 from './chart/power-card-1';
import powerCard2 from './chart/power-card-2';
import powerCard3 from './chart/power-card-3';

import revenueMap from './chart/revenue-map';
import projectEarning from './chart/project-earning';

import seoAnalytics1 from './chart/seo-analytics-1';
import seoAnalytics2 from './chart/seo-analytics-2';
import seoAnalytics3 from './chart/seo-analytics-3';
import seoAnalytics4 from './chart/seo-analytics-4';

import totalValueGraph1 from './chart/total-value-gragh-1';
import totalValueGraph2 from './chart/total-value-gragh-2';
import totalValueGraph3 from './chart/total-value-gragh-3';
import totalValueGraph4 from './chart/total-value-gragh-4';

import monthlyProfilt1 from './chart/monthly-profit-1';
import monthlyProfilt2 from './chart/monthly-profit-2';
import monthlyProfilt3 from './chart/monthly-profit-3';

import seoChart1 from './chart/seo-chart-1';
import seoChart2 from './chart/seo-chart-2';
import seoChart3 from './chart/seo-chart-3';

import clientMap1 from './chart/client-map-1';
import clientMap2 from './chart/client-map-2';
import clientMap3 from './chart/client-map-3';

import totalLead from './chart/total-lead';
import totalVendor from './chart/total-vendor';
import totalInvoice from './chart/total-invoice';

import completedTicketChart from './chart/completed-ticket-chart-1';
import transactionChart1 from './chart/transactions-chart-1';
import transactionChart2 from './chart/transactions-chart-2';

import percentageChart from './chart/percentage-chart';

import userAnalytics from './chart/user-analytics';
import sessionAnalytics from './chart/session-analytics';
import pageViewAnalytics from './chart/page-view-analytics';
import pageSessionAnalytics from './chart/page-session-analytics';
import avgSessionAnalytics from './chart/avg-session-analytics';
import bounceRateAnalytics from './chart/bounce-rate-analytics';

import timeUserChart from './chart/time-user-chart';
import horizontalBarChart from './chart/horizontal-bar-chart';
import conversionsBarChart from './chart/conversions-bar';
import siteLineChart from './chart/site-line-chart';

import satisfactionChart from './chart/satisfaction-chart';
import trafficChart from './chart/traffic-chart';
import timeChart from './chart/time-chart';

import conversionsChart from './chart/conversions-chart';
import saleChart from './chart/sale-chart';

import revenuChart from './chart/revenu-chart';
import marketChart from './chart/market-chart';
import typeChart from './chart/type-chart';

import trafficMonitorChart from './chart/traffic-monitor-chart';

import supportChart from './chart/support-card';
import avgChart1 from './chart/avrage-chart-1';
import avgChart2 from './chart/avrage-chart-2';
import avgChart3 from './chart/avrage-chart-3';
import avgChart4 from './chart/avrage-chart-4';

import avatar2 from '../../assets/images/user/avatar-2.jpg'
import avatar3 from '../../assets/images/user/avatar-3.jpg'
import avatar4 from '../../assets/images/user/avatar-4.jpg'

class WdgetChart extends React.Component {
    mainInterval = undefined;
    subInterval = undefined;
    state = {
        blockRating: 10,
        lastDate: 0,
        lineChart2: {},
        data: []
    };

    UNSAFE_componentWillMount() {
        this.getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {min: 10, max: 90});
        this.setState(prevState => ({
            ...prevState,
            lineChart2: {
                height: 225,
                type: 'area',
                options: {
                    chart: {
                        animations: {
                            enabled: true,
                            easing: 'linear',
                            dynamicAnimation: {
                                speed: 2000
                            }
                        },
                        toolbar: {
                            show: false
                        },
                        zoom: {
                            enabled: false
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                    colors: ['#ff5252'],
                    fill: {
                        type: 'gradient',
                        gradient: {
                            shadeIntensity: 1,
                            type: 'horizontal',
                            opacityFrom: 0.8,
                            opacityTo: 0,
                            stops: [0, 100]
                        }
                    },
                    markers: {
                        size: 0
                    },
                    xaxis: {
                        type: 'datetime',
                        range: 777600000,
                    },
                    yaxis: {
                        max: 100
                    },
                    legend: {
                        show: false
                    },
                },
                series: [{
                    name: 'active Users :',
                    data: this.state.data
                }]
            }
        }));

        this.mainInterval = setInterval(() => {
            this.getNewSeries(this.state.lastDate, {min: 10, max: 90});
            this.setState(prevState => ({
                ...prevState,
                lineChart2: {
                    ...prevState.lineChart2,
                    series: [{
                        ...prevState.lineChart2.series,
                        data: this.state.data
                    }]
                }
            }));
        }, 2000);

        this.subInterval = setInterval(() => {
            this.resetData();
            this.setState(prevState => ({
                ...prevState,
                lineChart2: {
                    ...prevState.lineChart2,
                    series: [{
                        ...prevState.lineChart2.series,
                        data: this.state.data
                    }]
                }
            }));
        }, 60000);
    }

    componentWillUnmount() {
        clearInterval(this.mainInterval);
        clearInterval(this.subInterval);
    }

    getDayWiseTimeSeries(baseval, count, yrange) {
        let i = 0;
        let newData = [];
        let newDate;
        while (i < count) {
            const x = baseval;
            const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            newData = [...newData, {x, y}];
            newDate = baseval;
            baseval += 86400000;
            i++;
        }

        this.setState({
            data: newData,
            lastDate: newDate
        });
    };

    resetData() {
        this.setState(prevState => ({
            ...prevState,
            data: prevState.data.slice(prevState.data.length - 10, prevState.data.length)
        }));
    }

    getNewSeries(baseval, yrange) {
        const newDate = baseval + 86400000;
        const newData = {
            x: newDate,
            y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        };

        this.setState(prevState => ({
            ...prevState,
            data: [...prevState.data, newData],
            lastDate: newDate
        }));
    }

    render() {

        return (
            <Aux>
                <Row>
                    <Col md={6} xl={4}>
                        <Card className="amount-card overflow-hidden">
                            <Card.Body>
                                <h2 className="f-w-400">$23,567</h2>
                                <p className="text-muted f-w-600 f-16"><span className="text-c-blue">Amount</span> Processed</p>
                            </Card.Body>
                            <Chart {...amountProcessed} />
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card className="amount-card overflow-hidden">
                            <Card.Body>
                                <h2 className="f-w-400">$14,552</h2>
                                <p className="text-muted f-w-600 f-16"><span className="text-c-green">Amount</span> Spent</p>
                            </Card.Body>
                            <Chart {...amountSpent} />
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card className="amount-card overflow-hidden">
                            <Card.Body>
                                <h2 className="f-w-400">$31,156</h2>
                                <p className="text-muted f-w-600 f-16"><span className="text-c-yellow">Profit</span> Processed</p>
                            </Card.Body>
                            <Chart {...profitProcessed} />
                        </Card>
                    </Col>

                    <Col md={12} xl={6}>
                        <Card className="overflow-hidden">
                            <Card.Body className="bg-c-green pb-0">
                                <Row className="text-white">
                                    <Col sm='auto'>
                                        <h4 className="m-b-5 text-white">$654</h4>
                                        <h6 className="text-white">+1.65(2.56%)</h6>
                                    </Col>
                                    <Col className="text-right">
                                        <h6 className="text-white">Friday</h6>
                                    </Col>
                                </Row>
                                <Chart {...secEcommerceChartLine} />
                                <Row className="justify-content-center">
                                    <Col sm={8}>
                                        <Chart {...secEcommerceChartBar} />
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer>
                                <h4>$2654.00</h4>
                                <p className="text-muted">Sales in Nov.</p>
                                <Row>
                                    <Col>
                                        <p className="text-muted m-b-5">From Market</p>
                                        <h6>$1860.00</h6>
                                    </Col>
                                    <Col>
                                        <p className="text-muted m-b-5">Referral</p>
                                        <h6>$500.00</h6>
                                    </Col>
                                    <Col>
                                        <p className="text-muted m-b-5">Affiliate</p>
                                        <h6>$294.00</h6>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={12} xl={6}>
                        <Card>
                            <Card.Body>
                                <Row className="justify-content-center text-center">
                                    <Col sm={5}>
                                        <h6 className="text-muted">Real-Time Visits</h6>
                                        <h3>53k</h3>
                                    </Col>
                                    <Col sm={5}>
                                        <h6 className="text-muted">Returning Visitors</h6>
                                        <h3>10k</h3>
                                    </Col>
                                </Row>
                                <Chart {...secEcommerceChartBar1} />
                                <Row className="justify-content-center text-center b-t-default m-t-15">
                                    <Col sm={3} className="b-r-default">
                                        <h5>85%</h5>
                                        <p className="text-muted m-b-0">Satisfied</p>
                                    </Col>
                                    <Col sm={3} className="b-r-default">
                                        <h5>6%</h5>
                                        <p className="text-muted m-b-0">Unsatisfied</p>
                                    </Col>
                                    <Col sm={3}>
                                        <h5>9%</h5>
                                        <p className="text-muted m-b-0">NA</p>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={4}>
                        <Card className="overflow-hidden">
                            <Card.Body>
                                <h5 className="mb-3">Sale Income</h5>
                                <Row>
                                    <Col>
                                        <p className="text-muted m-b-5">Overall</p>
                                        <h6>68.52%</h6>
                                    </Col>
                                    <Col>
                                        <p className="text-muted m-b-5">Monthly</p>
                                        <h6>28.90%</h6>
                                    </Col>
                                    <Col>
                                        <p className="text-muted m-b-5">Day</p>
                                        <h6>13.50%</h6>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Chart {...saleIncome} />
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card className="overflow-hidden">
                            <Card.Body>
                                <h5 className="mb-3">Rent Income</h5>
                                <Row>
                                    <Col>
                                        <p className="text-muted m-b-5">Overall</p>
                                        <h6>68.52%</h6>
                                    </Col>
                                    <Col>
                                        <p className="text-muted m-b-5">Monthly</p>
                                        <h6>28.90%</h6>
                                    </Col>
                                    <Col>
                                        <p className="text-muted m-b-5">Day</p>
                                        <h6>13.50%</h6>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Chart {...rentIncome} />
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card className="overflow-hidden">
                            <Card.Body>
                                <h5 className="mb-3">Income Analysis</h5>
                                <Row>
                                    <Col>
                                        <p className="text-muted m-b-5">Overall</p>
                                        <h6>68.52%</h6>
                                    </Col>
                                    <Col>
                                        <p className="text-muted m-b-5">Monthly</p>
                                        <h6>28.90%</h6>
                                    </Col>
                                    <Col>
                                        <p className="text-muted m-b-5">Day</p>
                                        <h6>13.50%</h6>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Chart {...incomeAnalysis} />
                        </Card>
                    </Col>

                    <Col sm={12}>
                        <Card>
                            <Card.Body className='text-center'>
                                <Row>
                                    <Col md={6} xl={3} className="m-t-10 m-b-10">
                                        <h6>Daily Sales</h6>
                                        <Row className="justify-content-center">
                                            <Col sm={8}>
                                                <Chart {...saleReport1} />
                                            </Col>
                                        </Row>
                                        <h5 className="m-t-10 m-b-0"><i className="fa fa-caret-up text-c-green m-r-10"/>$16524</h5>
                                    </Col>
                                    <Col md={6} xl={3} className="m-t-10 m-b-10">
                                        <h6>Weekly Sales</h6>
                                        <Row className="justify-content-center">
                                            <Col sm={8}>
                                                <Chart {...saleReport2} />
                                            </Col>
                                        </Row>
                                        <h5 className="m-t-10 m-b-0"><i className="fa fa-caret-up text-c-green m-r-10"/>$16524</h5>
                                    </Col>
                                    <Col md={6} xl={3} className="m-t-10 m-b-10">
                                        <h6>Monthly Sales</h6>
                                        <Row className="justify-content-center">
                                            <Col sm={8}>
                                                <Chart {...saleReport3} />
                                            </Col>
                                        </Row>
                                        <h5 className="m-t-10 m-b-0"><i className="fa fa-caret-up text-c-green m-r-10"/>$16524</h5>
                                    </Col>
                                    <Col md={6} xl={3} className="m-t-10 m-b-10">
                                        <h6>Yearly Sales</h6>
                                        <Row className="justify-content-center">
                                            <Col sm={8}>
                                                <Chart {...saleReport4} />
                                            </Col>
                                        </Row>
                                        <h5 className="m-t-10 m-b-0"><i className="fa fa-caret-up text-c-green m-r-10"/>$16524</h5>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={4}>
                        <Card className="overflow-hidden">
                            <Card.Body className="bg-c-red text-white">
                                <h6 className="text-white">Sales Per Day <span className="float-right"><i className="feather icon-trending-down m-r-15"/>3%</span></h6>
                                <Chart {...saleChart1} />
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Row>
                                    <Col className="b-r-default">
                                        <h4>$4230</h4>
                                        <p className="text-muted m-b-0">Total Revenue</p>
                                    </Col>
                                    <Col>
                                        <h4>321</h4>
                                        <p className="text-muted m-b-0">Today Sales</p>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <h4>$256.23</h4>
                                        <p className="text-muted">This Month</p>
                                    </Col>
                                    <Col sm='auto'>
                                        <label className="badge badge-light-success">+20%</label>
                                    </Col>
                                </Row>
                                <Chart {...thisMonthBar} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card className="overflow-hidden">
                            <Card.Body className="bg-c-blue text-white">
                                <h6 className="text-white">Sales Per Day <span className="float-right"><i className="feather icon-trending-up m-r-15"/>12%</span></h6>
                                <Chart {...saleChart1} />
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Row>
                                    <Col className="b-r-default">
                                        <h4>1695</h4>
                                        <p className="text-muted m-b-0">Monthly Orders</p>
                                    </Col>
                                    <Col>
                                        <h4>52</h4>
                                        <p className="text-muted m-b-0">Today Orders</p>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Col>

                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <h5 className="mb-3">Power</h5>
                                <h2>2789<span className="text-muted m-l-5 f-14">kw</span></h2>
                                <Chart {...powerCard1} />
                                <Row>
                                    <Col sm='auto'>
                                        <div className="map-area">
                                            <h6 className="m-0">2876 <span> kw</span></h6>
                                            <p className="text-muted m-0">month</p>
                                        </div>
                                    </Col>
                                    <Col sm='auto'>
                                        <div className="map-area">
                                            <h6 className="m-0">234 <span> kw</span></h6>
                                            <p className="text-muted m-0">Today</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <h5 className="mb-3">Water</h5>
                                <h2>7.3<span className="text-muted m-l-10 f-14">m3</span></h2>
                                <Chart {...powerCard2} />
                                <Row>
                                    <Col sm='auto'>
                                        <div className="map-area">
                                            <h6 className="m-0">4.5 <span> m3</span></h6>
                                            <p className="text-muted m-0">month</p>
                                        </div>
                                    </Col>
                                    <Col sm='auto'>
                                        <div className="map-area">
                                            <h6 className="m-0">0.5 <span> m3</span></h6>
                                            <p className="text-muted m-0">Today</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <h5 className="mb-3">Temperature</h5>
                                <h2>7.3<span className="text-muted m-l-10 f-14">deg</span></h2>
                                <Chart {...powerCard3} />
                                <Row>
                                    <Col sm='auto'>
                                        <div className="map-area">
                                            <h6 className="m-0">4.5 <span> deg</span></h6>
                                            <p className="text-muted m-0">month</p>
                                        </div>
                                    </Col>
                                    <Col sm='auto'>
                                        <div className="map-area">
                                            <h6 className="m-0">0.5 <span> deg</span></h6>
                                            <p className="text-muted m-0">Today</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <h5>Revenue</h5>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...revenueMap} />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={12} xl={4}>
                        <Card className="overflow-hidden">
                            <Card.Body className="bg-c-blue">
                                <Chart {...projectEarning} />
                            </Card.Body>
                            <Card.Footer>
                                <h6 className="text-muted m-b-30 m-t-15">Total completed project and earning</h6>
                                <Row className="text-center">
                                    <Col className="border-right">
                                        <h6 className="text-muted m-b-10">Completed Projects</h6>
                                        <h3 className="m-b-0">175</h3>
                                    </Col>
                                    <Col>
                                        <h6 className="text-muted m-b-10">Total Earnings</h6>
                                        <h3 className="m-b-0">76.6M</h3>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={12} xl={8}>
                        <Card>
                            <Card.Header>
                                <h5>Realtime Data of Visits</h5>
                            </Card.Header>
                            <Card.Body>
                                <Row className="mb-2">
                                    <Col sm='auto'>
                                        <h4 className="m-0">563,756<i className="feather icon-arrow-up text-c-green"/></h4>
                                        <span>Visits per Day</span>
                                    </Col>
                                    <Col sm='auto'>
                                        <h4 className="m-0">78,569<i className="feather icon-arrow-down text-c-red"/></h4>
                                        <span>Total Visitors</span>
                                    </Col>
                                    <Col>
                                        <h4 className="m-0">40.05%<i className="feather icon-arrow-up text-c-green"/></h4>
                                        <span>Bounce Rate</span>
                                    </Col>
                                </Row>
                                <Chart {...this.state.lineChart2}/>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={3}>
                        <Card>
                            <Card.Body>
                                <h3>20500</h3>
                                <p className="text-muted">Site Analysis</p>
                                <Chart {...seoAnalytics1} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card>
                            <Card.Body>
                                <h3>20500</h3>
                                <p className="text-muted">Total Sales</p>
                                <Chart {...seoAnalytics2} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card>
                            <Card.Body>
                                <h3>28000</h3>
                                <p className="text-muted">Total Visits</p>
                                <Chart {...seoAnalytics3} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card>
                            <Card.Body>
                                <h3>59600</h3>
                                <p className="text-muted">Total Usage</p>
                                <Chart {...seoAnalytics4} />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={3}>
                        <Card className="bg-c-blue total-card">
                            <Card.Body>
                                <span className="badge badge-light float-right">12%</span>
                                <div className="text-left">
                                    <h4>4000</h4>
                                    <p className="m-0">Total Sales</p>
                                </div>
                            </Card.Body>
                            <Chart {...totalValueGraph1} />
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className="bg-c-red total-card">
                            <Card.Body>
                                <span className="badge badge-light float-right">12%</span>
                                <div className="text-left">
                                    <h4>4000</h4>
                                    <p className="m-0">Total Comment</p>
                                </div>
                            </Card.Body>
                            <Chart {...totalValueGraph2} />
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className="bg-c-green total-card">
                            <Card.Body>
                                <span className="badge badge-light float-right">12%</span>
                                <div className="text-left">
                                    <h4>4000</h4>
                                    <p className="m-0">Total Status</p>
                                </div>
                            </Card.Body>
                            <Chart {...totalValueGraph3} />
                        </Card>
                    </Col>
                    <Col md={6} xl={3}>
                        <Card className="bg-c-yellow total-card">
                            <Card.Body>
                                <span className="badge badge-light float-right">12%</span>
                                <div className="text-left">
                                    <h4>4000</h4>
                                    <p className="m-0">Total Visitors</p>
                                </div>
                            </Card.Body>
                            <Chart {...totalValueGraph4} />
                        </Card>
                    </Col>

                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <h2 className="text-center f-w-400 ">$45,567</h2>
                                <p className="text-center text-muted ">Monthly Profit</p>
                                <Chart {...monthlyProfilt1} />
                                <div className="m-t-20">
                                    <Row>
                                        <Col className="text-center ">
                                            <h6 className="f-20 f-w-400">$6,234</h6>
                                            <p className="text-muted f-14 m-b-0">Today</p>
                                        </Col>
                                        <Col className="text-center ">
                                            <h6 className="f-20 f-w-400">$4,387</h6>
                                            <p className="text-muted f-14 m-b-0">Yesterday</p>
                                        </Col>
                                    </Row>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <h2 className="text-center f-w-400 ">2,413</h2>
                                <p className="text-center text-muted ">Total Sales</p>
                                <Chart {...monthlyProfilt2} />
                                <div className="m-t-20">
                                    <Row>
                                        <Col className="text-center ">
                                            <h6 className="f-20 f-w-400">1578</h6>
                                            <p className="text-muted f-14 m-b-0">Today</p>
                                        </Col>
                                        <Col className="text-center ">
                                            <h6 className="f-20 f-w-400">1028</h6>
                                            <p className="text-muted f-14 m-b-0">Yesterday</p>
                                        </Col>
                                    </Row>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <h2 className="text-center f-w-400 ">8,421</h2>
                                <p className="text-center text-muted ">Unique Visitors</p>
                                <Chart {...monthlyProfilt3} />
                                <div className="m-t-20">
                                    <Row>
                                        <Col className="text-center ">
                                            <h6 className="f-20 f-w-400">2,849</h6>
                                            <p className="text-muted f-14 m-b-0">Today</p>
                                        </Col>
                                        <Col className="text-center ">
                                            <h6 className="f-20 f-w-400">3,587</h6>
                                            <p className="text-muted f-14 m-b-0">Yesterday</p>
                                        </Col>
                                    </Row>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center">
                                    <Col>
                                        <h3>$16,756</h3>
                                        <h6 className="text-muted m-b-0">Visits<i className="fa fa-caret-down text-c-red m-l-10"></i></h6>
                                    </Col>
                                    <Col>
                                        <Chart {...seoChart1} />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center">
                                    <Col>
                                        <h3>49.54%</h3>
                                        <h6 className="text-muted m-b-0">Bounce Rate<i className="fa fa-caret-up text-c-green m-l-10"></i></h6>
                                    </Col>
                                    <Col>
                                        <Chart {...seoChart2} />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center">
                                    <Col>
                                        <h3>1,62,564</h3>
                                        <h6 className="text-muted m-b-0">Products<i className="fa fa-caret-down text-c-red m-l-10"></i></h6>
                                    </Col>
                                    <Col>
                                        <Chart {...seoChart3} />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={4}>
                        <Card className="client-map">
                            <Card.Body>
                                <div className="client-detail">
                                    <div className="client-profile">
                                        <img src={avatar2} alt=""/>
                                    </div>
                                    <div className="client-contain">
                                        <h5>Gregory Johnes</h5>
                                        <a href="#!" className="text-muted">gregory@demo.com</a>
                                        <p className="text-muted m-0 p-t-10">Product Manager</p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="client-card-box">
                                        <Row>
                                            <Col className="text-center client-border p-10">
                                                <p className="text-muted m-0">Invites</p>
                                                <span className="text-c-blue f-20 f-w-600">345</span>
                                            </Col>
                                            <Col className="text-center p-10">
                                                <p className="text-muted m-0">Pending</p>
                                                <span className="text-c-blue f-20 f-w-600">12</span>
                                            </Col>
                                        </Row>
                                        <Col sm={12} className="client-border-card p-t-10">
                                            <p>Overall Activity</p>
                                        </Col>
                                        <Chart {...clientMap1} />
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card className="client-map">
                            <Card.Body>
                                <div className="client-detail">
                                    <div className="client-profile">
                                        <img src={avatar4} alt=""/>
                                    </div>
                                    <div className="client-contain">
                                        <h5>Gregory Johnes</h5>
                                        <a href="#!" className="text-muted">gregory@demo.com</a>
                                        <p className="text-muted m-0 p-t-10">Product Manager</p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="client-card-box">
                                        <Row>
                                            <Col className="text-center client-border p-10">
                                                <p className="text-muted m-0">Invites</p>
                                                <span className="text-c-red f-20 f-w-600">845</span>
                                            </Col>
                                            <Col className="text-center p-10">
                                                <p className="text-muted m-0">Pending</p>
                                                <span className="text-c-red f-20 f-w-600">02</span>
                                            </Col>
                                        </Row>
                                        <Col sm={12} className="client-border-card p-t-10">
                                            <p>Overall Activity</p>
                                        </Col>
                                        <Chart {...clientMap2} />
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card className="client-map">
                            <Card.Body>
                                <div className="client-detail">
                                    <div className="client-profile">
                                        <img src={avatar3} alt=""/>
                                    </div>
                                    <div className="client-contain">
                                        <h5>Gregory Johnes</h5>
                                        <a href="#!" className="text-muted">gregory@demo.com</a>
                                        <p className="text-muted m-0 p-t-10">Product Manager</p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="client-card-box">
                                        <Row>
                                            <Col className="text-center client-border p-10">
                                                <p className="text-muted m-0">Invites</p>
                                                <span className="text-c-green f-20 f-w-600">812</span>
                                            </Col>
                                            <Col className="text-center p-10">
                                                <p className="text-muted m-0">Pending</p>
                                                <span className="text-c-green f-20 f-w-600">00</span>
                                            </Col>
                                        </Row>
                                        <Col sm={12} className="client-border-card p-t-10">
                                            <p>Overall Activity</p>
                                        </Col>
                                        <Chart {...clientMap3} />
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <h5 className="mb-3">Total Leads</h5>
                                <p className="text-c-green f-w-500"><i className="fa fa-caret-up m-r-15"></i> 18% High than last month</p>
                                <Row>
                                    <Col className="b-r-default">
                                        <p className="text-muted m-b-5">Overall</p>
                                        <h5>76.12%</h5>
                                    </Col>
                                    <Col className="b-r-default">
                                        <p className="text-muted m-b-5">Monthly</p>
                                        <h5>16.40%</h5>
                                    </Col>
                                    <Col>
                                        <p className="text-muted m-b-5">Day</p>
                                        <h5>4.56%</h5>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Chart {...totalLead} />
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <h5 className="mb-3">Total Vendors</h5>
                                <p className="text-c-red f-w-500"><i className="fa fa-caret-down m-r-15"></i> 24% High than last month</p>
                                <Row>
                                    <Col className="b-r-default">
                                        <p className="text-muted m-b-5">Overall</p>
                                        <h5>68.52%</h5>
                                    </Col>
                                    <Col className="b-r-default">
                                        <p className="text-muted m-b-5">Monthly</p>
                                        <h5>28.90%</h5>
                                    </Col>
                                    <Col>
                                        <p className="text-muted m-b-5">Day</p>
                                        <h5>13.50%</h5>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Chart {...totalVendor} />
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <h5 className="mb-3">Invoice Generate</h5>
                                <p className="text-c-green f-w-500"><i className="fa fa-caret-up m-r-15"></i> 20% High than last month</p>
                                <Row>
                                    <Col className="b-r-default">
                                        <p className="text-muted m-b-5">Overall</p>
                                        <h5>68.52%</h5>
                                    </Col>
                                    <Col className="b-r-default">
                                        <p className="text-muted m-b-5">Monthly</p>
                                        <h5>28.90%</h5>
                                    </Col>
                                    <Col>
                                        <p className="text-muted m-b-5">Day</p>
                                        <h5>13.50%</h5>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Chart {...totalInvoice} />
                        </Card>
                    </Col>

                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col sm={6}>
                                        <h6>Support Analytics</h6>
                                    </Col>
                                    <Col>
                                        <Dropdown className='float-right'>
                                            <Dropdown.Toggle variant="link" id="dropdown-basic" className="dropdown-toggle text-c-blue">
                                                Last Week
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href={DEMO.BLANK_LINK}>1 week</Dropdown.Item>
                                                <Dropdown.Item href={DEMO.BLANK_LINK}>2 year</Dropdown.Item>
                                                <Dropdown.Item href={DEMO.BLANK_LINK}>3 month</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                </Row>
                                <Row className="align-items-center">
                                    <Col sm={6}>
                                        <h2 className="mt-2 mb-0">280</h2>
                                        <span className="">Tickets</span>
                                        <h6 className="mb-0 mt-3">Close: <span className="text-success">120</span></h6>
                                        <h6>Response <span className="text-danger">2d</span></h6>
                                    </Col>
                                    <Col sm={6}>
                                        <Chart {...completedTicketChart} />
                                    </Col>
                                  </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Body>
                                <h6>Traffic tracker</h6>
                                <Row className="mt-2">
                                    <Col sm={6}>
                                        <span className="d-block text-uppercase">Inbound</span>
                                        <h3 className="mt-1">180 GB</h3>
                                        <div className="mt-3">
                                            <Chart {...transactionChart1} />
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                      <span className="d-block text-uppercase">Outbound</span>
                                      <h3 className="mt-1">597.1 GB</h3>
                                      <div className="mt-3">
                                          <Chart {...transactionChart2} />
                                      </div>
                                    </Col>
                                  </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col sm='auto'>
                                        <h6>Page view by device</h6>
                                    </Col>
                                    <Col>
                                        <Dropdown className='float-right'>
                                            <Dropdown.Toggle variant="link" id="dropdown-basic" className="dropdown-toggle text-c-blue">
                                                Weekly
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href={DEMO.BLANK_LINK}>1 week</Dropdown.Item>
                                                <Dropdown.Item href={DEMO.BLANK_LINK}>2 year</Dropdown.Item>
                                                <Dropdown.Item href={DEMO.BLANK_LINK}>3 month</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={6} className='pr-0'>
                                        <h6 className="my-3"><i className="feather icon-monitor f-20 mr-2 text-primary"/>66.6%<span className="text-c-green ml-2 f-14"><i className="feather icon-arrow-up"/>2%</span></h6>
                                        <h6 className="my-3"><i className="feather icon-tablet f-20 mr-2 text-success"/>29.7%<span className="text-c-red ml-2 f-14"><i className="feather icon-arrow-down"/>3%</span></h6>
                                        <h6 className="my-3"><i className="feather icon-smartphone f-20 mr-2 text-danger"/>32.8%<span className="text-c-green ml-2 f-14"><i className="feather icon-arrow-up"/>8%</span></h6>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="chart-percent text-center">
                                            <Chart {...percentageChart}/>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
                <Row className="no-gutters">
                    <Col xl={2} md={4} sm={6}>
                        <Card>
                            <Card.Body>
                                <span>User</span>
                                <h3>798</h3>
                                <Chart {...userAnalytics} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={2} md={4} sm={6}>
                        <Card>
                            <Card.Body>
                                <span>Session</span>
                                <h3>486</h3>
                                <Chart {...sessionAnalytics} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={2} md={4} sm={6}>
                        <Card>
                            <Card.Body>
                                <span>Page view</span>
                                <h3>9454</h3>
                                <Chart {...pageViewAnalytics} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={2} md={4} sm={6}>
                        <Card>
                            <Card.Body>
                                <span>Page / Session</span>
                                <h3>7.15</h3>
                                <Chart {...pageSessionAnalytics} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={2} md={4} sm={6}>
                        <Card>
                            <Card.Body>
                                <span>Avg. Session Time</span>
                                <h3>00:04:30</h3>
                                <Chart {...avgSessionAnalytics} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={2} md={4} sm={6}>
                        <Card>
                            <Card.Body>
                                <span>Bounce Rate</span>
                                <h3>1.55%</h3>
                                <Chart {...bounceRateAnalytics} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={4} md={5}>
                        <Card className='rating-bar'>
                            <Card.Body>
                                <Row className="mb-3">
                                    <Col>
                                        <h6 className="m-0">Task Completed</h6>
                                        <span>Successful tested</span>
                                    </Col>
                                    <Col>
                                        <h2 className="text-right">60%</h2>
                                    </Col>
                                </Row>
                                <Rating
                                    stop={16}
                                    initialRating={this.state.blockRating}
                                    emptySymbol={<span className="theme-bar-block"><span/></span>}
                                    fullSymbol={<span className="theme-bar-block"><span className="active"/></span>}
                                    onChange={(rate) => this.setState({blockRating: rate})}
                                />
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Session by time of day</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...timeUserChart} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={8} md={7}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Product manufacturing completion by Region</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...horizontalBarChart} />
                            </Card.Body>
                        </Card>
                        <Row>
                            <Col xl={6} md={12}>
                                <Card>
                                    <Card.Body className='pb-0'>
                                        <h6>Conversions</h6>
                                        <h4 className="m-0">0.85%<span className="text-c-blue ml-2"><i className="feather icon-arrow-up"/>0.50%</span></h4>
                                        <span>Purchased</span>
                                    </Card.Body>
                                    <div className='m-t-15'>
                                        <Chart {...conversionsBarChart} />
                                    </div>
                                </Card>
                            </Col>
                            <Col xl={6} md={12}>
                                <Card>
                                    <Card.Body>
                                        <Row className="d-flex align-items-center">
                                            <Col>
                                                <h6>Active customer <span className="d-block">on site</span></h6>
                                                <h2 className="m-0">2.86</h2>
                                                <span className="text-c-green">+85.9%</span>
                                            </Col>
                                            <Col>
                                                <Chart {...siteLineChart} />
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <Card.Body>
                                <h6>Customer Satisfaction</h6>
                                <span>It takes continuous effort to maintain high customer satisfaction levels.Internal and external quality measures are often tied together.,as the opinion...</span>
                                <span className="text-c-blue d-block">Learn more..</span>
                                <Row className="d-flex justify-content-center align-items-center">
                                    <Col>
                                        <Chart {...satisfactionChart} />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Marketing campaign</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...trafficChart} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Sales Report</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...saleChart} />
                                <Row className='mt-3 d-flex align-items-center text-center'>
                                    <Col>
                                        <h6>$1000</h6>
                                        <span>Target</span>
                                    </Col>
                                    <Col>
                                        <h6>$985</h6>
                                        <span>Last week</span>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Time on Site</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...timeChart} />
                                <Row className='mt-2'>
                                    <Col>
                                        <span className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-10"/>Time on site</span>
                                    </Col>
                                    <Col className='text-right'>
                                        <span className="text-muted">1:31</span>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card>
                            <Card.Body className='pb-0'>
                                <h6>New stock <span className="text-muted">( purchased )</span></h6>
                                <h4 className="m-0">0.85%<span className="text-info ml-2"><i className="feather icon-arrow-up"/>0.50%</span></h4>
                            </Card.Body>
                            <div className='p-t-15'>
                                <Chart {...conversionsChart} />
                            </div>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Total Revenue</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...revenuChart} />
                                <span className="text-center text-muted d-block">Total sales made today</span>
                                <Row className='d-flex align-items-center text-center m-t-10'>
                                    <Col>
                                        <h6>$1258</h6>
                                        <span>Target</span>
                                    </Col>
                                    <Col>
                                        <h6>$975</h6>
                                        <span>Last week</span>
                                    </Col>
                                    <Col>
                                        <h6>$500</h6>
                                        <span>Last Day</span>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Market Sales</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <h3><i className="feather icon-trending-down text-c-red mr-3"/>27,695.65</h3>
                                <Row className='d-flex align-items-center text-center mt-4'>
                                    <Col>
                                        <h6>Youtube</h6>
                                        <span className="text-c-red">- 16.85%</span>
                                    </Col>
                                    <Col>
                                        <h6>Facebook</h6>
                                        <span className="text-c-purple">+ 45.36%</span>
                                    </Col>
                                    <Col>
                                        <h6>Twitter</h6>
                                        <span className="text-c-blue">+ 50.69%</span>
                                    </Col>
                                </Row>
                                <Chart {...marketChart} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Sale report of year</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...typeChart} />
                                <div className="mt-3">
                                    <span className="d-block mb-2"><i className="fas fa-circle f-10 m-r-15 text-danger"/>Desktop Computers<span className="float-right f-w-400">76.7%</span></span>
                                    <span className="d-block mb-2"><i className="fas fa-circle f-10 m-r-15 text-warning"/>Smartphones<span className="float-right f-w-400">15%</span></span>
                                    <span className="d-block"><i className="fas fa-circle f-10 m-r-15 text-info"/>Tablets<span className="float-right f-w-400">30%</span></span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12}>
                        <Card className='table-card'>
                            <Card.Header>
                                <Card.Title as='h5'>Advertising campaign monitor</Card.Title>
                            </Card.Header>
                            <Card.Body className='px-0 py-0'>
                                <Chart {...trafficMonitorChart} />
                                <div style={{height: '362px'}}>
                                    <PerfectScrollbar>
                                        <Table responsive>
                                            <thead>
                                            <tr>
                                                <th><span>Campaign date</span></th>
                                                <th><span>Click</span></th>
                                                <th><span>Cost</span></th>
                                                <th><span>CTR</span></th>
                                                <th><span>ARPU</span></th>
                                                <th><span>ECPI</span></th>
                                                <th><span>ROI</span></th>
                                                <th><span>Revenue</span></th>
                                                <th><span>Conversions</span></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>08-11-2016</td>
                                                <td>786
                                                    <div className="mt-1">
                                                        <ProgressBar variant="danger" now={60} style={{height: '4px'}} />
                                                    </div>
                                                </td>
                                                <td>485
                                                    <div className="mt-1">
                                                        <ProgressBar variant="primary" style={{height: '4px'}} now="50"/>
                                                    </div>
                                                </td>
                                                <td>769
                                                    <div className="mt-1">
                                                        <ProgressBar variant="warning" style={{height: '4px'}} now="70"/>
                                                    </div>
                                                </td>
                                                <td>45,3%
                                                    <div className="mt-1">
                                                        <ProgressBar variant="success" style={{height: '4px'}} now="60"/>
                                                    </div>
                                                </td>
                                                <td>6,7%
                                                    <div className="mt-1">
                                                        <ProgressBar variant="info" style={{height: '4px'}} now="30"/>
                                                    </div>
                                                </td>
                                                <td>8,56
                                                    <div className="mt-1">
                                                        <ProgressBar variant="danger" style={{height: '4px'}} now="40"/>
                                                    </div>
                                                </td>
                                                <td>10:55
                                                    <div className="mt-1">
                                                        <ProgressBar variant="warning" style={{height: '4px'}} now="70"/>
                                                    </div>
                                                </td>
                                                <td>33.8%
                                                    <div className="mt-1">
                                                        <ProgressBar variant="success" style={{height: '4px'}} now="40"/>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>15-10-2016</td>
                                                <td>786
                                                    <div className="mt-1">
                                                        <ProgressBar variant="danger" style={{height: '4px'}} now="65"/>
                                                    </div>
                                                </td>
                                                <td>523
                                                    <div className="mt-1">
                                                        <ProgressBar variant="primary" style={{height: '4px'}} now="80"/>
                                                    </div>
                                                </td>
                                                <td>736
                                                    <div className="mt-1">
                                                        <ProgressBar variant="warning" style={{height: '4px'}} now="80"/>
                                                    </div>
                                                </td>
                                                <td>78,3%
                                                    <div className="mt-1">
                                                        <ProgressBar variant="success" style={{height: '4px'}} now="70"/>
                                                    </div>
                                                </td>
                                                <td>6,6%
                                                    <div className="mt-1">
                                                        <ProgressBar variant="info" style={{height: '4px'}} now="70"/>
                                                    </div>
                                                </td>
                                                <td>7,56
                                                    <div className="mt-1">
                                                        <ProgressBar variant="danger" style={{height: '4px'}} now="44"/>
                                                    </div>
                                                </td>
                                                <td>4:30
                                                    <div className="mt-1">
                                                        <ProgressBar variant="warning" style={{height: '4px'}} now="68"/>
                                                    </div>
                                                </td>
                                                <td>76.8%
                                                    <div className="mt-1">
                                                        <ProgressBar variant="success" style={{height: '4px'}} now="90"/>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>08-08-2017</td>
                                                <td>624
                                                    <div className="mt-1">
                                                        <ProgressBar variant="danger" style={{height: '4px'}} now="45"/>
                                                    </div>
                                                </td>
                                                <td>436
                                                    <div className="mt-1">
                                                        <ProgressBar variant="primary" style={{height: '4px'}} now="55"/>
                                                    </div>
                                                </td>
                                                <td>756
                                                    <div className="mt-1">
                                                        <ProgressBar variant="warning" style={{height: '4px'}} now="95"/>
                                                    </div>
                                                </td>
                                                <td>78,3%
                                                    <div className="mt-1">
                                                        <ProgressBar variant="success" style={{height: '4px'}} now="38"/>
                                                    </div>
                                                </td>
                                                <td>6,4%
                                                    <div className="mt-1">
                                                        <ProgressBar variant="info" style={{height: '4px'}} now="30"/>
                                                    </div>
                                                </td>
                                                <td>9,45
                                                    <div className="mt-1">
                                                        <ProgressBar variant="danger" style={{height: '4px'}} now="41"/>
                                                    </div>
                                                </td>
                                                <td>9:05
                                                    <div className="mt-1">
                                                        <ProgressBar variant="warning" style={{height: '4px'}} now="67"/>
                                                    </div>
                                                </td>
                                                <td>8.63%
                                                    <div className="mt-1">
                                                        <ProgressBar variant="success" style={{height: '4px'}} now="41"/>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>11-12-2017</td>
                                                <td>423
                                                    <div className="mt-1">
                                                        <ProgressBar variant="danger" style={{height: '4px'}} now="54"/>
                                                    </div>
                                                </td>
                                                <td>123
                                                    <div className="mt-1">
                                                        <ProgressBar variant="primary" style={{height: '4px'}} now="70"/>
                                                    </div>
                                                </td>
                                                <td>756
                                                    <div className="mt-1">
                                                        <ProgressBar variant="warning" style={{height: '4px'}} now="75"/>
                                                    </div>
                                                </td>
                                                <td>78,6%
                                                    <div className="mt-1">
                                                        <ProgressBar variant="success" style={{height: '4px'}} now="60"/>
                                                    </div>
                                                </td>
                                                <td>45,6%
                                                    <div className="mt-1">
                                                        <ProgressBar variant="info" style={{height: '4px'}} now="90"/>
                                                    </div>
                                                </td>
                                                <td>6,85
                                                    <div className="mt-1">
                                                        <ProgressBar variant="danger" style={{height: '4px'}} now="30"/>
                                                    </div>
                                                </td>
                                                <td>7:45
                                                    <div className="mt-1">
                                                        <ProgressBar variant="warning" style={{height: '4px'}} now="40"/>
                                                    </div>
                                                </td>
                                                <td>33.8%
                                                    <div className="mt-1">
                                                        <ProgressBar variant="success" style={{height: '4px'}} now="80"/>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>05-06-2015</td>
                                                <td>465
                                                    <div className="mt-1">
                                                        <ProgressBar variant="danger" style={{height: '4px'}} now="66"/>
                                                    </div>
                                                </td>
                                                <td>463
                                                    <div className="mt-1">
                                                        <ProgressBar variant="primary" style={{height: '4px'}} now="50"/>
                                                    </div>
                                                </td>
                                                <td>456
                                                    <div className="mt-1">
                                                        <ProgressBar variant="warning" style={{height: '4px'}} now="30"/>
                                                    </div>
                                                </td>
                                                <td>68,6%
                                                    <div className="mt-1">
                                                        <ProgressBar variant="success" style={{height: '4px'}} now="30"/>
                                                    </div>
                                                </td>
                                                <td>76,6%
                                                    <div className="mt-1">
                                                        <ProgressBar variant="info" style={{height: '4px'}} now="32"/>
                                                    </div>
                                                </td>
                                                <td>7,56
                                                    <div className="mt-1">
                                                        <ProgressBar variant="danger" style={{height: '4px'}} now="70"/>
                                                    </div>
                                                </td>
                                                <td>8:45
                                                    <div className="mt-1">
                                                        <ProgressBar variant="warning" style={{height: '4px'}} now="71"/>
                                                    </div>
                                                </td>
                                                <td>39.8%
                                                    <div className="mt-1">
                                                        <ProgressBar variant="success" style={{height: '4px'}} now="38"/>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>08-11-2016</td>
                                                <td>786
                                                    <div className="mt-1">
                                                        <ProgressBar variant="danger" style={{height: '4px'}} now="43"/>
                                                    </div>
                                                </td>
                                                <td>485
                                                    <div className="mt-1">
                                                        <ProgressBar variant="primary" style={{height: '4px'}} now="70"/>
                                                    </div>
                                                </td>
                                                <td>769
                                                    <div className="mt-1">
                                                        <ProgressBar variant="warning" style={{height: '4px'}} now="69"/>
                                                    </div>
                                                </td>
                                                <td>45,3%
                                                    <div className="mt-1">
                                                        <ProgressBar variant="success" style={{height: '4px'}} now="90"/>
                                                    </div>
                                                </td>
                                                <td>6,7%
                                                    <div className="mt-1">
                                                        <ProgressBar variant="info" style={{height: '4px'}} now="80"/>
                                                    </div>
                                                </td>
                                                <td>8,56
                                                    <div className="mt-1">
                                                        <ProgressBar variant="danger" style={{height: '4px'}} now="41"/>
                                                    </div>
                                                </td>
                                                <td>10:55
                                                    <div className="mt-1">
                                                        <ProgressBar variant="warning" style={{height: '4px'}} now="55"/>
                                                    </div>
                                                </td>
                                                <td>33.8%
                                                    <div className="mt-1">
                                                        <ProgressBar variant="success" style={{height: '4px'}} now="70"/>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>15-10-2016</td>
                                                <td>786
                                                    <div className="mt-1">
                                                        <ProgressBar variant="danger" style={{height: '4px'}} now="61"/>
                                                    </div>
                                                </td>
                                                <td>523
                                                    <div className="mt-1">
                                                        <ProgressBar variant="primary" style={{height: '4px'}} now="45"/>
                                                    </div>
                                                </td>
                                                <td>736
                                                    <div className="mt-1">
                                                        <ProgressBar variant="warning" style={{height: '4px'}} now="70"/>
                                                    </div>
                                                </td>
                                                <td>78,3%
                                                    <div className="mt-1">
                                                        <ProgressBar variant="success" style={{height: '4px'}} now="60"/>
                                                    </div>
                                                </td>
                                                <td>6,6%
                                                    <div className="mt-1">
                                                        <ProgressBar variant="info" style={{height: '4px'}} now="30"/>
                                                    </div>
                                                </td>
                                                <td>7,56
                                                    <div className="mt-1">
                                                        <ProgressBar variant="danger" style={{height: '4px'}} now="40"/>
                                                    </div>
                                                </td>
                                                <td>4:30
                                                    <div className="mt-1">
                                                        <ProgressBar variant="warning" style={{height: '4px'}} now="70"/>
                                                    </div>
                                                </td>
                                                <td>76.8%
                                                    <div className="mt-1">
                                                        <ProgressBar variant="success" style={{height: '4px'}} now="40"/>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </PerfectScrollbar>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card>
                            <Card.Body className='pb-0'>
                                <h2 className="m-0">350</h2>
                                <span className="text-c-blue">Support Requests</span>
                                <p className="mb-3 mt-3">Total number of support requests that come in.</p>
                            </Card.Body>
                            <Card.Body className='p-0'>
                                <Chart {...supportChart} />
                            </Card.Body>
                            <Card.Footer className='bg-primary text-white'>
                                <Row className='text-center'>
                                    <Col>
                                        <h4 className="m-0 text-white">10</h4>
                                        <span>Open</span>
                                    </Col>
                                    <Col>
                                        <h4 className="m-0 text-white">5</h4>
                                        <span>Running</span>
                                    </Col>
                                    <Col>
                                        <h4 className="m-0 text-white">3</h4>
                                        <span>Solved</span>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl={8} md={12}>
                        <Row>
                            <Col>
                                <Card className='mrr-card'>
                                    <Card.Body className='mb-3'>
                                        <span className="d-flex align-items-center"><i className="fab fa-bitcoin text-c-blue f-22 m-r-5"/>Bitcoin</span>
                                    </Card.Body>
                                    <div className="position-absolute bottom-chart w-100">
                                        <Chart {...avgChart1} />
                                    </div>
                                    <Card.Body>
                                        <span className="float-right">Goal: $75</span>
                                        <h3 className="m-0">$80</h3>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='mrr-card'>
                                    <Card.Body className='mb-3'>
                                        <span className="d-flex align-items-center"><i className="fab fa-ethereum text-c-green f-22 m-r-5"/>Ethereum</span>
                                    </Card.Body>
                                    <div className="position-absolute bottom-chart w-100">
                                        <Chart {...avgChart2} />
                                    </div>
                                    <Card.Body>
                                        <span className="float-right">Goal: $75</span>
                                        <h3 className="m-0">$80</h3>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card className='bg-danger text-white mrr-card'>
                                    <Card.Body className='mb-3'>
                                        <span>Total ticket Resolved</span>
                                    </Card.Body>
                                    <div className="position-absolute bottom-chart w-100">
                                        <Chart {...avgChart3} />
                                    </div>
                                    <Card.Body>
                                        <span className="float-right">pending: 75</span>
                                        <h3 className="m-0 text-white">400</h3>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='bg-warning text-white mrr-card'>
                                    <Card.Body className='mb-3'>
                                        <span>Avg. Customer Satisfaction</span>
                                    </Card.Body>
                                    <div className="position-absolute bottom-chart w-100">
                                        <Chart {...avgChart4} />
                                    </div>
                                    <Card.Body>
                                        <span className="float-right">Reopen: 20%</span>
                                        <h3 className="m-0 text-white">75%</h3>
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

export default WdgetChart;