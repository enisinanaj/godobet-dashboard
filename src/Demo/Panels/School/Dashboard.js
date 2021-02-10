import React from 'react';
import Chart from "react-apexcharts";
import {
    Row,
    Col,
    Card
} from 'react-bootstrap';

import Aux from "./../../../hoc/_Aux";

import summaryChart from './chart/summary-chart';
import absentChart from './chart/absent-chart';

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interaction from "@fullcalendar/interaction";
import timeGrid from "@fullcalendar/timegrid";

class Dashboard extends React.Component {

    render() {
        const event = [
            {
                title: "All Day Event",
                start: "2018-08-01",
                borderColor: "#04a9f5",
                backgroundColor: "#04a9f5",
                textColor: "#fff"
            },
            {
                title: "Long Event",
                start: "2018-08-07",
                end: "2018-08-10",
                borderColor: "#f44236",
                backgroundColor: "#f44236",
                textColor: "#fff"
            },
            {
                id: 999,
                title: "Repeating Event",
                start: "2018-08-09T16:00:00",
                borderColor: "#f4c22b",
                backgroundColor: "#f4c22b",
                textColor: "#fff"
            },
            {
                id: 999,
                title: "Repeating Event",
                start: "2018-08-16T16:00:00",
                borderColor: "#3ebfea",
                backgroundColor: "#3ebfea",
                textColor: "#fff"
            },
            {
                title: "Conference",
                start: "2018-08-11",
                end: "2018-08-13",
                borderColor: "#1de9b6",
                backgroundColor: "#1de9b6",
                textColor: "#fff"
            },
            {
                title: "Meeting",
                start: "2018-08-12T10:30:00",
                end: "2018-08-12T12:30:00"
            },
            {
                title: "Lunch",
                start: "2018-08-12T12:00:00",
                borderColor: "#f44236",
                backgroundColor: "#f44236",
                textColor: "#fff"
            },
            {
                title: "Happy Hour",
                start: "2018-08-12T17:30:00",
                borderColor: "#a389d4",
                backgroundColor: "#a389d4",
                textColor: "#fff"
            },
            {
                title: "Birthday Party",
                start: "2018-08-13T07:00:00"
            },
            {
                title: "Click for Google",
                url: "http://google.com/",
                start: "2018-08-28",
                borderColor: "#a389d4",
                backgroundColor: "#a389d4",
                textColor: "#fff"
            }
        ];
        const head = {
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay"
        };

        return (
            <Aux>
                <Row>
                    <Col xl={3} md={6}>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center m-l-0">
                                    <Col sm='auto'>
                                        <i className="fas fa-user-graduate f-36 text-c-purple"/>
                                    </Col>
                                    <Col sm='auto'>
                                        <h6 className="text-muted m-b-10">Student</h6>
                                        <h2 className="m-b-0">45</h2>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center m-l-0">
                                    <Col sm='auto'>
                                        <i className="fas fa-users f-36 text-c-red"/>
                                    </Col>
                                    <Col sm='auto'>
                                        <h6 className="text-muted m-b-10">Parents</h6>
                                        <h2 className="m-b-0">9</h2>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center m-l-0">
                                    <Col sm='auto'>
                                        <i className="fas fa-user-tie f-36 text-c-green"/>
                                    </Col>
                                    <Col sm='auto'>
                                        <h6 className="text-muted m-b-10">Teacher</h6>
                                        <h2 className="m-b-0">5</h2>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3} md={6}>
                        <Card>
                            <Card.Body>
                                <Row className="align-items-center m-l-0">
                                    <Col sm='auto'>
                                        <i className="fas fa-book-open f-36 text-c-blue"/>
                                    </Col>
                                    <Col sm='auto'>
                                        <h6 className="text-muted m-b-10">Subject</h6>
                                        <h2 className="m-b-0">25</h2>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <h5>Account Summary</h5>
                            </Card.Header>
                            <Card.Body>
                                <Chart {...summaryChart} />
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={5} md={12}>
                        <Card className="task-card">
                            <Card.Header>
                                <h5>Notice</h5>
                            </Card.Header>
                            <Card.Body>
                                <ul className="list-unstyled task-list">
                                    <li>
                                        <i className="feather icon-check f-w-600 task-icon bg-c-green"/>
                                        <p className="m-b-5">8:50</p>
                                        <h6 className="text-muted">Your first semester Exam will held on <span className="text-c-blue">19-04-2018</span>.</h6>
                                    </li>
                                    <li>
                                        <i className="task-icon bg-c-blue"/>
                                        <p className="m-b-5">Sat, 5 Mar</p>
                                        <h6 className="text-muted">In your school campus on <span className="text-c-blue">1-03-2018</span> will held a program of <span className="text-c-blue">annual sports day</span>.You are all invited.</h6>
                                    </li>
                                    <li>
                                        <i className="task-icon bg-c-red"/>
                                        <p className="m-b-5">Sun, 17 Feb</p>
                                        <h6 className="text-muted">Your second semester exam will held on 30-08-2018.Please be prepare for your exam</h6>
                                    </li>
                                    <li>
                                        <i className="task-icon bg-c-yellow"/>
                                        <p className="m-b-5">Sat, 18 Mar</p>
                                        <h6 className="text-muted">On <span className="text-c-blue">20-11-2018</span> will held a programming contest in school campus.Registration start from today. </h6>
                                    </li>
                                    <li className="pb-2 mb-0">
                                        <i className="task-icon bg-c-green"/>
                                        <p className="m-b-5">Sat, 22 Mar</p>
                                        <h6 className="text-muted">Prize giving ceremony will held on <span className="text-c-blue">03-01-2019</span>.Best Student List published In your Website.</h6>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={7} md={12}>
                        <Card className="overflow-hidden">
                            <Card.Body className="bg-c-blue">
                                <Chart {...absentChart} />
                            </Card.Body>
                            <Card.Footer>
                                <h6 className="text-muted m-b-30 m-t-15">Students Today's Attendance</h6>
                                <Row className="row text-center">
                                    <Col className="border-right">
                                        <h6 className="text-muted m-b-10">Total present student</h6>
                                        <h3 className="">175</h3>
                                    </Col>
                                    <Col>
                                        <h6 className="text-muted m-b-10">Total absent student</h6>
                                        <h3 className="">76</h3>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Col>

                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Full Calendar</Card.Title>
                            </Card.Header>
                            <Card.Body className='calendar'>
                                <FullCalendar
                                    defaultView="dayGridMonth"
                                    header={head}
                                    editable={true}
                                    defaultDate="2018-08-12"
                                    droppable={true}
                                    events={event}
                                    plugins={[dayGridPlugin, interaction, timeGrid]}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Dashboard;