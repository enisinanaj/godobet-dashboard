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

import prod1 from '../../../assets/images/product/prod-1.jpg';
import prod2 from '../../../assets/images/product/prod-2.jpg';
import prod3 from '../../../assets/images/product/prod-3.jpg';
import prod4 from '../../../assets/images/product/prod-4.jpg';
import prod5 from '../../../assets/images/product/prod-5.jpg';
import prod6 from '../../../assets/images/product/prod-6.jpg';
import prod7 from '../../../assets/images/product/prod-7.jpg';
import prod8 from '../../../assets/images/product/prod-8.jpg';
import prod9 from '../../../assets/images/product/prod-9.jpg';
import prod10 from '../../../assets/images/product/prod-10.jpg';
import prod11 from '../../../assets/images/product/prod-11.jpg';
import prod12 from '../../../assets/images/product/prod-12.jpg';


import DEMO from "../../../store/constant";

$.DataTable = require( 'datatables.net-bs' );
require( 'datatables.net-responsive-bs' );

function atable() {
    let tableZero = '#data-table-zero';
    $.fn.dataTable.ext.errMode = 'throw';

    $(tableZero).DataTable();
}

class Product extends React.Component {
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
                                        <Button variant="success" className="btn-sm btn-round has-ripple" onClick={() => this.setState({ isOpen: true })}><i className="feather icon-plus"/> Add Product</Button>
                                    </Col>
                                </Row>
                                <Table ref="tbl" striped hover responsive id="data-table-zero">
                                    <thead className="thead-light">
                                    <tr>
                                        <th>Product</th>
                                        <th>Category</th>
                                        <th>Added Date</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="align-middle">
                                            <img src={prod1} alt="contact-img" title="contact-img" className="rounded mr-3" height="48" />
                                            <p className="m-0 d-inline-block align-middle font-16">
                                                <a href={DEMO.BLANK_LINK} className="text-body">Amazing Rolling Chair</a>
                                                <br />
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                            </p>
                                        </td>
                                        <td className="align-middle">
                                            Office Chairs
                                        </td>
                                        <td className="align-middle">
                                            16/12/2019
                                        </td>
                                        <td className="align-middle">
                                            $597.66
                                        </td>
                                        <td className="align-middle">
                                            654
                                        </td>
                                        <td className="align-middle">
                                            <span className="badge badge-success">Active</span>
                                        </td>

                                        <td className="table-action">
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-primary"><i className="feather icon-eye"/></a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-success"><i className="feather icon-edit"/></a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-danger"><i className="feather icon-trash-2"/></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <img src={prod2} alt="contact-img" title="contact-img" className="rounded mr-3" height="48" />
                                            <p className="m-0 d-inline-block align-middle font-16">
                                                <a href={DEMO.BLANK_LINK} className="text-body">Minicap Dining Chair</a>
                                                <br />
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star"/>
                                            </p>
                                        </td>
                                        <td className="align-middle">
                                            Wooden Chairs
                                        </td>
                                        <td className="align-middle">
                                            28/01/2019
                                        </td>
                                        <td className="align-middle">
                                            $63.56
                                        </td>
                                        <td className="align-middle">
                                            236
                                        </td>
                                        <td className="align-middle">
                                            <span className="badge badge-success">Active</span>
                                        </td>
                                        <td className="table-action">
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-primary"><i className="feather icon-eye"/></a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-success"><i className="feather icon-edit"/></a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-danger"><i className="feather icon-trash-2"/></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <img src={prod3} alt="contact-img" title="contact-img" className="rounded mr-3" height="48" />
                                            <p className="m-0 d-inline-block align-middle font-16">
                                                <a href={DEMO.BLANK_LINK} className="text-body">Marvel T-shirts</a>
                                                <br />
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star"/>
                                                <span className="text-warning feather icon-star"/>
                                            </p>
                                        </td>
                                        <td className="align-middle">
                                            Man cloths
                                        </td>
                                        <td className="align-middle">
                                            08/23/2018
                                        </td>
                                        <td className="align-middle">
                                            $12.00
                                        </td>

                                        <td className="align-middle">
                                            234
                                        </td>
                                        <td className="align-middle">
                                            <span className="badge badge-success">Active</span>
                                        </td>
                                        <td className="table-action">
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-primary"><i className="feather icon-eye"/></a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-success"><i className="feather icon-edit"/></a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-danger"><i className="feather icon-trash-2"/></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <img src={prod4} alt="contact-img" title="contact-img" className="rounded mr-3" height="48" />
                                            <p className="m-0 d-inline-block align-middle font-16">
                                                <a href={DEMO.BLANK_LINK} className="text-body">Lonaval jacket</a>
                                                <br />
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                            </p>
                                        </td>
                                        <td className="align-middle">
                                            Man cloths
                                        </td>
                                        <td className="align-middle">
                                            08/02/2018
                                        </td>
                                        <td className="align-middle">
                                            $49.54
                                        </td>
                                        <td className="align-middle">
                                            124
                                        </td>
                                        <td className="align-middle">
                                            <span className="badge badge-success">Active</span>
                                        </td>
                                        <td className="table-action">
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-primary"><i className="feather icon-eye"/></a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-success"><i className="feather icon-edit"/></a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-danger"><i className="feather icon-trash-2"/></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <img src={prod5} alt="contact-img" title="contact-img" className="rounded mr-3" height="48" />
                                            <p className="m-0 d-inline-block align-middle font-16">
                                                <a href={DEMO.BLANK_LINK} className="text-body">Goldyrose Kurta</a>
                                                <br />
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star"/>
                                            </p>
                                        </td>
                                        <td className="align-middle">
                                            Woman cloths
                                        </td>
                                        <td className="align-middle">
                                            01/12/2018
                                        </td>
                                        <td className="align-middle">
                                            $58.57
                                        </td>

                                        <td className="align-middle">
                                            243
                                        </td>
                                        <td className="align-middle">
                                            <span className="badge badge-danger">Deactive</span>
                                        </td>
                                        <td className="table-action">
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-primary"><i className="feather icon-eye"/></a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-success"><i className="feather icon-edit"/></a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-danger"><i className="feather icon-trash-2"/></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <img src={prod6} alt="contact-img" title="contact-img" className="rounded mr-3" height="48" />
                                            <p className="m-0 d-inline-block align-middle font-16">
                                                <a href={DEMO.BLANK_LINK} className="text-body">Zigzag shirts</a>
                                                <br />
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                            </p>
                                        </td>
                                        <td className="align-middle">
                                            Man cloths
                                        </td>
                                        <td className="align-middle">
                                            12/04/2019
                                        </td>
                                        <td className="align-middle">
                                            $45.26
                                        </td>
                                        <td className="align-middle">
                                            350
                                        </td>
                                        <td className="align-middle">
                                            <span className="badge badge-success">Active</span>
                                        </td>
                                        <td className="table-action">
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-primary"><i className="feather icon-eye"/></a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-success"><i className="feather icon-edit"/></a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-danger"><i className="feather icon-trash-2"/></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <img src={prod7} alt="contact-img" title="contact-img" className="rounded mr-3" height="48" />
                                            <p className="m-0 d-inline-block align-middle font-16">
                                                <a href={DEMO.BLANK_LINK} className="text-body">Foxy Bag</a>
                                                <br />
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                            </p>
                                        </td>
                                        <td className="align-middle">
                                            Woman cloths
                                        </td>
                                        <td className="align-middle">
                                            06/30/2018
                                        </td>
                                        <td className="align-middle">
                                            $76
                                        </td>

                                        <td className="align-middle">
                                            560
                                        </td>
                                        <td className="align-middle">
                                            <span className="badge badge-danger">Deactive</span>
                                        </td>
                                        <td className="table-action">
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-primary"><i className="feather icon-eye"/></a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-success"><i className="feather icon-edit"/></a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-danger"><i className="feather icon-trash-2"/></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <img src={prod8} alt="contact-img" title="contact-img" className="rounded mr-3" height="48" />
                                            <p className="m-0 d-inline-block align-middle font-16">
                                                <a href={DEMO.BLANK_LINK} className="text-body">Bluffly bag</a>
                                                <br />
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star"/>
                                            </p>
                                        </td>
                                        <td className="align-middle">
                                            Kids cloths
                                        </td>
                                        <td className="align-middle">
                                            06/13/2019
                                        </td>
                                        <td className="align-middle">
                                            $23
                                        </td>
                                        <td className="align-middle">
                                            758
                                        </td>
                                        <td className="align-middle">
                                            <span className="badge badge-success">Active</span>
                                        </td>
                                        <td className="table-action">
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-primary"><i className="feather icon-eye"/></a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-success"><i className="feather icon-edit"/></a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-danger"><i className="feather icon-trash-2"/></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <img src={prod9} alt="contact-img" title="contact-img" className="rounded mr-3" height="48" />
                                            <p className="m-0 d-inline-block align-middle font-16">
                                                <a href={DEMO.BLANK_LINK} className="text-body">Sonaminya Suits</a>
                                                <br />
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star"/>
                                            </p>
                                        </td>
                                        <td className="align-middle">
                                            Woman cloths
                                        </td>
                                        <td className="align-middle">
                                            05/02/2019
                                        </td>
                                        <td className="align-middle">
                                            $54
                                        </td>
                                        <td className="align-middle">
                                            12
                                        </td>
                                        <td className="align-middle">
                                            <span className="badge badge-success">Active</span>
                                        </td>
                                        <td className="table-action">
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-primary"><i className="feather icon-eye"/></a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-success"><i className="feather icon-edit"/></a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-danger"><i className="feather icon-trash-2"/></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <img src={prod10} alt="contact-img" title="contact-img" className="rounded mr-3" height="48" />
                                            <p className="m-0 d-inline-block align-middle font-16">
                                                <a href={DEMO.BLANK_LINK} className="text-body">Offradys bag</a>
                                                <br />
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star"/>
                                            </p>
                                        </td>
                                        <td className="align-middle">
                                            Travel bag
                                        </td>
                                        <td className="align-middle">
                                            04/09/2019
                                        </td>
                                        <td className="align-middle">
                                            $78.66
                                        </td>
                                        <td className="align-middle">
                                            12
                                        </td>
                                        <td className="align-middle">
                                            <span className="badge badge-danger">Deactive</span>
                                        </td>
                                        <td className="table-action">
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-primary"><i className="feather icon-eye"/></a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-success"><i className="feather icon-edit"/></a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-danger"><i className="feather icon-trash-2"/></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <img src={prod11} alt="contact-img" title="contact-img" className="rounded mr-3" height="48" />
                                            <p className="m-0 d-inline-block align-middle font-16">
                                                <a href={DEMO.BLANK_LINK} className="text-body">Fostroad watch</a>
                                                <br />
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star"/>
                                            </p>
                                        </td>
                                        <td className="align-middle">
                                            Man watch
                                        </td>
                                        <td className="align-middle">
                                            03/24/2019
                                        </td>
                                        <td className="align-middle">
                                            $5
                                        </td>
                                        <td className="align-middle">
                                            204
                                        </td>
                                        <td className="align-middle">
                                            <span className="badge badge-danger">Deactive</span>
                                        </td>
                                        <td className="table-action">
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-primary"><i className="feather icon-eye"/></a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-success"><i className="feather icon-edit"/></a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-danger"><i className="feather icon-trash-2"/></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <img src={prod12} alt="contact-img" title="contact-img" className="rounded mr-3" height="48" />
                                            <p className="m-0 d-inline-block align-middle font-16">
                                                <a href={DEMO.BLANK_LINK} className="text-body">Chamiu lipstick</a>
                                                <br />
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star-on"/>
                                                <span className="text-warning feather icon-star"/>
                                            </p>
                                        </td>
                                        <td className="align-middle">
                                            Woman cloath
                                        </td>
                                        <td className="align-middle">
                                            09/05/2019
                                        </td>
                                        <td className="align-middle">
                                            $2.24
                                        </td>
                                        <td className="align-middle">
                                            541
                                        </td>
                                        <td className="align-middle">
                                            <span className="badge badge-success">Active</span>
                                        </td>
                                        <td className="table-action">
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-primary"><i className="feather icon-eye"/></a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-success"><i className="feather icon-edit"/></a>
                                            <a href={DEMO.BLANK_LINK} className="btn btn-icon btn-outline-danger"><i className="feather icon-trash-2"/></a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        <Modal show={this.state.isOpen} onHide={() => this.setState({ isOpen: false })}>
                            <Modal.Header closeButton>
                                <Modal.Title as="h5">Add Product</Modal.Title>
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

export default Product;