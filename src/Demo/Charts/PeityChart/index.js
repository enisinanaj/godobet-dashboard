import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import { Line } from 'peity-react';

import Aux from "../../../hoc/_Aux/index";

class PeityChart extends React.Component {
    state = {
        width: 50
    };
    constructor(props) {
        super(props);
        this._element = React.createRef();
    }

    componentDidMount () {
        this.handleWindowResize();
        window.addEventListener('resize', this.handleWindowResize);
    }

    handleWindowResize = () => {
        this.setState({width: this._element.current.clientWidth});
    };

    render() {
        return (
            <Aux>
                <Row>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Line Chart 1</Card.Title>
                            </Card.Header>
                            <Card.Body className="text-center">
                                <div ref={this._element}>
                                    <Line values={[5,3,9,6,5,9,7,3,5,2]} width={this.state.width} height={250} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Line Chart 2</Card.Title>
                            </Card.Header>
                            <Card.Body className="text-center">
                                <div ref={this._element}>
                                    <Line values={[5,3,2,-1,-3,-2,2,3,5,2]} width={this.state.width} height={250} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Line Chart 3</Card.Title>
                            </Card.Header>
                            <Card.Body className="text-center">
                                <div ref={this._element}>
                                    <Line values={[0,-3,-6,-4,-5,-4,-7,-3,-5,-2]} width={this.state.width} height={250} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default PeityChart;