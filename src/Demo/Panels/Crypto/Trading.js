import React from 'react';
import Chart from "react-apexcharts";
import {
    Row,
    Col,
    Card,
    Table
} from 'react-bootstrap';

import Aux from "./../../../hoc/_Aux";
import $ from 'jquery';

$.DataTable = require( 'datatables.net-bs' );
require( 'datatables.net-responsive-bs' );

function atable() {
    let tableZero = '#data-table-zero';
    let table1 = '#data-table-1';
    $.fn.dataTable.ext.errMode = 'throw';

    $(tableZero).DataTable();
    $(table1).DataTable();
}

class Trading extends React.Component {
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
                height: 300,
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

    componentDidMount() {
        atable()
    }

    render() {
        return (
            <Aux>
                <Row className='btn-page'>
                    <Col xl={3} lg={12}>
                        <Card className="task-board-left">
                            <Card.Header>
                                <h5>Market</h5>
                            </Card.Header>
                            <Card.Body className="card-body">
                                <div className="input-group mb-0">
                                    <input type="text" className="form-control add_task_todo" placeholder="Search here..." required=""/>
                                    <div className="input-group-append">
                                        <button className="btn waves-effect waves-light btn-primary btn-msg-send" type="button"><i className="fas fa-search"/></button>
                                    </div>
                                </div>
                            </Card.Body>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item border-top-0">
                                    <div className="float-right">231.65</div>
                                    <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-bitcoin text-c-yellow"/> Bitcoin </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="float-right">113.05</div>
                                    <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-cloudsmith text-c-green"/>DASH </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="float-right">341.22</div>
                                    <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-ethereum text-c-red"/>Litecoin </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="float-right">241.68</div>
                                    <div className="d-flex align-items-center"><i className="f-24 m-r-10 fab fa-asymmetrik text-c-blue"/>NEO</div>
                                </li>
                                <li className="list-group-item">
                                    <div className="float-right">231.65</div>
                                    <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-bitcoin text-c-yellow"/> ANC </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="float-right">113.05</div>
                                    <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-cloudsmith text-c-green"/>ARK </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="float-right">341.22</div>
                                    <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-ethereum text-c-red"/>BTA </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="float-right">241.68</div>
                                    <div className="d-flex align-items-center"><i className="f-24 m-r-10 fab fa-asymmetrik text-c-blue"/>ETH</div>
                                </li>
                                <li className="list-group-item">
                                    <div className="float-right">113.05</div>
                                    <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-cloudsmith text-c-green"/>NEO </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="float-right">341.22</div>
                                    <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-ethereum text-c-red"/>XMR </div>
                                </li>
                                <li className="list-group-item border-bottom-0">
                                    <div className="float-right">241.68</div>
                                    <div className="d-flex align-items-center"><i className="f-24 m-r-10 fab fa-asymmetrik text-c-blue"/>XRP</div>
                                </li>
                            </ul>
                        </Card>
                    </Col>
                    <Col xl={9} lg={12}>
                        <Card>
                            <Card.Header>
                                <h5>Trading Chart </h5>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...this.state.lineChart2}/>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <h5>Deposit</h5>
                            </Card.Header>
                            <Card.Body>
                                <Table ref="tbl" striped hover responsive bordered id="data-table-zero">
                                    <thead>
                                    <tr>
                                        <th>Coin</th>
                                        <th>Date</th>
                                        <th>Volume</th>
                                        <th>Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-bitcoin text-c-yellow"/> Bitcoin </div>
                                        </td>
                                        <td>
                                            <div>02/12/2018</div>
                                        </td>
                                        <td>
                                            <div>0.725.00</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-success badge-pill">Completed</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-ethereum text-c-red"/>Litecoin </div>
                                        </td>
                                        <td>
                                            <div>05/30/2018</div>
                                        </td>
                                        <td>
                                            <div>0.134.00</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-danger badge-pill">Cancel</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center"><i className="f-24 m-r-10 fab fa-asymmetrik text-c-blue"/>NEO</div>
                                        </td>
                                        <td>
                                            <div>06/27/2019</div>
                                        </td>
                                        <td>
                                            <div>1.345.00</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-primary badge-pill">Pending</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-cloudsmith text-c-green"/>DASH </div>
                                        </td>
                                        <td>
                                            <div>12/10/2020</div>
                                        </td>
                                        <td>
                                            <div>0.755.00</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-primary badge-pill">Pending</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-cloudsmith text-c-green"/>DASH </div>
                                        </td>
                                        <td>
                                            <div>06/02/2021</div>
                                        </td>
                                        <td>
                                            <div>0.124.00</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-success badge-pill">Completed</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-ethereum text-c-red"/>Litecoin </div>
                                        </td>
                                        <td>
                                            <div>08/11/2022</div>
                                        </td>
                                        <td>
                                            <div>0.123.00</div>
                                        </td>
                                        <td>
                                            <div className="badge badge-success badge-pill">Completed</div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <h5>Withdraw</h5>
                            </Card.Header>
                            <Card.Body>
                                <Table ref="tbl-1" striped hover responsive bordered id="data-table-1">
                                    <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Coin</th>
                                        <th>Volume</th>
                                        <th>Receiver</th>
                                        <th>Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-ethereum text-c-red"/>Litecoin </div>
                                        </td>
                                        <td>
                                            <div>02/12/2018</div>
                                        </td>
                                        <td>
                                            <div>0.1235.00</div>
                                        </td>
                                        <td>Bank - 1025********347</td>
                                        <td>
                                            <div className="badge badge-success badge-pill">Completed</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center"><i className="f-24 m-r-10 fab fa-asymmetrik text-c-blue"/>NEO</div>
                                        </td>
                                        <td>
                                            <div>07/12/2020</div>
                                        </td>
                                        <td>
                                            <div>0.550</div>
                                        </td>
                                        <td>NEO Wallet - #17642</td>
                                        <td>
                                            <div className="badge badge-primary badge-pill">Pending</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-bitcoin text-c-yellow"/> Bitcoin </div>
                                        </td>
                                        <td>
                                            <div>02/10/2017</div>
                                        </td>
                                        <td>
                                            <div>0.4345.00</div>
                                        </td>
                                        <td>BTC Wallet - #23562</td>
                                        <td>
                                            <div className="badge badge-success badge-pill">Completed</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-flex align-items-center"> <i className="f-24 m-r-10 fab fa-cloudsmith text-c-green"/>DASH </div>
                                        </td>
                                        <td>
                                            <div>07/10/2020</div>
                                        </td>
                                        <td>
                                            <div>1.234.00</div>
                                        </td>
                                        <td>Bank - 1550********879</td>
                                        <td>
                                            <div className="badge badge-danger badge-pill">Cancel</div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Trading;