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

import p1 from '../../../assets/images/ticket/p1.jpg';
import p2 from '../../../assets/images/ticket/p2.jpg';
import p3 from '../../../assets/images/ticket/p3.jpg';
import p4 from '../../../assets/images/ticket/p4.jpg';
import p5 from '../../../assets/images/ticket/p5.jpg';
import DEMO from "../../../store/constant";

$.DataTable = require( 'datatables.net-bs' );
require( 'datatables.net-responsive-bs' );

function atable() {
    let tableZero = '#data-table-zero';
    $.fn.dataTable.ext.errMode = 'throw';

    $(tableZero).DataTable();
}

class Department extends React.Component {
    state = {
        isOpen: false
    };

    componentDidMount() {
        atable()
    }

    render() {
        return (
            <Aux>
                <Row className='btn-page'>
                    <Col sm={12}>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center m-l-0">
                                    <Col/>
                                    <Col className="text-right">
                                        <Button variant="success" className="btn-sm btn-round has-ripple" onClick={() => this.setState({ isOpen: true })}><i className="feather icon-plus"/> Add Department</Button>
                                    </Col>
                                </Row>
                                <Table ref="tbl" striped hover responsive bordered id="data-table-zero">
                                    <thead>
                                    <tr>
                                        <th>Icon</th>
                                        <th>Name</th>
                                        <th width="50%">Description</th>
                                        <th>Options</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <img src={p1} alt='p1' />
                                        </td>
                                        <td>Anesthetics</td>
                                        <td>There are many variations of passages of Lorem Ipsum ...</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-primary btn-sm"><i className="feather icon-plus"/>Manage Facilities</a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm"><i className="feather icon-edit"/>&nbsp;Edit </a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="feather icon-trash-2"/>&nbsp;Delete </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={p3} alt='p2'/>
                                        </td>
                                        <td>Cardiology</td>
                                        <td>There are many variations of passages of Lorem Ipsum ...</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-primary btn-sm"><i className="feather icon-plus"/>Manage Facilities</a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm"><i className="feather icon-edit"/>&nbsp;Edit </a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="feather icon-trash-2"/>&nbsp;Delete </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={p2} alt='p3'/>
                                        </td>
                                        <td>Gastroenterology</td>
                                        <td>There are many variations of passages of Lorem Ipsum ...</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-primary btn-sm"><i className="feather icon-plus"/>Manage Facilities</a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm"><i className="feather icon-edit"/>&nbsp;Edit </a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="feather icon-trash-2"/>&nbsp;Delete </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={p4} alt='p4' />
                                        </td>
                                        <td>Anesthetics</td>
                                        <td>There are many variations of passages of Lorem Ipsum ...</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-primary btn-sm"><i className="feather icon-plus"/>Manage Facilities</a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm"><i className="feather icon-edit"/>&nbsp;Edit </a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="feather icon-trash-2"/>&nbsp;Delete </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={p5} alt='p5'/>
                                        </td>
                                        <td>Gastroenterology</td>
                                        <td>There are many variations of passages of Lorem Ipsum ...</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-primary btn-sm"><i className="feather icon-plus"/>Manage Facilities</a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm"><i className="feather icon-edit"/>&nbsp;Edit </a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="feather icon-trash-2"/>&nbsp;Delete </a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        <Modal show={this.state.isOpen} onHide={() => this.setState({ isOpen: false })}>
                            <Modal.Header closeButton>
                                <Modal.Title as="h5">Add Department</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    <Col sm={6}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Name">Name</label>
                                            <input type="text" className="form-control" id="Name" placeholder="Name"/>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Icon">Icon</label>
                                            <input type="file" className="form-control" id="Icon" placeholder="Icon"/>
                                        </div>
                                    </Col>
                                    <Col sm={12}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Description">Description</label>
                                            <textarea className="form-control" id="Description" rows="3" placeholder='Description'/>
                                        </div>
                                    </Col>
                                </Row>
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

export default Department;