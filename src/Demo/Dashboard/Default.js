import React from 'react';
import Chart from "react-apexcharts";
import { Row, Col, Card } from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

import supportChart1 from './chart/default-support-card-1';
import supportChart2 from "./chart/default-support-card-2";
class Default extends React.Component {

    render() {
        return (
            <Aux>
                <Row>
                    <Col xl={7} md={12}>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Body className='pb-0'>
                                        <h2 className="m-0">350</h2>
                                        <span className="text-c-green">Support Requests</span>
                                        <p className="mb-3 mt-3">Total number of support requests that come in.</p>
                                    </Card.Body>
                                    <Card.Body className='p-0'>
                                        <Chart {...supportChart1} />
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
                            <Col>
                                <Card>
                                    <Card.Body className='pb-0'>
                                        <h2 className="m-0">350</h2>
                                        <span className="text-c-blue">Support Requests</span>
                                        <p className="mb-3 mt-3">Total number of support requests that come in.</p>
                                    </Card.Body>
                                    <Card.Body className='p-0'>
                                        <Chart {...supportChart2} />
                                    </Card.Body>
                                    <Card.Footer className='bg-success text-white'>
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
                        </Row>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Default;