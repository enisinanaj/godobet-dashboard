import React from 'react';
import {
    Row,
    Col,
    Card,
    Modal,
    Button
} from 'react-bootstrap';

import Aux from "./../../../hoc/_Aux";

import giftCard from './../../../assets/images/pages/gift-card.svg';
import coupon from './../../../assets/images/pages/coupon.svg';
import coupon1 from './../../../assets/images/pages/coupon1.svg';
import voucher from './../../../assets/images/pages/voucher.svg';
import discount from './../../../assets/images/pages/discount.svg';

class Coupons extends React.Component {
    state = {
        isOpen: false
    };


    render() {
        return (
            <Aux>
                <Row className='btn-page justify-content-center'>
                    <Col sm={4}>
                        <Card>
                            <Card.Body className="text-center">
                                <img src={giftCard} alt="" className="img-fluid w-50"/>
                                <h5 className="mt-3">10% off</h5>
                                <hr/>
                                <div className="row align-items-center m-l-0">
                                    <div className="col-sm-6 text-left">
                                        <button type="button" className="btn  btn-icon btn-outline-danger"><i className="feather icon-trash-2"/></button>
                                    </div>
                                    <div className="col-sm-6 text-right">
                                        <div className="custom-control custom-switch">
                                            <input type="checkbox" className="custom-control-input" id="customSwitch1" defaultChecked={true} />
                                            <label className="custom-control-label" htmlFor="customSwitch1">Active</label>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card>
                            <Card.Body className="text-center">
                                <img src={coupon} alt="" className="img-fluid w-50"/>
                                <h5 className="mt-3">10% off</h5>
                                <hr/>
                                <div className="row align-items-center m-l-0">
                                    <div className="col-sm-6 text-left">
                                        <button type="button" className="btn  btn-icon btn-outline-danger"><i className="feather icon-trash-2"/></button>
                                    </div>
                                    <div className="col-sm-6 text-right">
                                        <div className="custom-control custom-switch">
                                            <input type="checkbox" className="custom-control-input" id="customSwitch2"/>
                                            <label className="custom-control-label" htmlFor="customSwitch2">Active</label>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card>
                            <Card.Body className="text-center">
                                <img src={coupon1} alt="" className="img-fluid w-50"/>
                                <h5 className="mt-3">10% off</h5>
                                <hr/>
                                <div className="row align-items-center m-l-0">
                                    <div className="col-sm-6 text-left">
                                        <button type="button" className="btn  btn-icon btn-outline-danger"><i className="feather icon-trash-2"/></button>
                                    </div>
                                    <div className="col-sm-6 text-right">
                                        <div className="custom-control custom-switch">
                                            <input type="checkbox" className="custom-control-input" id="customSwitch3" defaultChecked={true} />
                                            <label className="custom-control-label" htmlFor="customSwitch3">Active</label>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card>
                            <Card.Body className="text-center">
                                <img src={voucher} alt="" className="img-fluid w-50"/>
                                <h5 className="mt-3">10% off</h5>
                                <hr/>
                                <div className="row align-items-center m-l-0">
                                    <div className="col-sm-6 text-left">
                                        <button type="button" className="btn  btn-icon btn-outline-danger"><i className="feather icon-trash-2"/></button>
                                    </div>
                                    <div className="col-sm-6 text-right">
                                        <div className="custom-control custom-switch">
                                            <input type="checkbox" className="custom-control-input" id="customSwitch4" defaultChecked={true}/>
                                            <label className="custom-control-label" htmlFor="customSwitch4">Active</label>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card>
                            <Card.Body className="text-center">
                                <img src={discount} alt="" className="img-fluid w-50"/>
                                <h5 className="mt-3">10% off</h5>
                                <hr/>
                                <div className="row align-items-center m-l-0">
                                    <div className="col-sm-6 text-left">
                                        <button type="button" className="btn  btn-icon btn-outline-danger"><i className="feather icon-trash-2"/></button>
                                    </div>
                                    <div className="col-sm-6 text-right">
                                        <div className="custom-control custom-switch">
                                            <input type="checkbox" className="custom-control-input" id="customSwitch5" defaultChecked={true}/>
                                            <label className="custom-control-label" htmlFor="customSwitch5">Active</label>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <div className="text-center">
                            <Button variant="primary" className="btn-sm btn-round has-ripple" onClick={() => this.setState({ isOpen: true })}><i className="feather icon-plus"/> Add Coupon</Button>
                        </div>
                        <Modal size='lg' show={this.state.isOpen} onHide={() => this.setState({ isOpen: false })}>
                            <Modal.Header closeButton>
                                <Modal.Title as="h5">Edit Coupons</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    <Col sm={6}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Name"><small className="text-danger">* </small>Coupons Name</label>
                                            <input type="text" className="form-control" id="Name" placeholder="Coupons Name"/>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Coupon-Code">Coupon Code</label>
                                            <input type="email" className="form-control" id="Coupon-Code" placeholder="Coupon Code"/>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={6}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Apply"><small className="text-danger">* </small>Apply to memberships</label>
                                            <select className="form-control" id="Apply">
                                                <option value=""/>
                                                <option value="2">Bronze</option>
                                                <option value="3">Gold</option>
                                                <option value="4">Platinum</option>
                                                <option value="5">Silver</option>
                                                <option value="1">Trial</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="DiscountAmount">Discount Amount</label>
                                            <input type="text" className="form-control" id="DiscountAmount" placeholder="Discount Amount"/>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={6}>
                                        <label className="d-block mb-2">Published</label>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" defaultChecked={true}/>
                                            <label className="custom-control-label" htmlFor="customRadioInline1">Yes</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="customRadioInline2">No</label>
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

export default Coupons;