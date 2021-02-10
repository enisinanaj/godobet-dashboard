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
                    <Col xl={5} md={12}>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <Row className="align-items-center">
                                            <Col sm={8}>
                                                <h4 className="text-c-yellow">$30200</h4>
                                                <h6 className="text-muted m-b-0">All Earnings</h6>
                                            </Col>
                                            <Col sm={4} className="text-right">
                                                <i className="feather icon-bar-chart-2 f-28"/>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    <Card.Footer className="bg-c-yellow">
                                        <Row className="row align-items-center">
                                            <Col sm={9}>
                                                <p className="text-white m-b-0">% change</p>
                                            </Col>
                                            <Col sm={3} className="text-right">
                                                <i className="feather icon-trending-up text-white f-16"/>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <Row className="align-items-center">
                                            <Col sm={8}>
                                                <h4 className="text-c-green">290+</h4>
                                                <h6 className="text-muted m-b-0">Page Views</h6>
                                            </Col>
                                            <Col sm={4} className="text-right">
                                                <i className="feather icon-file-text f-28"/>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    <Card.Footer className="bg-c-green">
                                        <Row className="row align-items-center">
                                            <Col sm={9}>
                                                <p className="text-white m-b-0">% change</p>
                                            </Col>
                                            <Col sm={3} className="text-right">
                                                <i className="feather icon-trending-up text-white f-16"/>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <Row className="align-items-center">
                                            <Col sm={8}>
                                                <h4 className="text-c-red">145</h4>
                                                <h6 className="text-muted m-b-0">Task</h6>
                                            </Col>
                                            <Col sm={4} className="text-right">
                                                <i className="feather icon-calendar f-28"/>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    <Card.Footer className="bg-c-red">
                                        <Row className="row align-items-center">
                                            <Col sm={9}>
                                                <p className="text-white m-b-0">% change</p>
                                            </Col>
                                            <Col sm={3} className="text-right">
                                                <i className="feather icon-trending-down text-white f-16"/>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <Row className="align-items-center">
                                            <Col sm={8}>
                                                <h4 className="text-c-blue">500</h4>
                                                <h6 className="text-muted m-b-0">Downloads</h6>
                                            </Col>
                                            <Col sm={4} className="text-right">
                                                <i className="feather icon-thumbs-down f-28"/>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    <Card.Footer className="bg-c-blue">
                                        <Row className="row align-items-center">
                                            <Col sm={9}>
                                                <p className="text-white m-b-0">% change</p>
                                            </Col>
                                            <Col sm={3} className="text-right">
                                                <i className="feather icon-trending-down text-white f-16"/>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </Col>

                    <Col xl={6} md={12}>
                        <Card className="table-card">
                            <Card.Header>
                                <h5>Projects</h5>
                            </Card.Header>
                            <Card.Body className='pb-0'>
                                <Table responsive hover className='mb-0'>
                                    <thead>
                                    <tr>
                                        <th>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input"/>
                                                    <span className="custom-control-label"/>
                                                </label>
                                            </div>
                                            Assigned
                                        </th>
                                        <th>Name</th>
                                        <th>Due Date</th>
                                        <th className="text-right">Priority</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input" />
                                                    <span className="custom-control-label"/>
                                                </label>
                                            </div>
                                            <div className="d-inline-block align-middle">
                                                <img src={avatar4} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                                <div className="d-inline-block">
                                                    <h6>John Deo</h6>
                                                    <p className="text-muted m-b-0">Graphics Designer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Able Pro</td>
                                        <td>Jun, 26</td>
                                        <td className="text-right"><label className="badge badge-light-danger">Low</label></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input"/>
                                                    <span className="custom-control-label"/>
                                                </label>
                                            </div>
                                            <div className="d-inline-block align-middle">
                                                <img src={avatar2} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                                <div className="d-inline-block">
                                                    <h6>Jenifer Vintage</h6>
                                                    <p className="text-muted m-b-0">Web Designer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Mashable</td>
                                        <td>March, 31</td>
                                        <td className="text-right"><label className="badge badge-light-primary">high</label></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input"/>
                                                    <span className="custom-control-label"/>
                                                </label>
                                            </div>
                                            <div className="d-inline-block align-middle">
                                                <img src={avatar3} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                                <div className="d-inline-block">
                                                    <h6>William Jem</h6>
                                                    <p className="text-muted m-b-0">Developer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Flatable</td>
                                        <td>Aug, 02</td>
                                        <td className="text-right"><label className="badge badge-light-success">medium</label></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input"/>
                                                    <span className="custom-control-label"/>
                                                </label>
                                            </div>
                                            <div className="d-inline-block align-middle">
                                                <img src={avatar2} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                                <div className="d-inline-block">
                                                    <h6>David Jones</h6>
                                                    <p className="text-muted m-b-0">Developer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>Guruable</td>
                                        <td>Sep, 22</td>
                                        <td className="text-right"><label className="badge badge-light-primary">high</label></td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6} md={12}>
                        <Card className="latest-update-card">
                            <Card.Header>
                                <h5>Latest Updates</h5>
                            </Card.Header>
                            <Card.Body>
                                <div className="latest-update-box">
                                    <Row className="p-t-30 p-b-30">
                                        <Col sm='auto' className="text-right update-meta">
                                            <p className="text-muted m-b-0 d-inline-flex">2 hrs ago</p>
                                            <i className="feather icon-twitter bg-twitter update-icon"/>
                                        </Col>
                                        <Col>
                                            <a href={DEMO.BLANK_LINK}>
                                                <h6>+ 1652 Followers</h6>
                                            </a>
                                            <p className="text-muted m-b-0">You’re getting more and more followers, keep it up!</p>
                                        </Col>
                                    </Row>
                                    <Row className="p-b-30">
                                        <Col sm='auto' className="text-right update-meta">
                                            <p className="text-muted m-b-0 d-inline-flex">4 hrs ago</p>
                                            <i className="feather icon-briefcase bg-c-red update-icon"/>
                                        </Col>
                                        <Col>
                                            <a href={DEMO.BLANK_LINK}>
                                                <h6>+ 5 New Products were added!</h6>
                                            </a>
                                            <p className="text-muted m-b-0">Congratulations!</p>
                                        </Col>
                                    </Row>
                                    <Row className="p-b-0">
                                        <Col sm='auto' className="text-right update-meta">
                                            <p className="text-muted m-b-0 d-inline-flex">2 day ago</p>
                                            <i className="feather icon-facebook bg-facebook update-icon"/>
                                        </Col>
                                        <Col>
                                            <a href={DEMO.BLANK_LINK}>
                                                <h6>+1 Friend Requests</h6>
                                            </a>
                                            <p className="text-muted m-b-10">This is great, keep it up!</p>
                                            <Table responsive hover>
                                                <tbody>
                                                <tr>
                                                    <td className="b-none">
                                                        <a href={DEMO.BLANK_LINK} className="align-middle">
                                                            <img src={avatar2} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                                            <div className="d-inline-block">
                                                                <h6>Jeny William</h6>
                                                                <p className="text-muted m-b-0">Graphic Designer</p>
                                                            </div>
                                                        </a>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="text-center">
                                    <a href={DEMO.BLANK_LINK} className="b-b-primary text-primary">View all Projects</a>
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
                    <Col md={12} xl={4}>
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

                    <Col xl={8} md={12}>
                        <Row>
                            <Col sm={12}>
                                <Card className="table-card review-card">
                                    <Card.Header>
                                        <h5>Customer Reviews</h5>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="review-block">
                                            <div className="row">
                                                <div className="col-sm-auto p-r-0">
                                                    <img src={avatar2} alt="user" className="img-radius profile-img cust-img m-b-15"/>
                                                </div>
                                                <div className="col">
                                                    <h6 className="m-b-15">John Deo <span className="float-right f-13 text-muted"> a week ago</span></h6>
                                                    <a href={DEMO.BLANK_LINK}><i className="feather icon-star-on f-18 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="feather icon-star-on f-18 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="feather icon-star-on f-18 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="feather icon-star f-18 text-muted"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="feather icon-star f-18 text-muted"/></a>
                                                    <p className="m-t-15 m-b-15 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                                                        took a
                                                        galley of type and scrambled it to make a type specimen book.</p>
                                                    <a href={DEMO.BLANK_LINK} className="m-r-30 text-muted"><i className="feather icon-thumbs-up m-r-15"/>Helpful?</a>
                                                    <a href={DEMO.BLANK_LINK}><i className="feather icon-heart-on text-c-red m-r-15"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="feather icon-edit text-muted"/></a>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-auto p-r-0">
                                                    <img src={avatar4} alt="user" className="img-radius profile-img cust-img m-b-15"/>
                                                </div>
                                                <div className="col">
                                                    <h6 className="m-b-15">Allina D’croze <span className="float-right f-13 text-muted"> a week ago</span></h6>
                                                    <a href={DEMO.BLANK_LINK}><i className="feather icon-star-on f-18 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="feather icon-star f-18 text-muted"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="feather icon-star f-18 text-muted"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="feather icon-star f-18 text-muted"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="feather icon-star f-18 text-muted"/></a>
                                                    <p className="m-t-15 m-b-15 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                                                        took a
                                                        galley of type and scrambled it to make a type specimen book.</p>
                                                    <a href={DEMO.BLANK_LINK} className="m-r-30 text-muted"><i className="feather icon-thumbs-up m-r-15"/>Helpful?</a>
                                                    <a href={DEMO.BLANK_LINK}><i className="feather icon-heart-on text-c-red m-r-15"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="feather icon-edit text-muted"/></a>
                                                    <blockquote className="blockquote m-t-15 m-b-0">
                                                        <h6>Allina D’croze</h6>
                                                        <p className="m-b-0 text-muted">Lorem Ipsum is simply dummy text of the industry.</p>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right  m-r-20">
                                            <a href={DEMO.BLANK_LINK} className="b-b-primary text-primary">View all Customer Reviews</a>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
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
                            <Col md={6}>
                                <Card>
                                    <Card.Body>
                                        <h5 className="mb-3">Temperature</h5>
                                        <h2>7.3<span className="text-muted m-l-10 f-14">deg</span></h2>
                                        <Chart {...powerCard2} />
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
                        </Row>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card className="chat-card">
                            <Card.Header>
                                <h5>Chat</h5>
                            </Card.Header>
                            <Card.Body>
                                <Row className="m-b-20 received-chat">
                                    <Col sm='auto' className="p-r-0">
                                        <img src={avatar2} alt="user" className="img-radius wid-40"/>
                                    </Col>
                                    <Col>
                                        <div className="msg">
                                            <p className="m-b-0">Nice to meet you!</p>
                                        </div>
                                        <p className="text-muted m-b-0"><i className="fa fa-clock-o m-r-10"/>10:20am</p>
                                    </Col>
                                </Row>
                                <div className="row m-b-20 send-chat">
                                    <Col>
                                        <div className="msg">
                                            <p className="m-b-0">Nice to meet you!</p>
                                        </div>
                                        <p className="text-muted m-b-0"><i className="fa fa-clock-o m-r-10"/>10:20am</p>
                                    </Col>
                                    <Col sm='auto' className="p-l-0">
                                        <img src={avatar3} alt="user" className="img-radius wid-40"/>
                                    </Col>
                                </div>
                                <div className="row m-b-20 received-chat">
                                    <div className="col-auto p-r-0">
                                        <img src={avatar2} alt="user" className="img-radius wid-40"/>
                                    </div>
                                    <div className="col">
                                        <div className="msg">
                                            <p className="m-b-0">Nice to meet you!</p>
                                            <img src={dashboard1} alt=""/>
                                            <img src={dashboard3} alt=""/>
                                        </div>
                                        <p className="text-muted m-b-0"><i className="fa fa-clock-o m-r-10"/>10:20am</p>
                                    </div>
                                </div>
                                <div className="form-group m-t-15">
                                    <label className="floating-label" htmlFor="task-inset-msg">Send message</label>
                                    <input type="text" name="task-insert-chat" className="form-control" id="task-inset-msg"/>
                                    <div className="form-icon">
                                        <button className="btn btn-primary btn-icon">
                                            <i className="feather icon-message-circle"/>
                                        </button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="user-card2">
                            <Card.Body className="text-center">
                                <h6 className="m-b-15">Project Risk</h6>
                                <div className="risk-rate">
                                    <span><b>5</b></span>
                                </div>
                                <h6 className="m-b-10 m-t-10">Balanced</h6>
                                <a href={DEMO.BLANK_LINK} className="text-c-green b-b-success">Change Your Risk</a>
                                <div className="row justify-content-center m-t-10 b-t-default m-l-0 m-r-0">
                                    <div className="col m-t-15 b-r-default">
                                        <h6 className="text-muted">Nr</h6>
                                        <h6>AWS 2455</h6>
                                    </div>
                                    <div className="col m-t-15">
                                        <h6 className="text-muted">Created</h6>
                                        <h6>30th Sep</h6>
                                    </div>
                                </div>
                            </Card.Body>
                            <button className="btn btn-success btn-block">Download Overall Report</button>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Default;