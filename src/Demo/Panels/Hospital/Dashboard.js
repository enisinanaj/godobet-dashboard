import React from 'react';
import Chart from "react-apexcharts";
import {
    Row,
    Col,
    Card
} from 'react-bootstrap';

import Aux from "./../../../hoc/_Aux";

import monthlyProfit1 from './chart/monthly-profit-1';
import monthlyProfit2 from './chart/monthly-profit-2';
import monthlyProfit3 from './chart/monthly-profit-3';

class Dashboard extends React.Component {

    render() {
        return (
            <Aux>
                <Row>
                    <Col xl={3} md={6}>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center m-l-0">
                                    <Col sm='auto'>
                                        <i className="fas fa-user-md f-36 text-c-purple"/>
                                    </Col>
                                    <Col sm='auto'>
                                        <h6 className="text-muted m-b-10">Doctor</h6>
                                        <h2 className="m-b-0">35</h2>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center m-l-0">
                                    <Col sm='auto'>
                                        <i className="fas fa-user-injured f-36 text-c-red"/>
                                    </Col>
                                    <Col sm='auto'>
                                        <h6 className="text-muted m-b-10">Patient</h6>
                                        <h2 className="m-b-0">368</h2>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center m-l-0">
                                    <Col sm='auto'>
                                        <i className="fas fa-user-nurse f-36 text-c-green"/>
                                    </Col>
                                    <Col sm='auto'>
                                        <h6 className="text-muted m-b-10">Nurse</h6>
                                        <h2 className="m-b-0">79</h2>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center m-l-0">
                                    <Col sm='auto'>
                                        <i className="fas fa-prescription-bottle-alt f-36 text-c-blue"/>
                                    </Col>
                                    <Col sm='auto'>
                                        <h6 className="text-muted m-b-10">Pharmacist</h6>
                                        <h2 className="m-b-0">10</h2>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={3} md={6}>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center m-l-0">
                                    <Col sm='auto'>
                                        <i className="fas fa-flask f-36 text-c-yellow"/>
                                    </Col>
                                    <Col sm='auto'>
                                        <h6 className="text-muted m-b-10">Laboratories</h6>
                                        <h2 className="m-b-0">35</h2>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center m-l-0">
                                    <Col sm='auto'>
                                        <i className="fas fa-user-tie f-36 text-c-blue"/>
                                    </Col>
                                    <Col sm='auto'>
                                        <h6 className="text-muted m-b-10">Accountant</h6>
                                        <h2 className="m-b-0">368</h2>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center m-l-0">
                                    <Col sm='auto'>
                                        <i className="fas fa-file-invoice-dollar f-36 text-c-red"/>
                                    </Col>
                                    <Col sm='auto'>
                                        <h6 className="text-muted m-b-10">Payment</h6>
                                        <h2 className="m-b-0">79</h2>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center m-l-0">
                                    <Col sm='auto'>
                                        <i className="fas fa-pills f-36 text-c-purple"/>
                                    </Col>
                                    <Col sm='auto'>
                                        <h6 className="text-muted m-b-10">Medicine</h6>
                                        <h2 className="m-b-0">10</h2>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={12} lg={4}>
                        <Card>
                            <Card.Body className="text-center">
                                <i className="fas fa-procedures text-c-blue d-block f-40"/>
                                <h4 className="m-t-20 m-b-20"><span className="text-c-blue">8.62k</span> Operation</h4>
                                <button className="btn btn-primary btn-sm btn-round" data-toggle="modal" data-title="Operation" data-target="#modal-report">View Report</button>
                            </Card.Body>
                            <Chart {...monthlyProfit1}/>
                        </Card>
                    </Col>
                    <Col md={12} lg={4}>
                        <Card>
                            <Card.Body className="text-center">
                                <i className="fas fa-skull-crossbones text-c-green d-block f-40"></i>
                                <h4 className="m-t-20 m-b-20"><span className="text-c-green">+40</span> Death</h4>
                                <button className="btn btn-success btn-sm btn-round" data-toggle="modal" data-title="Death" data-target="#modal-report">View Report</button>
                            </Card.Body>
                            <Chart {...monthlyProfit2}/>
                        </Card>
                    </Col>
                    <Col md={12} lg={4}>
                        <Card>
                            <Card.Body className="text-center">
                                <i className="fas fa-baby text-c-red d-block f-40"></i>
                                <h4 className="m-t-20 m-b-20"><span className="text-c-red">+40</span> Birth</h4>
                                <button className="btn btn-danger btn-sm btn-round" data-toggle="modal" data-title="Birth" data-target="#modal-report">View Report</button>
                            </Card.Body>
                            <Chart {...monthlyProfit3}/>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Dashboard;