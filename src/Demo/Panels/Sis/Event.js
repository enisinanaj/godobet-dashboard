import React from 'react';
import {
    Row,
    Col,
    Card,
    Table
} from 'react-bootstrap';

import Aux from "./../../../hoc/_Aux";

import interview from '../../../assets/images/pages/interview.svg';
import festival from '../../../assets/images/pages/festival.svg';
import baseball from '../../../assets/images/pages/baseball.svg';

class Event extends React.Component {

    render() {
        return (
            <Aux>
                <Row className='btn-page'>
                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <h5>Event</h5>
                            </Card.Header>
                        </Card>
                    </Col>

                    <Col lg={4} md={6}>
                        <Card>
                            <Card.Body>
                                <div className="text-center">
                                    <img src={interview} alt="event" className="img-fluid wid-100 mb-2"/>
                                    <h5>Ivaculus infotech & solutions <br/><span className="badge badge-success">Placement</span></h5>
                                </div>
                                <Table responsive size='sm' className="able-sm mb-0">
                                    <tbody>
                                    <tr>
                                        <td>Location</td>
                                        <td> : Mumbai</td>
                                    </tr>
                                    <tr>
                                        <td>Result</td>
                                        <td> : 60% Minimum</td>
                                    </tr>
                                    <tr>
                                        <td>Stipend</td>
                                        <td> : Max 10000</td>
                                    </tr>
                                    <tr>
                                        <td>Package</td>
                                        <td> : 2.5 Lacs</td>
                                    </tr>
                                    <tr>
                                        <td>Requirement</td>
                                        <td className="text-wrap"> : 30 Android Developer</td>
                                    </tr>
                                    <tr>
                                        <td>Organized By</td>
                                        <td> : IIRC</td>
                                    </tr>
                                    <tr>
                                        <td>Date</td>
                                        <td  className="text-wrap"> : 06/11/2016 to 06/11/2016</td>
                                    </tr>
                                    <tr>
                                        <td>Attachment</td>
                                        <td className="text-wrap"> : 29 IVACULUS INFOTECH.pdf</td>
                                    </tr>
                                    </tbody>
                                </Table>
                                <button className="btn btn-primary">Interested</button>
                                <button className="btn btn-danger mt-md-0 mt-2">Not Interested</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6}>
                        <Card>
                            <Card.Body>
                                <div className="text-center">
                                    <img src={festival} alt="event" className="img-fluid wid-100 mb-2"/>
                                    <h5>Echo Green Arts <br/><span className="badge badge-danger">Festival</span></h5>
                                </div>
                                <Table responsive size='sm' className="able-sm mb-0">
                                    <tbody>
                                    <tr>
                                        <td>Location</td>
                                        <td> : Thane</td>
                                    </tr>
                                    <tr>
                                        <td>Result</td>
                                        <td> : 60% Minimum</td>
                                    </tr>
                                    <tr>
                                        <td>Stipend</td>
                                        <td> : Max 10000</td>
                                    </tr>
                                    <tr>
                                        <td>Package</td>
                                        <td> : 2.5 Lacs</td>
                                    </tr>
                                    <tr>
                                        <td>Requirement</td>
                                        <td className="text-wrap"> : min age 15</td>
                                    </tr>
                                    <tr>
                                        <td>Organized By</td>
                                        <td> : BSCSB</td>
                                    </tr>
                                    <tr>
                                        <td>Date</td>
                                        <td  className="text-wrap"> : 06/11/2016 to 06/11/2016</td>
                                    </tr>
                                    <tr>
                                        <td>Attachment</td>
                                        <td className="text-wrap"> : 29 Rules &amp; Regulation.pdf</td>
                                    </tr>
                                    </tbody>
                                </Table>
                                <button className="btn btn-primary">Participate</button>
                                <button className="btn btn-danger mt-md-0 mt-2">Not Interested</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6}>
                        <Card>
                            <Card.Body>
                                <div className="text-center">
                                    <img src={baseball} alt="event" className="img-fluid wid-100 mb-2"/>
                                    <h5>Globle Sports Day <br/><span className="badge badge-warning">Sports</span></h5>
                                </div>
                                <Table responsive size='sm' className="able-sm mb-0">
                                    <tbody>
                                    <tr>
                                        <td>Location</td>
                                        <td> : Mumbai</td>
                                    </tr>
                                    <tr>
                                        <td>Result</td>
                                        <td> : 60% Minimum</td>
                                    </tr>
                                    <tr>
                                        <td>Stipend</td>
                                        <td> : Max 10000</td>
                                    </tr>
                                    <tr>
                                        <td>Package</td>
                                        <td> : 2.5 Lacs</td>
                                    </tr>
                                    <tr>
                                        <td>Requirement</td>
                                        <td className="text-wrap"> : 30 Android Developer</td>
                                    </tr>
                                    <tr>
                                        <td>Organized By</td>
                                        <td> : IIRC</td>
                                    </tr>
                                    <tr>
                                        <td>Date</td>
                                        <td  className="text-wrap"> : 06/11/2016 to 06/11/2016</td>
                                    </tr>
                                    <tr>
                                        <td>Attachment</td>
                                        <td className="text-wrap"> : 29 IVACULUS INFOTECH.pdf</td>
                                    </tr>
                                    </tbody>
                                </Table>
                                <button className="btn btn-primary">Participate</button>
                                <button className="btn btn-danger mt-md-0 mt-2">Not Interested</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6}>
                        <Card>
                            <Card.Body>
                                <div className="text-center">
                                    <img src={festival} alt="event" className="img-fluid wid-100 mb-2"/>
                                    <h5>Echo Green Arts <br/><span className="badge badge-danger">Festival</span></h5>
                                </div>
                                <Table responsive size='sm' className="able-sm mb-0">
                                    <tbody>
                                    <tr>
                                        <td>Location</td>
                                        <td> : Thane</td>
                                    </tr>
                                    <tr>
                                        <td>Result</td>
                                        <td> : 60% Minimum</td>
                                    </tr>
                                    <tr>
                                        <td>Stipend</td>
                                        <td> : Max 10000</td>
                                    </tr>
                                    <tr>
                                        <td>Package</td>
                                        <td> : 2.5 Lacs</td>
                                    </tr>
                                    <tr>
                                        <td>Requirement</td>
                                        <td className="text-wrap"> : min age 15</td>
                                    </tr>
                                    <tr>
                                        <td>Organized By</td>
                                        <td> : BSCSB</td>
                                    </tr>
                                    <tr>
                                        <td>Date</td>
                                        <td  className="text-wrap"> : 06/11/2016 to 06/11/2016</td>
                                    </tr>
                                    <tr>
                                        <td>Attachment</td>
                                        <td className="text-wrap"> : 29 Rules &amp; Regulation.pdf</td>
                                    </tr>
                                    </tbody>
                                </Table>
                                <button className="btn btn-primary">Participate</button>
                                <button className="btn btn-danger mt-md-0 mt-2">Not Interested</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6}>
                        <Card>
                            <Card.Body>
                                <div className="text-center">
                                    <img src={baseball} alt="event" className="img-fluid wid-100 mb-2"/>
                                    <h5>Globle Sports Day <br/><span className="badge badge-warning">Sports</span></h5>
                                </div>
                                <Table responsive size='sm' className="able-sm mb-0">
                                    <tbody>
                                    <tr>
                                        <td>Location</td>
                                        <td> : Mumbai</td>
                                    </tr>
                                    <tr>
                                        <td>Result</td>
                                        <td> : 60% Minimum</td>
                                    </tr>
                                    <tr>
                                        <td>Stipend</td>
                                        <td> : Max 10000</td>
                                    </tr>
                                    <tr>
                                        <td>Package</td>
                                        <td> : 2.5 Lacs</td>
                                    </tr>
                                    <tr>
                                        <td>Requirement</td>
                                        <td className="text-wrap"> : 30 Android Developer</td>
                                    </tr>
                                    <tr>
                                        <td>Organized By</td>
                                        <td> : IIRC</td>
                                    </tr>
                                    <tr>
                                        <td>Date</td>
                                        <td  className="text-wrap"> : 06/11/2016 to 06/11/2016</td>
                                    </tr>
                                    <tr>
                                        <td>Attachment</td>
                                        <td className="text-wrap"> : 29 IVACULUS INFOTECH.pdf</td>
                                    </tr>
                                    </tbody>
                                </Table>
                                <button className="btn btn-primary">Participate</button>
                                <button className="btn btn-danger mt-md-0 mt-2">Not Interested</button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={6}>
                        <Card>
                            <Card.Body>
                                <div className="text-center">
                                    <img src={interview} alt="event" className="img-fluid wid-100 mb-2"/>
                                    <h5>Ivaculus infotech & solutions <br/><span className="badge badge-success">Placement</span></h5>
                                </div>
                                <Table responsive size='sm' className="able-sm mb-0">
                                    <tbody>
                                    <tr>
                                        <td>Location</td>
                                        <td> : Mumbai</td>
                                    </tr>
                                    <tr>
                                        <td>Result</td>
                                        <td> : 60% Minimum</td>
                                    </tr>
                                    <tr>
                                        <td>Stipend</td>
                                        <td> : Max 10000</td>
                                    </tr>
                                    <tr>
                                        <td>Package</td>
                                        <td> : 2.5 Lacs</td>
                                    </tr>
                                    <tr>
                                        <td>Requirement</td>
                                        <td className="text-wrap"> : 30 Android Developer</td>
                                    </tr>
                                    <tr>
                                        <td>Organized By</td>
                                        <td> : IIRC</td>
                                    </tr>
                                    <tr>
                                        <td>Date</td>
                                        <td  className="text-wrap"> : 06/11/2016 to 06/11/2016</td>
                                    </tr>
                                    <tr>
                                        <td>Attachment</td>
                                        <td className="text-wrap"> : 29 IVACULUS INFOTECH.pdf</td>
                                    </tr>
                                    </tbody>
                                </Table>
                                <button className="btn btn-primary">Interested</button>
                                <button className="btn btn-danger mt-md-0 mt-2">Not Interested</button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Event;