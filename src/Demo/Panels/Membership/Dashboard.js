import React from 'react';
import Chart from "react-apexcharts";
import {
    Row,
    Col,
    Card
} from 'react-bootstrap';

import Aux from "./../../../hoc/_Aux";

import collectedChart from './chart/collected-chart';
import transaction1 from './chart/transaction-1';
import transaction2 from './chart/transaction-2';
import saleChart from './chart/sale-chart';

class Dashboard extends React.Component {

    render() {
        return (
            <Aux>
                <Row>
                    <Col sm={3}>
                        <Card className="bg-c-green text-white widget-visitor-card">
                            <Card.Body className="text-center">
                                <h2 className="text-white">18</h2>
                                <h6 className="text-white">Registered Users</h6>
                                <i className="feather icon-user-plus"></i>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card className="bg-c-green text-white widget-visitor-card">
                            <Card.Body className="text-center">
                                <h2 className="text-white">14</h2>
                                <h6 className="text-white">Active Users</h6>
                                <i className="feather icon-user-check"/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card className="bg-c-yellow text-white widget-visitor-card">
                            <Card.Body className="text-center">
                                <h2 className="text-white">1</h2>
                                <h6 className="text-white">Pending Users</h6>
                                <i className="feather icon-user-minus"/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card className="bg-c-yellow text-white widget-visitor-card">
                            <Card.Body className="text-center">
                                <h2 className="text-white">16</h2>
                                <h6 className="text-white">Active Memberships</h6>
                                <i className="feather icon-users"/>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={8}>
                        <Card>
                            <Card.Header>
                                <h5>Total collected all time</h5>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...collectedChart}/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <h6>This Month</h6>
                                <Row className="mt-3">
                                    <Col sm={6}>
                                        <span className="d-block text-uppercase">Amount</span>
                                        <h3 className="mt-3 mb-3">$2,144</h3>
                                        <Chart {...transaction1}/>
                                    </Col>
                                    <Col sm={6}>
                                        <span className="d-block text-uppercase">Sales</span>
                                        <h3 className="mt-3 mb-3">100</h3>
                                        <Chart {...transaction2}/>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <h5>Sales by membership</h5>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...saleChart} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Dashboard;