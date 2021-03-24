import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux/index";
import BarBasicChart from "./BarBasicChart";
import BarStackedChart from "./BarStackedChart";
import BarHorizontalChart from "./BarHorizontalChart";
import LineInterpolationChart from "../../../Dashboard/Charts/LineInterpolationChart";
import LineOriginChart from "./LineOriginChart";
import LineFillEndChart from "./LineFillEndChart";
import LineBasicChart from "./LineBasicChart";
import RadarAreaChart1 from "./RadarAreaChart1";
import RadarAreaChart2 from "./RadarAreaChart2";
import RadarAreaChart3 from "./RadarAreaChart3";
import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutChart";

class ChartJs extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Bar Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <BarBasicChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Bar [Stacked] Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <BarStackedChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Bar [Horizontal] Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <BarHorizontalChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Line [Interpolation] Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <LineInterpolationChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Area [ Fill: 'origin' ] Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <LineOriginChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Area [ Fill: 'end' ] Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <LineFillEndChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Area Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <LineBasicChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Radar [ Area ] Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <RadarAreaChart1/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Radar [ Area ] Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <RadarAreaChart2/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Radar [ Area ] Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <RadarAreaChart3/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Pie Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <PieChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Doughnut Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <DoughnutChart/>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default ChartJs;