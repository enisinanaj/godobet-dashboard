import React from 'react';
import {Row, Col, Card, Form} from 'react-bootstrap';
import Stickies from 'react-stickies';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Aux from "../../../hoc/_Aux";
import Prism from "../../../App/components/Prism";
import Board from "../ToDo/Notes/Board";

const mock = [
    {
        "id": "3effea2c-fc90-98e0-51d0-22c32efb2177",
        "text": "Hey I am Ajain... ",
        "title": "Hello",
        "grid": {
            "i": "3effea2c-fc90-98e0-51d0-22c32efb2177",
            "x": 0,
            "y": null,
            "w": 2,
            "h" : 2,
            "isDraggable": false
        },
        "contentEditable": true,
        "timeStamp": "13 Feb 2017 2:53 PM"
    },
    {
        "id": "3effea2c-fc90-98e0-51d0-22c32efb2178",
        "text": "If you liked stickies... contribute by liking it... ",
        "title": "Contribute",
        "grid": {
            "i": "3effea2c-fc90-98e0-51d0-22c32efb2178",
            "x": 4,
            "y": 0,
            "w": 4,
            "h" : 4,
            "isDraggable": false
        },
        "contentEditable": true,
        "timeStamp": "13 Feb 2017 2:53 PM"
    }
];

class Notes extends React.Component {
    static defaultProps = {
    };

    constructor(props) {
        super(props);

        this.state = {
            notes: [],
            showTape: false,
            showOutput: true,
            showTitle: true,
            showFooter: true,
            output: '',
            colors: ['#FFFFFF'],
            showCustomColors: false,
            showMock: false
        };
        this.toggleValue = this.toggleValue.bind(this);
        this.onChange = this.onChange.bind(this);
        this.fetchMock = this.fetchMock.bind(this);
    }

    toggleValue(e) {
        this.setState({
            [e.target.name]: !this.state[e.target.name]
        });
    }

    onChange(notes) {
        this.setState({
            output: JSON.stringify(notes, null, 2),
            notes
        });
    }

    fetchMock() {
        this.setState({
            showMock: true
        }, () => {
            this.setState({
                notes: mock.default
            });
        });
    }

    render() {
        let wrapperStyle = {};
        if (this.state.showBound) {
            wrapperStyle = {
                height: '700px',
                width: '700px',
                background: 'rgba(0, 0, 0, 0.2)',
                border: '2px solid #fff',
                overflow: 'auto',
                padding: '10px'
            };
        }

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Basic Notes</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Board/>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Sticky Notes</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={3}>
                                        <Form.Group>
                                            <div className="checkbox d-inline checkbox-fill checkbox-info">
                                                <Form.Control type="checkbox" name="showTitle" id="show-title" value="show_title" defaultChecked={this.state.showTitle} onChange={this.toggleValue} />
                                                <Form.Label htmlFor="show-title" className="cr">Show Title</Form.Label>
                                            </div>
                                        </Form.Group>
                                        <Form.Group>
                                            <div className="checkbox d-inline checkbox-fill checkbox-info">
                                                <Form.Control type="checkbox" name="showCustomColors" id="custom-color" value="show_custom_colors" defaultChecked={this.state.showCustomColors} onChange={this.toggleValue} />
                                                <Form.Label htmlFor="custom-color" className="cr">Custom Colors</Form.Label>
                                            </div>
                                        </Form.Group>
                                        <Form.Group>
                                            <div className="checkbox d-inline checkbox-fill checkbox-info">
                                                <Form.Control type="checkbox" name="showTape" id="show-tape" value="show_tape" defaultChecked={this.state.showTape} onChange={this.toggleValue} />
                                                <Form.Label htmlFor="show-tape" className="cr">Show Tape</Form.Label>
                                            </div>
                                        </Form.Group>
                                        <Form.Group>
                                            <div className="checkbox d-inline checkbox-fill checkbox-info">
                                                <Form.Control type="checkbox" name="showOutput" id="show-output" value="show_output" defaultChecked={this.state.showOutput} onChange={this.toggleValue} />
                                                <Form.Label htmlFor="show-output" className="cr">Show Output</Form.Label>
                                            </div>
                                        </Form.Group>
                                        <Form.Group>
                                            <div className="checkbox d-inline checkbox-fill checkbox-info">
                                                <Form.Control type="checkbox" name="showFooter" id="show-footer" value="show_title" defaultChecked={this.state.showFooter} onChange={this.toggleValue} />
                                                <Form.Label htmlFor="show-footer" className="cr">Show Footer</Form.Label>
                                            </div>
                                        </Form.Group>
                                        <Form.Group>
                                            <div className="checkbox d-inline checkbox-fill checkbox-info">
                                                <Form.Control type="checkbox" name="showMock" id="show-mock" value="show_mock" defaultChecked={this.state.showMock} onChange={this.fetchMock} />
                                                <Form.Label htmlFor="show-mock" className="cr">Load Mock Data</Form.Label>
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col md={9}>
                                        <Stickies
                                            notes={this.state.notes}
                                            tape={this.state.showTape}
                                            style={{ float: 'left' }}
                                            colors={this.state.showCustomColors ? this.state.colors : undefined}
                                            title={this.state.showTitle}
                                            footer={this.state.showFooter}
                                            onChange={this.onChange}
                                            wrapperStyle={wrapperStyle}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="config">
                                            <div className="output" style={{ display: this.state.showOutput ? 'block' : 'none' }}>
                                                <h3>Output JSON</h3>
                                                <hr/>
                                                <div style={{height: '500px'}}>
                                                    <PerfectScrollbar>
                                                        <Prism code={this.state.output} language="json" />
                                                    </PerfectScrollbar>
                                                </div>
                                            </div>
                                        </div>
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

export default Notes;