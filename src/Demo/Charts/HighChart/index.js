import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux/index";
import BarBasicChart from "./BarBasicChart";
import LineBasicChart from "./LineBasicChart";
import AreaZoomChart from "./AreaZoomChart";
import PieBasicChart from "./PieBasicChart";
import PieDonutChart from "./PieDonutChart";
import Pie3DChart from "./Pie3DChart";
import PieDonut3DChart from "./PieDonut3DChart";
import ComboChart from "./ComboChart";

class HighChart extends React.Component {

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Bar [ Basic ] Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <BarBasicChart/>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Line [ Basic ] Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <LineBasicChart/>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Area [ Zoom ] Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <AreaZoomChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lx={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Pie [ Basic ] Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <PieBasicChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lx={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Pie [ Donut ] Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <PieDonutChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lx={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Pie [ 3D ] Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Pie3DChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lx={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Pie [ Donut 3D ] Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <PieDonut3DChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Combinations [ Column, Line & Pie ] Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <ComboChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default HighChart;