import React from 'react';
import {Row, Col, Card, Table, Dropdown} from 'react-bootstrap';
import Timer from 'react-compound-timer';

import Aux from "../../../hoc/_Aux";
import DEMO from "../../../store/constant";

import avatar1 from "../../../assets/images/user/avatar-1.jpg";
import avatar2 from "../../../assets/images/user/avatar-2.jpg";
import avatar3 from "../../../assets/images/user/avatar-3.jpg";

class TaskDetails extends React.Component {

    render() {

        return (
            <Aux>
                <Row>
                    <Col xl={4} className='task-detail-right'>
                        <Card>
                            <Card.Body className='bg-c-yellow'>
                                <div className="counter text-center">
                                    <h4 id="timer" className="text-white m-0">
                                        <Timer
                                            initialTime={60000 * 60 * 24*10 - 1000}
                                            direction="backward"
                                        >
                                            {() => (
                                                <React.Fragment>
                                                    <b><Timer.Days /></b>days : <b><Timer.Hours /></b>h : <b><Timer.Minutes /></b>m : <b><Timer.Seconds /></b>s
                                                </React.Fragment>
                                            )}
                                        </Timer>
                                    </h4>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Task Details</Card.Title>
                            </Card.Header>
                            <Card.Body className='task-details'>
                                <Table >
                                    <tbody>
                                    <tr>
                                        <td><i className="fa fa-adjust m-r-5"/> Project:</td>
                                        <td className="text-right"><span className="float-right"><a className="text-secondary" href={DEMO.BLANK_LINK}> Singular app</a></span></td>
                                    </tr>
                                    <tr>
                                        <td><i className="fa fa-calendar m-r-5"/> Updated:</td>
                                        <td className="text-right">12 May, 2015</td>
                                    </tr>
                                    <tr>
                                        <td><i className="fa fa-credit-card m-r-5"/> Created:</td>
                                        <td className="text-right">25 Feb, 2015</td>
                                    </tr>
                                    <tr>
                                        <td><i className="fa fa-line-chart m-r-5"/> Priority:</td>
                                        <td className="text-right">
                                            <div className="btn-group">
                                                <a href={DEMO.BLANK_LINK} className="text-secondary"><i className="fa fa-upload m-r-5"/> Highest</a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i className="fa fa-refresh m-r-5"/> Revisions:</td>
                                        <td className="text-right">29</td>
                                    </tr>
                                    <tr>
                                        <td><i className="fa fa-user-plus m-r-5"/> Added by:</td>
                                        <td className="text-right"><a className="text-secondary" href={DEMO.BLANK_LINK}>Winnie</a></td>
                                    </tr>
                                    <tr>
                                        <td><i className="fa fa-thermometer-half m-r-5"/> Status:</td>
                                        <td className="text-right">Published</td>
                                    </tr>
                                    </tbody>
                                </Table>
                                <div>
                                    <span>
                                        <a href={DEMO.BLANK_LINK} className="text-muted f-16 m-r-10"><i className="fa fa-random"/> </a>
                                    </span>
                                    <span className="m-r-10">
                                        <a href={DEMO.BLANK_LINK} className="text-muted f-16"><i className="fa fa-ellipsis-v"/></a>
                                    </span>
                                    <div className="btn-group d-inline-block">
                                        <Dropdown className='mr-1'>
                                            <Dropdown.Toggle variant='primary' size="sm" className='drp-icon'>
                                                <span className="feather icon-thumbs-up"/>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href={DEMO.BLANK_LINK}>Check in</Dropdown.Item>
                                                <Dropdown.Item href={DEMO.BLANK_LINK} className='active'>Attach Screenshots</Dropdown.Item>
                                                <Dropdown.Item href={DEMO.BLANK_LINK}>Reassign</Dropdown.Item>
                                                <Dropdown.Divider/>
                                                <Dropdown.Item href={DEMO.BLANK_LINK}>Edit task</Dropdown.Item>
                                                <Dropdown.Item href={DEMO.BLANK_LINK}>Remove</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Task settings</Card.Title>
                            </Card.Header>
                            <Card.Body className='task-setting btn-page'>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group  mb-0">
                                                <div className="switch d-inline m-r-10">
                                                    <input type="checkbox" id="switch-1" defaultChecked />
                                                    <label htmlFor="switch-1" className="cr"/>
                                                </div>
                                                <label>Publish after save</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group mb-0">
                                                <div className="switch d-inline m-r-10">
                                                    <input type="checkbox" id="switch-2" defaultChecked/>
                                                    <label htmlFor="switch-2" className="cr"/>
                                                </div>
                                                <label>Allow comments</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group  mb-0">
                                                <div className="switch d-inline m-r-10">
                                                    <input type="checkbox" id="switch-3" defaultChecked/>
                                                    <label htmlFor="switch-3" className="cr"/>
                                                </div>
                                                <label>Allow users to edit the task</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group  mb-0">
                                                <div className="switch d-inline m-r-10">
                                                    <input type="checkbox" id="switch-4"/>
                                                    <label htmlFor="switch-4" className="cr"/>
                                                </div>
                                                <label>Use task timer</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group  mb-0">
                                                <div className="switch d-inline m-r-10">
                                                    <input type="checkbox" id="switch-5"/>
                                                    <label htmlFor="switch-5" className="cr"/>
                                                </div>
                                                <label>Auto saving</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group  mb-0">
                                                <div className="switch d-inline m-r-10">
                                                    <input type="checkbox" id="switch-6"/>
                                                    <label htmlFor="switch-6" className="cr"/>
                                                </div>
                                                <label>Auto saving</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group  mb-0">
                                                <div className="switch d-inline m-r-10">
                                                    <input type="checkbox" id="switch-7"/>
                                                    <label htmlFor="switch-7" className="cr"/>
                                                </div>
                                                <label>Allow attachments</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row text-center mt-2">
                                        <div className="col-sm-12">
                                            <button type="button" className="btn btn-secondary ">Reset</button>
                                            <button type="button" className="btn btn-primary  ">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Revisions</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="taskboard-right-revision user-box">
                                    <div className="media">
                                        <div className="media-left mr-3">
                                            <a className="btn btn-outline-primary btn-icon" href={DEMO.BLANK_LINK} role="button"><i className="fa fa-user-secret"/>
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <div className="chat-header f-w-400 mb-1">Drop the IE specific hacks for temporal inputs</div>
                                            <p className="chat-header  text-muted">4 minutes ago</p>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-left mr-3">
                                            <a className="btn btn-outline-danger btn-icon" href={DEMO.BLANK_LINK} role="button"><i className="fa fa-anchor"/>
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <div className="chat-header f-w-400 mb-1">Add full font overrides for popovers and tooltips</div>
                                            <p className="chat-header text-muted">36 minutes ago</p>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-left mr-3">
                                            <a className="btn btn-outline-warning btn-icon" href={DEMO.BLANK_LINK} role="button"><i className="fa fa-desktop"/>
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <div className="chat-header f-w-400 mb-1">created a new Design branch</div>
                                            <p className="chat-header text-muted">2 month ago</p>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-left mr-3">
                                            <a className="btn btn-outline-success btn-icon" href={DEMO.BLANK_LINK} role="button"><i className="fa fa-briefcase"/>
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <div className="chat-header">merged Master and Dev branches</div>
                                            <p className="chat-header  text-muted">6 month ago</p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Attached Files</Card.Title>
                            </Card.Header>
                            <Card.Body className='task-attachment'>
                                <ul className="media-list p-0">
                                    <li className="media d-flex m-b-15">
                                        <div className="m-r-20 file-attach">
                                            <i className="fa fa-file-word-o f-28 text-muted"/>
                                        </div>
                                        <div className="media-body">
                                            <a href={DEMO.BLANK_LINK} className="m-b-5 d-block text-secondary">Overdrew_scowled.doc</a>
                                            <div className="text-muted">
                                                <span>Size: 1.2Mb</span>
                                                <span>
                                                    Added by <a href={DEMO.BLANK_LINK} className="text-secondary">Winnie</a>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="float-right text-muted">
                                            <i className="fa fa-download f-18"/>
                                        </div>
                                    </li>
                                    <li className="media d-flex m-b-15">
                                        <div className="m-r-20 file-attach">
                                            <i className="fa fa-file-powerpoint-o f-28 text-muted"/>
                                        </div>
                                        <div className="media-body">
                                            <a href={DEMO.BLANK_LINK} className="m-b-5 d-block text-secondary">And_less_maternally.pdf</a>
                                            <div className="text-muted">
                                                <span>Size: 0.11Mb</span>
                                                <span>
                                                    Added by <a href={DEMO.BLANK_LINK} className="text-secondary">Eugene</a>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="float-right text-muted">
                                            <i className="fa fa-download f-18"/>
                                        </div>
                                    </li>
                                    <li className="media d-flex m-b-15">
                                        <div className="m-r-20 file-attach">
                                            <i className="fa fa-file-pdf-o f-28 text-muted"/>
                                        </div>
                                        <div className="media-body">
                                            <a href={DEMO.BLANK_LINK} className="m-b-5 d-block text-secondary">The_less_overslept.pdf</a>
                                            <div className="text-muted">
                                                <span>Size:5.9Mb</span>
                                                <span>
                                                    Added by <a href={DEMO.BLANK_LINK} className="text-secondary">Natalie</a>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="float-right text-muted">
                                            <i className="fa fa-download f-18"/>
                                        </div>
                                    </li>
                                    <li className="media d-flex m-b-15">
                                        <div className="m-r-20 file-attach">
                                            <i className="fa fa-file-excel-o f-28 text-muted"/>
                                        </div>
                                        <div className="media-body">
                                            <a href={DEMO.BLANK_LINK} className="m-b-5 d-block text-secondary">Well_equitably.mov</a>
                                            <div className="text-muted">
                                                <span>Size:20.9Mb</span>
                                                <span>
                                                    Added by <a href={DEMO.BLANK_LINK} className="text-secondary">Jenny</a>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="float-right text-muted">
                                            <i className="fa fa-download f-18"/>
                                        </div>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Assigned Users</Card.Title>
                            </Card.Header>
                            <Card.Body className='user-box assign-user'>
                                <div className="media">
                                    <div className="media-left media-middle mr-3">
                                        <a href={DEMO.BLANK_LINK}>
                                            <img className="img-radius" src={avatar1} alt="chat-user"/>
                                        </a>
                                    </div>
                                    <div className="media-body">
                                        <h6>Sortino media</h6>
                                        <p>Software Engineer</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-left media-middle mr-3">
                                        <a href={DEMO.BLANK_LINK}>
                                            <img className="img-radius" src={avatar2} alt="chat-user"/>
                                        </a>
                                    </div>
                                    <div className="media-body">
                                        <h6>Larry heading </h6>
                                        <p>Web Designer</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-left media-middle mr-3">
                                        <a href={DEMO.BLANK_LINK}>
                                            <img className="img-radius" src={avatar3} alt="chat-user"/>
                                        </a>
                                    </div>
                                    <div className="media-body">
                                        <h6>Mark</h6>
                                        <p>Chief Financial Officer (CFO)</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-left media-middle mr-3">
                                        <a href={DEMO.BLANK_LINK}>
                                            <img className="img-radius" src={avatar1} alt="chat-user"/>
                                        </a>
                                    </div>
                                    <div className="media-body">
                                        <h6>John Doe</h6>
                                        <p>Senior Marketing Designer</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={8}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'><i className="fa fa-ticket m-r-5"/> Ticket List Doesn't Support Commas</Card.Title>
                                <button className="btn btn-primary float-right"><i className="fa fa-bell-o m-r-5"/>Check in</button>
                            </Card.Header>
                            <Card.Body>
                                <div className="m-b-20">
                                    <h6>Overview</h6>
                                    <hr/>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                <div className="m-b-20">
                                    <h6>What we need</h6>
                                    <hr/>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        It has survived not only five centuries, but also the leap into electronic typesetting,
                                        remaining essentially unchanged.</p>
                                </div>
                                <div className="m-b-20 col-sm-12">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-6">
                                            <div className="text-primary f-14 m-b-10">
                                                1. The standard Lorem Ipsum passage
                                            </div>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                        </div>
                                        <div className="col-md-12 col-lg-6">
                                            <div className="text-primary f-14 m-b-10">
                                                2. The standard Lorem Ipsum passage
                                            </div>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h6>Requirements</h6>
                                    <hr/>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <Table>
                                        <thead>
                                        <tr className="text-uppercase">
                                            <th className="text-center">#</th>
                                            <th className="text-center">Task</th>
                                            <th className="text-center">Due Date</th>
                                            <th className="text-center">Description</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center text-muted">
                                        <tr>
                                            <td>1</td>
                                            <td>Design mockup</td>
                                            <td> <i className="fa fa-calendar"/> 22 December, 16</td>
                                            <td>The standard Lorem Ipsum</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Software Engineer</td>
                                            <td> <i className="fa fa-calendar"/> 01 December, 16</td>
                                            <td>The standard Lorem passage</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Photoshop And Illustrator</td>
                                            <td> <i className="fa fa-calendar"/> 15 December, 16</td>
                                            <td>The standard Lorem Ipsum</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Allocated Resource</td>
                                            <td> <i className="fa fa-calendar"/> 28 December, 16</td>
                                            <td>The standard Lorem passage</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Financial Controlle</td>
                                            <td> <i className="fa fa-calendar"/> 20 December, 16</td>
                                            <td>The standard Lorem Ipsum</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </div>
                                <div className="float-left">
                                    <span className=" txt-primary"> <i className="fa fa-line-chart"/> Status:</span>
                                    <div className="dropdown-secondary d-inline-block">
                                        <Dropdown className='ml-1'>
                                            <Dropdown.Toggle variant='primary' size='sm'>
                                                Open
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href={DEMO.BLANK_LINK}>Show all</Dropdown.Item>
                                                <Dropdown.Item href={DEMO.BLANK_LINK} className='active'>Open</Dropdown.Item>
                                                <Dropdown.Item href={DEMO.BLANK_LINK}>On hold</Dropdown.Item>
                                                <Dropdown.Item href={DEMO.BLANK_LINK}>Resolved</Dropdown.Item>
                                                <Dropdown.Item href={DEMO.BLANK_LINK}>Closed</Dropdown.Item>
                                                <Dropdown.Divider/>
                                                <Dropdown.Item href={DEMO.BLANK_LINK}>Duplicate</Dropdown.Item>
                                                <Dropdown.Item href={DEMO.BLANK_LINK}>Don't fix</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                                <div className="float-right d-flex m-t-10">
                                    <span>
                                        <a href={DEMO.BLANK_LINK} className="text-muted m-r-10 f-16"><i className="fa fa-pencil"/> </a>
                                    </span>
                                    <span className="m-r-10">
                                        <a href={DEMO.BLANK_LINK} className="text-muted f-16"><i className="fa fa-trash"/></a>
                                    </span>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'><i className="fa fa-plus m-r-5"/>Comments</Card.Title>
                                <button type="button" className="btn btn-icon btn-primary float-right m-0"><i className="fa fa-plus"/></button>
                            </Card.Header>
                            <Card.Body className='task-comment'>
                                <ul className="media-list p-0">
                                    <li className="media">
                                        <div className="media-left mr-3">
                                            <a href={DEMO.BLANK_LINK}>
                                                <img className="media-object img-radius comment-img" src={avatar1} alt="Generic placeholder"/>
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h6 className="media-heading txt-primary">Lorem Ipsum <span className="f-12 text-muted ml-1">Just now</span></h6>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                            <div className="m-t-10 m-b-25">
                                                <span><a href={DEMO.BLANK_LINK} className="m-r-10 text-secondary">Reply</a></span><span><a href={DEMO.BLANK_LINK} className="m-r-10 text-secondary">Edit</a> </span>
                                            </div>
                                            <hr/>
                                            <div className="media mt-2">
                                                <a className="media-left mr-3" href={DEMO.BLANK_LINK}>
                                                    <img className="media-object img-radius comment-img" src={avatar2} alt="Generic placeholder"/>
                                                </a>
                                                <div className="media-body">
                                                    <h6 className="media-heading txt-primary">Lorem Ipsum <span className="f-12 text-muted ml-1">Just now</span></h6>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                                    <div className="m-t-10 m-b-25">
                                                        <span><a href={DEMO.BLANK_LINK} className="m-r-10 text-secondary">Reply</a></span><span><a href={DEMO.BLANK_LINK} className="m-r-10 text-secondary">Edit</a> </span>
                                                    </div>
                                                    <hr/>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="media mt-2">
                                        <div className="media-left mr-3">
                                            <a href={DEMO.BLANK_LINK}>
                                                <img className="media-object img-radius comment-img" src={avatar3} alt="Generic placeholder"/>
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <h6 className="media-heading txt-primary">Lorem ipsum<span className="f-12 text-muted ml-1">Just now</span></h6>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                            <div className="m-t-10 m-b-25">
                                                <span><a href={DEMO.BLANK_LINK} className="m-r-10 text-secondary">Reply</a></span><span><a href={DEMO.BLANK_LINK} className="m-r-10 text-secondary">Edit</a> </span>
                                            </div>
                                            <hr/>
                                        </div>
                                    </li>
                                </ul>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Add Task..."/>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button"><i className="fa fa-search"/></button>
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

export default TaskDetails;