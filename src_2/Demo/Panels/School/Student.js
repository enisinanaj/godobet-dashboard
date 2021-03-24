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

import avatar1 from '../../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../../assets/images/user/avatar-3.jpg';
import avatar4 from '../../../assets/images/user/avatar-4.jpg';

import DEMO from "../../../store/constant";

$.DataTable = require( 'datatables.net-bs' );
require( 'datatables.net-responsive-bs' );

function atable() {
    let tableZero = '#data-table-zero';
    $.fn.dataTable.ext.errMode = 'throw';

    $(tableZero).DataTable();
}

class Student extends React.Component {
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
                            <Card.Header>
                                <h5>Students List</h5>
                            </Card.Header>
                            <Card.Body>
                                <Row className="align-items-center m-l-0">
                                    <Col/>
                                    <Col className="text-right">
                                        <Button variant="success" className="btn-sm btn-round has-ripple" onClick={() => this.setState({ isOpen: true })}><i className="feather icon-plus"/> Add Student</Button>
                                    </Col>
                                </Row>
                                <Table ref="tbl" striped hover responsive bordered id="data-table-zero">
                                    <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Roll</th>
                                        <th>Sex</th>
                                        <th>Birth Date</th>
                                        <th>Age</th>
                                        <th>Blood Group</th>
                                        <th>Options</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><img src={avatar1} className="img-radius" alt='user' style={{width:'30px', height:'30px'}} /></td>
                                        <td>Tanvir Hasan</td>
                                        <td>patient@example.com</td>
                                        <td>9876543</td>
                                        <td>female</td>
                                        <td>13/09/1994</td>
                                        <td>54</td>
                                        <td>o+</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm">Edit</a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm">Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src={avatar2} className="img-radius" alt='user' style={{width:'30px', height:'30px'}} /></td>
                                        <td>Joseph William</td>
                                        <td>Joseph@example.com</td>
                                        <td>1234567</td>
                                        <td>male</td>
                                        <td>09/10/1990</td>
                                        <td>27</td>
                                        <td>B+</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm">Edit</a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm">Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src={avatar3} className="img-radius" alt='user' style={{width:'30px', height:'30px'}} /></td>
                                        <td>Tanvir Hasan</td>
                                        <td>patient@example.com</td>
                                        <td>9876543</td>
                                        <td>female</td>
                                        <td>13/09/1994</td>
                                        <td>54</td>
                                        <td>o+</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm">Edit</a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm">Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src={avatar4} className="img-radius" alt='user' style={{width:'30px', height:'30px'}} /></td>
                                        <td>Joseph William</td>
                                        <td>Joseph@example.com</td>
                                        <td>1234567</td>
                                        <td>male</td>
                                        <td>09/10/1990</td>
                                        <td>27</td>
                                        <td>B+</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm">Edit</a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm">Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src={avatar1} className="img-radius" alt='user' style={{width:'30px', height:'30px'}} /></td>
                                        <td>Tanvir Hasan</td>
                                        <td>patient@example.com</td>
                                        <td>9876543</td>
                                        <td>female</td>
                                        <td>13/09/1994</td>
                                        <td>54</td>
                                        <td>o+</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm">Edit</a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm">Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src={avatar2} className="img-radius" alt='user' style={{width:'30px', height:'30px'}} /></td>
                                        <td>Joseph William</td>
                                        <td>Joseph@example.com</td>
                                        <td>1234567</td>
                                        <td>male</td>
                                        <td>09/10/1990</td>
                                        <td>27</td>
                                        <td>B+</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm">Edit</a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm">Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src={avatar3} className="img-radius" alt='user' style={{width:'30px', height:'30px'}} /></td>
                                        <td>Tanvir Hasan</td>
                                        <td>patient@example.com</td>
                                        <td>9876543</td>
                                        <td>female</td>
                                        <td>13/09/1994</td>
                                        <td>54</td>
                                        <td>o+</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm">Edit</a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm">Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src={avatar4} className="img-radius" alt='user' style={{width:'30px', height:'30px'}} /></td>
                                        <td>Joseph William</td>
                                        <td>Joseph@example.com</td>
                                        <td>1234567</td>
                                        <td>male</td>
                                        <td>09/10/1990</td>
                                        <td>27</td>
                                        <td>B+</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm">Edit</a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm">Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src={avatar1} className="img-radius" alt='user' style={{width:'30px', height:'30px'}} /></td>
                                        <td>Tanvir Hasan</td>
                                        <td>patient@example.com</td>
                                        <td>9876543</td>
                                        <td>female</td>
                                        <td>13/09/1994</td>
                                        <td>54</td>
                                        <td>o+</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm">Edit</a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm">Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src={avatar2} className="img-radius" alt='user' style={{width:'30px', height:'30px'}} /></td>
                                        <td>Joseph William</td>
                                        <td>Joseph@example.com</td>
                                        <td>1234567</td>
                                        <td>male</td>
                                        <td>09/10/1990</td>
                                        <td>27</td>
                                        <td>B+</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm">Edit</a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm">Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src={avatar3} className="img-radius" alt='user' style={{width:'30px', height:'30px'}} /></td>
                                        <td>Tanvir Hasan</td>
                                        <td>patient@example.com</td>
                                        <td>9876543</td>
                                        <td>female</td>
                                        <td>13/09/1994</td>
                                        <td>54</td>
                                        <td>o+</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm">Edit</a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm">Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src={avatar4} className="img-radius" alt='user' style={{width:'30px', height:'30px'}} /></td>
                                        <td>Joseph William</td>
                                        <td>Joseph@example.com</td>
                                        <td>1234567</td>
                                        <td>male</td>
                                        <td>09/10/1990</td>
                                        <td>27</td>
                                        <td>B+</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm">Edit</a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm">Delete</a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        <Modal size='xl' show={this.state.isOpen} onHide={() => this.setState({ isOpen: false })}>
                            <Modal.Header closeButton>
                                <Modal.Title as="h5">Add Student</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    <Col sm={12} className='p-b-5'>
                                        <h5>Personal Information</h5>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Name">Name</label>
                                            <input type="text" className="form-control" id="Name" placeholder="Name"/>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Email">Email</label>
                                            <input type="email" className="form-control" id="Email" placeholder="Email"/>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Password">Password</label>
                                            <input type="password" className="form-control" id="Password" placeholder="Password"/>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Phone">Roll number</label>
                                            <input type="text" className="form-control" id="Phone" placeholder="Roll number"/>
                                        </div>
                                    </Col>
                                    <Col sm={12}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Address">Address</label>
                                            <textarea className="form-control" id="Address" rows="3" placeholder='Address'/>
                                        </div>
                                    </Col>
                                    <Col sm={12} className='p-b-5'>
                                        <h5>Other Information</h5>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Sex">Select Sex</label>
                                            <select className="form-control" id="Sex">
                                                <option value=""/>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Icon">Profie Image</label>
                                            <input type="file" className="form-control" id="Icon" placeholder="Profie Image"/>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Birth">Birth Date</label>
                                            <input type="date" className="form-control" id="Birth" placeholder="Birth Date"/>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Age">Age</label>
                                            <input type="text" className="form-control" id="Age" placeholder="Age"/>
                                        </div>
                                    </Col>
                                    <Col sm={12}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Blood">Select Blood Group</label>
                                            <select className="form-control" id="Blood">
                                                <option value=""/>
                                                <option value="A+">A+</option>
                                                <option value="A-">A-</option>
                                                <option value="B+">B+</option>
                                                <option value="B-">B-</option>
                                                <option value="AB+">AB+</option>
                                                <option value="AB-">AB-</option>
                                                <option value="O+">O+</option>
                                                <option value="O-">O-</option>
                                            </select>
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

export default Student;