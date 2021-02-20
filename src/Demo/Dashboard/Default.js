import React from 'react';
import Chart from "react-apexcharts";
import {
    Row,
    Col,
    Card,
    Table
} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import avatar4 from '../../assets/images/user/avatar-4.jpg';

import dashboard1 from '../../assets/images/widget/dashborad-1.jpg';
import dashboard3 from '../../assets/images/widget/dashborad-3.jpg';

import supportChart1 from './chart/default-support-card-1';
import supportChart2 from "./chart/default-support-card-2";

import seoChart1 from './chart/default-seo-chart-1';
import seoChart2 from './chart/default-seo-chart-2';
import seoChart3 from './chart/default-seo-chart-3';

import powerCard1 from './chart/default-power-card-1';
import powerCard2 from './chart/default-power-card-2';

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