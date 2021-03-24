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

$.DataTable = require( 'datatables.net-bs' );
require( 'datatables.net-responsive-bs' );

function atable() {
    let tableZero = '#data-table-zero';
    $.fn.dataTable.ext.errMode = 'throw';

    $(tableZero).DataTable();
}

class Leave extends React.Component {
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
                                <h5>Leave List</h5>
                            </Card.Header>
                            <Card.Body>
                                <Row className="align-items-center m-l-0">
                                    <Col/>
                                    <Col className="text-right">
                                        <Button variant="success" className="btn-sm btn-round has-ripple" onClick={() => this.setState({ isOpen: true })}><i className="feather icon-plus"/> Apply Leave</Button>
                                    </Col>
                                </Row>
                                <Table ref="tbl" striped hover responsive bordered id="data-table-zero">
                                    <thead>
                                    <tr>
                                        <th>Start Time</th>
                                        <th>End Time</th>
                                        <th>Leave Reason</th>
                                        <th>Leave Status</th>
                                        <th>Remark</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>16/09/2016 11:15 AM</td>
                                        <td>16/09/2016 03:30 PM</td>
                                        <td>Go to company for Interview.</td>
                                        <td>Granted</td>
                                        <td/>
                                    </tr>
                                    <tr>
                                        <td>07/09/2016 11:15 AM</td>
                                        <td>07/09/2016 03:30 PM</td>
                                        <td>i am not feel so well</td>
                                        <td>Granted</td>
                                        <td/>
                                    </tr>
                                    <tr>
                                        <td>23/08/2016 08:30 AM</td>
                                        <td>23/08/2016 03:30 PM</td>
                                        <td>for personal reason i am not attend tomorrow lecture.</td>
                                        <td>Granted</td>
                                        <td/>
                                    </tr>
                                    <tr>
                                        <td>19/01/2016 08:00 AM</td>
                                        <td>22/01/2016 04:30 PM</td>
                                        <td>for high fever i did not come in college</td>
                                        <td>Granted</td>
                                        <td/>
                                    </tr>
                                    <tr>
                                        <td>25/11/2015 12:12 PM</td>
                                        <td>26/11/2015 04:30 PM</td>
                                        <td>Go to attain family social function.</td>
                                        <td>Granted</td>
                                        <td/>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                        <Modal show={this.state.isOpen} onHide={() => this.setState({ isOpen: false })}>
                            <Modal.Header closeButton>
                                <Modal.Title as="h5">Apply For Leave</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Row>
                                    <Col sm={12}>
                                        <h5>From Date</h5>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Date1">Date</label>
                                            <input type="date" className="form-control" id="Date1" placeholder="Date"/>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Time1">Time</label>
                                            <input type="time" className="form-control" id="Time1" placeholder="Time"/>
                                        </div>
                                    </Col>
                                    <Col sm={12} className='p-b-5'>
                                        <h5>To Date</h5>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Date2">Date</label>
                                            <input type="date" className="form-control" id="Date2" placeholder="Date"/>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Time2">Time</label>
                                            <input type="time" className="form-control" id="Time2" placeholder="Time"/>
                                        </div>
                                    </Col>
                                    <Col sm={12} className='p-b-5'>
                                        <h5>Reason</h5>
                                    </Col>
                                    <Col sm={12}>
                                        <div className="form-group fill">
                                            <label className="floating-label" htmlFor="Reason">Reason</label>
                                            <textarea className="form-control" id="Reason" rows="3" placeholder='Reason'/>
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

export default Leave;