import React from 'react';
import {
    Row,
    Col,
    Card,
    Modal,
    Button,
    Table
} from 'react-bootstrap';

import Aux from "./../../../hoc/_Aux";
import $ from 'jquery';

import DEMO from "../../../store/constant";

import avatar1 from '../../../assets/images/user/avatar-1.jpg';
import avatar3 from '../../../assets/images/user/avatar-3.jpg';
import avatar4 from '../../../assets/images/user/avatar-4.jpg';

import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";

const ReactTags = require('react-tag-autocomplete');


$.DataTable = require( 'datatables.net-bs' );
require( 'datatables.net-responsive-bs' );

function atable() {
    let tableZero = '#data-table-zero';
    $.fn.dataTable.ext.errMode = 'throw';

    $(tableZero).DataTable();
}

class Task extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: 'Description',
        }
    }

    state = {
        isOpen: false,
        tags: [
            { id: 1, name: "Washington" },
            { id: 2, name: "Sydney" },
            { id: 3, name: "Beijing" }
        ]
    };

    updateContent = (value) => {
        this.setState({content:value})
    };

    jodit;
    setRef = jodit => this.jodit = jodit;

    config = {
        readonly: false
    };

    componentDidMount() {
        atable()
    }

    handleDelete = (i, states) => {
        const tags = this.state.tags.slice(0);
        tags.splice(i, 1);
        this.setState({ tags: tags })
    };

    handleAddition = (tag, state) => {
        const tags = [].concat(this.state.tags, tag);
        this.setState({ tags: tags })
    };

    render() {
        return (
            <Aux>
                <Row className='btn-page'>
                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <h5>Projects Summary</h5>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={2} xs={6} className="border-right">
                                        <h3>14</h3>
                                        <h6 className="text-success">Not Started</h6>
                                        <span className="">Assigned to me: 7</span>
                                    </Col>
                                    <Col md={2} xs={6} className="border-right">
                                        <h3>17</h3>
                                        <h6 className="text-primary">In Progress</h6>
                                        <span className="">Assigned to me: 8</span>
                                    </Col>
                                    <Col md={2} xs={6} className="border-right">
                                        <h3>10</h3>
                                        <h6 className="">Testing</h6>
                                        <span className="">Assigned to me: 4</span>
                                    </Col>
                                    <Col md={2} xs={6} className="border-right">
                                        <h3>1</h3>
                                        <h6 className="text-success">Awaiting Feedback</h6>
                                        <span className="">Assigned to me: 3</span>
                                    </Col>
                                    <Col md={2} xs={6}>
                                        <h3>6</h3>
                                        <h6 className="text-success">Complete</h6>
                                        <span className="">Assigned to me: 5</span>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center m-l-0">
                                    <Col/>
                                    <Col className="text-right">
                                        <Button variant="success" className="btn-sm btn-round has-ripple" onClick={() => this.setState({ isOpen: true })}><i className="feather icon-plus"/> Add Task</Button>
                                    </Col>
                                </Row>
                                <Table ref="tbl" striped hover responsive id="data-table-zero">
                                    <thead>
                                    <tr>
                                        <th/>
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>Start Date</th>
                                        <th>Due Date</th>
                                        <th>Assigned to</th>
                                        <th>Tags</th>
                                        <th>Priority</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td><a href={DEMO.BLANK_LINK}>Hatter. 'Does YOUR watch tell you.</a>
                                            <p className="mb-2">#5 - THEIR eyes bright and eager with many a.</p>
                                            <small className="d-block">
                                                <a href={DEMO.BLANK_LINK}>Start Timer</a> |
                                                <a href={DEMO.BLANK_LINK}>Edit</a> |
                                                <a href={DEMO.BLANK_LINK} className="text-danger">Delete </a>
                                            </small>
                                        </td>
                                        <td>
                                            <span className="badge badge-primary inline-block">In Progress</span>
                                        </td>
                                        <td>2019-07-29</td>
                                        <td>2019-07-30</td>
                                        <td>
                                            <img className="img-radius wid-30 mr-1" src={avatar3} data-toggle="tooltip" data-title="Lorenzo Stroman" alt="Generic placeholder"/>
                                            <img className="img-radius wid-30" src={avatar4} data-toggle="tooltip" data-title="Amani Wiegand" alt="Generic placeholder"/>
                                        </td>
                                        <td className="text-wrap"/>
                                        <td><span className="badge badge-danger inline-block">Urgent</span></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td><a href={DEMO.BLANK_LINK}>test</a>
                                            <p className="mb-2">Recurring Task</p>
                                            <small className="d-block">
                                                <a href={DEMO.BLANK_LINK}>Start Timer</a> |
                                                <a href={DEMO.BLANK_LINK}>Edit</a> |
                                                <a href={DEMO.BLANK_LINK} className="text-danger">Delete </a>
                                            </small>
                                        </td>
                                        <td>
                                            <span className="badge badge-primary inline-block">In Progress</span>
                                        </td>
                                        <td>2019-07-30</td>
                                        <td>2019-07-31</td>
                                        <td>
                                            <img className="img-radius wid-30 mr-1" src={avatar3} data-toggle="tooltip" data-title="Lorenzo Stroman" alt="Generic placeholder"/>
                                            <img className="img-radius wid-30 mr-1" src={avatar4} data-toggle="tooltip" data-title="Amani Wiegand" alt="Generic placeholder"/>
                                            <img className="img-radius wid-30" src={avatar1} data-toggle="tooltip" data-title="Chet Rempel" alt="Generic placeholder"/>
                                        </td>
                                        <td className="text-wrap">
                                            <span className="badge badge-primary inline-block">bug</span>
                                            <span className="badge badge-primary inline-block">follow up</span>
                                            <span className="badge badge-primary inline-block">important</span>
                                            <span className="badge badge-primary inline-block">logo</span>
                                            <span className="badge badge-primary inline-block">review</span>
                                        </td>
                                        <td><span className="badge badge-primary inline-block">Medium</span></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><a href={DEMO.BLANK_LINK}>Fix an open issue in our software</a>
                                            <p className="mb-2">#1 - Build Website - Flatley-Wolff</p>
                                            <small className="d-block">
                                                <a href={DEMO.BLANK_LINK}>Start Timer</a> |
                                                <a href={DEMO.BLANK_LINK}>Edit</a> |
                                                <a href={DEMO.BLANK_LINK} className="text-danger">Delete </a>
                                            </small>
                                        </td>
                                        <td>
                                            <span className="badge badge-danger inline-block">Not Started</span>
                                        </td>
                                        <td>2019-07-29</td>
                                        <td>2019-08-12</td>
                                        <td>
                                            <img className="img-radius wid-30 mr-1" src={avatar1} data-toggle="tooltip" data-title="Chet Rempel" alt="Generic placeholder"/>
                                            <img className="img-radius wid-30 mr-1" src={avatar4} data-toggle="tooltip" data-title="Amani Wiegand" alt="Generic placeholder"/>
                                            <img className="img-radius wid-30" src={avatar3} data-toggle="tooltip" data-title="Lorenzo Stroman" alt="Generic placeholder"/>
                                        </td>
                                        <td className="text-wrap"/>
                                        <td><span className="badge badge-primary inline-block">Medium</span></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td><a href={DEMO.BLANK_LINK}>Add a Test Case for the GCI Website</a>
                                            <p className="mb-2">#2 - SEO Optimization - Feeney-Pouros</p>
                                            <small className="d-block">
                                                <a href={DEMO.BLANK_LINK}>Start Timer</a> |
                                                <a href={DEMO.BLANK_LINK}>Edit</a> |
                                                <a href={DEMO.BLANK_LINK} className="text-danger">Delete </a>
                                            </small>
                                        </td>
                                        <td>
                                            <span className="badge badge-primary inline-block">In Progress</span>
                                        </td>
                                        <td>2019-07-29</td>
                                        <td>2019-08-12</td>
                                        <td>
                                            <img className="img-radius wid-30 mr-1" src={avatar1} data-toggle="tooltip" data-title="Chet Rempel" alt="Generic placeholder"/>
                                            <img className="img-radius wid-30 mr-1" src={avatar4} data-toggle="tooltip" data-title="Amani Wiegand" alt="Generic placeholder"/>
                                            <img className="img-radius wid-30" src={avatar3} data-toggle="tooltip" data-title="Lorenzo Stroman" alt="Generic placeholder"/>
                                        </td>
                                        <td className="text-wrap"/>
                                        <td><span className="badge badge-primary inline-block">Medium</span></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td><a href={DEMO.BLANK_LINK}>Research on improved audio latency</a>
                                            <p className="mb-2">#3 - Brochure Design - Gorczany Kreiger</p>
                                            <small className="d-block">
                                                <a href={DEMO.BLANK_LINK}>Start Timer</a> |
                                                <a href={DEMO.BLANK_LINK}>Edit</a> |
                                                <a href={DEMO.BLANK_LINK} className="text-danger">Delete </a>
                                            </small>
                                        </td>
                                        <td>
                                            <span className="badge badge-warning inline-block">Awaiting Feedback</span>
                                        </td>
                                        <td>2019-07-29</td>
                                        <td>2019-08-12</td>
                                        <td>
                                            <img className="img-radius wid-30 mr-1" src={avatar4} data-toggle="tooltip" data-title="Amani Wiegand" alt="Generic placeholder"/>
                                            <img className="img-radius wid-30" src={avatar3} data-toggle="tooltip" data-title="Lorenzo Stroman" alt="Generic placeholder"/>
                                        </td>
                                        <td className="text-wrap"/>
                                        <td><span className="badge badge-danger inline-block">Urgent</span></td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td><a href={DEMO.BLANK_LINK}>Fix an open issue in our software</a>
                                            <p className="mb-2">#3 - Brochure Design - Gorczany Kreiger</p>
                                            <small className="d-block">
                                                <a href={DEMO.BLANK_LINK}>Start Timer</a> |
                                                <a href={DEMO.BLANK_LINK}>Edit</a> |
                                                <a href={DEMO.BLANK_LINK} className="text-danger">Delete </a>
                                            </small>
                                        </td>
                                        <td>
                                            <span className="badge badge-warning inline-block">Awaiting Feedback</span>
                                        </td>
                                        <td>2019-07-29</td>
                                        <td>2019-08-12</td>
                                        <td>
                                            <img className="img-radius wid-30 mr-1" src={avatar3} data-toggle="tooltip" data-title="Lorenzo Stroman" alt="Generic placeholder"/>
                                            <img className="img-radius wid-30" src={avatar4} data-toggle="tooltip" data-title="Amani Wiegand" alt="Generic placeholder"/>
                                        </td>
                                        <td className="text-wrap"/>
                                        <td><span className="badge badge-warning inline-block">High</span></td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td><a href={DEMO.BLANK_LINK}>Fix mimetype declaration on Android</a>
                                            <p className="mb-2">#4 - Website Redesign - Hilll Inc</p>
                                            <small className="d-block">
                                                <a href={DEMO.BLANK_LINK}>Start Timer</a> |
                                                <a href={DEMO.BLANK_LINK}>Edit</a> |
                                                <a href={DEMO.BLANK_LINK} className="text-danger">Delete </a>
                                            </small>
                                        </td>
                                        <td>
                                            <span className="badge badge-warning inline-block">Awaiting Feedback</span>
                                        </td>
                                        <td>2019-07-29</td>
                                        <td>2019-08-12</td>
                                        <td>
                                            <img className="img-radius wid-30" src={avatar4} data-toggle="tooltip" data-title="Amani Wiegand" alt="Generic placeholder"/>
                                        </td>
                                        <td className="text-wrap"/>
                                        <td><span className="badge badge-warning inline-block">High</span></td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td><a href={DEMO.BLANK_LINK}>Fix mimetype declaration on Android</a>
                                            <p className="mb-2">#1 - Build Website - Flatley-Wolff</p>
                                            <small className="d-block">
                                                <a href={DEMO.BLANK_LINK}>Start Timer</a> |
                                                <a href={DEMO.BLANK_LINK}>Edit</a> |
                                                <a href={DEMO.BLANK_LINK} className="text-danger">Delete </a>
                                            </small>
                                        </td>
                                        <td>
                                            <span className="badge badge-success inline-block">Not Started</span>
                                        </td>
                                        <td>2019-07-29</td>
                                        <td>2019-08-19</td>
                                        <td>
                                            <img className="img-radius wid-30 mr-1" src={avatar1} data-toggle="tooltip" data-title="Amani Wiegand" alt="Generic placeholder"/>
                                            <img className="img-radius wid-30" src={avatar4} data-toggle="tooltip" data-title="Marshall Morissette" alt="Generic placeholder"/>
                                        </td>
                                        <td className="text-wrap"/>
                                        <td><span className="badge badge-danger inline-block">Urgent</span></td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td><a href={DEMO.BLANK_LINK}>Find/fix 10 broken links in the RTEMS Wiki</a>
                                            <p className="mb-2">#2 - SEO Optimization - Feeney-Pouros</p>
                                            <small className="d-block">
                                                <a href={DEMO.BLANK_LINK}>Start Timer</a> |
                                                <a href={DEMO.BLANK_LINK}>Edit</a> |
                                                <a href={DEMO.BLANK_LINK} className="text-danger">Delete </a>
                                            </small>
                                        </td>
                                        <td>
                                            <span className="badge badge-success inline-block">Testing</span>
                                        </td>
                                        <td>2019-07-29</td>
                                        <td>2019-08-19</td>
                                        <td>
                                            <img className="img-radius wid-30" src={avatar4} data-toggle="tooltip" data-title="Lorenzo Stroman" alt="Generic placeholder"/>
                                        </td>
                                        <td className="text-wrap"/>
                                        <td><span className="badge badge-danger inline-block">Urgent</span></td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        <Modal show={this.state.isOpen} onHide={() => this.setState({ isOpen: false })}>
                            <Modal.Header closeButton>
                                <Modal.Title as="h5">Add Task</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                    <label className="custom-control-label" htmlFor="customCheck1">Public</label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline mb-2">
                                    <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                                    <label className="custom-control-label" htmlFor="customCheck2">Billable</label>
                                </div>
                                <div className="form-group fill">
                                    <label className="floating-label" htmlFor="Subject"><small className="text-danger">* </small>Subject</label>
                                    <input type="text" className="form-control" id="Subject" placeholder="Subject"/>
                                </div>
                                <div className="form-group fill">
                                    <label className="floating-label" htmlFor="Rate">Hourly Rate</label>
                                    <input type="text" className="form-control" id="Rate" placeholder="Hourly Rate"/>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Start">Start Date</label>
                                            <input type="date" className="form-control" id="Start" placeholder="Start Date"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Deadline">Due Date</label>
                                            <input type="date" className="form-control" id="Deadline" placeholder="Due Date"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Billing"><small className="text-danger">* </small>Billing Type</label>
                                            <select className="form-control" id="Billing">
                                                <option value=""/>
                                                <option value="1">Low</option>
                                                <option value="2">Medium</option>
                                                <option value="3">High</option>
                                                <option value="4">Urgent</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Status">Status</label>
                                            <select className="form-control" id="Status">
                                                <option value=""/>
                                                <option value="1-week">Week</option>
                                                <option value="2-week">2 Weeks</option>
                                                <option value="1-month">1 Month</option>
                                                <option value="2-month">2 Months</option>
                                                <option value="3-month">3 Months</option>
                                                <option value="6-month">6 Months</option>
                                                <option value="1-year">1 Year</option>
                                                <option value="custom">Custom</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group fill">
                                    <label className="floating-label" htmlFor="Related">Related To</label>
                                    <select className="form-control" id="Related">
                                        <option value=""/>
                                        <option value="project">Project</option>
                                        <option value="invoice">Invoice </option>
                                        <option value="customer">Customer </option>
                                        <option value="estimate">Estimate </option>
                                        <option value="contract">Contract </option>
                                        <option value="ticket">Ticket </option>
                                        <option value="expense">Expense </option>
                                        <option value="lead">Lead </option>
                                        <option value="proposal">Proposal </option>
                                    </select>
                                </div>
                                <div className="form-group fill">
                                    <label className="label">Tags</label>
                                    <ReactTags
                                        classNames={{root: 'react-tags bootstrap-tagsinput', selectedTag: 'react-tags__selected-tag btn-primary'}}
                                        allowNew={true}
                                        tags={this.state.tags}
                                        handleDelete={this.handleDelete.bind(this)}
                                        handleAddition={this.handleAddition.bind(this)} />
                                </div>
                                <div className="form-group fill">
                                    <label className="label">Description</label>
                                    <JoditEditor
                                        editorRef={this.setRef}
                                        value={this.state.content}
                                        config={this.config}
                                        onChange={this.updateContent}
                                    />
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={() => this.setState({ isOpen: false })}>Clear</Button>
                                <Button variant="primary">Submit</Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Task;