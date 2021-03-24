import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux/index";
import BarSimpleChart from "./BarSimpleChart";
import BarStackedChart from "./BarStackedChart";
import AreaAngleChart from "./AreaAngleChart";
import AreaSmoothChart from "./AreaSmoothChart";
import LineAngleChart from "./LineAngleChart";
import LineSmoothChart from "./LineSmoothChart";
import PieBasicChart from "./PieBasicChart";
import PieDonutChart from "./PieDonutChart";
import ComboChart from "./ComboChart";

class ReChart extends React.Component {

    render() {
        return (
            <Aux>
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Bar [ Simple ] Chart</Card.Title>
                            </Card.Header>
                            <Card.Body className="text-center">
                                <BarSimpleChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Bar [ Stacked ] Chart</Card.Title>
                            </Card.Header>
                            <Card.Body className="text-center">
                                <BarStackedChart/>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Line [ Angle ] Chart</Card.Title>
                            </Card.Header>
                            <Card.Body className="text-center">
                                <AreaAngleChart/>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Area [ Smooth ] Chart</Card.Title>
                            </Card.Header>
                            <Card.Body className="text-center">
                                <AreaSmoothChart/>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Line [ Angle ] Chart</Card.Title>
                            </Card.Header>
                            <Card.Body className="text-center">
                                <LineAngleChart/>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Line [ Smooth ] Chart</Card.Title>
                            </Card.Header>
                            <Card.Body className="text-center">
                                <LineSmoothChart/>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Pie [ Basic ] Chart</Card.Title>
                            </Card.Header>
                            <Card.Body className="text-center">
                                <PieBasicChart/>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Pie [ Donut ] Chart</Card.Title>
                            </Card.Header>
                            <Card.Body className="text-center">
                                <PieDonutChart/>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Combo Chart</Card.Title>
                            </Card.Header>
                            <Card.Body className="text-center">
                                <ComboChart/>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default ReChart;