import React from 'react';
import {
    Row,
    Col,
    Table,
    Card
} from 'react-bootstrap';

import Aux from "./../../../hoc/_Aux";

import prod1 from '../../../assets/images/product/prod-1.jpg';
import prod2 from '../../../assets/images/product/prod-2.jpg';
import prod12 from '../../../assets/images/product/prod-12.jpg';


import DEMO from "../../../store/constant";

class Cart extends React.Component {

    render() {
        return (
            <Aux>
                <Row className='btn-page'>
                    <Col md={8}>
                        <Card className='table-card'>
                            <Card.Header>
                                <h5>My Cart ( 3 )</h5>
                                <div className="card-header-right wid-250">
                                    <div className="form-group mb-0 m-r-10">
                                        <input type="text" className="form-control" id="pincode" placeholder="Enter delivery pincode"/>
                                    </div>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive className='table-borderless mb-0'>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div className="d-inline-block align-middle text-center">
                                                <img src={prod1} alt="contact-img" title="contact-img" className="rounded" height="90" />
                                                <br/>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="button groups sm">
                                                    <button type="button" id="decrease" className="btn btn-secondary">-</button>
                                                    <input className="wid-35 text-center" type="number" id="number" defaultValue="0" />
                                                    <button type="button" id="increase" className="btn btn-secondary">+</button>
                                                </div>
                                            </div>
                                            <div className="d-inline-block align-middle m-l-10">
                                                <a href={DEMO.BLANK_LINK} className="text-body">
                                                    <h5 className="mb-1">Amazing Rolling Chair</h5>
                                                </a>
                                                <p className="text-muted mb-1">Red, Black</p>
                                                <p className="text-muted mb-1">Seller: DZYN Furnitures</p>
                                                <h4>$139.58 <del className="text-muted font-weight-normal h5"> <small>$322.53</small></del> <small className="text-success h5">86% off</small></h4>
                                                <a href={DEMO.BLANK_LINK} className="text-muted text-h-primary mb-1">Save for later</a>
                                                <a href={DEMO.BLANK_LINK} className="text-muted text-h-danger m-l-10 mb-1">Remove</a>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <div className="text-left d-inline-block">
                                                <h6 className="my-2">Delivery by Sat Aug 17 | <span className="">$50</span></h6>
                                                <small className="text-muted">10 Days Replacement Policy</small>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-inline-block align-middle text-center">
                                                <img src={prod2} alt="contact-img" title="contact-img" className="rounded" height="90" />
                                                <br/>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="button groups sm">
                                                    <button type="button" id="decrease" className="btn btn-secondary">-</button>
                                                    <input className="wid-35 text-center" type="number" id="number" defaultValue="0" />
                                                    <button type="button" id="increase" className="btn btn-secondary">+</button>
                                                </div>
                                            </div>
                                            <div className="d-inline-block align-middle m-l-10">
                                                <a href={DEMO.BLANK_LINK} className="text-body">
                                                    <h5 className="mb-1">Minicap Dining Chair</h5>
                                                </a>
                                                <p className="text-muted mb-1">Red, Black</p>
                                                <p className="text-muted mb-1">Seller: DZYN Furnitures</p>
                                                <h4>$139.58 <del className="text-muted font-weight-normal h5"> <small>$322.53</small></del> <small className="text-success h5">86% off</small></h4>
                                                <a href={DEMO.BLANK_LINK} className="text-muted text-h-primary mb-1">Save for later</a>
                                                <a href={DEMO.BLANK_LINK} className="text-muted text-h-danger m-l-10 mb-1">Remove</a>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <div className="text-left d-inline-block">
                                                <h6 className="my-2">Delivery by Fri Aug 16 | <span className="text-success">FREE</span></h6>
                                                <small className="text-muted">10 Days Replacement Policy</small>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-inline-block align-middle text-center">
                                                <img src={prod12} alt="contact-img" title="contact-img" className="rounded" height="90" />
                                                <br/>
                                                <div className="btn-group btn-group-sm" role="group" aria-label="button groups sm">
                                                    <button type="button" id="decrease" className="btn btn-secondary">-</button>
                                                    <input className="wid-35 text-center" type="number" id="number" defaultValue="0" />
                                                    <button type="button" id="increase" className="btn btn-secondary">+</button>
                                                </div>
                                            </div>
                                            <div className="d-inline-block align-middle m-l-10">
                                                <a href={DEMO.BLANK_LINK} className="text-body">
                                                    <h5 className="mb-1">Chamiu lipstick</h5>
                                                </a>
                                                <p className="text-muted mb-1">Brown, red</p>
                                                <p className="text-muted mb-1">Seller: DZYN Furnitures</p>
                                                <h4>$139.58 <del className="text-muted font-weight-normal h5"> <small>$50.45</small></del> <small className="text-success h5">86% off</small></h4>
                                                <a href={DEMO.BLANK_LINK} className="text-muted text-h-primary mb-1">Save for later</a>
                                                <a href={DEMO.BLANK_LINK} className="text-muted text-h-danger m-l-10 mb-1">Remove</a>
                                            </div>
                                        </td>
                                        <td className="text-right">
                                            <div className="text-left d-inline-block">
                                                <h6 className="my-2">Delivery by Fri Aug 16 | <span className="">$50</span></h6>
                                                <small className="text-muted">10 Days Replacement Policy</small>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Header>
                                <h5>Price Details</h5>
                            </Card.Header>
                            <Card.Body>
                                <h6 className="mb-2">Price (3 items) <span className="float-right">$2800</span></h6>
                                <h6 className="mb-2">Delivery Charges <span className="float-right">$100</span></h6>
                                <h6 className="mb-2">TAX / VAT <span className="float-right">$0</span></h6>
                                <hr/>
                                <h6 className="mb-0">Payable Amount <span className="float-right">$2900</span></h6>
                            </Card.Body>
                            <Card.Footer className="py-3">
                                <h6 className="mb-0 text-success">Your Total Savings on this order $550</h6>
                            </Card.Footer>
                        </Card>
                        <div className="media">
                            <i className="fas fa-shield-alt h3 m-r-10 text-muted"/>
                            <div className="media-body">
                                <h6 className="mt-0 text-muted"> Safe and Secure Payments.Easy returns.100% Authentic products.</h6>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Cart;