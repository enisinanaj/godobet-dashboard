import React from 'react';
import {
    Row,
    Col,
    Card,
    Button,
    Table,
    Modal
} from 'react-bootstrap';

import Aux from "./../../../hoc/_Aux";

import DEMO from "../../../store/constant";

class Customer extends React.Component {
    state = {
        isOpen: false
    };
    
    render() {
        return (
            <Aux>
                <Row>
                    <Col sm={12}>
                        <Card className='shadow-none'>
                            <Card.Header>
                                <h5>Customers</h5>
                                <div className="card-header-right">
                                    <Button variant="success" className="btn-sm btn-round has-ripple" onClick={() => this.setState({ isOpen: true })}><i className="feather icon-plus"/> Add Customers</Button>
                                </div>
                            </Card.Header>
                            <Card.Body className='shadow border-0'>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th className="border-top-0">Name</th>
                                        <th className="border-top-0">Email</th>
                                        <th className="border-top-0">Account</th>
                                        <th className="border-top-0">Last Login</th>
                                        <th className="border-top-0"/>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Mark Jason</td>
                                        <td><a href={DEMO.BLANK_LINK}>mark@mark.com</a></td>
                                        <td>N/A</td>
                                        <td>January 01,2019 at 03:35 PM</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="text-muted"><i className="feather icon-edit mr-1"/></a>
                                            <a href={DEMO.BLANK_LINK} className="text-muted"><i className="feather icon-trash-2"/></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Alice Nicol</td>
                                        <td><a href={DEMO.BLANK_LINK}>mark@mark.com</a></td>
                                        <td>N/A</td>
                                        <td>January 01,2019 at 03:35 PM</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="text-muted"><i className="feather icon-edit mr-1"/></a>
                                            <a href={DEMO.BLANK_LINK} className="text-muted"><i className="feather icon-trash-2"/></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Harry Cook</td>
                                        <td><a href={DEMO.BLANK_LINK}>mark@mark.com</a></td>
                                        <td>N/A</td>
                                        <td>January 01,2019 at 03:35 PM</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="text-muted"><i className="feather icon-edit mr-1"/></a>
                                            <a href={DEMO.BLANK_LINK} className="text-muted"><i className="feather icon-trash-2"/></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Tom Hannry</td>
                                        <td><a href={DEMO.BLANK_LINK}>mark@mark.com</a></td>
                                        <td>N/A</td>
                                        <td>January 01,2019 at 03:35 PM</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="text-muted"><i className="feather icon-edit mr-1"/></a>
                                            <a href={DEMO.BLANK_LINK} className="text-muted"><i className="feather icon-trash-2"/></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Martin Frank</td>
                                        <td><a href={DEMO.BLANK_LINK}>mark@mark.com</a></td>
                                        <td>N/A</td>
                                        <td>January 01,2019 at 03:35 PM</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="text-muted"><i className="feather icon-edit mr-1"/></a>
                                            <a href={DEMO.BLANK_LINK} className="text-muted"><i className="feather icon-trash-2"/></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Endrew Khan</td>
                                        <td><a href={DEMO.BLANK_LINK}>mark@mark.com</a></td>
                                        <td>N/A</td>
                                        <td>January 01,2019 at 03:35 PM</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="text-muted"><i className="feather icon-edit mr-1"/></a>
                                            <a href={DEMO.BLANK_LINK} className="text-muted"><i className="feather icon-trash-2"/></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Chritina Methewv</td>
                                        <td><a href={DEMO.BLANK_LINK}>mark@mark.com</a></td>
                                        <td>N/A</td>
                                        <td>January 01,2019 at 03:35 PM</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="text-muted"><i className="feather icon-edit mr-1"/></a>
                                            <a href={DEMO.BLANK_LINK} className="text-muted"><i className="feather icon-trash-2"/></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Jakson Pit</td>
                                        <td><a href={DEMO.BLANK_LINK}>mark@mark.com</a></td>
                                        <td>N/A</td>
                                        <td>January 01,2019 at 03:35 PM</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="text-muted"><i className="feather icon-edit mr-1"/></a>
                                            <a href={DEMO.BLANK_LINK} className="text-muted"><i className="feather icon-trash-2"/></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Nikolas Jons</td>
                                        <td><a href={DEMO.BLANK_LINK}>mark@mark.com</a></td>
                                        <td>N/A</td>
                                        <td>January 01,2019 at 03:35 PM</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="text-muted"><i className="feather icon-edit mr-1"/></a>
                                            <a href={DEMO.BLANK_LINK} className="text-muted"><i className="feather icon-trash-2"/></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Nik Cage</td>
                                        <td><a href={DEMO.BLANK_LINK}>mark@mark.com</a></td>
                                        <td>N/A</td>
                                        <td>January 01,2019 at 03:35 PM</td>
                                        <td>
                                            <a href={DEMO.BLANK_LINK} className="text-muted"><i className="feather icon-edit mr-1"/></a>
                                            <a href={DEMO.BLANK_LINK} className="text-muted"><i className="feather icon-trash-2"/></a>
                                        </td>
                                    </tr>

                                    </tbody>
                                </Table>
                                <div className="pagination-block text-center">
                                    <nav aria-label="Page navigation example" className="d-inline-block">
                                        <ul className="pagination">
                                            <li className="page-item"><a className="page-link" href={DEMO.BLANK_LINK}>Previous</a></li>
                                            <li className="page-item"><a className="page-link" href={DEMO.BLANK_LINK}>1</a></li>
                                            <li className="page-item active"><a className="page-link" href={DEMO.BLANK_LINK}>2</a></li>
                                            <li className="page-item"><a className="page-link" href={DEMO.BLANK_LINK}>3</a></li>
                                            <li className="page-item"><a className="page-link" href={DEMO.BLANK_LINK}>Next</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </Card.Body>
                        </Card>
                        <Modal show={this.state.isOpen} onHide={() => this.setState({ isOpen: false })}>
                            <Modal.Header closeButton>
                                <Modal.Title as="h5"><i className='feather icon-user' /> Add Customer</Modal.Title>
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
                                    <Col sm={12}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Icon">Profie Image</label>
                                            <input type="file" className="form-control" id="Icon" placeholder="Profie Image"/>
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

export default Customer;