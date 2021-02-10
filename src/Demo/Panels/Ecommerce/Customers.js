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
import avatar5 from '../../../assets/images/user/avatar-5.jpg';

import DEMO from "../../../store/constant";

$.DataTable = require( 'datatables.net-bs' );
require( 'datatables.net-responsive-bs' );

function atable() {
    let tableZero = '#data-table-zero';
    $.fn.dataTable.ext.errMode = 'throw';

    $(tableZero).DataTable();
}

class Customers extends React.Component {
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
                                        <Button variant="success" className="btn-sm btn-round has-ripple" onClick={() => this.setState({ isOpen: true })}><i className="feather icon-plus"/> Add Customers</Button>
                                    </Col>
                                </Row>
                                <Table ref="tbl" striped hover responsive id="data-table-zero">
                                    <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Revenue</th>
                                        <th>Create Date</th>
                                        <th>Age</th>
                                        <th>Status</th>
                                        <th>Options</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <img src={avatar2} className="img-fluid img-radius wid-40" alt="seller"/>
                                        </td>
                                        <td>Micheal Pewd</td>
                                        <td>patient@temp.com</td>
                                        <td>+984-9388638</td>
                                        <td>$451,45</td>
                                        <td>09/10/1990</td>
                                        <td>56</td>
                                        <td><span className="badge badge-danger">Disabled</span></td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm"><i className="feather icon-edit"/>&nbsp;Edit </a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="feather icon-trash-2"/>&nbsp;Delete </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={avatar3} className="img-fluid img-radius wid-40" alt="seller"/>
                                        </td>
                                        <td>Erich Mcbride</td>
                                        <td>xidim@temp.com</td>
                                        <td>+612-1385682</td>
                                        <td>$396,73</td>
                                        <td>09/10/1990</td>
                                        <td>35</td>
                                        <td><span className="badge badge-success">Active</span></td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm"><i className="feather icon-edit"/>&nbsp;Edit </a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="feather icon-trash-2"/>&nbsp;Delete </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={avatar3} className="img-fluid img-radius wid-40" alt="seller"/>
                                        </td>
                                        <td>Micheal Pewd</td>
                                        <td>patient@temp.com</td>
                                        <td>+984-9388638</td>
                                        <td>$451,45</td>
                                        <td>09/10/1990</td>
                                        <td>27</td>
                                        <td><span className="badge badge-danger">Disabled</span></td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm"><i className="feather icon-edit"/>&nbsp;Edit </a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="feather icon-trash-2"/>&nbsp;Delete </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={avatar5} className="img-fluid img-radius wid-40" alt="seller"/>
                                        </td>
                                        <td>Erich Mcbride</td>
                                        <td>xidim@temp.com</td>
                                        <td>+612-1385682</td>
                                        <td>$396,73</td>
                                        <td>09/10/1990</td>
                                        <td>54</td>
                                        <td><span className="badge badge-success">Active</span></td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm"><i className="feather icon-edit"/>&nbsp;Edit </a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="feather icon-trash-2"/>&nbsp;Delete </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={avatar1} className="img-fluid img-radius wid-40" alt="seller"/>
                                        </td>
                                        <td>Micheal Pewd</td>
                                        <td>patient@temp.com</td>
                                        <td>+984-9388638</td>
                                        <td>$451,45</td>
                                        <td>09/10/1990</td>
                                        <td>46</td>
                                        <td><span className="badge badge-success">Active</span></td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm"><i className="feather icon-edit"/>&nbsp;Edit </a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="feather icon-trash-2"/>&nbsp;Delete </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={avatar2} className="img-fluid img-radius wid-40" alt="seller"/>
                                        </td>
                                        <td>Micheal Pewd</td>
                                        <td>patient@temp.com</td>
                                        <td>+984-9388638</td>
                                        <td>$451,45</td>
                                        <td>09/10/1990</td>
                                        <td>27</td>
                                        <td><span className="badge badge-success">Active</span></td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm"><i className="feather icon-edit"/>&nbsp;Edit </a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="feather icon-trash-2"/>&nbsp;Delete </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={avatar3} className="img-fluid img-radius wid-40" alt="seller"/>
                                        </td>
                                        <td>Erich Mcbride</td>
                                        <td>xidim@temp.com</td>
                                        <td>+612-1385682</td>
                                        <td>$396,73</td>
                                        <td>09/10/1990</td>
                                        <td>73</td>
                                        <td><span className="badge badge-success">Active</span></td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm"><i className="feather icon-edit"/>&nbsp;Edit </a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="feather icon-trash-2"/>&nbsp;Delete </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={avatar3} className="img-fluid img-radius wid-40" alt="seller"/>
                                        </td>
                                        <td>Micheal Pewd</td>
                                        <td>patient@temp.com</td>
                                        <td>+984-9388638</td>
                                        <td>$451,45</td>
                                        <td>09/10/1990</td>
                                        <td>84</td>
                                        <td><span className="badge badge-danger">Disabled</span></td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm"><i className="feather icon-edit"/>&nbsp;Edit </a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="feather icon-trash-2"/>&nbsp;Delete </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={avatar5} className="img-fluid img-radius wid-40" alt="seller"/>
                                        </td>
                                        <td>Erich Mcbride</td>
                                        <td>xidim@temp.com</td>
                                        <td>+612-1385682</td>
                                        <td>$396,73</td>
                                        <td>09/10/1990</td>
                                        <td>24</td>
                                        <td><span className="badge badge-success">Active</span></td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm"><i className="feather icon-edit"/>&nbsp;Edit </a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="feather icon-trash-2"/>&nbsp;Delete </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={avatar1} className="img-fluid img-radius wid-40" alt="seller"/>
                                        </td>
                                        <td>Micheal Pewd</td>
                                        <td>patient@temp.com</td>
                                        <td>+984-9388638</td>
                                        <td>$451,45</td>
                                        <td>09/10/1990</td>
                                        <td>72</td>
                                        <td><span className="badge badge-success">Active</span></td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm"><i className="feather icon-edit"/>&nbsp;Edit </a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="feather icon-trash-2"/>&nbsp;Delete </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={avatar2} className="img-fluid img-radius wid-40" alt="seller"/>
                                        </td>
                                        <td>Micheal Pewd</td>
                                        <td>patient@temp.com</td>
                                        <td>+984-9388638</td>
                                        <td>$451,45</td>
                                        <td>09/10/1990</td>
                                        <td>65</td>
                                        <td><span className="badge badge-success">Active</span></td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm"><i className="feather icon-edit"/>&nbsp;Edit </a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="feather icon-trash-2"/>&nbsp;Delete </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={avatar3} className="img-fluid img-radius wid-40" alt="seller"/>
                                        </td>
                                        <td>Erich Mcbride</td>
                                        <td>xidim@temp.com</td>
                                        <td>+612-1385682</td>
                                        <td>$396,73</td>
                                        <td>09/10/1990</td>
                                        <td>35</td>
                                        <td><span className="badge badge-success">Active</span></td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm"><i className="feather icon-edit"/>&nbsp;Edit </a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="feather icon-trash-2"/>&nbsp;Delete </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={avatar3} className="img-fluid img-radius wid-40" alt="seller"/>
                                        </td>
                                        <td>Micheal Pewd</td>
                                        <td>patient@temp.com</td>
                                        <td>+984-9388638</td>
                                        <td>$451,45</td>
                                        <td>09/10/1990</td>
                                        <td>73</td>
                                        <td><span className="badge badge-success">Active</span></td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm"><i className="feather icon-edit"/>&nbsp;Edit </a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="feather icon-trash-2"/>&nbsp;Delete </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={avatar5} className="img-fluid img-radius wid-40" alt="seller"/>
                                        </td>
                                        <td>Erich Mcbride</td>
                                        <td>xidim@temp.com</td>
                                        <td>+612-1385682</td>
                                        <td>$396,73</td>
                                        <td>09/10/1990</td>
                                        <td>23</td>
                                        <td><span className="badge badge-success">Active</span></td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-info btn-sm"><i className="feather icon-edit"/>&nbsp;Edit </a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-danger btn-sm"><i className="feather icon-trash-2"/>&nbsp;Delete </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src={avatar1} className="img-fluid img-radius wid-40" alt="seller"/>
                                        </td>
                                        <td>Micheal Pewd</td>
                                        <td>patient@temp.com</td>
                                        <td>+984-9388638</td>
                                        <td>$451,45</td>
                                        <td>09/10/1990</td>
                                        <td>24</td>
                                        <td><span className="badge badge-danger">Disabled</span></td>
                                        <td>
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
                                <Modal.Title as="h5">Add Customers</Modal.Title>
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
                                            <label className="floating-label" htmlFor="Phone">Phone</label>
                                            <input type="text" className="form-control" id="Phone" placeholder="Phone"/>
                                        </div>
                                    </Col>
                                    <Col sm={12}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Address">Address</label>
                                            <textarea className="form-control" id="Address" rows="3" placeholder='Address'/>
                                        </div>
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
                                            <label className="floating-label" htmlFor="BDate">Birth Date</label>
                                            <input type="date" className="form-control" id="BDate" placeholder="Birth Date"/>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Age">Age</label>
                                            <input type="text" className="form-control" id="Age" placeholder="Age"/>
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

export default Customers;