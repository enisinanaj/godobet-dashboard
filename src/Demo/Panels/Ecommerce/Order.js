import React from 'react';
import {
    Row,
    Col,
    Card
} from 'react-bootstrap';

import Aux from "./../../../hoc/_Aux";

import prod1 from '../../../assets/images/product/prod-1.jpg';
import prod2 from '../../../assets/images/product/prod-2.jpg';
import prod3 from '../../../assets/images/product/prod-3.jpg';
import prod12 from '../../../assets/images/product/prod-12.jpg';

import DEMO from "../../../store/constant";


class Order extends React.Component {

    render() {
        return (
            <Aux>
                <Row className='btn-page'>
                    <Col sm={12}>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center justify-contact-between">
                                    <Col>
                                        <div className="btn btn-primary">
                                            28246249364
                                        </div>
                                    </Col>
                                    <Col className="text-right">
                                        <button className="btn btn-outline-primary">
                                            <i className="feather icon-map-pin"/> track
                                        </button>
                                    </Col>
                                </Row>
                                <div className="table-responsive">
                                    <table className="table m-0 mt-3">
                                        <tbody>
                                        <tr>
                                            <td className="align-middle">
                                                <img src={prod1} alt="contact-img" title="contact-img" className="rounded mr-3" height="80" />
                                                <div className="m-0 d-inline-block align-middle font-16">
                                                    <a href={DEMO.BLANK_LINK} className="text-body">
                                                        <h6 className="d-inline-block">Amazing Rolling Chair</h6>
                                                    </a>
                                                    <br />
                                                    <span className="text-warning feather icon-star-on"/>
                                                    <span className="text-warning feather icon-star-on"/>
                                                    <span className="text-warning feather icon-star-on"/>
                                                    <span className="text-warning feather icon-star-on"/>
                                                    <span className="text-warning feather icon-star-on"/>
                                                </div>
                                            </td>
                                            <td>
                                                <h5>$123.95</h5>
                                            </td>
                                            <td className="text-right">
                                                <div className="text-left d-inline-block">
                                                    <h6 className="my-0">Delivered on Mon, Oct 16th 2018</h6>
                                                    <small className="text-muted">Brief description</small>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <hr className="mt-0"/>
                                <Row className="align-items-center justify-contact-between">
                                    <Col>
                                        <span className="text-muted">Ordered On</span>
                                        <strong>Wed, Oct 3rd 2018</strong>
                                    </Col>
                                    <Col className="text-right">
                                        <span className="text-muted">Ordered Amount</span>
                                        <strong>$1150</strong>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center justify-contact-between">
                                    <Col>
                                        <div className="btn btn-primary">
                                            28246249364
                                        </div>
                                    </Col>
                                    <Col className="text-right">
                                        <button className="btn btn-outline-primary">
                                            <i className="feather icon-map-pin"/> track
                                        </button>
                                    </Col>
                                </Row>
                                <div className="table-responsive">
                                    <table className="table m-0 mt-3">
                                        <tbody>
                                        <tr>
                                            <td className="align-middle">
                                                <img src={prod2} alt="contact-img" title="contact-img" className="rounded mr-3" height="80" />
                                                <div className="m-0 d-inline-block align-middle font-16">
                                                    <a href={DEMO.BLANK_LINK} className="text-body">
                                                        <h6 className="d-inline-block">Minicap Dining Chair</h6>
                                                    </a>
                                                    <br />
                                                    <span className="text-warning feather icon-star-on"/>
                                                    <span className="text-warning feather icon-star-on"/>
                                                    <span className="text-warning feather icon-star-on"/>
                                                    <span className="text-warning feather icon-star-on"/>
                                                    <span className="text-warning feather icon-star-on"/>
                                                </div>
                                            </td>
                                            <td>
                                                <h5>$123.95</h5>
                                            </td>
                                            <td className="text-right">
                                                <div className="text-left d-inline-block">
                                                    <h6 className="my-0">Delivered on Mon, Oct 16th 2018</h6>
                                                    <small className="text-muted">Brief description</small>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <hr className="mt-0"/>
                                <Row className="align-items-center justify-contact-between">
                                    <Col>
                                        <span className="text-muted">Ordered On</span>
                                        <strong>Wed, Oct 3rd 2018</strong>
                                    </Col>
                                    <Col className="text-right">
                                        <span className="text-muted">Ordered Amount</span>
                                        <strong>$123.00</strong>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center justify-contact-between">
                                    <Col>
                                        <div className="btn btn-primary">
                                            28246249364
                                        </div>
                                    </Col>
                                    <Col className="text-right">
                                        <button className="btn btn-outline-primary">
                                            <i className="feather icon-map-pin"/> track
                                        </button>
                                    </Col>
                                </Row>
                                <div className="table-responsive">
                                    <table className="table m-0 mt-3">
                                        <tbody>
                                        <tr>
                                            <td className="align-middle">
                                                <img src={prod3} alt="contact-img" title="contact-img" className="rounded mr-3" height="80" />
                                                <div className="m-0 d-inline-block align-middle font-16">
                                                    <a href={DEMO.BLANK_LINK} className="text-body">
                                                        <h6 className="d-inline-block">Marvel T-shirts</h6>
                                                    </a>
                                                    <br />
                                                    <span className="text-warning feather icon-star-on"/>
                                                    <span className="text-warning feather icon-star-on"/>
                                                    <span className="text-warning feather icon-star-on"/>
                                                    <span className="text-warning feather icon-star-on"/>
                                                    <span className="text-warning feather icon-star-on"/>
                                                </div>
                                            </td>
                                            <td>
                                                <h5>$24.00</h5>
                                            </td>
                                            <td className="text-right">
                                                <div className="text-left d-inline-block">
                                                    <h6 className="my-0">Delivered on Mon, Oct 16th 2018</h6>
                                                    <small className="text-muted">Brief description</small>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <hr className="mt-0"/>
                                <Row className="align-items-center justify-contact-between">
                                    <Col>
                                        <span className="text-muted">Ordered On</span>
                                        <strong>Wed, Oct 3rd 2018</strong>
                                    </Col>
                                    <Col className="text-right">
                                        <span className="text-muted">Ordered Amount</span>
                                        <strong>$24.00</strong>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center justify-contact-between">
                                    <Col>
                                        <div className="btn btn-primary">
                                            28246249364
                                        </div>
                                    </Col>
                                    <Col className="text-right">
                                        <button className="btn btn-outline-primary">
                                            <i className="feather icon-map-pin"/> track
                                        </button>
                                    </Col>
                                </Row>
                                <div className="table-responsive">
                                    <table className="table m-0 mt-3">
                                        <tbody>
                                        <tr>
                                            <td className="align-middle">
                                                <img src={prod12} alt="contact-img" title="contact-img" className="rounded mr-3" height="80" />
                                                <div className="m-0 d-inline-block align-middle font-16">
                                                    <a href={DEMO.BLANK_LINK} className="text-body">
                                                        <h6 className="d-inline-block">Chamiu lipstick</h6>
                                                    </a>
                                                    <br />
                                                    <span className="text-warning feather icon-star-on"/>
                                                    <span className="text-warning feather icon-star-on"/>
                                                    <span className="text-warning feather icon-star-on"/>
                                                    <span className="text-warning feather icon-star-on"/>
                                                    <span className="text-warning feather icon-star-on"/>
                                                </div>
                                            </td>
                                            <td>
                                                <h5>$2.52</h5>
                                            </td>
                                            <td className="text-right">
                                                <div className="text-left d-inline-block">
                                                    <h6 className="my-0">Delivered on Mon, Oct 16th 2018</h6>
                                                    <small className="text-muted">Brief description</small>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <hr className="mt-0"/>
                                <Row className="align-items-center justify-contact-between">
                                    <Col>
                                        <span className="text-muted">Ordered On</span>
                                        <strong>Wed, Oct 3rd 2018</strong>
                                    </Col>
                                    <Col className="text-right">
                                        <span className="text-muted">Ordered Amount</span>
                                        <strong>$2.52</strong>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Order;