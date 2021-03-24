import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { setHours, setMinutes, getDate, addDays, subDays } from "date-fns";

import Aux from "../../../hoc/_Aux";

class Datepicker extends React.Component {
    state = {
        startDate: new Date()
    };

    handleChange = (date) => {
        this.setState({startDate: date});
    };

    render() {
        const {startDate} = this.state;
        return (
            <Aux>
                <Row>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Basic</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <DatePicker selected={startDate} onChange={this.handleChange} className="form-control" />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Date with Time</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                    timeCaption="time"
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Select Time Only</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    dateFormat="h:mm aa"
                                    timeCaption="time"
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Exclude Times</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    showTimeSelect
                                    excludeTimes={[setHours(setMinutes(new Date(), 0), 17), setHours(setMinutes(new Date(), 30), 18), setHours(setMinutes(new Date(), 30), 19), setHours(setMinutes(new Date(), 30), 17)]}
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Include Times</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    showTimeSelect
                                    includeTimes={[setHours(setMinutes(new Date(), 0), 17), setHours(setMinutes(new Date(), 30), 18), setHours(setMinutes(new Date(), 30), 19), setHours(setMinutes(new Date(), 30), 17)]}
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Inject Specific Times</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    injectTimes={[
                                        setHours(setMinutes(new Date(), 1), 0),
                                        setHours(setMinutes(new Date(), 5), 12),
                                        setHours(setMinutes(new Date(), 59), 23)
                                    ]}
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Specific Time Range</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    showTimeSelect
                                    minTime={setHours(setMinutes(new Date(), 0), 17)}
                                    maxTime={setHours(setMinutes(new Date(), 30), 20)}
                                    dateFormat="MMMM d, yyyy"
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Custom date format</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <DatePicker
                                    dateFormat="yyyy/MM/dd"
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    className="form-control" />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Custom class name</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    className="form-control red-border"
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Custom day class names</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    dayClassName={date => getDate(date) < Math.random() * 31 ? 'random' : undefined} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Today Button</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <DatePicker
                                    todayButton={"Today"}
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    className="form-control"
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Specific date range</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    minDate={new Date()}
                                    maxDate={addDays(new Date(), 5)}
                                    placeholderText="Select a date between today and 5 days in the future"
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Highlight dates</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    highlightDates={[subDays(new Date(), 7), addDays(new Date(), 7)]}
                                    placeholderText="This highlights a week ago and a week from today" />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Disable datepicker</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    className="form-control"
                                    disabled={true}
                                    placeholderText="This is disabled" />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Clear datepicker input</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange }
                                    className="form-control"
                                    isClearable={true}
                                    placeholderText="I have been cleared!"
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Datepicker;