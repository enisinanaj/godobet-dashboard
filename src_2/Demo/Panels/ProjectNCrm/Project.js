import React from 'react';
import {
    Row,
    Col,
    Card,
    Tabs,
    Tab,
    Table,
    Button
} from 'react-bootstrap';

import $ from 'jquery';

import Aux from "./../../../hoc/_Aux";
import DEMO from "../../../store/constant";

import avatar1 from '../../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../../assets/images/user/avatar-2.jpg';
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

class Project extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: 'Description',
        }
    }

    state = {
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
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <h5>Projects Summary</h5>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={2} xs={6} className="border-right">
                                        <h3>2</h3>
                                        <span className="">Not Started</span>
                                    </Col>
                                    <Col md={2} xs={6} className="border-right">
                                        <h3>12</h3>
                                        <span className="text-primary">In Progress</span>
                                    </Col>
                                    <Col md={2} xs={6} className="border-right">
                                        <h3>0</h3>
                                        <span className="text-danger">On Hold</span>
                                    </Col>
                                    <Col md={2} xs={6} className="border-right">
                                        <h3>1</h3>
                                        <span className="">Cancelled</span>
                                    </Col>
                                    <Col md={2} xs={6}>
                                        <h3>0</h3>
                                        <span className="text-success">Finished</span>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Tabs defaultActiveKey="project" className="px-20">
                                    <Tab eventKey="project" title="PROJECTS">
                                        <hr/>
                                        <Table ref="tbl" striped hover responsive id="data-table-zero">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Project Name</th>
                                                    <th>Customer</th>
                                                    <th>Tags</th>
                                                    <th>Start Date</th>
                                                    <th>Deadline</th>
                                                    <th>Members</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="has-row-options odd" role="row">
                                                <td>1</td>
                                                <td>Build Website
                                                    <small className="d-block">
                                                        <a href={DEMO.BLANK_LINK}>View</a> |
                                                        <a href={DEMO.BLANK_LINK}>Contacts</a> |
                                                        <a href={DEMO.BLANK_LINK} className="text-danger">Delete </a>
                                                    </small>
                                                </td>
                                                <td>Flatley-Wolff</td>
                                                <td>
                                                    <span className="badge badge-primary inline-block">wordpress</span>
                                                </td>
                                                <td>2019-07-29</td>
                                                <td>2019-09-29</td>
                                                <td>
                                                    <img className="img-radius wid-30 mr-1" src={avatar1} data-toggle="tooltip" data-title="Guido Nolan" alt="Generic placeholder"/>
                                                    <img className="img-radius wid-30 mr-1" src={avatar2} data-toggle="tooltip" data-title="Marshall Morissette" alt="Generic placeholder"/>
                                                    <img className="img-radius wid-30 mr-1" src={avatar3} data-toggle="tooltip" data-title="Lorenzo Stroman" alt="Generic placeholder"/>
                                                    <img className="img-radius wid-30" src={avatar4} data-toggle="tooltip" data-title="Amani Wiegand" alt="Generic placeholder"/>
                                                </td>
                                                <td><span className="badge badge-success inline-block">In Progress</span></td>
                                            </tr>
                                            <tr className="has-row-options even" role="row">
                                                <td>2</td>
                                                <td>SEO Optimization
                                                    <small className="d-block">
                                                        <a href={DEMO.BLANK_LINK}>View</a> |
                                                        <a href={DEMO.BLANK_LINK}>Contacts</a> |
                                                        <a href={DEMO.BLANK_LINK} className="text-danger">Delete </a>
                                                    </small>
                                                </td>
                                                <td>Feeney-Pouros</td>
                                                <td>
                                                    <span className="badge badge-primary inline-block">wordpress</span>
                                                </td>
                                                <td>2019-07-29</td>
                                                <td>2019-09-29</td>
                                                <td>
                                                    <img className="img-radius wid-30 mr-1" src={avatar3} data-toggle="tooltip" data-title="Lorenzo Stroman" alt="Generic placeholder"/>
                                                    <img className="img-radius wid-30 mr-1" src={avatar1} data-toggle="tooltip" data-title="Guido Nolan" alt="Generic placeholder"/>
                                                    <img className="img-radius wid-30" src={avatar4} data-toggle="tooltip" data-title="Amani Wiegand" alt="Generic placeholder"/>
                                                </td>
                                                <td><span className="badge badge-success inline-block">In Progress</span></td>
                                            </tr>
                                            <tr className="has-row-options odd" role="row">
                                                <td>3</td>
                                                <td>Brochure Design
                                                    <small className="d-block">
                                                        <a href={DEMO.BLANK_LINK}>View</a> |
                                                        <a href={DEMO.BLANK_LINK}>Contacts</a> |
                                                        <a href={DEMO.BLANK_LINK} className="text-danger">Delete </a>
                                                    </small>
                                                </td>
                                                <td>Gorczany, Barton and Kreiger</td>
                                                <td/>
                                                <td>2019-07-29</td>
                                                <td>2019-09-29</td>
                                                <td>
                                                    <img className="img-radius wid-30 mr-1" src={avatar2} data-toggle="tooltip" data-title="Lorenzo Stroman" alt="Generic placeholder"/>
                                                    <img className="img-radius wid-30" src={avatar1} data-toggle="tooltip" data-title="Guido Nolan" alt="Generic placeholder"/>
                                                </td>
                                                <td><span className="badge badge-success inline-block">In Progress</span></td>
                                            </tr>
                                            <tr className="has-row-options even" role="row">
                                                <td>4</td>
                                                <td>Website Redesign
                                                    <small className="d-block">
                                                        <a href={DEMO.BLANK_LINK}>View</a> |
                                                        <a href={DEMO.BLANK_LINK}>Contacts</a> |
                                                        <a href={DEMO.BLANK_LINK} className="text-danger">Delete </a>
                                                    </small>
                                                </td>
                                                <td>Hilll Inc</td>
                                                <td>
                                                    <span className="badge badge-warning inline-block">review</span>
                                                </td>
                                                <td>2019-07-29</td>
                                                <td>2019-09-29</td>
                                                <td>
                                                    <img className="img-radius wid-30 mr-1" src={avatar4} data-toggle="tooltip" data-title="Amani Wiegand" alt="Generic placeholder"/>
                                                    <img className="img-radius wid-30 mr-1" src={avatar3} data-toggle="tooltip" data-title="Lorenzo Stroman" alt="Generic placeholder"/>
                                                    <img className="img-radius wid-30 mr-1" src={avatar1} data-toggle="tooltip" data-title="Guido Nolan" alt="Generic placeholder"/>
                                                    <img className="img-radius wid-30" src={avatar2} data-toggle="tooltip" data-title="Marshall Morissette" alt="Generic placeholder"/>
                                                </td>
                                                <td><span className="badge badge-success inline-block">In Progress</span></td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </Tab>
                                    <Tab eventKey="new-project" title="NEW PROJECT">
                                        <hr/>
                                        <Row>
                                            <Col>
                                                <div className="form-group fill">
                                                    <label className="floating-label" htmlFor="Project"><small className="text-danger">* </small>Project Name</label>
                                                    <input type="text" className="form-control" id="Project" placeholder="Project Name"/>
                                                </div>
                                                <div className="form-group fill">
                                                    <label className="floating-label" htmlFor="Customer"><small className="text-danger">* </small>Customer</label>
                                                    <input type="text" className="form-control" id="Customer" placeholder="Customer"/>
                                                </div>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck1" defaultChecked={true} />
                                                        <label className="custom-control-label" htmlFor="customCheck1">Calculate progress through tasks</label>
                                                </div>
                                                <label htmlFor="customRange1">Progress <span className="badge badge-primary">0%</span></label>
                                                <input type="range" className="custom-range mb-3" id="customRange1" defaultValue="0" placeholder='Progress'/>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-group fill">
                                                            <label className="floating-label" htmlFor="Billing"><small className="text-danger">* </small>Billing Type</label>
                                                            <select className="form-control" id="Billing">
                                                                <option value=""/>
                                                                <option defaultValue={1}>Fixed Rate</option>
                                                                <option value="2">Project Hours</option>
                                                                <option value="3">Task Hours</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group fill">
                                                            <label className="floating-label" htmlFor="Status">Status</label>
                                                            <select className="form-control" id="Status">
                                                                <option value=""/>
                                                                <option value="1">Not Started</option>
                                                                <option value="2">In Progress</option>
                                                                <option value="3">On Hold</option>
                                                                <option value="5">Cancelled</option>
                                                                <option value="4">Finished</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group fill">
                                                    <label className="floating-label" htmlFor="Rate">Rate Per Hour</label>
                                                    <input type="text" className="form-control" id="Rate" placeholder="Rate Per Hour"/>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-group fill">
                                                            <label className="floating-label" htmlFor="Hours">Estimated Hours</label>
                                                            <input type="text" className="form-control" id="Hours" placeholder=""/>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group fill">
                                                            <label className="floating-label" htmlFor="Members">Members</label>
                                                            <select className="form-control" id="Members">
                                                                <option value=""/>
                                                                <option value="9">Sigurd Kessler</option>
                                                                <option value="2">Marshall Morissette</option>
                                                                <option value="10">Marlin Sipes</option>
                                                                <option value="7">Lula Reichel</option>
                                                                <option value="3">Lorenzo Stroman</option>
                                                                <option value="1">Guido Nolan</option>
                                                                <option value="8">Ernesto Kerluke</option>
                                                                <option value="5">Clifford Roberts</option>
                                                                <option value="6">Chet Rempel</option>
                                                                <option value="4">Amani Wiegand</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-group fill">
                                                            <label className="floating-label" htmlFor="Start">Start Date</label>
                                                            <input type="date" className="form-control" id="Start" placeholder="123"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group fill">
                                                            <label className="floating-label" htmlFor="Deadline">Deadline</label>
                                                            <input type="date" className="form-control" id="Deadline" placeholder="123"/>
                                                        </div>
                                                    </div>
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
                                                </Col>
                                            <div className="col-md-6">
                                                <h5 className="mb-4">Project settings</h5>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" id="proset1" defaultChecked={true} />
                                                    <label className="custom-control-label" htmlFor="proset1">Allow customer to view tasks</label>
                                                </div>
                                                <hr/>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" id="proset2" defaultChecked={true} />
                                                    <label className="custom-control-label" htmlFor="proset2">Allow customer to edit tasks (only tasks created from contact)</label>
                                                </div>
                                                <hr/>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" id="proset3"/>
                                                    <label className="custom-control-label" htmlFor="proset3">Allow customer to comment on project tasks</label>
                                                </div>
                                                <hr/>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" id="proset4" defaultChecked={true} />
                                                    <label className="custom-control-label" htmlFor="proset4">Allow customer to view task comments</label>
                                                </div>
                                                <hr/>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" id="proset5" defaultChecked={true} />
                                                        <label className="custom-control-label" htmlFor="proset5">Allow customer to view task attachments</label>
                                                </div>
                                                <hr/>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" id="proset6" defaultChecked={true} />
                                                        <label className="custom-control-label" htmlFor="proset6">Allow customer to view task checklist items</label>
                                                </div>
                                                <hr/>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" id="proset7"/>
                                                        <label className="custom-control-label" htmlFor="proset7">Allow customer to upload attachments on tasks</label>
                                                </div>
                                                <hr/>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" id="proset8" defaultChecked={true} />
                                                        <label className="custom-control-label" htmlFor="proset8">Allow customer to view task total logged time</label>
                                                </div>
                                                <hr/>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" id="proset9" defaultChecked={true} />
                                                        <label className="custom-control-label" htmlFor="proset9">Allow customer to view finance overview</label>
                                                </div>
                                                <hr/>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" id="proset10"/>
                                                        <label className="custom-control-label" htmlFor="proset10">Allow customer to upload files</label>
                                                </div>
                                                <hr/>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" id="proset11" defaultChecked={true} />
                                                        <label className="custom-control-label" htmlFor="proset11">Allow customer to open discussions</label>
                                                </div>
                                                <hr/>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" id="proset12" defaultChecked={true} />
                                                        <label className="custom-control-label" htmlFor="proset12">Allow customer to view milestones</label>
                                                </div>
                                                <hr/>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" id="proset13" defaultChecked={true} />
                                                        <label className="custom-control-label" htmlFor="proset13">Allow customer to view Gantt</label>
                                                </div>
                                                <hr/>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" id="proset14"/>
                                                        <label className="custom-control-label" htmlFor="proset14">Allow customer to view timesheets</label>
                                                </div>
                                                <hr/>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" id="proset15"/>
                                                        <label className="custom-control-label" htmlFor="proset15">Allow customer to view activity log</label>
                                                </div>
                                                <hr/>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" id="proset16" defaultChecked={true} />
                                                        <label className="custom-control-label" htmlFor="proset16">Allow customer to view team members</label>
                                                </div>
                                                <hr/>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input type="checkbox" className="custom-control-input" id="proset17" defaultChecked={true} />
                                                        <label className="custom-control-label" htmlFor="proset17">Hide project tasks on main tasks table (admin area)</label>
                                                </div>
                                            </div>
                                            <Col sm={12}>
                                                <Button variant='primary'> Save </Button>
                                                <Button variant='danger'> Clear </Button>
                                            </Col>
                                        </Row>
                                    </Tab>
                                </Tabs>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Project;