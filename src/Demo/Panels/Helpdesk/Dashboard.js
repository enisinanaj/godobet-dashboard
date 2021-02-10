import React from 'react';
import Chart from "react-apexcharts";
import {
    Row,
    Col,
    Card,
    ProgressBar
} from 'react-bootstrap';

import Aux from "./../../../hoc/_Aux";

import supportChart1 from './chart/support-chart-1';
import supportChart2 from './chart/support-chart-2';
import supportChart3 from './chart/support-chart-3';
import satisfactionChart from './chart/satisfaction-chart';
import DEMO from "../../../store/constant";

class Dashboard extends React.Component {

    render() {
        return (
            <Aux>
                <Row>
                    <Col xl={4} md={6}>
                        <Card className="support-bar">
                            <Card.Body className="pb-0">
                                <h2 className="m-0">500</h2>
                                <span className="text-c-blue">Agent Response</span>
                                <p className="mb-3 mt-3">Total number of support requests that come in.</p>
                            </Card.Body>
                            <Chart {...supportChart2}/>
                            <Card.Footer className="bg-purple text-white">
                                <Row className="text-center">
                                    <Col className="border-right">
                                        <h4 className="m-0 text-white">50</h4>
                                        <span>Open</span>
                                    </Col>
                                    <Col className="border-right">
                                        <h4 className="m-0 text-white">75</h4>
                                        <span>Running</span>
                                    </Col>
                                    <Col>
                                        <h4 className="m-0 text-white">30</h4>
                                        <span>Solved</span>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card className="support-bar">
                            <Card.Body className="pb-0">
                                <h2 className="m-0">350</h2>
                                <span className="text-c-purple">Support Requests</span>
                                <p className="mb-3 mt-3">Total number of support requests that come in.</p>
                            </Card.Body>
                            <Chart {...supportChart1}/>
                            <Card.Footer className="bg-primary text-white">
                                <Row className="text-center">
                                    <Col className="border-right">
                                        <h4 className="m-0 text-white">10</h4>
                                        <span>Open</span>
                                    </Col>
                                    <Col className="border-right">
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
                    <Col xl={4} md={6}>
                        <Card className="support-bar">
                            <Card.Body className="pb-0">
                                <h2 className="m-0">800</h2>
                                <span className="text-c-green">Support Resolved</span>
                                <p className="mb-3 mt-3">Total number of support requests that come in.</p>
                            </Card.Body>
                            <Chart {...supportChart3}/>
                            <Card.Footer className="bg-success text-white">
                                <Row className="text-center">
                                    <Col className="border-right">
                                        <h4 className="m-0 text-white">80</h4>
                                        <span>Open</span>
                                    </Col>
                                    <Col className="border-right">
                                        <h4 className="m-0 text-white">60</h4>
                                        <span>Running</span>
                                    </Col>
                                    <Col>
                                        <h4 className="m-0 text-white">90</h4>
                                        <span>Solved</span>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Col>

                    <Col xl={8} md={6}>
                        <Card>
                            <div className="card-body">
                                <h6>Customer Satisfaction</h6>
                                <span>It takes continuous effort to maintain high customer satisfaction levels.Internal and external quality measures are often tied together.,as the opinion...</span>
                                <span className="text-c-blue d-block">Learn more..</span>
                                <Row className="d-flex justify-content-center align-items-center">
                                    <Col>
                                        <Chart {...satisfactionChart}/>
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                        <Row>
                            <Col xl={6} md={12}>
                                <Card className="social-res-card">
                                    <Card.Header>
                                        <h5>Facebook Source</h5>
                                    </Card.Header>
                                    <Card.Body>
                                        <p className="m-b-10">Page Profile</p>
                                        <div className="m-b-25">
                                            <ProgressBar now={25}/>
                                        </div>
                                        <p className="m-b-10">Favorite</p>
                                        <div className="m-b-25">
                                            <ProgressBar now={85}/>
                                        </div>
                                        <p className="m-b-10">Like Story</p>
                                        <ProgressBar now={65}/>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={6} md={12}>
                                <Card className="social-res-card">
                                    <Card.Header>
                                        <h5>Twitter Source</h5>
                                    </Card.Header>
                                    <Card.Body>
                                        <p className="m-b-10">Wall Profile</p>
                                        <div className="m-b-25">
                                            <ProgressBar variant='danger' now={85}/>
                                        </div>
                                        <p className="m-b-10">Favorite</p>
                                        <div className="m-b-25">
                                            <ProgressBar variant='danger' now={25}/>
                                        </div>
                                        <p className="m-b-10">Like Tweets</p>
                                        <ProgressBar variant='danger' now={65}/>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card className="feed-card">
                            <Card.Header>
                                <h5>Latest Activity</h5>
                            </Card.Header>
                            <Card.Body>
                                <Row className="m-b-30">
                                    <Col sm='auto' className="p-r-0">
                                        <i className="feather icon-bell bg-c-blue feed-icon"/>
                                    </Col>
                                    <Col>
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6 className="m-b-5">You have 3 pending tasks. <span className="text-muted float-right f-13">Just Now</span></h6>
                                        </a>
                                    </Col>
                                </Row>
                                <Row className="m-b-30">
                                    <Col sm='auto' className="p-r-0">
                                        <i className="feather icon-shopping-cart bg-c-red feed-icon"/>
                                    </Col>
                                    <Col>
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6 className="m-b-5">New order received <span className="text-muted float-right f-13">Just Now</span></h6>
                                        </a>
                                    </Col>
                                </Row>
                                <Row className="m-b-30">
                                    <Col sm='auto' className="p-r-0">
                                        <i className="feather icon-shopping-cart bg-c-yellow feed-icon"/>
                                    </Col>
                                    <Col>
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6 className="m-b-5">New order received <span className="text-muted float-right f-13">Just Now</span></h6>
                                        </a>
                                    </Col>
                                </Row>
                                <Row className="m-b-30">
                                    <Col sm='auto' className="p-r-0">
                                        <i className="feather icon-bell bg-c-blue feed-icon"/>
                                    </Col>
                                    <Col>
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6 className="m-b-5">You have 3 pending tasks. <span className="text-muted float-right f-13">Just Now</span></h6>
                                        </a>
                                    </Col>
                                </Row>
                                <Row className="m-b-30">
                                    <Col sm='auto' className="p-r-0">
                                        <i className="feather icon-shopping-cart bg-c-red feed-icon"/>
                                    </Col>
                                    <Col>
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6 className="m-b-5">New order received <span className="text-muted float-right f-13">Just Now</span></h6>
                                        </a>
                                    </Col>
                                </Row>
                                <Row className="m-b-30">
                                    <Col sm='auto' className="p-r-0">
                                        <i className="feather icon-file-text bg-c-green feed-icon"/>
                                    </Col>
                                    <Col>
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6 className="m-b-5">You have 3 pending tasks. <span className="text-muted float-right f-13">Just Now</span></h6>
                                        </a>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <a href={DEMO.BLANK_LINK} className="b-b-primary text-primary">View all Feeds</a>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center m-l-0">
                                    <Col sm='auot'>
                                        <i className="icon feather icon-book f-30 text-c-purple"/>
                                    </Col>
                                    <Col sm='auot'>
                                        <h6 className="text-muted m-b-10">Tickets Answered</h6>
                                        <h2 className="m-b-0">379</h2>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Dashboard;