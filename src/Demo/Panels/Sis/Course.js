import React from 'react';
import {
    Row,
    Col,
    Card,
    Tab,
    Nav
} from 'react-bootstrap';

import Aux from "./../../../hoc/_Aux";

class Course extends React.Component {

    render() {
        return (
            <Aux>
                <Row className='btn-page'>
                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <h5>CIRCULAR : 2018-19 </h5>
                            </Card.Header>
                            <Card.Body>
                                <Tab.Container id="left-tabs-example" defaultActiveKey="cs">
                                    <Row>
                                        <Col sm={3}>
                                            <Nav variant="pills" className="flex-column">
                                                <Nav.Item><Nav.Link eventKey="cs">Computer Science</Nav.Link></Nav.Item>
                                                <Nav.Item><Nav.Link eventKey="mnc">Management and Commerce</Nav.Link></Nav.Item>
                                                <Nav.Item><Nav.Link eventKey="ph">Pharmacy</Nav.Link></Nav.Item>
                                                <Nav.Item><Nav.Link eventKey="er">Engineering</Nav.Link></Nav.Item>
                                                <Nav.Item><Nav.Link eventKey="sci">Science</Nav.Link></Nav.Item>
                                            </Nav>
                                        </Col>
                                        <Col sm={9}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="cs">
                                                    <h5>Master of Computer Applications</h5>
                                                    <hr/>
                                                    <h5 className="text-primary">Eligibility Criteria</h5>
                                                    <ul>
                                                        <li>A candidate shall have passed the qualifying examination with minimum of 50% marks (45% marks in case SC/ST/OBC category) of grand total.</li>
                                                        <li>A candidate shall have passed the Higher Secondary School Examination (Standard XII, 10+2 pattern) and Bachelor's degree with Mathematics or Business Mathematics or Statistics as one of the subjects.</li>
                                                        <li>A candidate shall have appeared in the CMAT (Common Management Aptitude Test) as prescribed by AICTE.</li>
                                                    </ul>
                                                    <h5 className="text-primary">Intake</h5>
                                                    <p>300 Seats</p>
                                                    <h5 className="text-primary">Duration</h5>
                                                    <p>The duration of the course shall be Full time three academic years (i.e. 6 semesters).</p>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="mnc">
                                                    <h5>Master of Business Administration</h5>
                                                    <hr/>
                                                    <h5 className="text-primary">Eligibility Criteria</h5>
                                                    <ul>
                                                        <li>Any Graduate with 50% marks (45% for reserved category) and CMAT/CAT/MAT or any other relevant entrant test for management program.</li>
                                                    </ul>
                                                    <h5 className="text-primary">Intake</h5>
                                                    <p>200 Seats</p>
                                                    <h5 className="text-primary">Duration</h5>
                                                    <p>2 years</p>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="ph">
                                                    <h5>Bachelor of Pharmacy</h5>
                                                    <hr/>
                                                    <h5 className="text-primary">Eligibility Criteria</h5>
                                                    <ul>
                                                        <li>12th passed in Science Stream (as per UGC norms)</li>
                                                    </ul>
                                                    <h5 className="text-primary">Intake</h5>
                                                    <p>100 Seats</p>
                                                    <h5 className="text-primary">Duration</h5>
                                                    <p>The duration of the course shall be full time four academic years. Each academic year shall be divided into two semesters.</p>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="er">
                                                    <h5>Diploma Engineering</h5>
                                                    <hr/>
                                                    <h5 className="text-primary">Eligibility Criteria</h5>
                                                    <ul>
                                                        <li>10th(Minimum)</li>
                                                    </ul>
                                                    <h5 className="text-primary">Intake</h5>
                                                    <p>60 Seats</p>
                                                    <h5 className="text-primary">Duration</h5>
                                                    <p>The duration of the course shall be full time four academic years. Each academic year shall be divided into two semesters.</p>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="sci">
                                                    <h5>Bachelor of Science in Chemistry</h5>
                                                    <hr/>
                                                    <h5 className="text-primary">Eligibility Criteria</h5>
                                                    <ul>
                                                        <li>H. Sc (Science) of A, B or AB group</li>
                                                    </ul>
                                                    <h5 className="text-primary">Intake</h5>
                                                    <p>100 Seats</p>
                                                    <h5 className="text-primary">Duration</h5>
                                                    <p>The duration of the course shall be full time three academic years (i.e. 6 semesters). Student will receive degree of B.Sc. on completion of 3rd year successfully.</p>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Col>
                                    </Row>
                                </Tab.Container>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Course;