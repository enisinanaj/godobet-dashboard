import React, {Component} from 'react';
import {Row, Col, Card, Button, OverlayTrigger, Tooltip, Popover } from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";

class TooltipsPopovers extends Component {
    render() {
        const htmlTitle = (<span><i>Popover</i> <u>with</u> <strong>HTML</strong></span>);
        return (
            <Aux>
                <Row className='btn-page'>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Tooltip</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <OverlayTrigger
                                    placement='top'
                                    overlay={<Tooltip id={`tooltip-top`}>Tooltip on top</Tooltip>}
                                >
                                    <Button variant="light">Top</Button>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    placement='left'
                                    overlay={<Tooltip id={`tooltip-left`}>Tooltip on left</Tooltip>}
                                >
                                    <Button variant="primary">Left</Button>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    placement='right'
                                    overlay={<Tooltip id={`tooltip-right`}>Tooltip on right</Tooltip>}
                                >
                                    <Button variant="success">Right</Button>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    placement='bottom'
                                    overlay={<Tooltip id={`tooltip-bottom`}>Tooltip on bottom</Tooltip>}
                                >
                                    <Button variant="warning">Bottom</Button>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    placement='top'
                                    overlay={<Tooltip id={`tooltip-top`}><i>Tooltip</i> <u>with</u> <strong>HTML</strong></Tooltip>}
                                >
                                    <Button variant="primary">HTML Tooltip</Button>
                                </OverlayTrigger>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Popover</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <OverlayTrigger
                                    trigger="click"
                                    placement='top'
                                    overlay={
                                        <Popover id={`popover-positioned-top`} title={`Popover on top`}>top by popover</Popover>
                                    }
                                >
                                    <Button variant="light">Top</Button>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    trigger="click"
                                    placement='left'
                                    overlay={
                                        <Popover id={`popover-positioned-left`} title={`Popover on left`}>left by popover</Popover>
                                    }
                                >
                                    <Button variant="primary">Left</Button>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    trigger="click"
                                    placement='right'
                                    overlay={
                                        <Popover id={`popover-positioned-right`} title={`Popover on right`}>right by popover</Popover>
                                    }
                                >
                                    <Button variant="success">Right</Button>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    trigger="click"
                                    placement='bottom'
                                    overlay={
                                        <Popover id={`popover-positioned-bottom`} title={`Popover on bottom`}>bottom by popover</Popover>
                                    }
                                >
                                    <Button variant="warning">Bottom</Button>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    trigger="click"
                                    placement='top'
                                    overlay={
                                        <Popover id={`popover-positioned-html`} title={htmlTitle}>popover by HTML</Popover>
                                    }
                                >
                                    <Button variant="primary">HTML Popover</Button>
                                </OverlayTrigger>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default TooltipsPopovers;