import React from 'react';
import {Row, Col, Card, ProgressBar, Table, Tabs, Tab} from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import avatar4 from '../../assets/images/user/avatar-4.jpg';
import avatar5 from '../../assets/images/user/avatar-5.jpg';

import p1 from '../../assets/images/widget/p1.jpg';
import p2 from '../../assets/images/widget/p2.jpg';
import p3 from '../../assets/images/widget/p3.jpg';
import p4 from '../../assets/images/widget/p4.jpg';

import slider5 from '../../assets/images/widget/slider5.jpg';
import dashboard1 from '../../assets/images/widget/dashborad-1.jpg';
import dashboard2 from '../../assets/images/widget/dashborad-2.jpg';
import dashboard3 from '../../assets/images/widget/dashborad-3.jpg';

import germany from '../../assets/images/widget/GERMANY.jpg';
import australia from '../../assets/images/widget/AUSTRALIA.jpg';
import usa from '../../assets/images/widget/USA.jpg';
import uk from '../../assets/images/widget/UK.jpg';
import brazil from '../../assets/images/widget/BRAZIL.jpg';

import phone1 from '../../assets/images/widget/PHONE1.jpg';
import phone2 from '../../assets/images/widget/PHONE2.jpg';
import phone3 from '../../assets/images/widget/PHONE3.jpg';
import phone4 from '../../assets/images/widget/PHONE4.jpg';

class WdgtData extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col xl={6} md={12}>
                        <Card>
                            <Card.Header>
                                <h5>To Do List</h5>
                            </Card.Header>
                            <Card.Body className="widget-last-task">
                                <div className="new-task">
                                    <div className="to-do-list mb-3">
                                        <div className="d-inline-block">
                                            <label className="check-task custom-control custom-checkbox d-flex justify-content-center">
                                                <input type="checkbox" className="custom-control-input" />
                                                <span className="custom-control-label">Check your Email</span>
                                            </label>
                                        </div>
                                        <div className="float-right"><a href={DEMO.BLANK_LINK} className="delete_todolist"><i className="far fa-trash-alt"/></a></div>
                                    </div>
                                    <div className="to-do-list mb-3">
                                        <div className="d-inline-block">
                                            <label className="check-task custom-control custom-checkbox d-flex justify-content-center">
                                                <input type="checkbox" className="custom-control-input" />
                                                <span className="custom-control-label">Make YouTube Video</span>
                                            </label>
                                        </div>
                                        <div className="float-right"><a href={DEMO.BLANK_LINK} className="delete_todolist"><i className="far fa-trash-alt"/></a></div>
                                    </div>
                                    <div className="to-do-list mb-3">
                                        <div className="d-inline-block">
                                            <label className="check-task custom-control custom-checkbox d-flex justify-content-center">
                                                <input type="checkbox" className="custom-control-input" />
                                                <span className="custom-control-label">Create Banner</span>
                                            </label>
                                        </div>
                                        <div className="float-right"><a href={DEMO.BLANK_LINK} className="delete_todolist"><i className="far fa-trash-alt"/></a></div>
                                    </div>
                                    <div className="to-do-list mb-4">
                                        <div className="d-inline-block">
                                            <label className="check-task custom-control custom-checkbox d-flex justify-content-center">
                                                <input type="checkbox" className="custom-control-input"/>
                                                <span className="custom-control-label">Upload Project</span>
                                            </label>
                                        </div>
                                        <div className="float-right"><a href={DEMO.BLANK_LINK} className="delete_todolist"><i className="far fa-trash-alt"/></a></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="floating-label" htmlFor="Task">Add Task</label>
                                    <input type="text" name="task-insert" className="form-control add_task_todo" id="Task" />
                                    <div className="form-icon">
                                        <button className="btn btn-primary btn-icon" id="add-btn">
                                            <i className="feather icon-plus"/>
                                        </button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card>
                            <Card.Header>
                                <h5>My Projects</h5>
                            </Card.Header>
                            <Card.Body className="widget-last-task">
                                <p className="m-b-10">New Dashboard <span className="float-right">5 Mins ago</span></p>
                                <ul className="list-unstyled m-b-25">
                                    <li className="d-inline-block"><img src={avatar2} alt="user" className="img-radius wid-30 m-r-15" data-toggle="tooltip" data-placement="top" title="Tooltip on top"/></li>
                                    <li className="d-inline-block"><img src={avatar3} alt="user" className="img-radius wid-30 m-r-15" data-toggle="tooltip" data-placement="top" title="Tooltip on top"/></li>
                                    <li className="d-inline-block"><img src={avatar2} alt="user" className="img-radius wid-30 m-r-15" data-toggle="tooltip" data-placement="top" title="Tooltip on top"/></li>
                                    <li className="d-inline-block"><img src={avatar3} alt="user" className="img-radius wid-30 m-r-15" data-toggle="tooltip" data-placement="top" title="Tooltip on top"/></li>
                                </ul>
                                <p className="m-b-10 ">Web Design <span className="float-right">8 Mins ago</span></p>
                                <ul className="list-unstyled  m-b-25">
                                    <li className="d-inline-block"><img src={avatar2} alt="user" className="img-radius wid-30 m-r-15" data-toggle="tooltip" data-placement="top" title="Tooltip on top"/></li>
                                    <li className="d-inline-block"><img src={avatar2} alt="user" className="img-radius wid-30 m-r-15" data-toggle="tooltip" data-placement="top" title="Tooltip on top"/></li>
                                    <li className="d-inline-block"><img src={avatar3} alt="user" className="img-radius wid-30 m-r-15" data-toggle="tooltip" data-placement="top" title="Tooltip on top"/></li>
                                </ul>
                                <p className="m-b-10">Android Design <span className="float-right">12 Mins ago</span></p>
                                <ul className="list-unstyled">
                                    <li className="d-inline-block"><img src={avatar4} alt="user" className="img-radius wid-30 m-r-15" data-toggle="tooltip" data-placement="top" title="Tooltip on top"/></li>
                                    <li className="d-inline-block"><img src={avatar2} alt="user" className="img-radius wid-30 m-r-15" data-toggle="tooltip" data-placement="top" title="Tooltip on top"/></li>
                                    <li className="d-inline-block"><img src={avatar3} alt="user" className="img-radius wid-30 m-r-15" data-toggle="tooltip" data-placement="top" title="Tooltip on top"/></li>
                                </ul>
                                <div className="form-group m-t-15">
                                    <label className="floating-label" htmlFor="Project">Add Project</label>
                                    <input type="text" name="task-insert" className="form-control" id="Project"/>
                                    <div className="form-icon">
                                        <button className="btn btn-primary btn-icon">
                                            <i className="feather icon-plus"/>
                                        </button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className="trafic-card">
                            <Card.Header>
                                <h5>Traffic Sources</h5>
                            </Card.Header>
                            <Card.Body>
                                <p className="m-b-10">Direct <span className="float-right"><i className="fa fa-caret-up m-r-10"/>25%</span></p>
                                <div className="blue">
                                    <ProgressBar variant='primary' now={75}/>
                                </div>
                                <p className="m-b-10 m-t-30">Social <span className="float-right"><i className="fa fa-caret-down m-r-10"/>58</span></p>
                                <div className="green">
                                    <ProgressBar variant='success' now={50}/>
                                </div>
                                <p className="m-b-10 m-t-30">Referral <span className="float-right"><i className="fa fa-caret-up m-r-10"/>20%</span></p>
                                <div className="red">
                                    <ProgressBar variant='danger' now={80}/>
                                </div>
                                <p className="m-b-10 m-t-30">Bounce <span className="float-right"><i className="fa fa-caret-down m-r-10"/>580</span></p>
                                <div className="yellow">
                                    <ProgressBar variant='warning' now={40}/>
                                </div>
                                <p className="m-b-10 m-t-30">Internet <span className="float-right"><i className="fa fa-caret-up m-r-10"/>70%</span></p>
                                <div className="purple">
                                    <ProgressBar variant='info' now={90}/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={8} md={12}>
                        <Card className="table-card">
                            <Card.Header>
                                <h5>Projects</h5>
                            </Card.Header>
                            <Card.Body>
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
                                <div className="text-right m-r-20">
                                    <a href={DEMO.BLANK_LINK} className=" b-b-primary text-primary">View all Projects</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card>
                            <Card.Header>
                                <h5>Team Members</h5>
                            </Card.Header>
                            <Card.Body>
                                <div className="align-middle m-b-30">
                                    <img src={avatar2} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                    <div className="d-inline-block">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6>David Jones</h6>
                                        </a>
                                        <p className="text-muted m-b-0">Developer</p>
                                    </div>
                                </div>
                                <div className="align-middle m-b-30">
                                    <img src={avatar3} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                    <div className="d-inline-block">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6>David Jones</h6>
                                        </a>
                                        <p className="text-muted m-b-0">Developer</p>
                                    </div>
                                </div>
                                <div className="align-middle m-b-30">
                                    <img src={avatar3} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                    <div className="d-inline-block">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6>David Jones</h6>
                                        </a>
                                        <p className="text-muted m-b-0">Developer</p>
                                    </div>
                                </div>
                                <div className="align-middle m-b-30">
                                    <img src={avatar4} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                    <div className="d-inline-block">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6>David Jones</h6>
                                        </a>
                                        <p className="text-muted m-b-0">Developer</p>
                                    </div>
                                </div>
                                <div className="align-middle m-b-10">
                                    <img src={avatar3} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                    <div className="d-inline-block">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6>David Jones</h6>
                                        </a>
                                        <p className="text-muted m-b-0">Developer</p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <a href={DEMO.BLANK_LINK} className="b-b-primary text-primary">View all Projects</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={4} md={6}>
                        <Card className="user-activity-card">
                            <Card.Header>
                                <h5>User Activity</h5>
                            </Card.Header>
                            <Card.Body>
                                <div className="row m-b-25">
                                    <div className="col-auto p-r-0">
                                        <div className="u-img">
                                            <img src={slider5} alt="user" className="img-radius cover-img"/>
                                            <img src={avatar2} alt="user" className="img-radius profile-img"/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6 className="m-b-5">John Deo</h6>
                                        </a>
                                        <p className="text-muted m-b-5">Lorem Ipsum is simply dummy text.</p>
                                        <p className="text-muted m-b-0"><i className="fa fa-clock-o m-r-10"/>2 min ago</p>
                                    </div>
                                </div>
                                <div className="row m-b-25">
                                    <div className="col-auto p-r-0">
                                        <div className="u-img">
                                            <img src={slider5} alt="user" className="img-radius cover-img"/>
                                            <img src={avatar2} alt="user" className="img-radius profile-img"/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6 className="m-b-5">John Deo</h6>
                                        </a>
                                        <p className="text-muted m-b-5">Lorem Ipsum is simply dummy text.</p>
                                        <p className="text-muted m-b-0"><i className="fa fa-clock-o m-r-10"/>2 min ago</p>
                                    </div>
                                </div>
                                <div className="row m-b-25">
                                    <div className="col-auto p-r-0">
                                        <div className="u-img">
                                            <img src={slider5} alt="user" className="img-radius cover-img"/>
                                            <img src={avatar2} alt="user" className="img-radius profile-img"/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6 className="m-b-5">John Deo</h6>
                                        </a>
                                        <p className="text-muted m-b-5">Lorem Ipsum is simply dummy text.</p>
                                        <p className="text-muted m-b-0"><i className="fa fa-clock-o m-r-10"/>2 min ago</p>
                                    </div>
                                </div>
                                <div className="row m-b-25">
                                    <div className="col-auto p-r-0">
                                        <div className="u-img">
                                            <img src={slider5} alt="user" className="img-radius cover-img"/>
                                            <img src={avatar2} alt="user" className="img-radius profile-img"/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6 className="m-b-5">John Deo</h6>
                                        </a>
                                        <p className="text-muted m-b-5">Lorem Ipsum is simply dummy text.</p>
                                        <p className="text-muted m-b-0"><i className="fa fa-clock-o m-r-10"/>2 min ago</p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <a href={DEMO.BLANK_LINK} className="b-b-primary text-primary">View all Projects</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card className="user-Messages-card">
                            <Card.Header>
                                <h5>Messages</h5>
                            </Card.Header>
                            <Card.Body>
                                <div className="row m-b-30">
                                    <div className="col-auto p-r-0">
                                        <div className="u-img">
                                            <img src={avatar2} alt="user" className="img-radius profile-img"/>
                                            <span className="tot-msg">2</span>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6 className="m-b-5">John Deo <span className="text-muted float-right f-13">5:05 PM</span></h6>
                                        </a>
                                        <p className="text-muted m-b-0">Lorem Ipsum is simply.</p>
                                    </div>
                                </div>
                                <div className="row m-b-30">
                                    <div className="col-auto p-r-0">
                                        <div className="u-img">
                                            <img src={avatar2} alt="user" className="img-radius profile-img"/>
                                            <span className="tot-msg">3</span>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6 className="m-b-5">John Deo <span className="text-muted float-right f-13">5:05 PM</span></h6>
                                        </a>
                                        <p className="text-muted m-b-0">Lorem Ipsum is simply.</p>
                                    </div>
                                </div>
                                <div className="row m-b-30">
                                    <div className="col-auto p-r-0">
                                        <div className="u-img">
                                            <img src={avatar2} alt="user" className="img-radius profile-img"/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6 className="m-b-5">John Deo <span className="text-muted float-right f-13">5:05 PM</span></h6>
                                        </a>
                                        <p className="text-muted m-b-0">Lorem Ipsum is simply.</p>
                                    </div>
                                </div>
                                <div className="row m-b-30">
                                    <div className="col-auto p-r-0">
                                        <div className="u-img">
                                            <img src={avatar2} alt="user" className="img-radius profile-img"/>
                                            <span className="tot-msg">5</span>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6 className="m-b-5">John Deo <span className="text-muted float-right f-13">5:05 PM</span></h6>
                                        </a>
                                        <p className="text-muted m-b-0">Lorem Ipsum is simply.</p>
                                    </div>
                                </div>
                                <div className="row m-b-30">
                                    <div className="col-auto p-r-0">
                                        <div className="u-img">
                                            <img src={avatar2} alt="user" className="img-radius profile-img"/>
                                            <span className="tot-msg">1</span>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6 className="m-b-5">John Deo <span className="text-muted float-right f-13">5:05 PM</span></h6>
                                        </a>
                                        <p className="text-muted m-b-0">Lorem Ipsum is simply.</p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <a href={DEMO.BLANK_LINK} className="b-b-primary text-primary">View all Projects</a>
                                </div>
                            </Card.Body>
                        </Card>
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
                    </Col>

                    <Col xl={6} md={12}>
                        <Card className="latest-update-card">
                            <Card.Header>
                                <h5>Latest Updates</h5>
                            </Card.Header>
                            <Card.Body>
                                <div className="latest-update-box">
                                    <Row className="p-t-20 p-b-30">
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
                                    <Row className="p-b-30">
                                        <Col sm='auto' className="text-right update-meta">
                                            <p className="text-muted m-b-0 d-inline-flex">1 day ago</p>
                                            <i className="feather icon-check f-w-600 bg-c-green update-icon"/>
                                        </Col>
                                        <Col>
                                            <a href={DEMO.BLANK_LINK}>
                                                <h6>Database backup completed!</h6>
                                            </a>
                                            <p className="text-muted m-b-0">Download the <span className="text-c-blue"> <a href={DEMO.BLANK_LINK} className="text-c-blue">latest backup</a> </span>.</p>
                                        </Col>
                                    </Row>
                                    <Row className="p-b-0">
                                        <Col sm='auto' className="text-right update-meta">
                                            <p className="text-muted m-b-0 d-inline-flex">2 day ago</p>
                                            <i className="feather icon-facebook bg-facebook update-icon"/>
                                        </Col>
                                        <Col>
                                            <a href={DEMO.BLANK_LINK}>
                                                <h6>+2 Friend Requests</h6>
                                            </a>
                                            <p className="text-muted m-b-10">This is great, keep it up!</p>
                                            <Table responsive hover>
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
                                                <tr>
                                                    <td className="b-none">
                                                        <a href={DEMO.BLANK_LINK} className="align-middle">
                                                            <img src={avatar3} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                                            <div className="d-inline-block">
                                                                <h6>John Deo</h6>
                                                                <p className="text-muted m-b-0">Web Designer</p>
                                                            </div>
                                                        </a>
                                                    </td>
                                                </tr>
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
                    <Col xl={6} md={12}>
                        <Card className="table-card">
                            <Card.Header>
                                <h5>Recent Tickets</h5>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th>Status</th>
                                        <th>Subject</th>
                                        <th>Department</th>
                                        <th>Date</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><label className="badge badge-light-success">open</label></td>
                                        <td>Website down for one week</td>
                                        <td>Support</td>
                                        <td>Today 2:00</td>
                                    </tr>
                                    <tr>
                                        <td><label className="badge badge-light-primary">progress</label></td>
                                        <td>Loosing control on server</td>
                                        <td>Support</td>
                                        <td>Yesterday</td>
                                    </tr>
                                    <tr>
                                        <td><label className="badge badge-light-danger">closed</label></td>
                                        <td>Authorizations keys</td>
                                        <td>Support</td>
                                        <td>27, Aug</td>
                                    </tr>
                                    <tr>
                                        <td><label className="badge badge-light-success">open</label></td>
                                        <td>Restoring default settings</td>
                                        <td>Support</td>
                                        <td>Today 9:00</td>
                                    </tr>
                                    <tr>
                                        <td><label className="badge badge-light-primary">progress</label></td>
                                        <td>Loosing control on server</td>
                                        <td>Support</td>
                                        <td>Yesterday</td>
                                    </tr>
                                    <tr>
                                        <td><label className="badge badge-light-success">open</label></td>
                                        <td>Restoring default settings</td>
                                        <td>Support</td>
                                        <td>Today 9:00</td>
                                    </tr>
                                    <tr>
                                        <td><label className="badge badge-light-primary">progress</label></td>
                                        <td>Loosing control on server</td>
                                        <td>Support</td>
                                        <td>Yesterday</td>
                                    </tr>
                                    <tr>
                                        <td><label className="badge badge-light-danger">closed</label></td>
                                        <td>Authorizations keys</td>
                                        <td>Support</td>
                                        <td>27, Aug</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={8} md={12}>
                        <Card className="table-card">
                            <Card.Header>
                                <h5>Recent Tickets</h5>
                            </Card.Header>
                            <Card.Body>
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
                                            Application
                                        </th>
                                        <th>Sales</th>
                                        <th>Avg Price</th>
                                        <th>Total</th>
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
                                                <h6>Able Pro</h6>
                                                <p className="text-muted m-b-0">Powerful Admin Theme</p>
                                            </div>
                                        </td>
                                        <td>16,300</td>
                                        <td>$53</td>
                                        <td className="text-c-blue">$15,652</td>
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
                                                <h6>Photoshop</h6>
                                                <p className="text-muted m-b-0">Design Software</p>
                                            </div>
                                        </td>
                                        <td>26,421</td>
                                        <td>$35</td>
                                        <td className="text-c-blue">$18,785</td>
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
                                                <h6>Guruable</h6>
                                                <p className="text-muted m-b-0">Best Admin Template</p>
                                            </div>
                                        </td>
                                        <td>8,265</td>
                                        <td>$98</td>
                                        <td className="text-c-blue">$9,652</td>
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
                                                <h6>Flatable</h6>
                                                <p className="text-muted m-b-0">Admin App</p>
                                            </div>
                                        </td>
                                        <td>10,652</td>
                                        <td>$20</td>
                                        <td className="text-c-blue">$7,856</td>
                                    </tr>
                                    </tbody>
                                </Table>

                                <div className="text-center">
                                    <a href={DEMO.BLANK_LINK} className="b-b-primary text-primary">View all Projects</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card>
                            <Card.Header>
                                <h5>Friends</h5>
                            </Card.Header>
                            <Card.Body>
                                <div className="align-middle m-b-30">
                                    <img src={avatar2} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                    <div className="d-inline-block">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6>David Jones</h6>
                                        </a>
                                        <p className="text-muted m-b-0">Lorem Ipsum is dummy.</p>
                                    </div>
                                </div>
                                <div className="align-middle m-b-30">
                                    <img src={avatar3} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                    <div className="d-inline-block">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6>David Jones</h6>
                                        </a>
                                        <p className="text-muted m-b-0">Lorem Ipsum is dummy.</p>
                                    </div>
                                </div>
                                <div className="align-middle m-b-30">
                                    <img src={avatar3} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                    <div className="d-inline-block">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6>David Jones</h6>
                                        </a>
                                        <p className="text-muted m-b-0">Lorem Ipsum is dummy.</p>
                                    </div>
                                </div>
                                <div className="align-middle m-b-30">
                                    <img src={avatar4} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                    <div className="d-inline-block">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6>David Jones</h6>
                                        </a>
                                        <p className="text-muted m-b-0">Lorem Ipsum is dummy.</p>
                                    </div>
                                </div>
                                <div className="align-middle m-b-30">
                                    <img src={avatar2} alt="user" className="img-radius wid-40 align-top m-r-15"/>
                                    <div className="d-inline-block">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6>David Jones</h6>
                                        </a>
                                        <p className="text-muted m-b-0">Lorem Ipsum is dummy.</p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <a href={DEMO.BLANK_LINK} className="b-b-primary text-primary">View Friend List</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={8} md={12}>
                        <Card className="table-card">
                            <Card.Header>
                                <h5>Active Tickets</h5>
                            </Card.Header>
                            <Card.Body>
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
                                <div className="text-right m-r-20">
                                    <a href={DEMO.BLANK_LINK} className=" b-b-primary text-primary">View all Projects</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card className="latest-posts-card">
                            <Card.Header>
                                <h5>Active Tickets</h5>
                            </Card.Header>
                            <Card.Body>
                                <Row className="m-b-30">
                                    <Col sm='auto' className="p-r-0">
                                        <img src={dashboard1} alt="user" className="latest-posts-img"/>
                                    </Col>
                                    <Col>
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6>Up unpacked friendly</h6>
                                        </a>
                                        <p className="text-muted m-b-10"><i className="fa fa-play-circle-o"/> Video | 14 minutes ago</p>
                                        <p className="text-muted m-b-0">Lorem Ipsum is simply dummy text of the.</p>
                                    </Col>
                                </Row>
                                <Row className="m-b-30">
                                    <Col sm='auto' className="p-r-0">
                                        <iframe title='Able Pro 8.0' className="embed-responsive-item latest-posts-img" src="//www.youtube.com/embed/b0fI60sBMV0"/>
                                    </Col>
                                    <Col>
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6>Up unpacked friendly</h6>
                                        </a>
                                        <p className="text-muted m-b-10"><i className="fa fa-play-circle-o"/> tutorials | 14 minutes ago</p>
                                        <p className="text-muted m-b-0">Lorem Ipsum is simply dummy text of the.</p>
                                    </Col>
                                </Row>
                                <Row className="m-b-30">
                                    <Col sm='auto' className="p-r-0">
                                        <img src={dashboard3} alt="user" className="latest-posts-img"/>
                                    </Col>
                                    <Col>
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6>Up unpacked friendly</h6>
                                        </a>
                                        <p className="text-muted m-b-10"><i className="fa fa-play-circle-o"/> Video | 14 minutes ago</p>
                                        <p className="text-muted m-b-0">Lorem Ipsum is simply dummy text of the.</p>
                                    </Col>
                                </Row>
                                <div className="text-center">
                                    <a href={DEMO.BLANK_LINK} className="b-b-primary text-primary">View Friend List</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={4} md={12}>
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
                                        <h6 className="text-muted">Design logo</h6>
                                    </li>
                                    <li className="p-b-15 m-b-10">
                                        <i className="task-icon bg-c-green"/>
                                        <p className="m-b-5">Sat, 22 Mar</p>
                                        <h6 className="text-muted">Design mobile Application</h6>
                                    </li>
                                </ul>
                                <div className="text-center">
                                    <a href={DEMO.BLANK_LINK} className="b-b-primary text-primary">View Friend List</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={8} md={12}>
                        <Card className="table-card">
                            <Card.Header>
                                <h5>Latest Customers</h5>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover borderless>
                                    <thead>
                                    <tr>
                                        <th/>
                                        <th>Country</th>
                                        <th>Name</th>
                                        <th className="text-right">Average</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><img src={germany} alt="" className="img-fluid wid-30"/></td>
                                        <td>Germany</td>
                                        <td>Anjalina Jolly</td>
                                        <td className="text-right">56.23%</td>
                                    </tr>
                                    <tr>
                                        <td><img src={usa} alt="" className="img-fluid wid-30"/></td>
                                        <td>USA</td>
                                        <td>John Deo</td>
                                        <td className="text-right">25.23%</td>
                                    </tr>
                                    <tr>
                                        <td><img src={australia} alt="" className="img-fluid wid-30"/></td>
                                        <td>Australia</td>
                                        <td>Jenifer Vintage</td>
                                        <td className="text-right">12.45%</td>
                                    </tr>
                                    <tr>
                                        <td><img src={uk} alt="" className="img-fluid wid-30"/></td>
                                        <td>United Kingdom</td>
                                        <td>Lori Moore</td>
                                        <td className="text-right">8.65%</td>
                                    </tr>
                                    <tr>
                                        <td><img src={brazil} alt="" className="img-fluid wid-30"/></td>
                                        <td>Brazil</td>
                                        <td>Allina D’croze</td>
                                        <td className="text-right">3.56%</td>
                                    </tr>
                                    <tr>
                                        <td><img src={australia} alt="" className="img-fluid wid-30"/></td>
                                        <td>Australia</td>
                                        <td>Jenifer Vintage</td>
                                        <td className="text-right">12.45%</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={8} md={12}>
                        <Card className="latest-activity-card">
                            <Card.Header>
                                <h5>Latest Activity</h5>
                            </Card.Header>
                            <Card.Body>
                                <div className="latest-update-box">
                                    <Row className="p-t-20 p-b-30">
                                        <Col sm='auto' className="text-right update-meta">
                                            <p className="text-muted m-b-0 d-inline-flex">just now</p>
                                            <i className="feather icon-sunrise bg-c-blue update-icon"/>
                                        </Col>
                                        <Col>
                                            <a href={DEMO.BLANK_LINK}>
                                                <h6>John Deo</h6>
                                            </a>
                                            <p className="text-muted m-b-15">The trip was an amazing and a life changing experience!!</p>
                                            <img src={dashboard1} alt="" className="img-fluid wid-100 m-r-15 m-b-10"/>
                                            <img src={dashboard3} alt="" className="img-fluid wid-100 m-r-15 m-b-10"/>
                                        </Col>
                                    </Row>
                                    <div className="row p-b-30">
                                        <div className="col-auto text-right update-meta">
                                            <p className="text-muted m-b-0 d-inline-flex">5 min ago</p>
                                            <i className="feather icon-file-text bg-c-blue update-icon"/>
                                        </div>
                                        <div className="col">
                                            <a href={DEMO.BLANK_LINK}>
                                                <h6>Administrator</h6>
                                            </a>
                                            <p className="text-muted m-b-0">Free courses for all our customers at A1 Conference Room - 9:00 am tomorrow!</p>
                                        </div>
                                    </div>
                                    <div className="row p-b-30">
                                        <div className="col-auto text-right update-meta">
                                            <p className="text-muted m-b-0 d-inline-flex">3 hours ago</p>
                                            <i className="feather icon-map-pin bg-c-blue update-icon"/>
                                        </div>
                                        <div className="col">
                                            <a href={DEMO.BLANK_LINK}>
                                                <h6>Jeny William</h6>
                                            </a>
                                            <p className="text-muted m-b-15">Happy Hour! Free drinks at <span> <a href={DEMO.BLANK_LINK} className="text-c-blue">Cafe-Bar all </a> </span>day long!</p>
                                            <iframe title='Able Pro Map'
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.961710410607!2d72.86204201533417!3d21.233366886136675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f1c84348989%3A0xfb5817a0f069bfe5!2sPhoenixcoded!5e0!3m2!1sen!2sin!4v1562323931692!5m2!1sen!2sin"
                                                style={{width: '100%', height:'245px', border:0}} frameborder="0" allowfullscreen/>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <a href={DEMO.BLANK_LINK} className=" b-b-primary text-primary">View all Activity</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={12}>
                        <Card className="feed-card">
                            <Card.Header>
                                <h5>Feeds</h5>
                            </Card.Header>
                            <Card.Body>
                                <div className="row m-b-30">
                                    <div className="col-auto p-r-0">
                                        <i className="feather icon-bell bg-c-blue feed-icon"/>
                                    </div>
                                    <div className="col">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6 className="m-b-5">You have 3 pending tasks. <span className="text-muted float-right f-13">Just Now</span></h6>
                                        </a>
                                    </div>
                                </div>
                                <div className="row m-b-30">
                                    <div className="col-auto p-r-0">
                                        <i className="feather icon-shopping-cart bg-c-red feed-icon"/>
                                    </div>
                                    <div className="col">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6 className="m-b-5">New order received <span className="text-muted float-right f-13">Just Now</span></h6>
                                        </a>
                                    </div>
                                </div>
                                <div className="row m-b-30">
                                    <div className="col-auto p-r-0">
                                        <i className="feather icon-file-text bg-c-green feed-icon"/>
                                    </div>
                                    <div className="col">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6 className="m-b-5">You have 3 pending tasks. <span className="text-muted float-right f-13">Just Now</span></h6>
                                        </a>
                                    </div>
                                </div>
                                <div className="row m-b-20">
                                    <div className="col-auto p-r-0">
                                        <i className="feather icon-shopping-cart bg-c-red feed-icon"/>
                                    </div>
                                    <div className="col">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6 className="m-b-5">New order received <span className="text-muted float-right f-13">Just Now</span></h6>
                                        </a>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <a href={DEMO.BLANK_LINK} className="b-b-primary text-primary">View all Feeds</a>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="feed-card">
                            <Card.Header>
                                <h5>Upcoming Deadlines</h5>
                            </Card.Header>
                            <Card.Body>
                                <div className="row m-b-25">
                                    <div className="col-auto p-r-0">
                                        <img src={dashboard1} alt="" className="img-fluid wid-50"/>
                                    </div>
                                    <div className="col">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6 className="m-b-5">New able - Redesign</h6>
                                        </a>
                                        <p className="text-c-red m-b-0">2 Days Remaining</p>
                                    </div>
                                </div>
                                <div className="row m-b-25">
                                    <div className="col-auto p-r-0">
                                        <img src={dashboard2} alt="" className="img-fluid wid-50"/>
                                    </div>
                                    <div className="col">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6 className="m-b-5">New Admin Dashboard</h6>
                                        </a>
                                        <p className="text-c-red m-b-0">Proposal in 6 Days</p>
                                    </div>
                                </div>
                                <div className="row m-b-25">
                                    <div className="col-auto p-r-0">
                                        <img src={dashboard3} alt="" className="img-fluid wid-50"/>
                                    </div>
                                    <div className="col">
                                        <a href={DEMO.BLANK_LINK}>
                                            <h6 className="m-b-5">Logo Design</h6>
                                        </a>
                                        <p className="text-c-green m-b-0">10 Days Remaining</p>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <a href={DEMO.BLANK_LINK} className="b-b-primary text-primary">View all Feeds</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col xl={6} md={12}>
                        <Card className="table-card">
                            <Card.Header>
                                <h5>Global Sales by Top Locations</h5>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive borderless>
                                    <thead>
                                    <tr>
                                        <th/>
                                        <th>Country</th>
                                        <th>Sales</th>
                                        <th className="text-right">Average</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><img src={germany} alt="" className="img-fluid wid-30"/></td>
                                        <td>Germany</td>
                                        <td>3,562</td>
                                        <td className="text-right">56.23%</td>
                                    </tr>
                                    <tr>
                                        <td><img src={usa} alt="" className="img-fluid wid-30"/></td>
                                        <td>USA</td>
                                        <td>2,650</td>
                                        <td className="text-right">25.23%</td>
                                    </tr>
                                    <tr>
                                        <td><img src={australia} alt="" className="img-fluid wid-30"/></td>
                                        <td>Australia</td>
                                        <td>956</td>
                                        <td className="text-right">12.45%</td>
                                    </tr>
                                    <tr>
                                        <td><img src={uk} alt="" className="img-fluid wid-30"/></td>
                                        <td>United Kingdom</td>
                                        <td>689</td>
                                        <td className="text-right">8.65%</td>
                                    </tr>
                                    <tr>
                                        <td><img src={brazil} alt="" className="img-fluid wid-30"/></td>
                                        <td>Brazil</td>
                                        <td>560</td>
                                        <td className="text-right">3.56%</td>
                                    </tr>
                                    </tbody>
                                </Table>
                                <div className="text-right  m-r-20">
                                    <a href={DEMO.BLANK_LINK} className="b-b-primary text-primary">View all Sales Locations </a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6} md={12}>
                        <Card className="table-card">
                            <Card.Header>
                                <h5>Employee</h5>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover borderless>
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Salary</th>
                                        <th>Country</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>John Deo</td>
                                        <td>$26,325</td>
                                        <td>USA</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jeny William</td>
                                        <td>$10,256</td>
                                        <td>Canada</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Anjelina Joli</td>
                                        <td>$16,854</td>
                                        <td>South Africa</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Philip Morris</td>
                                        <td>$31,564</td>
                                        <td>Korea</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Allesia Smith</td>
                                        <td>$26,325</td>
                                        <td>Neatherland</td>
                                    </tr>
                                    </tbody>
                                </Table>
                                <div className="text-right  m-r-20">
                                    <a href={DEMO.BLANK_LINK} className="b-b-primary text-primary">View all Employee</a>
                                </div>  
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12}>
                        <Card className="table-card latest-activity-card">
                            <Card.Header>
                                <h5>Latest Order</h5>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover borderless>
                                    <thead>
                                    <tr>
                                        <th>Customer</th>
                                        <th>Order ID</th>
                                        <th>Photo</th>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>John Deo</td>
                                        <td>#81412314</td>
                                        <td><img src={phone1} alt="" className="img-fluid"/></td>
                                        <td>Moto G5</td>
                                        <td>10</td>
                                        <td>17-2-2017</td>
                                        <td><label className="badge badge-light-warning">Pending</label></td>
                                        <td><a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-w-600 f-16 m-r-15 text-c-green"/></a><a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 f-w-600 f-16 text-c-red"/></a></td>
                                    </tr>
                                    <tr>
                                        <td>Jenny William</td>
                                        <td>#68457898</td>
                                        <td><img src={phone2} alt="" className="img-fluid"/></td>
                                        <td>iPhone 8</td>
                                        <td>16</td>
                                        <td>20-2-2017</td>
                                        <td><label className="badge badge-light-primary">Paid</label></td>
                                        <td><a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-w-600 f-16 m-r-15 text-c-green"/></a><a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 f-w-600 f-16 text-c-red"/></a></td>
                                    </tr>
                                    <tr>
                                        <td>Lori Moore</td>
                                        <td>#45457898</td>
                                        <td><img src={phone3} alt="" className="img-fluid"/></td>
                                        <td>Redmi 4</td>
                                        <td>20</td>
                                        <td>17-2-2017</td>
                                        <td><label className="badge badge-light-success">Success</label></td>
                                        <td><a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-w-600 f-16 m-r-15 text-c-green"/></a><a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 f-w-600 f-16 text-c-red"/></a></td>
                                    </tr>
                                    <tr>
                                        <td>Austin Pena</td>
                                        <td>#62446232</td>
                                        <td><img src={phone4} alt="" className="img-fluid"/></td>
                                        <td>Jio</td>
                                        <td>15</td>
                                        <td>25-4-2017</td>
                                        <td><label className="badge badge-light-danger">Failed</label></td>
                                        <td><a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-w-600 f-16 m-r-15 text-c-green"/></a><a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 f-w-600 f-16 text-c-red"/></a></td>
                                    </tr>

                                    </tbody>
                                </Table>
                                <div className="text-right  m-r-20">
                                    <a href={DEMO.BLANK_LINK} className="b-b-primary text-primary">View all Orders</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
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

                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Body>
                                <h6 className="mb-0"><i className="feather icon-arrow-up text-c-green"/>$6,456<span className="float-right"><i className="feather icon-arrow-down text-c-red"/>$2,500</span></h6>
                                <div className="mt-1">
                                    <ProgressBar now={60} className="mb-4" style={{height: '6px'}} />
                                </div>
                                <span className="mt-1 d-block mb-3">This Week<span className="float-right">Previous Week</span></span>
                                <h6 className="text-c-blue mb-0">App design and development</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Body>
                                <h6 className="mb-0"><i className="feather icon-arrow-down text-c-red"/>$2,450<span className="float-right"><i className="feather icon-arrow-up text-c-green"/>$5,420</span></h6>
                                <div className="mt-1">
                                    <ProgressBar variant="danger" now={40} className="mb-4" style={{height: '6px'}} />
                                </div>
                                <span className="mt-1 d-block mb-3">This Week<span className="float-right">Previous Week</span></span>
                                <h6 className="text-c-red mb-0">Landing page design</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Body>
                                <h6 className="mb-0"><i className="feather icon-arrow-down text-c-red"/>$8,360<span className="float-right"><i className="feather icon-arrow-up text-c-green"/>$9,400</span></h6>
                                <div className="mt-1">
                                    <ProgressBar variant="success" now={40} className="mb-4" style={{height: '6px'}} />
                                </div>
                                <span className="mt-1 d-block mb-3">This Week<span className="float-right">Previous Week</span></span>
                                <h6 className="text-c-green mb-0">Mock-up design</h6>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={5} md={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Product Sales</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row className="mb-3">
                                    <Col>
                                        <span className="text-muted">Earning Product</span>
                                        <h4 className="mt-2">20,569<span className="ml-2">USD</span></h4>
                                    </Col>
                                    <Col>
                                        <span className="text-muted">Yesterday</span>
                                        <h4 className="mt-2">580<span className="ml-2">USD</span></h4>
                                    </Col>
                                    <Col>
                                        <span className="text-muted">This Week</span>
                                        <h4 className="mt-2">5,789<span className="ml-2">USD</span></h4>
                                    </Col>
                                </Row>
                                <div style={{height: '215px'}}>
                                    <PerfectScrollbar>
                                        <Table responsive hover>
                                            <thead>
                                                <tr>
                                                    <th>Last Sales</th>
                                                    <th>Name Product</th>
                                                    <th>Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <h6 className="mb-1 text-c-green">2136</h6>
                                                    </td>
                                                    <td>HeadPhone</td>
                                                    <td>
                                                        <h6 className="mb-1 text-c-green">$ 926.23</h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h6 className="mb-1 text-c-red">2546</h6>
                                                    </td>
                                                    <td>Iphone 6</td>
                                                    <td>
                                                        <h6 className="mb-1 text-c-red">$ 485.85</h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h6 className="mb-1 text-c-blue">2681</h6>
                                                    </td>
                                                    <td>Jacket</td>
                                                    <td>
                                                        <h6 className="mb-1 text-c-blue">$ 786.4</h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h6 className="mb-1 text-c-purple">2756</h6>
                                                    </td>
                                                    <td>HeadPhone</td>
                                                    <td>
                                                        <h6 className="mb-1 text-c-purple">$ 563.45</h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h6 className="mb-1 text-c-red">8765</h6>
                                                    </td>
                                                    <td>Sofa</td>
                                                    <td>
                                                        <h6 className="mb-1 text-c-red">$ 769.45</h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h6 className="mb-1 text-c-yellow">3652</h6>
                                                    </td>
                                                    <td>Iphone 7</td>
                                                    <td>
                                                        <h6 className="mb-1 text-c-yellow">$ 754.45</h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h6 className="mb-1 text-c-green">7456</h6>
                                                    </td>
                                                    <td>Jacket</td>
                                                    <td>
                                                        <h6 className="mb-1 text-c-green">$ 743.23</h6>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </PerfectScrollbar>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Incoming Requests</Card.Title>
                            </Card.Header>
                            <Card.Body className='p-0'>
                                <div style={{height: '265px'}}>
                                    <PerfectScrollbar>
                                        <div className="mt-3 mb-3">
                                            <span className="px-4 d-block"><i className="fas fa-circle text-c-blue f-10 m-r-5"/>Incoming requests</span>
                                            <hr/>
                                            <span className="px-4 d-block"><i className="fas fa-circle text-c-green f-10 m-r-5"/>You have 2 pending requests..</span>
                                            <hr/>
                                            <span className="px-4 d-block"><i className="fas fa-circle text-c-red f-10 m-r-5"/>You have 3 pending tasks</span>
                                            <hr/>
                                            <span className="px-4 d-block"><i className="fas fa-circle text-c-yellow f-10 m-r-5"/>New order received</span>
                                            <hr/>
                                            <span className="px-4 d-block"><i className="fas fa-circle text-c-purple f-10 m-r-5"/>Incoming requests</span>
                                            <hr/>
                                            <span className="px-4 d-block"><i className="fas fa-circle text-c-green f-10 m-r-5"/>The 3 Golden Rules Professional Design..</span>
                                            <hr/>
                                            <span className="px-4 d-block"><i className="fas fa-circle text-c-red f-10 m-r-5"/>You have 4 pending tasks</span>
                                            <hr/>
                                            <span className="px-4 d-block"><i className="fas fa-circle text-c-yellow f-10 m-r-5"/>New order received</span>
                                        </div>
                                    </PerfectScrollbar>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <h6 className="text-center m-0"><a href={DEMO.BLANK_LINK}>Show more</a></h6>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card className='table-card'>
                            <Card.Header className='borderless'>
                                <Card.Title as='h5'>Total Revenue</Card.Title>
                            </Card.Header>
                            <Card.Body className='p-0'>
                                <div style={{height: '310px'}}>
                                    <PerfectScrollbar>
                                        <Table responsive hover>
                                            <tbody>
                                                <tr>
                                                    <td><i className="fas fa-caret-up text-c-green f-24"/></td>
                                                    <td>Bitcoin</td>
                                                    <td>
                                                        <h6 className="text-c-green">+ $145.85</h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fas fa-caret-down text-c-red f-24"/></td>
                                                    <td>Ethereum</td>
                                                    <td>
                                                        <h6 className="text-c-red">- $6.368</h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fas fa-caret-up text-c-green f-24"/></td>
                                                    <td>Ripple</td>
                                                    <td>
                                                        <h6 className="text-c-green">+ $458.63</h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fas fa-caret-down text-c-red f-24"/></td>
                                                    <td>Neo</td>
                                                    <td>
                                                        <h6 className="text-c-red">- $5.631</h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fas fa-caret-down text-c-red f-24"/></td>
                                                    <td>Bitcoin</td>
                                                    <td>
                                                        <h6 className="text-c-red">- $75.86</h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fas fa-caret-up text-c-green f-24"/></td>
                                                    <td>Ethereum</td>
                                                    <td>
                                                        <h6 className="text-c-green">+ $453.63</h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fas fa-caret-down text-c-red f-24"/></td>
                                                    <td>Ripple</td>
                                                    <td>
                                                        <h6 className="text-c-red">+ $786.63</h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fas fa-caret-up text-c-green f-24"/></td>
                                                    <td>Neo</td>
                                                    <td>
                                                        <h6 className="text-c-green">+ $145.85</h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fas fa-caret-down text-c-red f-24"/></td>
                                                    <td>Bitcoin</td>
                                                    <td>
                                                        <h6 className="text-c-red">- $6.368</h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fas fa-caret-up text-c-green f-24"/></td>
                                                    <td>Ethereum</td>
                                                    <td>
                                                        <h6 className="text-c-green">+ $458.63</h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fas fa-caret-down text-c-red f-24"/></td>
                                                    <td>Neo</td>
                                                    <td>
                                                        <h6 className="text-c-red">- $5.631</h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fas fa-caret-down text-c-red f-24"/></td>
                                                    <td>Ripple</td>
                                                    <td>
                                                        <h6 className="text-c-red">- $75.86</h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fas fa-caret-up text-c-green f-24"/></td>
                                                    <td>Bitcoin</td>
                                                    <td>
                                                        <h6 className="text-c-green">+ $453.63</h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><i className="fas fa-caret-down text-c-red f-24"/></td>
                                                    <td>Ethereum</td>
                                                    <td>
                                                        <h6 className="text-c-red">+ $786.63</h6>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </PerfectScrollbar>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12}>
                        <Card className='table-card'>
                            <Card.Header>
                                <Card.Title as='h5'>Last Product Sales</Card.Title>
                            </Card.Header>
                            <Card.Body className='px-0 py-0'>
                                <div style={{height: '400px'}}>
                                    <PerfectScrollbar>
                                        <Table responsive hover>
                                            <thead>
                                                <tr>
                                                    <th>CAMPAIGN DATE</th>
                                                    <th>CLICK ?</th>
                                                    <th>COST ?</th>
                                                    <th>CTR ?</th>
                                                    <th>ARPU ?</th>
                                                    <th>ECPI ?</th>
                                                    <th>ROI ?</th>
                                                    <th>TREVENUE ?</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                  <tr>
                                                    <td>Total and average</td>
                                                    <td>1300</td>
                                                    <td>1025</td>
                                                    <td>14005</td>
                                                    <td>95,3%</td>
                                                    <td>29,7%</td>
                                                    <td>3,25</td>
                                                    <td>2:30</td>
                                                  </tr>
                                                  <tr>
                                                    <td>24-11-2016</td>
                                                    <td>125
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={60}/>
                                                      </div>
                                                    </td>
                                                    <td>140
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={50}/>
                                                      </div>
                                                    </td>
                                                    <td>856
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={70}/>
                                                      </div>
                                                    </td>
                                                    <td>45,3%
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={60}/>
                                                      </div>
                                                    </td>
                                                    <td>9,7%
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={30}/>
                                                      </div>
                                                    </td>
                                                    <td>7,25
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={40}/>
                                                      </div>
                                                    </td>
                                                    <td>5:26
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={70}/>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>28-10-2016</td>
                                                    <td>352
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={50}/>
                                                      </div>
                                                    </td>
                                                    <td>150
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={40}/>
                                                      </div>
                                                    </td>
                                                    <td>769
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={30}/>
                                                      </div>
                                                    </td>
                                                    <td>35,3%
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={60}/>
                                                      </div>
                                                    </td>
                                                    <td>6,7%
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={70}/>
                                                      </div>
                                                    </td>
                                                    <td>3,57
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={40}/>
                                                      </div>
                                                    </td>
                                                    <td>3:30
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={80}/>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>08-09-2017</td>
                                                    <td>145
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={50}/>
                                                      </div>
                                                    </td>
                                                    <td>869
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={30}/>
                                                      </div>
                                                    </td>
                                                    <td>453
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={40}/>
                                                      </div>
                                                    </td>
                                                    <td>76,3%
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={60}/>
                                                      </div>
                                                    </td>
                                                    <td>6,4%
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={30}/>
                                                      </div>
                                                    </td>
                                                    <td>7,56
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={40}/>
                                                      </div>
                                                    </td>
                                                    <td>1:30
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={60}/>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>12-12-2017</td>
                                                    <td>458
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={30}/>
                                                      </div>
                                                    </td>
                                                    <td>769
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={50}/>
                                                      </div>
                                                    </td>
                                                    <td>456
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={70}/>
                                                      </div>
                                                    </td>
                                                    <td>56,3%
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={60}/>
                                                      </div>
                                                    </td>
                                                    <td>9,4%
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={40}/>
                                                      </div>
                                                    </td>
                                                    <td>7,32
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={30}/>
                                                      </div>
                                                    </td>
                                                    <td>6:30
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={70}/>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>08-12-2017</td>
                                                    <td>789
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={70}/>
                                                      </div>
                                                    </td>
                                                    <td>756
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={50}/>
                                                      </div>
                                                    </td>
                                                    <td>432
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={60}/>
                                                      </div>
                                                    </td>
                                                    <td>39,3%
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={30}/>
                                                      </div>
                                                    </td>
                                                    <td>6,7%
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={40}/>
                                                      </div>
                                                    </td>
                                                    <td>3,79
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={20}/>
                                                      </div>
                                                    </td>
                                                    <td>4:30
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={30}/>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>28-10-2016</td>
                                                    <td>352
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={35}/>
                                                      </div>
                                                    </td>
                                                    <td>150
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={50}/>
                                                      </div>
                                                    </td>
                                                    <td>769
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={70}/>
                                                      </div>
                                                    </td>
                                                    <td>35,3%
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={60}/>
                                                      </div>
                                                    </td>
                                                    <td>6,7%
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={30}/>
                                                      </div>
                                                    </td>
                                                    <td>3,57
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={80}/>
                                                      </div>
                                                    </td>
                                                    <td>3:30
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={40}/>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>08-09-2017</td>
                                                    <td>145
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={50}/>
                                                      </div>
                                                    </td>
                                                    <td>869
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={35}/>
                                                      </div>
                                                    </td>
                                                    <td>453
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={65}/>
                                                      </div>
                                                    </td>
                                                    <td>76,3%
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={60}/>
                                                      </div>
                                                    </td>
                                                    <td>6,4%
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={30}/>
                                                      </div>
                                                    </td>
                                                    <td>7,56
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={45}/>
                                                      </div>
                                                    </td>
                                                    <td>1:30
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={75}/>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>12-12-2017</td>
                                                    <td>458
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={60}/>
                                                      </div>
                                                    </td>
                                                    <td>769
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={45}/>
                                                      </div>
                                                    </td>
                                                    <td>456
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={70}/>
                                                      </div>
                                                    </td>
                                                    <td>56,3%
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={35}/>
                                                      </div>
                                                    </td>
                                                    <td>9,4%
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={60}/>
                                                      </div>
                                                    </td>
                                                    <td>7,32
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={40}/>
                                                      </div>
                                                    </td>
                                                    <td>6:30
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={55}/>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>08-12-2017</td>
                                                    <td>789
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={60}/>
                                                      </div>
                                                    </td>
                                                    <td>756
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={55}/>
                                                      </div>
                                                    </td>
                                                    <td>432
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={70}/>
                                                      </div>
                                                    </td>
                                                    <td>39,3%
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={38}/>
                                                      </div>
                                                    </td>
                                                    <td>6,7%
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={30}/>
                                                      </div>
                                                    </td>
                                                    <td>3,79
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={42}/>
                                                      </div>
                                                    </td>
                                                    <td>4:30
                                                      <div className="mt-1">
                                                        <ProgressBar style={{height: '4px'}} now={38}/>
                                                      </div>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                        </Table>
                                    </PerfectScrollbar>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card className='new-cust-card'>
                            <Card.Header>
                                <Card.Title as='h5'>New Customers</Card.Title>
                            </Card.Header>
                            <div style={{height: '415px'}}>
                                <PerfectScrollbar>
                                    <Card.Body className='p-b-0'>
                                        <div className="align-middle m-b-25">
                                            <img src={avatar1} alt="user" className="img-radius align-top m-r-15"/>
                                            <div className="d-inline-block">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6>Alex Thompson</h6>
                                                </a>
                                                <p className="m-b-0">Cheers!</p>
                                                <span className="status active"/>
                                            </div>
                                        </div>
                                        <div className="align-middle m-b-25">
                                            <img src={avatar2} alt="user" className="img-radius align-top m-r-15"/>
                                            <div className="d-inline-block">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6>John Doue</h6>
                                                </a>
                                                <p className="m-b-0">stay hungry stay foolish!</p>
                                                <span className="status active"/>
                                            </div>
                                        </div>
                                        <div className="align-middle m-b-25">
                                            <img src={avatar3} alt="user" className="img-radius align-top m-r-15"/>
                                            <div className="d-inline-block">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6>Alex Thompson</h6>
                                                </a>
                                                <p className="m-b-0">Cheers!</p>
                                                <span className="status deactive"><i className="far fa-clock m-r-10"/>30 min ago</span>
                                            </div>
                                        </div>
                                        <div className="align-middle m-b-25">
                                            <img src={avatar4} alt="user" className="img-radius align-top m-r-15"/>
                                            <div className="d-inline-block">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6>John Doue</h6>
                                                </a>
                                                <p className="m-b-0">Cheers!</p>
                                                <span className="status deactive"><i className="far fa-clock m-r-10"/>10 min ago</span>
                                            </div>
                                        </div>
                                        <div className="align-middle m-b-25">
                                            <img src={avatar5} alt="user" className="img-radius align-top m-r-15"/>
                                            <div className="d-inline-block">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6>Shirley Hoe</h6>
                                                </a>
                                                <p className="m-b-0">stay hungry stay foolish!</p>
                                                <span className="status active"/>
                                            </div>
                                        </div>
                                        <div className="align-middle m-b-25">
                                            <img src={avatar1} alt="user" className="img-radius align-top m-r-15"/>
                                            <div className="d-inline-block">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6>John Doue</h6>
                                                </a>
                                                <p className="m-b-0">Cheers!</p>
                                                <span className="status active"/>
                                            </div>
                                        </div>
                                        <div className="align-middle m-b-25">
                                            <img src={avatar2} alt="user" className="img-radius align-top m-r-15"/>
                                            <div className="d-inline-block">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6>James Alexander</h6>
                                                </a>
                                                <p className="m-b-0">stay hungry stay foolish!</p>
                                                <span className="status active"/>
                                            </div>
                                        </div>
                                        <div className="align-middle m-b-25">
                                            <img src={avatar3} alt="user" className="img-radius align-top m-r-15"/>
                                            <div className="d-inline-block">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6>John Doue</h6>
                                                </a>
                                                <p className="m-b-0">Cheers!</p>
                                                <span className="status deactive"><i className="far fa-clock m-r-10"/>10 min ago</span>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </PerfectScrollbar>
                            </div>
                        </Card>
                    </Col>
                    <Col xl={8} md={6}>
                        <Card className='table-card'>
                            <Card.Header>
                                <Card.Title as='h5'>New Products</Card.Title>
                            </Card.Header>
                            <Card.Body className='pb-0'>
                                <div style={{height: '415px'}}>
                                    <PerfectScrollbar>
                                        <Table responsive hover>
                                            <thead>
                                                <tr>
                                                    <th>Product Name</th>
                                                    <th>Image</th>
                                                    <th>Status</th>
                                                    <th>Price</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>HeadPhone</td>
                                                    <td><img src={p1} alt="" className="img-20" /></td>
                                                    <td>
                                                        <div><label className="badge badge-light-warning">Pending</label></div>
                                                    </td>
                                                    <td>$10</td>
                                                    <td>
                                                        <a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-16  text-c-green"/></a>
                                                        <a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 ml-3 f-16 text-c-red"/></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Iphone 6</td>
                                                    <td><img src={p2} alt="" className="img-20"/></td>
                                                    <td>
                                                        <div><label className="badge badge-light-danger">Cancel</label></div>
                                                    </td>
                                                    <td>$20</td>
                                                    <td>
                                                        <a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-16  text-c-green"/></a>
                                                        <a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 ml-3 f-16 text-c-red"/></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Jacket</td>
                                                    <td><img src={p3} alt="" className="img-20"/></td>
                                                    <td>
                                                        <div><label className="badge badge-light-success">Success</label></div>
                                                    </td>
                                                    <td>$35</td>
                                                    <td>
                                                        <a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-16 text-c-green"/></a>
                                                        <a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 ml-3 f-16 text-c-red"/></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Sofa</td>
                                                    <td><img src={p4} alt="" className="img-20"/></td>
                                                    <td>
                                                        <div><label className="badge badge-light-danger">Cancel</label></div>
                                                    </td>
                                                    <td>$85</td>
                                                    <td>
                                                        <a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-16 text-c-green"/></a>
                                                        <a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 ml-3 f-16 text-c-red"/></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Iphone 6</td>
                                                    <td><img src={p2} alt="" className="img-20"/></td>
                                                    <td>
                                                        <div><label className="badge badge-light-success">Success</label></div>
                                                    </td>
                                                    <td>$20</td>
                                                    <td>
                                                        <a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-16 text-c-green"/></a>
                                                        <a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 ml-3 f-16 text-c-red"/></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>HeadPhone</td>
                                                    <td><img src={p1} alt="" className="img-20"/></td>
                                                    <td>
                                                        <div><label className="badge badge-light-warning">Pending</label></div>
                                                    </td>
                                                    <td>$50</td>
                                                    <td>
                                                        <a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-16 text-c-green"/></a>
                                                        <a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 ml-3 f-16 text-c-red"/></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Iphone 6</td>
                                                    <td><img src={p2} alt="" className="img-20"/></td>
                                                    <td>
                                                        <div><label className="badge badge-light-danger">Cancel</label></div>
                                                    </td>
                                                    <td>$30</td>
                                                    <td>
                                                        <a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-16 text-c-green"/></a>
                                                        <a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 ml-3 f-16 text-c-red"/></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </PerfectScrollbar>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className='table-card'>
                            <Card.Header>
                                <Card.Title as='h5'>Top Contacts</Card.Title>
                            </Card.Header>
                            <Card.Body className='pb-0'>
                                <div style={{height: '365px'}}>
                                    <PerfectScrollbar>
                                        <Table responsive hover>
                                            <thead>
                                                <tr>
                                                    <th>Company</th>
                                                    <th>Start Date</th>
                                                    <th>End Date</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Apple Company</td>
                                                    <td>23/05/2017</td>
                                                    <td>04/08/2018</td>
                                                    <td><label className="badge badge-light-success">Paid</label></td>
                                                </tr>
                                                <tr>
                                                    <td>Envato Pvt Ltd.</td>
                                                    <td>20/03/2017</td>
                                                    <td>04/08/2019</td>
                                                    <td><label className="badge badge-light-danger">Unpaid</label></td>
                                                </tr>
                                                <tr>
                                                    <td>Dribble Company</td>
                                                    <td>13/05/2017</td>
                                                    <td>03/01/2018</td>
                                                    <td><label className="badge badge-light-success">Paid</label></td>
                                                </tr>
                                                <tr>
                                                    <td>Adobe Family</td>
                                                    <td>11/01/2016</td>
                                                    <td>02/03/2017</td>
                                                    <td><label className="badge badge-light-success">Paid</label></td>
                                                </tr>
                                                <tr>
                                                    <td>Apple Company</td>
                                                    <td>23/05/2017</td>
                                                    <td>04/08/2018</td>
                                                    <td><label className="badge badge-light-danger">Unpaid</label></td>
                                                </tr>
                                                <tr>
                                                    <td>Apple Company</td>
                                                    <td>25/05/2018</td>
                                                    <td>04/12/2018</td>
                                                    <td><label className="badge badge-light-success">Paid</label></td>
                                                </tr>
                                                <tr>
                                                    <td>Envato Pvt Ltd.</td>
                                                    <td>15/03/2018</td>
                                                    <td>04/08/2016</td>
                                                    <td><label className="badge badge-light-danger">Unpaid</label></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </PerfectScrollbar>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className='table-card'>
                            <Card.Header>
                                <Card.Title as='h5'>Top Contacts</Card.Title>
                            </Card.Header>
                            <Card.Body className='pb-0'>
                                <div style={{height: '365px'}}>
                                    <PerfectScrollbar>
                                        <Table responsive hover>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-inline-block align-middle">
                                                            <img src={avatar1} alt="user" className="img-radius align-top m-r-15" style={{width: '40px'}}/>
                                                            <div className="d-inline-block">
                                                                <h6 className="m-b-0">Shirley Hoe</h6>
                                                                <p className="m-b-0">Sales executive,NY</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-right">
                                                        <h6 className="m-b-0">$78.001<i className="fas fa-level-down-alt text-c-red m-l-10"/></h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-inline-block align-middle">
                                                            <img src={avatar2} alt="user" className="img-radius align-top m-r-15" style={{width: '40px'}}/>
                                                            <div className="d-inline-block">
                                                                <h6 className="m-b-0">James Alexander</h6>
                                                                <p className="m-b-0">Sales executive,EL</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-right">
                                                        <h6 className="m-b-0">$89.051<i className="fas fa-level-up-alt text-c-green m-l-10"/></h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-inline-block align-middle">
                                                            <img src={avatar3} alt="user" className="img-radius align-top m-r-15" style={{width: '40px'}}/>
                                                            <div className="d-inline-block">
                                                                <h6 className="m-b-0">Shirley Hoe</h6>
                                                                <p className="m-b-0">Sales executive,NY</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-right">
                                                        <h6 className="m-b-0">$89.051<i className="fas fa-level-up-alt text-c-green m-l-10"/></h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-inline-block align-middle">
                                                            <img src={avatar4} alt="user" className="img-radius align-top m-r-15" style={{width: '40px'}}/>
                                                            <div className="d-inline-block">
                                                                <h6 className="m-b-0">James Alexander</h6>
                                                                <p className="m-b-0">Sales executive,EL</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-right">
                                                        <h6 className="m-b-0">$78.001<i className="fas fa-level-down-alt text-c-red m-l-10"/></h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-inline-block align-middle">
                                                            <img src={avatar5} alt="user" className="img-radius align-top m-r-15" style={{width: '40px'}}/>
                                                            <div className="d-inline-block">
                                                                <h6 className="m-b-0">Shirley Hoe</h6>
                                                                <p className="m-b-0">Sales executive,NY</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-right">
                                                        <h6 className="m-b-0">$78.001<i className="fas fa-level-down-alt text-c-red m-l-10"/></h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-inline-block align-middle">
                                                            <img src={avatar1} alt="user" className="img-radius align-top m-r-15" style={{width: '40px'}}/>
                                                            <div className="d-inline-block">
                                                                <h6 className="m-b-0">John Doue</h6>
                                                                <p className="m-b-0">Sales executive,EL</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-right">
                                                        <h6 className="m-b-0">$58.769<i className="fas fa-level-up-alt text-c-green m-l-10"/></h6>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-inline-block align-middle">
                                                            <img src={avatar2} alt="user" className="img-radius align-top m-r-15" style={{width: '40px'}}/>
                                                            <div className="d-inline-block">
                                                                <h6 className="m-b-0">Alex Thompson</h6>
                                                                <p className="m-b-0">Sales executive,NY</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-right">
                                                        <h6 className="m-b-0">$96.635<i className="fas fa-level-up-alt text-c-green m-l-10"/></h6>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </PerfectScrollbar>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12}>
                        <Card className='table-card'>
                            <Card.Header>
                                <Card.Title as='h5'>Customer Overview</Card.Title>
                            </Card.Header>
                            <Card.Body className='pb-0'>
                                <div style={{height: '465px'}}>
                                    <PerfectScrollbar>
                                        <Table responsive hover>
                                            <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Customer</th>
                                                <th>Company</th>
                                                <th>Lead Score</th>
                                                <th>Date</th>
                                                <th>Tags</th>
                                                <th>Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <img src={avatar4} alt="user" className="img-radius align-top m-r-15" style={{width:'40px'}}/>
                                                </td>
                                                <td>
                                                    <h6 className="m-0">Shirley Hoe</h6>
                                                    <p className="m-0">Sales executive , NY</p>
                                                </td>
                                                <td>Pinterest</td>
                                                <td>223</td>
                                                <td>19-11-2018</td>
                                                <td>
                                                    <label className="badge badge-light-primary">Sketch</label>
                                                    <label className="badge badge-light-danger">Ui</label>
                                                </td>
                                                <td>
                                                    <a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-16 text-c-green"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 f-16 ml-3 text-c-red"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src={avatar2} alt="user" className="img-radius align-top m-r-15" style={{width:'40px'}}/>
                                                </td>
                                                <td>
                                                    <h6 className="m-0">James Alexander</h6>
                                                    <p className="m-0">Sales executive , EL</p>
                                                </td>
                                                <td>Facebook</td>
                                                <td>268</td>
                                                <td>10-10-2017</td>
                                                <td>
                                                    <label className="badge badge-light-primary">Ux</label>
                                                    <label className="badge badge-light-danger">Ui</label>
                                                    <label className="badge badge-light-info">php</label>
                                                </td>
                                                <td>
                                                    <a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-16 text-c-green"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 f-16 ml-3 text-c-red"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src={avatar1} alt="user" className="img-radius align-top m-r-15" style={{width:'40px'}}/>
                                                </td>
                                                <td>
                                                    <h6 className="m-0">Shirley Hoe</h6>
                                                    <p className="m-0">Sales executive,NY</p>
                                                </td>
                                                <td>Google</td>
                                                <td>293</td>
                                                <td>16-03-2018</td>
                                                <td>
                                                    <label className="badge badge-light-danger">Sketch</label>
                                                    <label className="badge badge-light-warning">Ui</label>
                                                </td>
                                                <td>
                                                    <a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-16 text-c-green"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 f-16 ml-3 text-c-red"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src={avatar4} alt="user" className="img-radius align-top m-r-15" style={{width:'40px'}}/>
                                                </td>
                                                <td>
                                                    <h6 className="m-0">Alex Thompson</h6>
                                                    <p className="m-0">Sales executive,NY</p>
                                                </td>
                                                <td>Pinterest</td>
                                                <td>568</td>
                                                <td>19-11-2018</td>
                                                <td>
                                                    <label className="badge badge-light-info">Ux</label>
                                                    <label className="badge badge-light-success">Ui</label>
                                                    <label className="badge badge-light-warning">php</label>
                                                </td>
                                                <td>
                                                    <a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-16 text-c-green"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 f-16 ml-3 text-c-red"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src={avatar2} alt="user" className="img-radius align-top m-r-15" style={{width:'40px'}}/>
                                                </td>
                                                <td>
                                                    <h6 className="m-0">James Alexander</h6>
                                                    <p className="m-0">Sales executive,EL</p>
                                                </td>
                                                <td>Facebook</td>
                                                <td>796</td>
                                                <td>20-10-2017</td>
                                                <td>
                                                    <label className="badge badge-light-primary">Sketch</label>
                                                    <label className="badge badge-light-info">Ui</label>
                                                </td>

                                                <td>
                                                    <a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-16 text-c-green"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 f-16 ml-3 text-c-red"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src={avatar1} alt="user" className="img-radius align-top m-r-15" style={{width:'40px'}}/>
                                                </td>
                                                <td>
                                                    <h6 className="m-0">John Deo</h6>
                                                    <p className="m-0">Sales executive,EL</p>
                                                </td>
                                                <td>Twitter</td>
                                                <td>465</td>
                                                <td>25-11-2018</td>
                                                <td>
                                                    <label className="badge badge-light-warning">Ux</label>
                                                    <label className="badge badge-light-danger">Ui</label>
                                                    <label className="badge badge-light-success">php</label>
                                                </td>
                                                <td>
                                                    <a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-16 text-c-green"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 f-16 ml-3 text-c-red"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <img src={avatar4} alt="user" className="img-radius align-top m-r-15" style={{width:'40px'}}/>
                                                </td>
                                                <td>
                                                    <h6 className="m-0">Shirley Hoe</h6>
                                                    <p className="m-0">Sales executive,NY</p>
                                                </td>
                                                <td>Google</td>
                                                <td>783</td>
                                                <td>16-03-2017</td>
                                                <td>
                                                    <label className="badge badge-light-danger">Sketch</label>
                                                    <label className="badge badge-light-primary">Ui</label>
                                                </td>
                                                <td>
                                                    <a href={DEMO.BLANK_LINK}><i className="icon feather icon-edit f-16 text-c-green"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="feather icon-trash-2 f-16 ml-3 text-c-red"/></a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </PerfectScrollbar>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card className='testimonial-card table-card'>
                            <Card.Header>
                                <Card.Title as='h5'>Testimonial</Card.Title>
                            </Card.Header>
                            <div style={{height: '405px'}}>
                                <PerfectScrollbar>
                                    <Card.Body>
                                        <div className="review-block">
                                            <div className="row">
                                                <div className="col-sm-auto p-r-0">
                                                    <img src={avatar1} alt="user" className="img-radius profile-img cust-img m-b-15"/>
                                                </div>
                                                <div className="col">
                                                    <h6 className="m-b-10">John Deo</h6>
                                                    <div className="row align-items-center">
                                                        <div className="col">
                                                            <div className="">
                                                                <ProgressBar now={85} variant='success'/>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <h6 className="m-b-0">3.2</h6>
                                                        </div>
                                                    </div>
                                                    <p className="m-t-10 m-b-0">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-auto p-r-0">
                                                    <img src={avatar2} alt="user" className="img-radius profile-img cust-img m-b-15"/>
                                                </div>
                                                <div className="col">
                                                    <h6 className="m-b-10">Alex Thompson</h6>
                                                    <div className="row align-items-center">
                                                        <div className="col">
                                                            <div className="">
                                                                <ProgressBar now={50} />
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <h6 className="m-b-0">4.2</h6>
                                                        </div>
                                                    </div>
                                                    <p className="m-t-10 m-b-0">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-auto p-r-0">
                                                    <img src={avatar3} alt="user" className="img-radius profile-img cust-img m-b-15"/>
                                                </div>
                                                <div className="col">
                                                    <h6 className="m-b-10">John Deo</h6>
                                                    <div className="row align-items-center">
                                                        <div className="col">
                                                            <div className="">
                                                                <ProgressBar now={60} variant='danger'/>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <h6 className="m-b-0">6.5</h6>
                                                        </div>
                                                    </div>
                                                    <p className="m-t-10 m-b-0">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-auto p-r-0">
                                                    <img src={avatar2} alt="user" className="img-radius profile-img cust-img m-b-15"/>
                                                </div>
                                                <div className="col">
                                                    <h6 className="m-b-10">Shirley Hoe</h6>
                                                    <div className="row align-items-center">
                                                        <div className="col">
                                                            <div className="">
                                                                <ProgressBar now={85} variant='warning'/>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <h6 className="m-b-0">9.6</h6>
                                                        </div>
                                                    </div>
                                                    <p className="m-t-10 m-b-0">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-auto p-r-0">
                                                    <img src={avatar1} alt="user" className="img-radius profile-img cust-img m-b-15"/>
                                                </div>
                                                <div className="col">
                                                    <h6 className="m-b-10">James Alexander</h6>
                                                    <div className="row align-items-center">
                                                        <div className="col">
                                                            <div className="">
                                                                <ProgressBar now={30} variant='success'/>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <h6 className="m-b-0">5.5</h6>
                                                        </div>
                                                    </div>
                                                    <p className="m-t-10 m-b-0">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </PerfectScrollbar>
                            </div>
                        </Card>
                    </Col>
                    <Col xl={8} md={6}>
                        <Card className='table-card'>
                            <Card.Header>
                                <Card.Title as='h5'>New Products</Card.Title>
                            </Card.Header>
                            <Card.Body className='pb-0'>
                                <div style={{height: '405px'}}>
                                    <PerfectScrollbar>
                                        <Table responsive hover>
                                            <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Product Code</th>
                                                <th>Customer</th>
                                                <th>Status</th>
                                                <th>Rating</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Sofa</td>
                                                <td>#PHD001</td>
                                                <td>abc@gmail.com</td>
                                                <td><label className="badge badge-light-danger">Out Stock</label></td>
                                                <td>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Computer</td>
                                                <td>#PHD002</td>
                                                <td>cdc@gmail.com</td>
                                                <td><label className="badge badge-light-success">In Stock</label></td>
                                                <td>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Mobile</td>
                                                <td>#PHD003</td>
                                                <td>pqr@gmail.com</td>
                                                <td><label className="badge badge-light-danger">Out Stock</label></td>
                                                <td>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Coat</td>
                                                <td>#PHD004</td>
                                                <td>bcs@gmail.com</td>
                                                <td><label className="badge badge-light-success">In Stock</label></td>
                                                <td>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Watch</td>
                                                <td>#PHD003</td>
                                                <td>cdc@gmail.com</td>
                                                <td><label className="badge badge-light-danger">Out Stock</label></td>
                                                <td>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Sofa</td>
                                                <td>#PHD009</td>
                                                <td>xyz@gmail.com</td>
                                                <td><label className="badge badge-light-danger">Out Stock</label></td>
                                                <td>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Coat</td>
                                                <td>#PHD005</td>
                                                <td>dfg@gmail.com</td>
                                                <td><label className="badge badge-light-success">In Stock</label></td>
                                                <td>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-muted"/></a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </PerfectScrollbar>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12}>
                        <Card className='table-card'>
                            <Card.Header>
                                <Card.Title as='h5'>Project Task List</Card.Title>
                            </Card.Header>
                            <Card.Body className='pb-0'>
                                <div style={{height: '385px'}}>
                                    <PerfectScrollbar>
                                        <Table responsive hover>
                                            <thead>
                                            <tr>
                                                <th>Subject</th>
                                                <th>Regarding</th>
                                                <th>Activity Type</th>
                                                <th>Activity Status</th>
                                                <th>Owner</th>
                                                <th>Priority</th>
                                                <th>Start Date</th>
                                                <th>End Date</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Building Marketing List</td>
                                                <td>Software pro</td>
                                                <td>Task</td>
                                                <td><label className="badge badge-light-danger">Open</label></td>
                                                <td>John Malit</td>
                                                <td>Normal</td>
                                                <td>8/8/2017</td>
                                                <td>8/9/2018</td>
                                            </tr>
                                            <tr>
                                                <td>Project Task List</td>
                                                <td>Software pro</td>
                                                <td>Task</td>
                                                <td><label className="badge badge-light-primary">New</label></td>
                                                <td>Ken Malit</td>
                                                <td>low</td>
                                                <td>6/7/2017</td>
                                                <td>1/1/2018</td>
                                            </tr>
                                            <tr>
                                                <td>Building Marketing List</td>
                                                <td>Software pro</td>
                                                <td>Task</td>
                                                <td><label className="badge badge-light-danger">Open</label></td>
                                                <td>John Malit</td>
                                                <td>high</td>
                                                <td>3/9/2017</td>
                                                <td>8/6/2018</td>
                                            </tr>
                                            <tr>
                                                <td>Project Task List</td>
                                                <td>Software pro</td>
                                                <td>Task</td>
                                                <td><label className="badge badge-light-success">Close</label></td>
                                                <td>Ken Malit</td>
                                                <td>Normal</td>
                                                <td>9/4/2017</td>
                                                <td>3/6/2018</td>
                                            </tr>
                                            <tr>
                                                <td>Building Marketing List</td>
                                                <td>Software pro</td>
                                                <td>Task</td>
                                                <td><label className="badge badge-light-primary">New</label></td>
                                                <td>John Malit</td>
                                                <td>high</td>
                                                <td>7/4/2017</td>
                                                <td>10/1/2018</td>
                                            </tr>
                                            <tr>
                                                <td>Building Marketing List</td>
                                                <td>Software pro</td>
                                                <td>Task</td>
                                                <td><label className="badge badge-light-danger">Open</label></td>
                                                <td>Ken Malit</td>
                                                <td>low</td>
                                                <td>7/8/2017</td>
                                                <td>8/9/2018</td>
                                            </tr>
                                            <tr>
                                                <td>Project Task List</td>
                                                <td>Software pro</td>
                                                <td>Task</td>
                                                <td><label className="badge badge-light-primary">New</label></td>
                                                <td>John Malit</td>
                                                <td>Normal</td>
                                                <td>6/6/2017</td>
                                                <td>9/9/2018</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </PerfectScrollbar>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={5} md={12}>
                        <Card className='feed-card'>
                            <Card.Header>
                                <Card.Title as='h5'>Feeds</Card.Title>
                            </Card.Header>
                            <div style={{height: '410px'}}>
                                <PerfectScrollbar>
                                    <Card.Body>
                                        <div className="row m-b-25 m-t-5 align-items-center">
                                            <div className="col-auto p-r-0">
                                                <i className="feather icon-bell badge-light-primary feed-icon"/>
                                            </div>
                                            <div className="col">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6 className="m-b-5">You have 3 pending tasks. <span className="text-muted float-right f-14">Just Now</span></h6>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="row m-b-25 align-items-center">
                                            <div className="col-auto p-r-0">
                                                <i className="feather icon-shopping-cart badge-light-danger feed-icon"/>
                                            </div>
                                            <div className="col">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6 className="m-b-5">New order received <span className="text-muted float-right f-14">30 min ago</span></h6>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="row m-b-25 align-items-center">
                                            <div className="col-auto p-r-0">
                                                <i className="feather icon-file-text badge-light-success feed-icon"/>
                                            </div>
                                            <div className="col">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6 className="m-b-5">You have 3 pending tasks. <span className="text-muted float-right f-14">Just Now</span></h6>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="row m-b-25 align-items-center">
                                            <div className="col-auto p-r-0">
                                                <i className="feather icon-bell badge-light-primary feed-icon"/>
                                            </div>
                                            <div className="col">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6 className="m-b-5">You have 4 tasks Done. <span className="text-muted float-right f-14">1 hours ago</span></h6>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="row m-b-25 align-items-center">
                                            <div className="col-auto p-r-0">
                                                <i className="feather icon-file-text badge-light-success feed-icon"/>
                                            </div>
                                            <div className="col">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6 className="m-b-5">You have 2 pending tasks. <span className="text-muted float-right f-14">Just Now</span></h6>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="row m-b-25 align-items-center">
                                            <div className="col-auto p-r-0">
                                                <i className="feather icon-shopping-cart badge-light-danger feed-icon"/>
                                            </div>
                                            <div className="col">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6 className="m-b-5">New order received <span className="text-muted float-right f-14">4 hours ago</span></h6>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="row m-b-25 align-items-center">
                                            <div className="col-auto p-r-0">
                                                <i className="feather icon-shopping-cart badge-light-danger feed-icon"/>
                                            </div>
                                            <div className="col">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6 className="m-b-5">New order Done <span className="text-muted float-right f-14">Just Now</span></h6>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="row m-b-25 align-items-center">
                                            <div className="col-auto p-r-0">
                                                <i className="feather icon-file-text badge-light-success feed-icon"/>
                                            </div>
                                            <div className="col">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6 className="m-b-5">You have 5 pending tasks. <span className="text-muted float-right f-14">5 hours ago</span></h6>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="row m-b-0 align-items-center">
                                            <div className="col-auto p-r-0">
                                                <i className="feather icon-bell badge-light-primary feed-icon"/>
                                            </div>
                                            <div className="col">
                                                <a href={DEMO.BLANK_LINK}>
                                                    <h6 className="m-b-5">You have 4 tasks Done. <span className="text-muted float-right f-14">2 hours ago</span></h6>
                                                </a>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </PerfectScrollbar>
                            </div>
                        </Card>
                    </Col>
                    <Col xl={7} md={12}>
                        <Card className='table-card'>
                            <Card.Header>
                                <Card.Title as='h5'>User Activity</Card.Title>
                            </Card.Header>
                            <Card.Body className='pb-0'>
                                <div style={{height: '410px'}}>
                                    <PerfectScrollbar>
                                        <Table responsive hover>
                                            <thead>
                                                <tr>
                                                    <th>Image</th>
                                                    <th>User</th>
                                                    <th>Activity</th>
                                                    <th>Time</th>
                                                    <th>Status</th>
                                                    <th className="text-right"/>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td><img className="rounded-circle" style={{width:'40px'}} src={avatar1} alt="activity-user"/></td>
                                                <td>Ida Jorgensen</td>
                                                <td>The quick brown</td>
                                                <td>3:28 PM</td>
                                                <td><span className="m-0 text-c-green">Done</span></td>
                                                <td className="text-right"><i className="fas fa-circle text-c-green f-10"/></td>
                                            </tr>
                                            <tr>
                                                <td><img className="rounded-circle" style={{width:'40px'}} src={avatar2} alt="activity-user"/></td>
                                                <td>Albert Andersen</td>
                                                <td>Jumps over</td>
                                                <td>2:37 PM</td>
                                                <td><span className="m-0 text-c-red">Missed</span></td>
                                                <td className="text-right"><i className="fas fa-circle text-c-red f-10"/></td>
                                            </tr>
                                            <tr>
                                                <td><img className="rounded-circle" style={{width:'40px'}} src={avatar3} alt="activity-user"/></td>
                                                <td>Silje Larsen</td>
                                                <td>Dog the quick</td>
                                                <td>10:23 AM</td>
                                                <td><span className="m-0 text-c-purple">Delayed</span></td>
                                                <td className="text-right"><i className="fas fa-circle text-c-purple f-10"/></td>
                                            </tr>
                                            <tr>
                                                <td><img className="rounded-circle m-r-10" style={{width:'40px'}} src={avatar1} alt="activity-user"/></td>
                                                <td>Ida Jorgensen</td>
                                                <td>The quick brown</td>
                                                <td>4:28 PM</td>
                                                <td><span className="m-0 text-c-green">Done</span></td>
                                                <td className="text-right"><i className="fas fa-circle text-c-green f-10"/></td>
                                            </tr>
                                            <tr>
                                                <td><img className="rounded-circle" style={{width:'40px'}} src={avatar2} alt="activity-user"/></td>
                                                <td>John Deo</td>
                                                <td>Dog the quick</td>
                                                <td>2:30 PM</td>
                                                <td><span className="m-0 text-c-yellow">pending</span></td>
                                                <td className="text-right"><i className="fas fa-circle text-c-yellow f-10"/></td>
                                            </tr>
                                            <tr>
                                                <td><img className="rounded-circle" style={{width:'40px'}} src={avatar3} alt="activity-user"/></td>
                                                <td>Alex Thompson</td>
                                                <td>Jumps over</td>
                                                <td>4:00 PM</td>
                                                <td><span className="m-0 text-c-red">Missed</span></td>
                                                <td className="text-right"><i className="fas fa-circle text-c-red f-10"/></td>
                                            </tr>
                                            <tr>
                                                <td><img className="rounded-circle" style={{width:'40px'}} src={avatar2} alt="activity-user"/></td>
                                                <td>Albert Andersen</td>
                                                <td>Dog the quick</td>
                                                <td>5:37 PM</td>
                                                <td><span className="m-0 text-c-green">Done</span></td>
                                                <td className="text-right"><i className="fas fa-circle text-c-green f-10"/></td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </PerfectScrollbar>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12}>
                        <Card className='table-card'>
                            <Card.Header>
                                <Card.Title as='h5'>Application list</Card.Title>
                            </Card.Header>
                            <Card.Body className='pb-0'>
                                <div style={{height: '365px'}}>
                                    <PerfectScrollbar>
                                        <Table responsive hover>
                                            <thead>
                                                <tr>
                                                    <th>Image</th>
                                                    <th>Application</th>
                                                    <th>Installs</th>
                                                    <th>Created</th>
                                                    <th>Budget</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td><img className="rounded-circle" style={{width:'40px'}} src={avatar2} alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">Facebook</h6>
                                                    <p className="m-0">Apple</p>
                                                </td>
                                                <td>
                                                    <p className="mb-1">523.423</p>
                                                    <span className="text-c-green m-0">+ 84 Daily</span>
                                                </td>
                                                <td>Feb 11 2017</td>
                                                <td>$ 16,244</td>
                                                <td><a className=" badge badge-light-primary f-12" href={DEMO.BLANK_LINK}>Active</a></td>
                                            </tr>
                                            <tr>
                                                <td><img className="rounded-circle" style={{width:'40px'}} src={avatar1} alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">Twitter</h6>
                                                    <p className="m-0">CS Form</p>
                                                </td>
                                                <td>
                                                    <p className="mb-1">7.239</p>
                                                    <span className="text-c-yellow m-0">+ 5 Daily</span>
                                                </td>
                                                <td>Jan 19 2017</td>
                                                <td>$ 3,937</td>
                                                <td><a className="badge badge-light-warning f-12" href={DEMO.BLANK_LINK}>Not Active</a></td>
                                            </tr>
                                            <tr>
                                                <td><img className="rounded-circle" style={{width:'40px'}} src={avatar3} alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">Instagram</h6>
                                                    <p className="m-0">Microsoft</p>
                                                </td>
                                                <td>
                                                    <p className="mb-1">5.877</p>
                                                    <span className="text-c-green m-0">+ 12 Daily</span>
                                                </td>
                                                <td>Aug 04 2017</td>
                                                <td>$ 28,039</td>
                                                <td><a className="badge badge-light-success f-12" href={DEMO.BLANK_LINK}>Paused</a></td>
                                            </tr>
                                            <tr>
                                                <td><img className="rounded-circle" style={{width:'40px'}} src={avatar2} alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">Facebook</h6>
                                                    <p className="m-0">Apple</p>
                                                </td>
                                                <td>
                                                    <p className="mb-1">523.423</p>
                                                    <span className="text-c-green m-0">+ 50 Daily</span>
                                                </td>
                                                <td>April 10 2017</td>
                                                <td>$ 16,244</td>
                                                <td><a className=" badge badge-light-primary f-12" href={DEMO.BLANK_LINK}>Active</a></td>
                                            </tr>
                                            <tr>
                                                <td><img className="rounded-circle" style={{width:'40px'}} src={avatar1} alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">Twitter</h6>
                                                    <p className="m-0">CS Form</p>
                                                </td>
                                                <td>
                                                    <p className="mb-1">7.239</p>
                                                    <span className="text-c-yellow m-0">+ 5 Daily</span>
                                                </td>
                                                <td>May 20 2018</td>
                                                <td>$ 3,937</td>
                                                <td><a className="badge badge-light-warning f-12" href={DEMO.BLANK_LINK}>Not Active</a></td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </PerfectScrollbar>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={7} md={12}>
                        <Card className='user-list table-card'>
                            <Card.Header>
                                <Card.Title as='h5'>User Project List</Card.Title>
                            </Card.Header>
                            <Card.Body className='pb-0'>
                                <div style={{height: '430px'}}>
                                    <PerfectScrollbar>
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
                                    </PerfectScrollbar>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={5} md={12}>
                        <Card className='pill-card'>
                            <Card.Body>
                                <Tabs variant="pills" defaultActiveKey="home" transition={false} id="noanim-tab-example" className="mb-3">
                                    <Tab eventKey="home" title="Developer">
                                        <div className="widget-timeline m-b-25">
                                            <div className="media">
                                                <div className="mr-3 photo-table">
                                                    <i className="fas fa-circle text-c-green f-10 m-r-10"/>
                                                    <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width:'40px'}} src={avatar1} alt="chat-user"/></a>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="d-inline-block m-0">The Quick Brown Fox Jumps</h6>
                                                    <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-timeline m-b-25">
                                            <div className="media">
                                                <div className="mr-3 photo-table">
                                                    <i className="fas fa-circle text-c-yellow f-10 m-r-10"/>
                                                    <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width:'40px'}} src={avatar2} alt="chat-user"/></a>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="d-inline-block m-0">Over The Lazy Dog</h6>
                                                    <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-timeline m-b-25">
                                            <div className="media">
                                                <div className="mr-3 photo-table">
                                                    <i className="fas fa-circle text-c-purple f-10 m-r-10"/>
                                                    <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width:'40px'}} src={avatar3} alt="chat-user"/></a>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="d-inline-block m-0">The Quick Brown Fox</h6>
                                                    <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-timeline m-b-25">
                                            <div className="media">
                                                <div className="mr-3 photo-table">
                                                    <i className="fas fa-circle text-c-blue f-10 m-r-10"/>
                                                    <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width:'40px'}} src={avatar4} alt="chat-user"/></a>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="d-inline-block m-0">The Quick Brown Fox Jumps</h6>
                                                    <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-timeline m-b-25">
                                            <div className="media">
                                                <div className="mr-3 photo-table">
                                                    <i className="fas fa-circle text-c-yellow f-10 m-r-10"/>
                                                    <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width:'40px'}} src={avatar5} alt="chat-user"/></a>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="d-inline-block m-0">Over The Lazy Dog</h6>
                                                    <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-timeline">
                                            <div className="media">
                                                <div className="mr-3 photo-table">
                                                    <i className="fas fa-circle text-c-purple f-10 m-r-10"/>
                                                    <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width:'40px'}} src={avatar1} alt="chat-user"/></a>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="d-inline-block m-0">The Quick Brown Fox</h6>
                                                    <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="profile" title="Designer">
                                        <div className="widget-timeline m-b-25">
                                            <div className="media">
                                                <div className="mr-3 photo-table">
                                                    <i className="fas fa-circle text-c-blue f-10 m-r-10"/>
                                                    <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width:'40px'}} src={avatar5} alt="chat-user"/></a>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="d-inline-block m-0">The Quick Brown Fox Jumps</h6>
                                                    <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-timeline m-b-25">
                                            <div className="media">
                                                <div className="mr-3 photo-table">
                                                    <i className="fas fa-circle text-c-purple f-10 m-r-10"/>
                                                    <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width:'40px'}} src={avatar4} alt="chat-user"/></a>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="d-inline-block m-0">The Quick Brown Fox</h6>
                                                    <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-timeline m-b-25">
                                            <div className="media">
                                                <div className="mr-3 photo-table">
                                                    <i className="fas fa-circle text-c-yellow f-10 m-r-10"/>
                                                    <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width:'40px'}} src={avatar3} alt="chat-user"/></a>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="d-inline-block m-0">Over The Lazy Dog</h6>
                                                    <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-timeline m-b-25">
                                            <div className="media">
                                                <div className="mr-3 photo-table">
                                                    <i className="fas fa-circle text-c-green f-10 m-r-10"/>
                                                    <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width:'40px'}} src={avatar2} alt="chat-user"/></a>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="d-inline-block m-0">The Quick Brown Fox Jumps</h6>
                                                    <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-timeline m-b-25">
                                            <div className="media">
                                                <div className="mr-3 photo-table">
                                                    <i className="fas fa-circle text-c-yellow f-10 m-r-10"/>
                                                    <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width:'40px'}} src={avatar1} alt="chat-user"/></a>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="d-inline-block m-0">Over The Lazy Dog</h6>
                                                    <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-timeline">
                                            <div className="media">
                                                <div className="mr-3 photo-table">
                                                    <i className="fas fa-circle text-c-purple f-10 m-r-10"/>
                                                    <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width:'40px'}} src={avatar4} alt="chat-user"/></a>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="d-inline-block m-0">The Quick Brown Fox</h6>
                                                    <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="contact" title="All">
                                        <div className="widget-timeline m-b-25">
                                            <div className="media">
                                                <div className="mr-3 photo-table">
                                                    <i className="fas fa-circle text-c-blue f-10 m-r-10"/>
                                                    <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width:'40px'}} src={avatar4} alt="chat-user"/></a>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="d-inline-block m-0">The Quick Brown Fox Jumps</h6>
                                                    <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-timeline m-b-25">
                                            <div className="media">
                                                <div className="mr-3 photo-table">
                                                    <i className="fas fa-circle text-c-purple f-10 m-r-10"/>
                                                    <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width:'40px'}} src={avatar3} alt="chat-user"/></a>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="d-inline-block m-0">The Quick Brown Fox</h6>
                                                    <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-timeline m-b-25">
                                            <div className="media">
                                                <div className="mr-3 photo-table">
                                                    <i className="fas fa-circle text-c-green f-10 m-r-10"/>
                                                    <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width:'40px'}} src={avatar5} alt="chat-user"/></a>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="d-inline-block m-0">The Quick Brown Fox Jumps</h6>
                                                    <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-timeline m-b-25">
                                            <div className="media">
                                                <div className="mr-3 photo-table">
                                                    <i className="fas fa-circle text-c-yellow f-10 m-r-10"/>
                                                    <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width:'40px'}} src={avatar2} alt="chat-user"/></a>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="d-inline-block m-0">The Quick Brown Fox</h6>
                                                    <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-timeline m-b-25">
                                            <div className="media">
                                                <div className="mr-3 photo-table">
                                                    <i className="fas fa-circle text-c-yellow f-10 m-r-10"/>
                                                    <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width:'40px'}} src={avatar1} alt="chat-user"/></a>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="d-inline-block m-0">Over The Lazy Dog</h6>
                                                    <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-timeline">
                                            <div className="media">
                                                <div className="mr-3 photo-table">
                                                    <i className="fas fa-circle text-c-purple f-10 m-r-10"/>
                                                    <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width:'40px'}} src={avatar3} alt="chat-user"/></a>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="d-inline-block m-0">The Quick Brown Fox</h6>
                                                    <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12}>
                        <Card className='table-card'>
                            <Card.Header>
                                <Card.Title as='h5'>Full Width Table</Card.Title>
                            </Card.Header>
                            <Card.Body className='pb-0'>
                                <div style={{height: '375px'}}>
                                    <PerfectScrollbar>
                                        <Table responsive hover>
                                            <thead>
                                            <tr>
                                                <th>Id Number</th>
                                                <th>Code</th>
                                                <th>Date</th>
                                                <th>Budget</th>
                                                <th>Status</th>
                                                <th className="text-right">Ratings</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>#467</td>
                                                <td>8765482</td>
                                                <td>November 14, 2017</td>
                                                <td>$ 874.23</td>
                                                <td><a href={DEMO.BLANK_LINK} className="badge badge-light-primary">Active</a></td>
                                                <td className="text-right"><a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-black-50"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#466</td>
                                                <td>2366482</td>
                                                <td>January 10, 2018</td>
                                                <td>$ 235.34</td>
                                                <td><a href={DEMO.BLANK_LINK} className="badge badge-light-warning">Not Active</a></td>
                                                <td className="text-right"><a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-black-50"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-black-50"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#465</td>
                                                <td>8832638</td>
                                                <td>October 14, 2017</td>
                                                <td>$ 233.46</td>
                                                <td><a href={DEMO.BLANK_LINK} className="badge badge-light-success">Active</a></td>
                                                <td className="text-right"><a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-black-50"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-black-50"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-black-50"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#464</td>
                                                <td>9632638</td>
                                                <td>December 17, 2017</td>
                                                <td>$ 133.46</td>
                                                <td><a href={DEMO.BLANK_LINK} className="badge badge-light-primary">Not Active</a></td>
                                                <td className="text-right"><a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-black-50"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-black-50"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-black-50"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-black-50"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#463</td>
                                                <td>3332538</td>
                                                <td>July 14, 2017</td>
                                                <td>$ 244.46</td>
                                                <td><a href={DEMO.BLANK_LINK} className="badge badge-light-warning">Active</a></td>
                                                <td className="text-right"><a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-black-50"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-black-50"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#467</td>
                                                <td>8765482</td>
                                                <td>November 14, 2017</td>
                                                <td>$ 874.23</td>
                                                <td><a href={DEMO.BLANK_LINK} className="badge badge-light-primary">Active</a></td>
                                                <td className="text-right"><a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-black-50"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#789</td>
                                                <td>2378945</td>
                                                <td>April 16, 2018</td>
                                                <td>$ 235.34</td>
                                                <td><a href={DEMO.BLANK_LINK} className="badge badge-light-warning">Not Active</a></td>
                                                <td className="text-right"><a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14  text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-black-50"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-black-50"/></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#789</td>
                                                <td>3789645</td>
                                                <td>July 7, 2018</td>
                                                <td>$ 244.46</td>
                                                <td><a href={DEMO.BLANK_LINK} className="badge badge-light-success">Active</a></td>
                                                <td className="text-right"><a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-c-yellow"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-black-50"/></a>
                                                    <a href={DEMO.BLANK_LINK}><i className="fa fa-star f-14 text-black-50"/></a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </PerfectScrollbar>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12}>
                        <Card className='table-card'>
                            <Card.Header className='borderless'>
                                <Card.Title as='h5'>Recent Users</Card.Title>
                            </Card.Header>
                            <Card.Body className='pb-0'>
                                <div style={{height: '384px'}}>
                                    <PerfectScrollbar>
                                        <Table responsive hover>
                                            <tbody>
                                            <tr>
                                                <td><img className="rounded-circle" style={{width:'40px'}} src={avatar1} alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">Isabella Christensen</h6>
                                                    <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                                </td>
                                                <td>
                                                    <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"/>11 Sep 12:56</h6>
                                                </td>
                                                <td><a href={DEMO.BLANK_LINK} className="badge badge-light-primary badge-pill f-12 mr-2">Reject</a><a href={DEMO.BLANK_LINK} className="badge badge-light-success badge-pill f-12 mr-2">Approve</a></td>
                                            </tr>
                                            <tr>
                                                <td><img className="rounded-circle" style={{width:'40px'}} src={avatar2} alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">Mathilde Andersen</h6>
                                                    <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                                </td>
                                                <td>
                                                    <h6 className="text-muted"><i className="fas fa-circle text-c-red f-10 m-r-15"/>11 May 10:35</h6>
                                                </td>
                                                <td><a href={DEMO.BLANK_LINK} className="badge badge-light-danger badge-pill f-12 mr-2">Reject</a><a href={DEMO.BLANK_LINK} className="badge badge-light-warning badge-pill f-12 mr-2">Approve</a></td>
                                            </tr>
                                            <tr>
                                                <td><img className="rounded-circle" style={{width:'40px'}} src={avatar3} alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">Karla Sorensen</h6>
                                                    <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                                </td>
                                                <td>
                                                    <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"/>9 Feb 17:38</h6>
                                                </td>
                                                <td><a href={DEMO.BLANK_LINK} className="badge badge-light-primary badge-pill f-12 mr-2">Reject</a><a href={DEMO.BLANK_LINK} className="badge badge-light-success badge-pill f-12 mr-2">Approve</a></td>
                                            </tr>
                                            <tr>
                                                <td><img className="rounded-circle" style={{width:'40px'}} src={avatar1} alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">Ida Jorgensen</h6>
                                                    <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                                </td>
                                                <td>
                                                    <h6 className="text-muted"><i className="fas fa-circle text-c-red f-10 m-r-15"/>19 May 12:56</h6>
                                                </td>
                                                <td><a href={DEMO.BLANK_LINK} className="badge badge-light-danger badge-pill f-12 mr-2">Reject</a><a href={DEMO.BLANK_LINK} className="badge badge-light-warning badge-pill f-12 mr-2">Approve</a></td>
                                            </tr>
                                            <tr>
                                                <td><img className="rounded-circle" style={{width:'40px'}} src={avatar2} alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">Albert Andersen</h6>
                                                    <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                                </td>
                                                <td>
                                                    <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"/>21 July 12:56</h6>
                                                </td>
                                                <td><a href={DEMO.BLANK_LINK} className="badge badge-light-primary badge-pill f-12 mr-2">Reject</a><a href={DEMO.BLANK_LINK} className="badge badge-light-success badge-pill f-12 mr-2">Approve</a></td>
                                            </tr>
                                            <tr>
                                                <td><img className="rounded-circle" style={{width:'40px'}} src={avatar2} alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">Mathilde Andersen</h6>
                                                    <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                                </td>
                                                <td>
                                                    <h6 className="text-muted"><i className="fas fa-circle text-c-red f-10 m-r-15"/>11 May 10:35</h6>
                                                </td>
                                                <td><a href={DEMO.BLANK_LINK} className="badge badge-light-danger badge-pill f-12 mr-2">Reject</a><a href={DEMO.BLANK_LINK} className="badge badge-light-warning badge-pill f-12 mr-2">Approve</a></td>
                                            </tr>
                                            <tr>
                                                <td><img className="rounded-circle" style={{width:'40px'}} src={avatar1} alt="activity-user"/></td>
                                                <td>
                                                    <h6 className="mb-1">Isabella Christensen</h6>
                                                    <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                                </td>
                                                <td>
                                                    <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"/>11 Jan 12:56</h6>
                                                </td>
                                                <td><a href={DEMO.BLANK_LINK} className="badge badge-light-primary badge-pill f-12 mr-2">Reject</a><a href={DEMO.BLANK_LINK} className="badge badge-light-success badge-pill f-12 mr-2">Approve</a></td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </PerfectScrollbar>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card className="table-card">
                            <Card.Header>
                                <h5>Campaign Statistics</h5>
                            </Card.Header>
                            <Card.Body>
                                <div className="">
                                    <div style={{height: '370px'}}>
                                        <PerfectScrollbar>
                                            <Table responsive hover>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <h3 className="m-0">100</h3>
                                                    </td>
                                                    <td>
                                                        <p className="m-0">Engagement</p>
                                                    </td>
                                                    <td className="text-right">
                                                        <label className="badge badge-light-warning m-0">43%</label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h3 className="m-0">480</h3>
                                                    </td>
                                                    <td>
                                                        <p className="m-0">Likes</p>
                                                    </td>
                                                    <td className="text-right">
                                                        <label className="badge badge-light-success m-0">58%</label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h3 className="m-0">230</h3>
                                                    </td>
                                                    <td>
                                                        <p className="m-0">Clicks</p>
                                                    </td>
                                                    <td className="text-right">
                                                        <label className="badge badge-light-danger m-0">30%</label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h3 className="m-0">480</h3>
                                                    </td>
                                                    <td>
                                                        <p className="m-0">Likes</p>
                                                    </td>
                                                    <td className="text-right">
                                                        <label className="badge badge-light-danger m-0">30%</label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h3 className="m-0">500</h3>
                                                    </td>
                                                    <td>
                                                        <p className="m-0">Clicks</p>
                                                    </td>
                                                    <td className="text-right">
                                                        <label className="badge badge-light-primary m-0">40%</label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h3 className="m-0">400</h3>
                                                    </td>
                                                    <td>
                                                        <p className="m-0">Engagement</p>
                                                    </td>
                                                    <td className="text-right">
                                                        <label className="badge badge-light-warning m-0">60%</label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h3 className="m-0">600</h3>
                                                    </td>
                                                    <td>
                                                        <p className="m-0">Clicks</p>
                                                    </td>
                                                    <td className="text-right">
                                                        <label className="badge badge-light-success m-0">50%</label>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h3 className="m-0">900</h3>
                                                    </td>
                                                    <td>
                                                        <p className="m-0">Likes</p>
                                                    </td>
                                                    <td className="text-right">
                                                        <label className="badge badge-light-primary m-0">90%</label>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                        </PerfectScrollbar>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default WdgtData;