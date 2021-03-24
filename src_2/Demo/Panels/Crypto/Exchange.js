import React from 'react';
import Chart from "react-apexcharts";
import {
    Row,
    Col,
    Card
} from 'react-bootstrap';

import Aux from "./../../../hoc/_Aux";

import DEMO from "../../../store/constant";

import avgChart1 from './chart/average-chart-1';
import avgChart2 from './chart/average-chart-2';
import avgChart3 from './chart/average-chart-3';
import avgChart4 from './chart/average-chart-4';

class Exchange extends React.Component {

    render() {
        return (
            <Aux>
                <Row>
                    <Col sm={12}>
                        <Card className="bg-pattern">
                            <Card.Body className="py-5">
                                <h1 className="text-center mb-4"><span className="text-success">Buy</span> and <span className="text-danger">Sell</span> Coins at the Crypto</h1>
                                <h4 className="text-center mb-4">Buy now and get +30% extra bonus</h4>
                                <div className="row justify-content-center">
                                    <div className="col-sm-9">
                                        <div className="px-sm-4 py-sm-4 bg-white rounded-lg shadow-sm">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" defaultValue="10.1548"/>
                                                        <div className="input-group-append">
                                                            <select className="form-control">
                                                                <option>BTC</option>
                                                                <option>Ethereum</option>
                                                                <option>Ripple</option>
                                                                <option>Bitcoin Cash</option>
                                                                <option>Cardano</option>
                                                                <option>Litecoin</option>
                                                                <option>NEO</option>
                                                                <option>Stellar</option>
                                                                <option>EOS</option>
                                                                <option>NEM</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-auto">
                                                    <i className="feather icon-repeat text-muted f-26"/>
                                                </div>
                                                <div className="col">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" defaultValue="125.158"/>
                                                        <div className="input-group-append">
                                                            <select className="form-control">
                                                                <option value="USD">USD</option>
                                                                <option value="EURO">EURO</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 text-center">
                                        <a href={DEMO.BLANK_LINK} className="btn btn-primary mt-4">EXCHANGE NOW</a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={3} md={6}>
                        <Card className="mrr-card">
                            <Card.Body className="mb-3">
                                <Row className="justify-content-between align-items-center mb-3">
                                    <Col>
                                        <span className="d-flex justify-content-center align-items-center"><i className="fab fa-bitcoin text-c-blue f-22 m-r-5"/>Bitcoin(BTC)</span>
                                    </Col>
                                    <Col>
                                        <h6 className="badge badge-light-primary float-right d-inline-block m-0">-0.997896</h6>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <div className="position-absolute bottom-chart w-100">
                                <Chart {...avgChart1} />
                            </div>
                            <Card.Body className="d-flex flex-row-reverse align-items-end justify-content-between">
                                <span>Goal: $75</span>
                                <h3 className="m-0">$80</h3>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className="mrr-card">
                            <Card.Body className="mb-3">
                                <Row className="justify-content-between align-items-center mb-3">
                                    <Col>
                                        <span className="d-flex justify-content-center align-items-center"><i className="fab fa-ethereum text-c-red f-22 m-r-5"/>Ethereum(ETH)</span>
                                    </Col>
                                    <Col>
                                        <h6 className="badge badge-light-danger float-right d-inline-block m-0">+1.1456</h6>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <div className="position-absolute bottom-chart w-100">
                                <Chart {...avgChart2} />
                            </div>
                            <Card.Body className="d-flex flex-row-reverse align-items-end justify-content-between">
                                <span>Goal: $75</span>
                                <h3 className="m-0">$80</h3>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className="mrr-card">
                            <Card.Body className="mb-3">
                                <Row className="justify-content-between align-items-center mb-3">
                                    <Col>
                                        <span className="d-flex justify-content-center align-items-center"><i className="fab fa-asymmetrik text-c-yellow f-22 m-r-5"/>Neo(NEO)</span>
                                    </Col>
                                    <Col>
                                        <h6 className="badge badge-light-warning float-right d-inline-block m-0">+5.78787</h6>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <div className="position-absolute bottom-chart w-100">
                                <Chart {...avgChart4} />
                            </div>
                            <Card.Body className="d-flex flex-row-reverse align-items-end justify-content-between">
                                <span>Goal: $75</span>
                                <h3 className="m-0">$80</h3>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className="mrr-card">
                            <Card.Body className="mb-3">
                                <Row className="justify-content-between align-items-center mb-3">
                                    <Col>
                                        <span className="d-flex justify-content-center align-items-center"><i className="fab fa-cloudsmith text-c-green f-22 m-r-5"/>Ripple(RPL)</span>
                                    </Col>
                                    <Col>
                                        <h6 className="badge badge-light-success float-rightd-inline-block m-0">-7.99999</h6>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <div className="position-absolute bottom-chart w-100">
                                <Chart {...avgChart3} />
                            </div>
                            <Card.Body className="d-flex flex-row-reverse align-items-end justify-content-between">
                                <span>Goal: $75</span>
                                <h3 className="m-0">$80</h3>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Exchange;