import React from 'react';
import Chart from "react-apexcharts";
import {Row, Col, Card, ButtonToolbar, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux/index";

import lineChart1 from './chart/line-chart-1';
import lineChart3 from './chart/line-chart-3';

import areaChart1 from './chart/area-chart-1';
import dailyVisitor from './chart/daily-visitor';

import barChart1 from './chart/bar-chart-1';
import barChart2 from './chart/bar-chart-2';
import barChart3 from './chart/bar-chart-3';
import barChart4 from './chart/bar-chart-4';

import mixedChart1 from './chart/mixed-chart-1';
import mixedChart2 from './chart/mixed-chart-2';

import candlestickChart from './chart/candlestick-chart';

import bubbleChart1 from './chart/bubble-chart-1';
import bubbleChart2 from './chart/bubble-chart-2';

import scatterChart1 from './chart/scatter-chart-1';
import scatterChart2 from './chart/scatter-chart-2';

import heatMapChart1 from './chart/heat-map-chart-1';
import heatMapChart2 from './chart/heat-map-chart-2';

import pieChart1 from './chart/pie-chart-1';
import pieChart2 from './chart/pie-chart-2';

import radialChart1 from './chart/radial-bar-chart-1';
import radialChart2 from './chart/radial-bar-chart-2';

import radarChart1 from './chart/radar-chart-1';
import radarChart2 from './chart/radar-chart-2';

class ApexChart extends React.Component {
    mainInterval = undefined;
    subInterval = undefined;
    state = {
        dailyVisitor: dailyVisitor,
        lastDate: 0,
        lineChart2: {},
        data: []
    };

    dailyVisitorHandler = (unit) => {
        let minState, maxState;
        switch (unit) {
            case '1m':
                minState = new Date('28 Jan 2013').getTime();
                maxState = new Date('27 Feb 2013').getTime();
                break;
            case '6m':
                minState = new Date('27 Sep 2012').getTime();
                maxState = new Date('27 Feb 2013').getTime();
                break;
            default:
            case '1y':
                minState = new Date('27 Feb 2012').getTime();
                maxState = new Date('27 Feb 2013').getTime();
                break;
            case 'ytd':
                minState = new Date('01 Jan 2013').getTime();
                maxState = new Date('27 Feb 2013').getTime();
                break;
            case 'all':
                minState = undefined;
                maxState = undefined;
                break;
        }
        this.setState(prevState => ({
            ...prevState,
            dailyVisitor: {
                ...prevState.dailyVisitor,
                options: {
                    ...prevState.dailyVisitor.options,
                    xaxis: {
                        min: minState,
                        max: maxState
                    }
                }
            }
        }));
    };

    UNSAFE_componentWillMount() {
        this.getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {min: 10, max: 90});
        this.setState(prevState => ({
            ...prevState,
            lineChart2: {
                height: 300,
                type: 'line',
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
                    colors: ['#4680ff'],
                    title: {
                        text: 'Dynamic Updating Chart',
                        align: 'left'
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
                    }
                },
                series: [{
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
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Basic line chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...lineChart1} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Real-time Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...this.state.lineChart2} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Different line chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...lineChart3} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Area chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...areaChart1} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Area chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <ButtonToolbar>
                                    <ToggleButtonGroup variant="radio" name="options" defaultValue='1y'>
                                        <ToggleButton variant='outline-primary' value='1m' size="sm" onClick={() => this.dailyVisitorHandler('1m')}>1M</ToggleButton>
                                        <ToggleButton variant='outline-primary' value='6m' size="sm" onClick={() => this.dailyVisitorHandler('6m')}>6M</ToggleButton>
                                        <ToggleButton variant='outline-primary' value='1y' size="sm" onClick={() => this.dailyVisitorHandler('1y')}>1Y</ToggleButton>
                                        <ToggleButton variant='outline-primary' value='ytd' size="sm" onClick={() => this.dailyVisitorHandler('ytd')}>YTD</ToggleButton>
                                        <ToggleButton variant='outline-primary' value='all' size="sm" onClick={() => this.dailyVisitorHandler('all')}>All</ToggleButton>
                                    </ToggleButtonGroup>
                                </ButtonToolbar>
                                <Chart {...this.state.dailyVisitor} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Bar chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...barChart1} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Bar chart stacked</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...barChart2} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Bar chart horizontal</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...barChart3} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Bar chart horizontal stacked</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...barChart4} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Mixed Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...mixedChart1} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Mixed Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...mixedChart2} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Candlestick Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...candlestickChart} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Bubble Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...bubbleChart1} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Bubble Chart 3d</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...bubbleChart2} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Scatter Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...scatterChart1} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Scatter Chart Datetime</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...scatterChart2} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Heatmap Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...heatMapChart1} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Heatmap Chart Rounded</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...heatMapChart2} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Pie Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...pieChart1} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Pie Chart donut</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...pieChart2} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Radial Bar Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...radialChart1} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Radial Bar Chart Custom Angle</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...radialChart2} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Radar Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...radarChart1} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Radar Chart Multiple Series</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...radarChart2} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default ApexChart;