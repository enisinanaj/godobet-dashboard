import React from 'react';
import {
    Row,
    Col,
    Card,
    Modal,
    Button
} from 'react-bootstrap';

import Aux from "./../../../hoc/_Aux";

import medalTrial from '../../../assets/images/pages/medal-trial.svg';
import medalBronze from '../../../assets/images/pages/medal-bronze.svg';
import medalGold from '../../../assets/images/pages/medal-gold.svg';
import medalPlatinum from '../../../assets/images/pages/medal-platinum.svg';
import medalSilver from '../../../assets/images/pages/medal-silver.svg';

class Membership extends React.Component {
    state = {
        isOpen: false
    };


    render() {
        return (
            <Aux>
                <Row className='justify-content-center'>
                    <Col sm={4}>
                        <Card>
                            <Card.Body className="text-center">
                                <img src={medalTrial} alt="" className="img-fluid w-50"/>
                                    <h4 className="mt-3">$1.99 Trial</h4>
                                    <p className="mb-2">This is 2 days membership</p>
                                    <p><span className="badge badge-primary">16 Sales</span> </p>
                                    <hr/>
                                    <button type="button" className="btn btn-icon btn-outline-primary mr-2" onClick={() => this.setState({ isOpen: true })}><i className="feather icon-edit-2"/></button>
                                    <button type="button" className="btn btn-icon btn-outline-danger"><i className="feather icon-trash-2"/></button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card>
                            <Card.Body className="text-center">
                                <img src={medalBronze} alt="" className="img-fluid w-50"/>
                                <h4 className="mt-3">$1.99 Trial</h4>
                                <p className="mb-2">This is 2 days membership</p>
                                <p><span className="badge badge-primary">16 Sales</span> </p>
                                <hr/>
                                <button type="button" className="btn btn-icon btn-outline-primary mr-2" onClick={() => this.setState({ isOpen: true })}><i className="feather icon-edit-2"/></button>
                                <button type="button" className="btn btn-icon btn-outline-danger"><i className="feather icon-trash-2"/></button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card>
                            <Card.Body className="text-center">
                                <img src={medalGold} alt="" className="img-fluid w-50"/>
                                <h4 className="mt-3">$6.99 GOLD</h4>
                                <p className="mb-2">This is 90 days basic membership</p>
                                <p><span className="badge badge-primary">26 Sales</span> </p>
                                <hr/>
                                <button type="button" className="btn btn-icon btn-outline-primary mr-2" onClick={() => this.setState({ isOpen: true })}><i className="feather icon-edit-2"/></button>
                                <button type="button" className="btn btn-icon btn-outline-danger"><i className="feather icon-trash-2"/></button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card>
                            <Card.Body className="text-center">
                                <img src={medalPlatinum} alt="" className="img-fluid w-50"/>
                                <h4 className="mt-3">$149.99 PLATINUM</h4>
                                <p className="mb-2">Platinum Yearly Subscription</p>
                                <p><span className="badge badge-primary">29 Sales</span> </p>
                                <hr/>
                                <button type="button" className="btn btn-icon btn-outline-primary mr-2" onClick={() => this.setState({ isOpen: true })}><i className="feather icon-edit-2"/></button>
                                <button type="button" className="btn btn-icon btn-outline-danger"><i className="feather icon-trash-2"/></button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card>
                            <Card.Body className="text-center">
                                <img src={medalSilver} alt="" className="img-fluid w-50"/>
                                <h4 className="mt-3">$1.99 SILVER</h4>
                                <p className="mb-2">This is 7 days basic membership</p>
                                <p><span className="badge badge-primary">0 Sales</span> </p>
                                <hr/>
                                <button type="button" className="btn btn-icon btn-outline-primary mr-2" onClick={() => this.setState({ isOpen: true })}><i className="feather icon-edit-2"/></button>
                                <button type="button" className="btn btn-icon btn-outline-danger"><i className="feather icon-trash-2"/></button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} className='text-center'>
                        <Button variant='primary' type="button" onClick={() => this.setState({ isOpen: true })}><i className="feather icon-plus"/>New Membership</Button>
                    </Col>
                </Row>
                <Modal size='lg' show={this.state.isOpen} onHide={() => this.setState({ isOpen: false })}>
                    <Modal.Header closeButton>
                        <Modal.Title as="h5">Membership</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <div className="form-group fill">
                                    <label className="floating-label" htmlFor="Name"><small className="text-danger">* </small>Name</label>
                                    <input type="text" className="form-control" id="Name" placeholder="Name"/>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="form-group fill">
                                    <label className="floating-label" htmlFor="Price"><small className="text-danger">* </small>Membership Price</label>
                                    <input type="text" className="form-control" id="Price" placeholder="Membership Price"/>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="form-group fill">
                                    <label className="floating-label" htmlFor="Period"><small className="text-danger">* </small>Membership Period</label>
                                    <input type="text" className="form-control" id="Period" placeholder="Membership Period"/>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="form-group fill">
                                    <label className="floating-label" htmlFor="Icon">Membership Image</label>
                                    <input type="file" className="form-control" id="Icon" placeholder="sdf"/>
                                </div>
                            </Col>
                            <Col sm={12}>
                                <div className="custom-control custom-switch custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="customswitch1"/>
                                    <label className="custom-control-label" htmlFor="customswitch1">Private Membership</label>
                                </div>
                                <div className="custom-control custom-switch custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="customswitch2"/>
                                    <label className="custom-control-label" htmlFor="customswitch2">Recurring Payment</label>
                                </div>
                                <div className="custom-control custom-switch custom-control-inline">
                                    <input type="checkbox" className="custom-control-input" id="customswitch3"/>
                                    <label className="custom-control-label" htmlFor="customswitch3">Published</label>
                                </div>
                                <div className="form-group fill">
                                    <label className="floating-label" htmlFor="Description">Description</label>
                                    <textarea className="form-control" id="Description" rows="3" placeholder='Description' />
                                </div>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={() => this.setState({ isOpen: false })}>Clear</Button>
                        <Button variant="primary">Submit</Button>
                    </Modal.Footer>
                </Modal>
            </Aux>
        );
    }
}

export default Membership;