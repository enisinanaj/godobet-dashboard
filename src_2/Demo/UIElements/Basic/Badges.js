import React, {Component} from 'react';
import {
    Row,
    Col,
    Badge,
    Button
} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";
import Card from "../../../App/components/MainCard";
import UcFirst from "../../../App/components/UcFirst";
import DEMO from "../../../store/constant";

class Badges extends Component {
    render() {
        const buttonVariants = [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
        ];

        const buttonBadges = buttonVariants.map((variant, idx) => (
            <Button key={idx} variant={variant}>
                <UcFirst text={variant} />
                <Badge variant="light" className="ml-1">4</Badge>
            </Button>
        ));

        const contextualBadges = buttonVariants.map((variant, idx) => (
                <Badge key={idx} variant={variant} className="mr-1"><UcFirst text={variant} /></Badge>
        ));

        const pillBadges = buttonVariants.map((variant, idx) => (
                <Badge key={idx} pill variant={variant} className="mr-1"><UcFirst text={variant} /></Badge>
        ));

        const linkBadges = buttonVariants.map((variant, idx) => (
            <a key={idx} href={DEMO.BLANK_LINK}><Badge variant={variant} className="mr-1"><UcFirst text={variant} /></Badge></a>
        ));

        return (
            <Aux>
                <Row>
                    <Col className='btn-page'>
                        <Card title="Basic Badges">
                            <h1>
                                Example heading <Badge variant="secondary">New</Badge>
                            </h1>
                            <h2>
                                Example heading <Badge variant="secondary">New</Badge>
                            </h2>
                            <h3>
                                Example heading <Badge variant="secondary">New</Badge>
                            </h3>
                            <h4>
                                Example heading <Badge variant="secondary">New</Badge>
                            </h4>
                            <h5>
                                Example heading <Badge variant="secondary">New</Badge>
                            </h5>
                            <h6>
                                Example heading <Badge variant="secondary">New</Badge>
                            </h6>
                        </Card>
                        <Card title="Button Badges">
                            {buttonBadges}
                        </Card>
                        <Card title="Contextual Variations">
                            {contextualBadges}
                        </Card>
                        <Card title="Pill Badges">
                            {pillBadges}
                        </Card>
                        <Card title="Links">
                            {linkBadges}
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Badges;