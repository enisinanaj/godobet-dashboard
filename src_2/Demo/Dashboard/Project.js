import React from 'react';
import Chart from "react-apexcharts";
import {Row, Col, Card, ProgressBar, Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import avatar4 from '../../assets/images/user/avatar-4.jpg';

import secEcommerceChartLine from './chart/sale-sec-ecommerce-chart-line';
import secEcommerceChartBar from './chart/sale-sec-ecommerce-chart-bar';
import secEcommerceChartBar1 from './chart/project-sec-ecommerce-chart-bar-1';
import DEMO from "../../store/constant";

class Project extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
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

                    <Col md={6} xl={4}>
                        <Card className="overflow-hidden">
                            <Card.Body className="bg-c-green pb-0">
                                <Row className="text-white">
                                    <Col sm='auto'>
                                        <h4 className="m-b-5 text-white">$654</h4>
                                        <h6 className="text-white">+1.65(2.56%)</h6>
                                    </Col>
                                    <Col className="text-right">
                                        <h6 className="text-white">Friday</h6>
                                    </Col>
                                </Row>
                                <Chart {...secEcommerceChartLine} />
                                <Row className="justify-content-center">
                                    <Col sm={8}>
                                        <Chart {...secEcommerceChartBar} />
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer>
                                <h4>$2654.00</h4>
                                <p className="text-muted">Sales in Nov.</p>
                                <Row>
                                    <Col>
                                        <p className="text-muted m-b-5">From Market</p>
                                        <h6>$1860.00</h6>
                                    </Col>
                                    <Col>
                                        <p className="text-muted m-b-5">Referral</p>
                                        <h6>$500.00</h6>
                                    </Col>
                                    <Col>
                                        <p className="text-muted m-b-5">Affiliate</p>
                                        <h6>$294.00</h6>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <Row className="justify-content-center text-center">
                                    <Col sm={5}>
                                        <h6 className="text-muted">Real-Time Visits</h6>
                                        <h3>53k</h3>
                                    </Col>
                                    <Col sm={5}>
                                        <h6 className="text-muted">Returning Visitors</h6>
                                        <h3>10k</h3>
                                    </Col>
                                </Row>
                                <Chart {...secEcommerceChartBar1} />
                                <Row className="justify-content-center text-center b-t-default m-t-15">
                                    <Col sm={3} className="b-r-default">
                                        <h5>85%</h5>
                                        <p className="text-muted m-b-0">Satisfied</p>
                                    </Col>
                                    <Col sm={3} className="b-r-default">
                                        <h5>6%</h5>
                                        <p className="text-muted m-b-0">Unsatisfied</p>
                                    </Col>
                                    <Col sm={3}>
                                        <h5>9%</h5>
                                        <p className="text-muted m-b-0">NA</p>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card className="app-design">
                            <Card.Body>
                                <button className="btn btn-primary float-right">Completed</button>
                                <h6 className="f-w-400 text-muted">App Design And Development</h6>
                                <p className="text-c-blue f-w-400 p-t-10">Android</p>
                                <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                <div className="design-description d-inline-block m-r-40">
                                    <h3 className="f-w-400">678</h3>
                                    <p className="text-muted">Question</p>
                                </div>
                                <div className="design-description d-inline-block">
                                    <h3 className="f-w-400">1,452</h3>
                                    <p className="text-muted">Comments</p>
                                </div>
                                <div className="team-box p-b-20 p-t-20">
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

                    <Col xl={6} md={12}>
                        <Card className="table-card">
                            <Card.Header>
                                <h5>Projects</h5>
                            </Card.Header>
                            <Card.Body className='pb-0'>
                                <Table responsive hover>
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
                        <Card className="table-card">
                            <Card.Header>
                                <h5>Active Tickets</h5>
                            </Card.Header>
                            <Card.Body className='pb-0'>
                                <Table responsive hover borderless>
                                    <thead>
                                    <tr>
                                        <th>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input"/>
                                                    <span className="custom-control-label"/>
                                                </label>
                                            </div>
                                            Due
                                        </th>
                                        <th>User</th>
                                        <th>Description</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input"/>
                                                    <span className="custom-control-label"/>
                                                </label>
                                            </div>
                                            <div className="d-inline-block align-middle text-center">
                                                <h6>12</h6>
                                                <p className="text-muted m-b-0">hours</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-inline-block align-middle">
                                                <img src={avatar4} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                                <div className="d-inline-block">
                                                    <h6 className="text-muted m-b-0 m-t-15">John Deo</h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-inline-block align-middle">
                                                <h6>[#1183] Workaround for OS X selects printing bug</h6>
                                                <p className="text-muted m-b-0">Chrome fixed the bug several versions ago, thus rendering this...</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input"/>
                                                    <span className="custom-control-label"/>
                                                </label>
                                            </div>
                                            <div className="d-inline-block align-middle text-center">
                                                <h6>16</h6>
                                                <p className="text-muted m-b-0">hours</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-inline-block align-middle">
                                                <img src={avatar3} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                                <div className="d-inline-block">
                                                    <h6 className="text-muted m-b-0 m-t-15">Jems Win</h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-inline-block align-middle">
                                                <h6>[#1249] Vertically center carousel controls</h6>
                                                <p className="text-muted m-b-0">Try any carousel control and reduce the screen width below...</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input"/>
                                                    <span className="custom-control-label"/>
                                                </label>
                                            </div>
                                            <div className="d-inline-block align-middle text-center">
                                                <h6>40</h6>
                                                <p className="text-muted m-b-0">hours</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-inline-block align-middle">
                                                <img src={avatar2} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                                <div className="d-inline-block">
                                                    <h6 className="text-muted m-b-0 m-t-15">Jeny Wiliiam</h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-inline-block align-middle">
                                                <h6>[#1254] Inaccurate small pagination height</h6>
                                                <p className="text-muted m-b-0">The height of pagination elements is not consistent with...</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="chk-option">
                                                <label className="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" className="custom-control-input"/>
                                                    <span className="custom-control-label"/>
                                                </label>
                                            </div>
                                            <div className="d-inline-block align-middle text-center">
                                                <h6>16</h6>
                                                <p className="text-muted m-b-0">hours</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-inline-block align-middle">
                                                <img src={avatar3} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                                <div className="d-inline-block">
                                                    <h6 className="text-muted m-b-0 m-t-15">Jems Win</h6>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-inline-block align-middle">
                                                <h6>[#1249] Vertically center carousel controls</h6>
                                                <p className="text-muted m-b-0">Try any carousel control and reduce the screen width below...</p>
                                            </div>
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

export default Project;