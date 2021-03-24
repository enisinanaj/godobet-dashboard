import React from 'react';
import Chart from "react-apexcharts";
import {
    Row,
    Col,
    Card,
    ProgressBar,
    Alert,
    Tabs,
    Tab,
    Table
} from 'react-bootstrap';

import Aux from "./../../../hoc/_Aux";
import ModalToDo from "../../../App/components/ToDo/ModalToDo";
import DEMO from "../../../store/constant";

import leadChart from './chart/lead-chart';
import projectState from  './chart/project-state-chart';

import avatar1 from '../../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../../assets/images/user/avatar-3.jpg';
import avatar4 from '../../../assets/images/user/avatar-4.jpg';

const initialModalTodo = [
    {
        note: 'I\'m sure _I_ shan\'t be able! I shall think.',
        complete: false
    },
    {
        note: 'And when I was a.',
        complete: true
    },
    {
        note: 'Test',
        complete: false
    },
    {
        note: 'Lory hastily. \'I don\'t much care where',
        complete: false
    },
    {
        note: 'Hatter: \'it\'s very interesting',
        complete: false
    },
    {
        note: 'Alice, they all moved off, and',
        complete: false
    }
];

class Dashboard extends React.Component {

    render() {
        return (
            <Aux>
                <Row>
                    <Col xl={3} md={6}>
                        <Card className="statustic-progress-card">
                            <Card.Body>
                                <h5 className="mb-3">Awaiting payment</h5>
                                <Row className="align-items-center">
                                    <Col>
                                        <label className="badge badge-light-success">35% <i className="m-l-10 feather icon-arrow-up"/></label>
                                    </Col>
                                    <Col className="text-right">
                                        <h5 className="">9 / 14</h5>
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
                                <h5 className="mb-3">Converted leads</h5>
                                <Row className="align-items-center">
                                    <Col>
                                        <label className="badge badge-light-primary">28% <i className="m-l-10 feather icon-arrow-up"/></label>
                                    </Col>
                                    <Col className="text-right">
                                        <h5 className="">9 / 50</h5>
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
                                <h5 className="mb-3">Projects in progress</h5>
                                <Row className="align-items-center">
                                    <Col>
                                        <label className="badge badge-light-danger">87% <i className="m-l-10 feather icon-arrow-up"/></label>
                                    </Col>
                                    <Col className="text-right">
                                        <h5 className="">6 / 6</h5>
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
                                <h5 className="mb-3">Tasks not finished</h5>
                                <Row className="align-items-center">
                                    <Col>
                                        <label className="badge badge-light-warning">32% <i className="m-l-10 feather icon-arrow-up"/></label>
                                    </Col>
                                    <Col className="text-right">
                                        <h5 className="">51 / 67</h5>
                                    </Col>
                                </Row>
                                <div className="m-t-5">
                                    <ProgressBar variant='warning' now={32}/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={8}>
                        <Card className="statustic-progress-card">
                            <Card.Body>
                                <Row>
                                    <Col md={6} lg={4} sm={6}>
                                        <h5>Invoice overview</h5>
                                        <hr/>
                                        <Row className="align-items-center">
                                            <Col>
                                                <h6 className="">0 Draft</h6>
                                            </Col>
                                            <Col className="text-right">
                                                <p className="mb-0">0.00%</p>
                                            </Col>
                                            <Col sm={12}>
                                                <ProgressBar now={0}/>
                                            </Col>
                                        </Row>
                                        <Row className="align-items-center mt-3">
                                            <Col>
                                                <h6 className="">9 Not Sent</h6>
                                            </Col>
                                            <Col className="text-right">
                                                <p className="mb-0">64.29%</p>
                                            </Col>
                                            <Col sm={12}>
                                                <ProgressBar now={64.29}/>
                                            </Col>
                                        </Row>
                                        <Row className="align-items-center mt-3">
                                            <Col>
                                                <h6 className="text-danger">6 Unpaid</h6>
                                            </Col>
                                            <Col className="text-right">
                                                <p className="mb-0">42.86%</p>
                                            </Col>
                                            <Col sm={12}>
                                                <ProgressBar variant='danger' now={42.86}/>
                                            </Col>
                                        </Row>
                                        <Row className="align-items-center mt-3">
                                            <Col className="pr-0">
                                                <h6 className="text-warning">3 Partially Paid</h6>
                                            </Col>
                                            <Col className="pl-0 text-right">
                                                <p className="mb-0">21.43%</p>
                                            </Col>
                                            <Col sm={12}>
                                                <ProgressBar variant='warning' now={21.43}/>
                                            </Col>
                                        </Row>
                                        <Row className="align-items-center mt-3">
                                            <Col className="pr-0">
                                                <h6 className="text-warning">0 Overdue</h6>
                                            </Col>
                                            <Col className="pl-0 text-right">
                                                <p className="mb-0">0.00%</p>
                                            </Col>
                                            <Col sm={12}>
                                                <ProgressBar now={0}/>
                                            </Col>
                                        </Row>
                                        <Row className="align-items-center mt-3">
                                            <Col className="pr-0">
                                                <h6 className="text-success">5 Paid</h6>
                                            </Col>
                                            <Col className="pl-0 text-right">
                                                <p className="mb-0">35.71%</p>
                                            </Col>
                                            <Col sm={12}>
                                                <ProgressBar variant='success' now={35.71}/>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={6} lg={4} sm={6} className="mt-md-0 mt-3">
                                        <h5>Estimate overview</h5>
                                        <hr/>
                                        <Row className="align-items-center">
                                            <Col>
                                                <h6 className="">3 Draft</h6>
                                            </Col>
                                            <Col className="text-right">
                                                <p className="mb-0">27.27%</p>
                                            </Col>
                                            <Col sm={12}>
                                                <ProgressBar variant='primary' now={27.27}/>
                                            </Col>
                                        </Row>
                                        <Row className="align-items-center mt-3">
                                            <Col>
                                                <h6 className="">2 Not Sent</h6>
                                            </Col>
                                            <Col className="text-right">
                                                <p className="mb-0">18.18%</p>
                                            </Col>
                                            <Col sm={12}>
                                                <ProgressBar variant='primary' now={18.18}/>
                                            </Col>
                                        </Row>
                                        <Row className="align-items-center mt-3">
                                            <Col>
                                                <h6 className="text-primary">5 Sent</h6>
                                            </Col>
                                            <Col className="text-right">
                                                <p className="mb-0">45.45%</p>
                                            </Col>
                                            <Col sm={12}>
                                                <ProgressBar variant='primary' now={45.45}/>
                                            </Col>
                                        </Row>
                                        <Row className="align-items-center mt-3">
                                            <Col className="pr-0">
                                                <h6 className="text-warning">0 Expired</h6>
                                            </Col>
                                            <Col className="pl-0 text-right">
                                                <p className="mb-0">0.00%</p>
                                            </Col>
                                            <Col sm={12}>
                                                <ProgressBar variant='warning' now={0}/>
                                            </Col>
                                        </Row>
                                        <Row className="align-items-center mt-3">
                                            <Col className="pr-0">
                                                <h6 className="text-danger">3 Declined</h6>
                                            </Col>
                                            <Col className="pl-0 text-right">
                                                <p className="mb-0">27.27%</p>
                                            </Col>
                                            <Col sm={12}>
                                                <ProgressBar variant='primary' now={27.27}/>
                                            </Col>
                                        </Row>
                                        <Row className="align-items-center mt-3">
                                            <Col className="pr-0">
                                                <h6 className="text-success">0 Accepted</h6>
                                            </Col>
                                            <Col className="pl-0 text-right">
                                                <p className="mb-0">0.00%</p>
                                            </Col>
                                            <Col sm={12}>
                                                <ProgressBar variant='success' now={0}/>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={12} sm={6} lg={4} className="mt-md-0 mt-3">
                                        <h5>Proposal overview</h5>
                                        <hr/>
                                        <Row className="align-items-center">
                                            <Col>
                                                <h6 className="">1 Draft</h6>
                                            </Col>
                                            <Col className="text-right">
                                                <p className="mb-0">25.00%</p>
                                            </Col>
                                            <Col sm={12}>
                                                <ProgressBar now={25}/>
                                            </Col>
                                        </Row>
                                        <Row className="align-items-center mt-3">
                                            <Col>
                                                <h6 className="">2 Not Sent</h6>
                                            </Col>
                                            <Col className="text-right">
                                                <p className="mb-0">25.00%</p>
                                            </Col>
                                            <Col sm={12}>
                                                <ProgressBar now={25}/>
                                            </Col>
                                        </Row>
                                        <Row className="align-items-center mt-3">
                                            <Col>
                                                <h6 className="">1 Sent</h6>
                                            </Col>
                                            <Col className="text-right">
                                                <p className="mb-0">25.00%</p>
                                            </Col>
                                            <Col sm={12}>
                                                <ProgressBar now={25}/>
                                            </Col>
                                        </Row>
                                        <Row className="align-items-center mt-3">
                                            <Col className="pr-0">
                                                <h6 className="text-primary">0 Revised</h6>
                                            </Col>
                                            <Col className="pl-0 text-right">
                                                <p className="mb-0">0.00%</p>
                                            </Col>
                                            <Col sm={12}>
                                                <ProgressBar variant='warning' now={0}/>
                                            </Col>
                                        </Row>
                                        <Row className="align-items-center mt-3">
                                            <Col className="pr-0">
                                                <h6 className="text-danger">0 Declined</h6>
                                            </Col>
                                            <Col className="pl-0 text-right">
                                                <p className="mb-0">0.00%</p>
                                            </Col>
                                            <Col sm={12}>
                                                <ProgressBar now={0}/>
                                            </Col>
                                        </Row>
                                        <Row className="align-items-center mt-3">
                                            <Col className="pr-0">
                                                <h6 className="text-success">0 Accepted</h6>
                                            </Col>
                                            <Col className="pl-0 text-right">
                                                <p className="mb-0">25.00</p>
                                            </Col>
                                            <Col sm={12}>
                                                <ProgressBar variant='success' now={25}/>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className="mt-3 text-center">
                                    <Col lg={4} xs={12} md={12}>
                                        <Alert variant='danger' className="mb-0">
                                            <h3 className="alert-heading">$10,988.48</h3>
                                            <span className="">Outstanding Invoices</span>
                                        </Alert>
                                    </Col>
                                    <Col lg={4} xs={12} md={12} className="mt-md-0 mt-3">
                                        <Alert variant='danger' className="mb-0">
                                            <h3 className="alert-heading">$0.00</h3>
                                            <span className="">Past Due Invoices</span>
                                        </Alert>
                                    </Col>
                                    <Col lg={4} xs={12} md={12} className="mt-md-0 mt-3">
                                        <Alert variant='success' className="mb-0">
                                            <h3 className="alert-heading">$27,115.00</h3>
                                            <span className="">Paid Invoices</span>
                                        </Alert>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card className='table-card'>
                            <Card.Body>
                                <Tabs defaultActiveKey="my-task" className="p-20">
                                    <Tab eventKey="my-task" title="My Tasks">
                                        <Table responsive hover>
                                            <thead>
                                            <tr>
                                                <th>User</th>
                                                <th>project</th>
                                                <th>Completed</th>
                                                <th>Status</th>
                                                <th>Date</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td><img className="rounded-circle" style={{width:'40px'}} src={avatar1} alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">Social Media App</h6>
                                                    <p className="m-0">Assigned to <span className="text-c-green">Tristan Madsen</span></p>
                                                </td>
                                                <td>326,134</td>
                                                <td className="text-c-green">68%</td>
                                                <td>October 26, 2017</td>
                                            </tr>
                                            <tr>
                                                <td><img className="rounded-circle" style={{width:'40px'}} src={avatar2} alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">Newspaper Wordpress Web</h6>
                                                    <p className="m-0">Assigned to <span className="text-c-red">Marcus Poulsen</span></p>
                                                </td>
                                                <td>110,134</td>
                                                <td className="text-c-red">46%</td>
                                                <td>September 4, 2017</td>
                                            </tr>
                                            <tr>
                                                <td><img className="rounded-circle" style={{width:'40px'}} src={avatar3} alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">Dashboard UI Kit Design</h6>
                                                    <p className="m-0">Assigned to <span className="text-c-blue">Felix Johansen</span></p>
                                                </td>
                                                <td>226,134</td>
                                                <td className="text-c-blue">31%</td>
                                                <td>November 14, 2017</td>
                                            </tr>
                                            <tr>
                                                <td><img className="rounded-circle" style={{width:'40px'}} src={avatar1} alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">Social Media App</h6>
                                                    <p className="m-0">Assigned to <span className="text-c-green">Ida Jorgensen</span></p>
                                                </td>
                                                <td>500,134</td>
                                                <td className="text-c-green">85%</td>
                                                <td>December 14, 2017</td>
                                            </tr>
                                            <tr>
                                                <td><img className="rounded-circle" style={{width:'40px'}} src={avatar3} alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">Social Media App</h6>
                                                    <p className="m-0">Assigned to <span className="text-c-red">Tristan Madsen</span></p>
                                                </td>
                                                <td>326,134</td>
                                                <td className="text-c-red">68%</td>
                                                <td>January 26, 2017</td>
                                            </tr>
                                            <tr>
                                                <td><img className="rounded-circle" style={{width:'40px'}} src={avatar4} alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">Newspaper Wordpress Web</h6>
                                                    <p className="m-0">Assigned to <span className="text-c-blue">Marcus Poulsen</span></p>
                                                </td>
                                                <td>110,134</td>
                                                <td className="text-c-blue">46%</td>
                                                <td>April 4, 2017</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </Tab>
                                    <Tab eventKey="my-project" title="My Projects">
                                        <Table responsive hover>
                                            <thead>
                                            <tr>
                                                <th>Assigned</th>
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
                                                            <input type="checkbox" className="custom-control-input"/>
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
                                                        <img src={avatar2} alt="user" className="img-radius wid-40 align-top m-r-15" />
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
                                        <div className="text-right m-r-20">
                                            <a href={DEMO.BLANK_LINK} className=" b-b-primary text-primary">View all Projects</a>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="tickets" title="Tickets">
                                        <Table responsive hover className='table-borderless'>
                                            <thead>
                                            <tr>
                                                <th>Due</th>
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
                                            </tbody>
                                        </Table>
                                        <div className="text-right m-r-20">
                                            <a href={DEMO.BLANK_LINK} className=" b-b-primary text-primary">View all Projects</a>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </Card.Body>
                        </Card>
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
                    <Col md={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>My To Do Items</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <ModalToDo todoList={initialModalTodo}/>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <h5>Leads Overview</h5>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...leadChart}/>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <h5>Statistics by Project Status</h5>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...projectState}/>
                            </Card.Body>
                        </Card>
                        <Card className="task-card">
                            <Card.Header>
                                <h5>Tasks</h5>
                            </Card.Header>
                            <Card.Body>
                                <ul className="list-unstyled task-list">
                                    <li>
                                        <i className="feather icon-check f-w-600 task-icon bg-c-green"/>
                                        <p className="m-b-5">8:50</p>
                                        <h6 className="text-muted">Call to customer <span className="text-c-blue"> <a href={DEMO.BLANK_LINK} className="text-c-blue">Jacob</a> </span> and discuss the</h6>
                                    </li>
                                    <li>
                                        <i className="task-icon bg-c-blue"/>
                                        <p className="m-b-5">Sat, 5 Mar</p>
                                        <h6 className="text-muted">Design mobile Application</h6>
                                    </li>
                                    <li>
                                        <i className="task-icon bg-c-red"/>
                                        <p className="m-b-5">Sun, 17 Feb</p>
                                        <h6 className="text-muted"><span className="text-c-blue"><a href={DEMO.BLANK_LINK} className="text-c-blue">Jeny</a></span> assign you a task <span className="text-c-blue"><a href={DEMO.BLANK_LINK} className="text-c-blue">Mockup Design.</a></span></h6>
                                    </li>
                                    <li>
                                        <i className="task-icon bg-c-yellow"/>
                                        <p className="m-b-5">Sat, 18 Mar</p>
                                        <h6 className="text-muted mb-3">Design logo</h6>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Dashboard;