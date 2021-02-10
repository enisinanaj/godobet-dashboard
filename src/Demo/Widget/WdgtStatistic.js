import React from 'react';
import {Row, Col, Card, Carousel, ProgressBar, Dropdown} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

import avatar1 from '../../assets/images/user/avatar-1.jpg'
import avatar2 from '../../assets/images/user/avatar-2.jpg'
import avatar3 from '../../assets/images/user/avatar-3.jpg'
import avatar4 from '../../assets/images/user/avatar-4.jpg'

class WdgtStatistic extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col lg={3} md={6}>
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
                    <Col lg={3} md={6}>
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
                    <Col lg={3} md={6}>
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
                    <Col lg={3} md={6}>
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

                    <Col xl={4} md={12}>
                        <Card className="widget-statstic-card">
                            <Card.Body>
                                <div className="card-header-left mb-3">
                                    <h5 className="mb-0">Statistics</h5>
                                    <p className="p-t-10 m-b-0 text-c-yellow">Compared to last week</p>
                                </div>
                                <i className="feather icon-sliders st-icon bg-c-yellow"/>
                                <div className="text-left">
                                    <h3 className="d-inline-block">5,456</h3>
                                    <i className="feather icon-arrow-up f-30 text-c-green"/>
                                    <span className="float-right bg-c-yellow">23%</span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card className="widget-statstic-card">
                            <Card.Body>
                                <div className="card-header-left mb-3">
                                    <h5 className="mb-0">Unique Visitor</h5>
                                    <p className="p-t-10 m-b-0 text-c-red">55% From last 28 hours</p>
                                </div>
                                <i className="feather icon-users st-icon bg-c-red txt-lite-color"/>
                                <div className="text-left">
                                    <h3 className="d-inline-block">3,874</h3>
                                    <i className="feather icon-arrow-down text-c-red f-30"/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card className="widget-statstic-card">
                            <Card.Body>
                                <div className="card-header-left mb-3">
                                    <h5 className="mb-0">New Orders</h5>
                                    <p className="p-t-10 m-b-0 text-c-blue">54% From last month</p>
                                </div>
                                <i className="feather icon-shopping-cart st-icon bg-c-blue"/>
                                <div className="text-left">
                                    <h3 className="d-inline-block">5,456</h3>
                                    <i className="feather icon-arrow-up text-c-green f-30"/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={4} md={12}>
                        <Card className="bg-c-yellow order-card">
                            <Card.Body>
                                <h6 className="text-white">Revenue</h6>
                                <h2 className="text-white">$42,562</h2>
                                <p className="m-b-0">$5,032 <i className="feather icon-arrow-up m-l-10"/></p>
                                <i className="card-icon feather icon-filter"/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card className="bg-c-blue order-card">
                            <Card.Body>
                                <h6 className="text-white">Orders Received</h6>
                                <h2 className="text-white">486</h2>
                                <p className="m-b-0">$5,032 <i className="feather icon-arrow-up m-l-10 m-r-10"></i>$1,055 <i className="feather icon-arrow-down"/></p>
                                <i className="card-icon feather icon-users"/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card className="bg-c-green order-card">
                            <Card.Body>
                                <h6 className="text-white">Total Sales</h6>
                                <h2 className="text-white">1641</h2>
                                <p className="m-b-0">$5,032 <i className="feather icon-arrow-down m-l-10 m-r-10"></i>$1,055 <i className="feather icon-arrow-up"/></p>
                                <i className="card-icon feather icon-radio"/>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Body className="text-center">
                                <i className="feather icon-mail text-c-blue d-block f-40"/>
                                <h4 className="m-t-20"><span className="text-c-blue">8.62k</span> Subscribers</h4>
                                <p className="m-b-20">Your main list is growing</p>
                                <button className="btn btn-primary btn-sm btn-round">Manage List</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Body className="text-center">
                                <i className="feather icon-twitter text-c-green d-block f-40"/>
                                <h4 className="m-t-20"><span className="text-c-green">+40</span> Followers</h4>
                                <p className="m-b-20">Your main list is growing</p>
                                <button className="btn btn-success btn-sm btn-round">Check them out</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card>
                            <Card.Body className="text-center">
                                <i className="feather icon-briefcase text-c-red d-block f-40"/>
                                <h4 className="m-t-20">Business Plan</h4>
                                <p className="m-b-20">This is your current active plan</p>
                                <button className="btn btn-danger btn-sm btn-round">Upgrade to VIP</button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={3} md={6}>
                        <Card className="statustic-card">
                            <Card.Body className="text-center">
                                <h5 className="text-left">Articles</h5>
                                <span className="d-block text-c-blue f-36">56</span>
                                <p className="m-b-0">Total</p>
                                <ProgressBar variant="primary" now={56} />
                            </Card.Body>
                            <div className="card-footer bg-c-blue border-0">
                                <h6 className="text-white m-b-0">Draft: 22</h6>
                            </div>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className="statustic-card">
                            <Card.Body className="text-center">
                                <h5 className="text-left">Categories</h5>
                                <span className="d-block text-c-green f-36">14</span>
                                <p className="m-b-0">Total</p>
                                <ProgressBar variant="success" now={14} />
                            </Card.Body>
                            <div className="card-footer bg-c-green border-0">
                                <h6 className="text-white m-b-0">Used: 14</h6>
                            </div>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className="statustic-card">
                            <Card.Body className="text-center">
                                <h5 className="text-left">Tickets</h5>
                                <span className="d-block text-c-red f-36">85</span>
                                <p className="m-b-0">Total</p>
                                <ProgressBar variant="danger" now={85} />
                            </Card.Body>
                            <div className="card-footer bg-c-red border-0">
                                <h6 className="text-white m-b-0">Closed Today: 85</h6>
                            </div>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className="statustic-card">
                            <Card.Body className="text-center">
                                <h5 className="text-left">Forums</h5>
                                <span className="d-block text-c-yellow f-36">42</span>
                                <p className="m-b-0">Total</p>
                                <ProgressBar variant="warning" now={42} />
                            </Card.Body>
                            <div className="card-footer bg-c-yellow border-0">
                                <h6 className="text-white m-b-0">Unanswered: 42</h6>
                            </div>
                        </Card>
                    </Col>

                    <Col xl={3} md={6}>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center m-l-0">
                                    <Col sm="auto">
                                        <i className="icon feather icon-book f-30 text-c-purple"/>
                                    </Col>
                                    <Col>
                                        <h6 className="text-muted m-b-10">Tickets Answered</h6>
                                        <h2 className="m-b-0">379</h2>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center m-l-0">
                                    <Col sm="auto">
                                        <i className="icon feather icon-navigation-2 f-30 text-c-green"/>
                                    </Col>
                                    <Col>
                                        <h6 className="text-muted m-b-10">Projects Launched</h6>
                                        <h2 className="m-b-0">205</h2>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center m-l-0">
                                    <Col sm="auto">
                                        <i className="icon feather icon-users f-30 text-c-red"/>
                                    </Col>
                                    <Col>
                                        <h6 className="text-muted m-b-10">Happy Customers</h6>
                                        <h2 className="m-b-0">5984</h2>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center m-l-0">
                                    <Col sm="auto">
                                        <i className="icon feather icon-award f-30 text-c-blue"/>
                                    </Col>
                                    <Col>
                                        <h6 className="text-muted m-b-10">Unique Innovation</h6>
                                        <h2 className="m-b-0">325</h2>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={4} md={6}>
                        <Card className="social-card bg-c-red">
                            <Card.Body>
                                <Row className="align-items-center">
                                    <Col sm="auto">
                                        <i className="feather icon-mail f-34 text-c-red social-icon"/>
                                    </Col>
                                    <Col>
                                        <h6 className="m-b-0 text-white">Mail</h6>
                                        <p>231.2w downloads</p>
                                        <p className="m-b-0">Lorem Ipsum is simply dummy text of the printing</p>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <a href={DEMO.BLANK_LINK} className="download-icon t-0"><i className="feather icon-arrow-down"/></a>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card className="social-card bg-c-blue">
                            <Card.Body>
                                <Row className="align-items-center">
                                    <Col sm="auto">
                                        <i className="feather icon-twitter f-34 text-c-blue social-icon"/>
                                    </Col>
                                    <Col>
                                        <h6 className="m-b-0 text-white">Twitter</h6>
                                        <p>231.2w downloads</p>
                                        <p className="m-b-0">Lorem Ipsum is simply dummy text of the printing</p>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <a href={DEMO.BLANK_LINK} className="download-icon"><i className="feather icon-arrow-down"/></a>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card className="social-card bg-c-green">
                            <Card.Body>
                                <Row className="align-items-center">
                                    <Col sm="auto">
                                        <i className="feather icon-instagram f-34 text-c-green social-icon"/>
                                    </Col>
                                    <Col>
                                        <h6 className="m-b-0 text-white">Instagram</h6>
                                        <p>231.2w downloads</p>
                                        <p className="m-b-0">Lorem Ipsum is simply dummy text of the printing</p>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <a href={DEMO.BLANK_LINK} className="download-icon"><i className="feather icon-arrow-up"/></a>
                        </Card>
                    </Col>

                    <Col xl={3} md={6}>
                        <Card className="text-center order-visitor-card">
                            <Card.Body>
                                <h6 className="m-b-0">Total Subscription</h6>
                                <h4 className="m-t-15 m-b-15"><i className="icon feather icon-arrow-down m-r-15 text-c-red"/>7652</h4>
                                <p className="m-b-0">48% From Last 24 Hours</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className="text-center order-visitor-card">
                            <Card.Body>
                                <h6 className="m-b-0">Order Status</h6>
                                <h4 className="m-t-15 m-b-15"><i className="icon feather icon-arrow-up m-r-15 text-c-green"/>6325</h4>
                                <p className="m-b-0">36% From Last 6 Months</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className="text-center order-visitor-card">
                            <Card.Body>
                                <h6 className="m-b-0">Unique Visitors</h6>
                                <h4 className="m-t-15 m-b-15"><i className="icon feather icon-arrow-down m-r-15 text-c-red"/>652</h4>
                                <p className="m-b-0">36% From Last 6 Months</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className="text-center order-visitor-card">
                            <Card.Body>
                                <h6 className="m-b-0">Monthly Earnings</h6>
                                <h4 className="m-t-15 m-b-15"><i className="icon feather icon-arrow-up m-r-15 text-c-green"/>5963</h4>
                                <p className="m-b-0">36% From Last 6 Months</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col sm={4}>
                        <Card className="bg-c-red text-white widget-visitor-card">
                            <Card.Body className="text-center">
                                <h2 className="text-white">5,678</h2>
                                <h6 className="text-white">Daily visitor</h6>
                                <i className="feather icon-file-text"/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card className="bg-c-blue text-white widget-visitor-card">
                            <Card.Body className="text-center">
                                <h2 className="text-white">1,658</h2>
                                <h6 className="text-white">Daily user</h6>
                                <i className="feather icon-user"/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card className="bg-c-yellow text-white widget-visitor-card">
                            <Card.Body className="text-center">
                                <h2 className="text-white">5,678</h2>
                                <h6 className="text-white">Last month visitor</h6>
                                <i className="feather icon-award"/>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={6} md={12}>
                        <Card className="app-design">
                            <Card.Body>
                                <button className="btn btn-primary float-right">Completed</button>
                                <h6 className="f-w-400 text-muted">App Design And Development</h6>
                                <p className="text-c-blue f-w-400">Android</p>
                                <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                <div className="design-description d-inline-block m-r-40">
                                    <h3 className="f-w-400">678</h3>
                                    <p className="text-muted">Question</p>
                                </div>
                                <div className="design-description d-inline-block">
                                    <h3 className="f-w-400">1,452</h3>
                                    <p className="text-muted">Comments</p>
                                </div>
                                <div className="team-box p-b-20">
                                    <p className="d-inline-block m-r-20 f-w-400">Team</p>
                                    <div className="team-section d-inline-block">
                                        <a href={DEMO.BLANK_LINK}><img src={avatar1} data-toggle="tooltip" title="Josephin Doe" alt=" "/></a>
                                        <a href={DEMO.BLANK_LINK}><img src={avatar3} data-toggle="tooltip" title="Lary Doe" alt=" " className="m-l-5 "/></a>
                                        <a href={DEMO.BLANK_LINK}><img src={avatar4} data-toggle="tooltip" title="Alia" alt=" " className="m-l-5 "/></a>
                                        <a href={DEMO.BLANK_LINK}><img src={avatar2} data-toggle="tooltip" title="Suzen" alt=" " className="m-l-5 "/></a>
                                    </div>
                                </div>
                                <div className="progress-box">
                                    <ProgressBar variant='primary' now={78} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6} md={12}>
                        <Card className="app-design">
                            <Card.Body>
                                <button className="btn btn-success float-right">Pending</button>
                                <h6 className="f-w-400 text-muted">Landing Page Design</h6>
                                <p className="text-c-green f-w-400">Webdesign</p>
                                <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                <div className="design-description d-inline-block m-r-40">
                                    <h3 className="f-w-400">271</h3>
                                    <p className="text-muted">Question</p>
                                </div>
                                <div className="design-description d-inline-block">
                                    <h3 className="f-w-400">816</h3>
                                    <p className="text-muted">Comments</p>
                                </div>
                                <div className="team-box p-b-20">
                                    <p className="d-inline-block m-r-20 f-w-400">Team</p>
                                    <div className="team-section d-inline-block">
                                        <a href={DEMO.BLANK_LINK}><img src={avatar3} data-toggle="tooltip" title="Josephin Doe" alt=" "/></a>
                                        <a href={DEMO.BLANK_LINK}><img src={avatar4} data-toggle="tooltip" title="Lary Doe" alt=" " className="m-l-5 "/></a>
                                        <a href={DEMO.BLANK_LINK}><img src={avatar2} data-toggle="tooltip" title="Alia" alt=" " className="m-l-5 "/></a>
                                        <a href={DEMO.BLANK_LINK}><img src={avatar1} data-toggle="tooltip" title="Suzen" alt=" " className="m-l-5 "/></a>
                                    </div>
                                </div>
                                <div className="progress-box">
                                    <ProgressBar variant='success' now={78} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={6} md={12}>
                        <Card className="user-card-full">
                            <Row className="m-l-0 m-r-0">
                                <Col sm={4} className="bg-c-blue user-profile-side">
                                    <Card.Body className="text-center text-white">
                                        <div className="m-b-25">
                                            <img src={avatar4} className="img-radius" alt="User-Profile"/>
                                        </div>
                                        <h6 className="f-w-600 text-white">Jeny William</h6>
                                        <p>Web Designer</p>
                                        <a href={DEMO.BLANK_LINK} className="text-white"><i className="feather icon-edit m-t-10 f-16"/></a>
                                    </Card.Body>
                                </Col>
                                <Col sm={8}>
                                    <Card.Body>
                                        <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                        <Row>
                                            <Col>
                                                <p className="m-b-10 f-w-600">Email</p>
                                                <h6 className="text-muted f-w-400"><a href="mailto:someone@example.com?Subject=Hello%20again" target="_top">jeny@gmail.com</a> </h6>
                                            </Col>
                                            <Col>
                                                <p className="m-b-10 f-w-600">Phone</p>
                                                <h6 className="text-muted f-w-400">0023-333-526136</h6>
                                            </Col>
                                        </Row>
                                        <h6 className="m-b-20 m-t-50 p-b-5 b-b-default f-w-600">Projects</h6>
                                        <Row>
                                            <Col>
                                                <p className="m-b-10 f-w-600">Recent</p>
                                                <h6 className="text-muted f-w-400">Guruable Admin</h6>
                                            </Col>
                                            <Col>
                                                <p className="m-b-10 f-w-600">Most Viewed</p>
                                                <h6 className="text-muted f-w-400">Able Pro Admin</h6>
                                            </Col>
                                        </Row>
                                        <ul className="social-link list-unstyled m-t-50 m-b-20">
                                            <li><a href={DEMO.BLANK_LINK} data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook"><span className='hidden'/><i className="feather icon-facebook facebook" aria-hidden="true"/></a></li>
                                            <li><a href={DEMO.BLANK_LINK} data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter"><span className='hidden'/><i className="feather icon-twitter twitter" aria-hidden="true"/></a></li>
                                            <li><a href={DEMO.BLANK_LINK} data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram"><span className='hidden'/><i className="feather icon-instagram instagram" aria-hidden="true"/></a></li>
                                        </ul>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
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
                    <Col xl={3} md={6}>
                        <Card className="quater-card">
                            <Card.Body>
                                <h6 className="text-muted m-b-15">This Quarter</h6>
                                <h4>$3,9452.50</h4>
                                <p className="text-muted">$3,9452.50</p>
                                <h5 className="m-t-20 mb-1">87</h5>
                                <p className="text-muted mb-2">Online Revenue<span className="float-right">80%</span></p>
                                <ProgressBar variant='primery' now={80}/>
                                <h5 className="m-t-20 mb-1">68</h5>
                                <p className="text-muted mb-2">Offline Revenue<span className="float-right">50%</span></p>
                                <ProgressBar variant='success' now={50}/>
                                <h5 className="m-t-20 mb-1">68</h5>
                                <p className="text-muted mb-2">Dealer Revenue<span className="float-right">30%</span></p>
                                <ProgressBar variant='danger' now={30}/>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={3} md={6}>
                        <Card className="statustic-progress-card">
                            <Card.Body>
                                <h5 className="mb-3">Open Ticket</h5>
                                <Row className="align-items-center">
                                    <Col>
                                        <label className="badge badge-light-success">35% <i className="m-l-10 feather icon-arrow-up"></i></label>
                                    </Col>
                                    <Col className="text-right">
                                        <h5 className="">35</h5>
                                    </Col>
                                </Row>
                                <div className="m-t-5">
                                    <ProgressBar variant='success' now={35}/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className="statustic-progress-card">
                            <Card.Body>
                                <h5 className="mb-3">Open Ticket</h5>
                                <Row className="align-items-center">
                                    <Col>
                                        <label class="badge badge-light-primary">35% <i class="m-l-10 feather icon-arrow-up"/></label>
                                    </Col>
                                    <Col className="text-right">
                                        <h5 class="">28</h5>
                                    </Col>
                                </Row>
                                <div className="m-t-5">
                                    <ProgressBar variant='primary' now={28}/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className="statustic-progress-card">
                            <Card.Body>
                                <h5 className="mb-3">Open Ticket</h5>
                                <Row className="align-items-center">
                                    <Col>
                                        <label className="badge badge-light-danger">35% <i className="m-l-10 feather icon-arrow-up"/></label>
                                    </Col>
                                    <Col className="text-right">
                                        <h5 className="">87</h5>
                                    </Col>
                                </Row>
                                <div className="m-t-5">
                                    <ProgressBar variant='danger' now={87}/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className="statustic-progress-card">
                            <Card.Body>
                                <h5 className="mb-3">Open Ticket</h5>
                                <Row className="align-items-center">
                                    <Col>
                                        <label className="badge badge-light-warning">35% <i className="m-l-10 feather icon-arrow-up"/></label>
                                    </Col>
                                    <Col className="text-right">
                                        <h5 className="">32</h5>
                                    </Col>
                                </Row>
                                <div className="m-t-5">
                                    <ProgressBar variant='warning' now={32}/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12}>
                        <Carousel controls={false}>
                            <Carousel.Item>
                                <Row className='no-gutters'>
                                    <Col>
                                        <Card className='bg-dark rounded-0 shadow-none'>
                                            <Card.Body className='d-flex justify-content-between align-items-center'>
                                                <span className="text-white d-flex justify-content-center align-items-center"><i className="fab fa-ethereum text-c-red f-22 m-r-5"/>Ethereum(ETH)</span>
                                                <h6 className="badge badge-light-danger float-right d-inline-block m-0">+1.5278</h6>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className='bg-dark rounded-0 shadow-none'>
                                            <Card.Body className='d-flex justify-content-between align-items-center'>
                                                <span className="text-white d-flex justify-content-center align-items-center"><i className="fab fa-bitcoin text-c-yellow f-22 m-r-5"/>Bitcoin(BTC)</span>
                                                <h6 className="badge badge-light-warning float-right d-inline-block m-0">-0.997896</h6>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className='bg-dark rounded-0 shadow-none'>
                                            <Card.Body className='d-flex justify-content-between align-items-center'>
                                                <span className="text-white d-flex justify-content-center align-items-center"><i className="fab fa-cloudsmith text-c-blue f-22 m-r-5"/>Ripple(RPL)</span>
                                                <h6 className="badge badge-light-primary float-rightd-inline-block m-0">-7.66789</h6>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className='bg-dark rounded-0 shadow-none'>
                                            <Card.Body className='d-flex justify-content-between align-items-center'>
                                                <span className="text-white d-flex justify-content-center align-items-center"><i className="fab fa-asymmetrik text-c-yellow f-22 m-r-5"/>Neo(NEO)</span>
                                                <h6 className="badge badge-light-warning float-right d-inline-block m-0">+5.78789</h6>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Row className='no-gutters'>
                                    <Col>
                                        <Card className='bg-dark rounded-0 shadow-none'>
                                            <Card.Body className='d-flex justify-content-between align-items-center'>
                                                <span className="text-white d-flex justify-content-center align-items-center"><i className="fab fa-ethereum text-c-red f-22 m-r-5"/>Ethereum(ETH)</span>
                                                <h6 className="badge badge-light-danger float-right d-inline-block m-0">-7.6648</h6>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className='bg-dark rounded-0 shadow-none'>
                                            <Card.Body className='d-flex justify-content-between align-items-center'>
                                                <span className="text-white d-flex justify-content-center align-items-center"><i className="fab fa-bitcoin text-c-yellow f-22 m-r-5"/>Bitcoin(BTC)</span>
                                                <h6 className="badge badge-light-warning float-right d-inline-block m-0">+5.1024</h6>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className='bg-dark rounded-0 shadow-none'>
                                            <Card.Body className='d-flex justify-content-between align-items-center'>
                                                <span className="text-white d-flex justify-content-center align-items-center"><i className="fab fa-cloudsmith text-c-blue f-22 m-r-5"/>Ripple(RPL)</span>
                                                <h6 className="badge badge-light-primary float-right d-inline-block m-0">+4.5896</h6>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className='bg-dark rounded-0 shadow-none'>
                                            <Card.Body className='d-flex justify-content-between align-items-center'>
                                                <span className="text-white d-flex justify-content-center align-items-center"><i className="fab fa-asymmetrik text-c-yellow f-22 m-r-5"/>Neo(NEO)</span>
                                                <h6 className="badge badge-light-warning float-right d-inline-block m-0">+1.4563</h6>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col sm={12}>
                        <Row className='no-gutters'>
                            <Col xl={2} md={4}>
                                <Card>
                                    <Card.Body>
                                        <span>REALTY</span>
                                        <h6 className="float-right text-c-red d-inline-block m-0">-0.99</h6>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={2} md={4}>
                                <Card>
                                    <Card.Body>
                                        <span>TELCOM</span>
                                        <h6 className="float-right text-c-green d-inline-block m-0">+1.52</h6>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={2} md={4}>
                                <Card>
                                    <Card.Body>
                                        <span>CPSE</span>
                                        <h6 className="float-right text-c-green d-inline-block m-0">+5.78</h6>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={2} md={4}>
                                <Card>
                                    <Card.Body>
                                        <span>INFRA</span>
                                        <h6 className="float-right text-c-red d-inline-block m-0">-7.66</h6>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={2} md={4}>
                                <Card>
                                    <Card.Body>
                                        <span>TECK</span>
                                        <h6 className="float-right text-c-green d-inline-block m-0">+4.56</h6>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={2} md={4}>
                                <Card>
                                    <Card.Body>
                                        <span>BASMTR</span>
                                        <h6 className="float-right text-c-green d-inline-block m-0">+0.78</h6>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} className='stastic-slider-full-card'>
                        <Row className='no-gutters'>
                            <Col xl={3} md={6}>
                                <Card className='rounded-0'>
                                    <Card.Body className='d-flex justify-content-between align-items-center'>
                                        <span className="d-flex justify-content-center align-items-center"><i className="fab fa-bitcoin text-c-yellow f-22 m-r-5"/>Bitcoin(BTC)</span>
                                        <h6 className="badge badge-light-warning float-right d-inline-block m-0">-0.997896</h6>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} md={6}>
                                <Card className='rounded-0'>
                                    <Card.Body className='d-flex justify-content-between align-items-center'>
                                        <span className="d-flex justify-content-center align-items-center"><i className="fab fa-ethereum text-c-red f-22 m-r-5"/>Ethereum(ETH)</span>
                                        <h6 className="badge badge-light-danger float-right d-inline-block m-0">+1.1456</h6>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} md={6}>
                                <Card className='rounded-0'>
                                    <Card.Body className='d-flex justify-content-between align-items-center'>
                                        <span className="d-flex justify-content-center align-items-center"><i className="fab fa-asymmetrik text-c-yellow f-22 m-r-5"/>Neo(NEO)</span>
                                        <h6 className="badge badge-light-warning  float-right d-inline-block m-0">+5.78787</h6>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={3} md={6}>
                                <Card className='rounded-0'>
                                    <Card.Body className='d-flex justify-content-between align-items-center'>
                                        <span className="d-flex justify-content-center align-items-center"><i className="fab fa-cloudsmith text-c-green f-22 m-r-5"/>Ripple(RPL)</span>
                                        <h6 className="badge badge-light-success float-rightd-inline-block m-0">-7.99999</h6>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <h6>Devices</h6>
                                    </Col>
                                    <Col className='text-right'>
                                        <h2 className="mb-0">1042</h2>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h3 className="m-0"><i className="fas fa-circle text-success f-10 m-r-5"/>66%</h3>
                                        <span className="ml-3">Desktop</span>
                                    </Col>
                                    <Col>
                                        <h3 className="m-0"><i className="fas fa-circle text-primary f-10 m-r-5"/>26%</h3>
                                        <span className="ml-3">Tablet</span>
                                    </Col>
                                    <Col>
                                        <h3 className="m-0"><i className="fas fa-circle text-danger f-10 m-r-5"/>8%</h3>
                                        <span className="ml-3">Mobile</span>
                                    </Col>
                                </Row>
                                <ProgressBar className='progressbar-stack mt-4'>
                                    <ProgressBar variant="success" now={65} key={1} style={{height: '8px'}} />
                                    <ProgressBar variant="primary" now={25} key={2} style={{height: '8px'}} />
                                    <ProgressBar variant="danger" now={10} key={3} style={{height: '8px'}} />
                                </ProgressBar>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <h6 className="mb-1">New York , NY</h6>
                                <span className="d-block mb-2">Monday 2:00 PM</span>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-auto">
                                        <h2 className="text-c-purple m-0"><i className="feather icon-cloud-snow text-muted mr-2"/>23<sup className="f-20">°</sup></h2>
                                    </div>
                                    <div className="col text-right">
                                        <div className="form-group mb-1">
                                            <label className="m-r-5 f-20 mb-0">°C</label>
                                            <div className="switch switch-primary d-inline">
                                                <input type="checkbox" id="switch-a-1" defaultChecked={true}/>
                                                <label htmlFor="switch-a-1" className="cr"/>
                                            </div>
                                            <label className="m-l-5 f-20 mb-0">°F</label>
                                        </div>
                                        <span className="d-block mt-1">Partly Cloudy</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <Row className='align-items-start'>
                                    <Col>
                                        <h2 className="mb-0">954</h2>
                                    </Col>
                                    <Col className='text-right'>
                                        <h6 className="">Location</h6>
                                    </Col>
                                </Row>
                                <Row className='mt-2'>
                                    <Col sm={6}>
                                        <span className="d-block"><i className="fas fa-circle text-c-green f-10 m-r-10"/>India</span>
                                        <span className="d-block"><i className="fas fa-circle text-c-red f-10 m-r-10"/>France</span>
                                        <span className="d-block"><i className="fas fa-circle text-c-blue f-10 m-r-10"/>Other</span>
                                    </Col>
                                    <Col sm={6}>
                                        <span className="d-block"><i className="fas fa-circle text-c-yellow f-10 m-r-10"/>United states</span>
                                        <span className="d-block"><i className="fas fa-circle text-c-purple f-10 m-r-10"/>United Kingdom</span>
                                    </Col>
                                </Row>

                                <ProgressBar className='mt-3'>
                                    <ProgressBar variant="success" now={35} key={1} label='65%' />
                                    <ProgressBar variant="danger" now={15} key={2} label='25%' />
                                    <ProgressBar variant="primary" now={10} key={3} label='10%' />
                                    <ProgressBar variant="warning" now={25} key={4} label='10%' />
                                    <ProgressBar variant="info" now={15} key={5} label='10%' />
                                </ProgressBar>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Overdue tasks</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <h2 className="m-0"><i className="feather icon-arrow-up text-c-green"/>4</h2>
                                    </Col>
                                    <Col className="text-right">
                                        <h5 className="text-c-green m-0">15%</h5>
                                        <span className="d-block">Last Month:6</span>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col sm='auto'>
                                        <span>Revenue</span>
                                    </Col>
                                    <Col className='text-right'>
                                        <Dropdown className='float-right'>
                                            <Dropdown.Toggle variant="link" id="dropdown-basic" className="btn waves-effect waves-light btn-sm btn-outline-secondary ">
                                                This Year
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href={DEMO.BLANK_LINK}>1 Week</Dropdown.Item>
                                                <Dropdown.Item href={DEMO.BLANK_LINK}>2 Month</Dropdown.Item>
                                                <Dropdown.Item href={DEMO.BLANK_LINK}>3 Year</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                </Row>
                                <div className="mt-4">
                                    <ProgressBar now={60} style={{height: '10px'}} label='60%'/>
                                </div>
                                <Row>
                                    <Col sm='auto'>
                                        <span className="text-uppercase mt-2 d-block">Earning</span>
                                        <h5 className="mb-0">$6.455</h5>
                                    </Col>
                                    <Col className="text-right">
                                        <span className="text-uppercase mt-2 d-block">Expense</span>
                                        <h5 className="mb-0">$3.869</h5>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col sm='auto'>
                                        <span className="text-uppercase d-block">budget</span>
                                    </Col>
                                    <Col className="text-right">
                                        <span className="text-uppercase d-block">Earning</span>
                                        <h5 className="mb-0">$5,569 of $1,000</h5>
                                    </Col>
                                </Row>
                                <div className="mt-2">
                                    <ProgressBar variant='success' now={40} style={{height: '10px'}} label='40%'/>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body className='p-0'>
                                <Row className="d-flex align-items-center m-0">
                                    <Col className="text-center">
                                        <div style={{padding:'20px 25px'}}>
                                            <h2 className="text-c-purple mb-0">19<sup className="f-20">°</sup></h2>
                                            <span>Sunny</span>
                                        </div>
                                    </Col>
                                    <Col className="text-center bg-primary p-0">
                                        <div style={{padding:'20px 25px'}}>
                                            <i className="feather icon-sun f-36 text-white"/>
                                            <h6 className="mt-2 mb-0 text-white f-w-400">New York , NY</h6>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className='social-widget-card'>
                            <Card.Body className='bg-facebook'>
                                <h3 className="text-white m-0">1165 +</h3>
                                <span className="m-t-10">Facebook Users</span>
                                <i className="fab fa-facebook"/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className='social-widget-card'>
                            <Card.Body className='bg-twitter'>
                                <h3 className="text-white m-0">780 +</h3>
                                <span className="m-t-10">Twitter Users</span>
                                <i className="fab fa-twitter"/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className='social-widget-card'>
                            <Card.Body className='bg-linkedin'>
                                <h3 className="text-white m-0">998 +</h3>
                                <span className="m-t-10">Linked In Users</span>
                                <i className="fab fa-linkedin-in"/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className='social-widget-card'>
                            <Card.Body className='bg-googleplus'>
                                <h3 className="text-white m-0">650 +</h3>
                                <span className="m-t-10">Google Plus Users</span>
                                <i className="fab fa-google-plus-g"/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className='ticket-card'>
                            <Card.Body>
                                <p className="m-b-25 badge-light-danger lbl-card"><i className="fas fa-folder-open m-r-5"/> Open Tickets</p>
                                <div className="text-center">
                                    <h2 className="m-b-0 d-inline-block text-c-red">128</h2>
                                    <p className="m-b-0 d-inline-block">Tickets</p>
                                    <p className="m-b-0 m-t-10"><i className="fas fa-caret-down m-r-10 f-18 text-c-red"/>From Previous Month</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className='ticket-card'>
                            <Card.Body>
                                <p className="m-b-25 badge-light-primary lbl-card"><i className="fas fa-file-archive m-r-5"/> Close Tickets</p>
                                <div className="text-center">
                                    <h2 className="m-b-0 d-inline-block text-c-blue">134</h2>
                                    <p className="m-b-0 d-inline-block">Tickets</p>
                                    <p className="m-b-0 m-t-10"><i className="fas fa-caret-up m-r-10 f-18 text-c-blue"/>From Previous Month</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className='ticket-card'>
                            <Card.Body>
                                <p className="m-b-25 badge-light-success lbl-card"><i className="fas fa-users m-r-5"/> New Clients</p>
                                <div className="text-center">
                                    <h2 className="m-b-0 d-inline-block text-c-green">307</h2>
                                    <p className="m-b-0 d-inline-block">Clients</p>
                                    <p className="m-b-0 m-t-10"><i className="fas fa-caret-up m-r-10 f-18 text-c-green"/>From Previous Month</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className='ticket-card'>
                            <Card.Body>
                                <p className="m-b-25 badge-light-warning lbl-card"><i className="fas fa-database m-r-5"/> New Orders</p>
                                <div className="text-center">
                                    <h2 className="m-b-0 d-inline-block text-c-yellow">231</h2>
                                    <p className="m-b-0 d-inline-block">Orders</p>
                                    <p className="m-b-0 m-t-10"><i className="fas fa-caret-up m-r-10 f-18 text-c-yellow"/>From Previous Month</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default WdgtStatistic;