import React from 'react';
import {Row, Col, Alert} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";
import Card from "../../../App/components/MainCard";
import DEMO from "../../../store/constant";

class BasicAlert extends React.Component {
    render() {
        const alertVariants = [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
        ];

        const basicAlert = alertVariants.map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                    A simple {variant} alert—check it out!
                </Alert>
            ));

        const linkAlert = alertVariants.map((variant, idx) => (
            <Alert key={idx} variant={variant}>
                A simple {variant} alert with{' '}
                <Alert.Link href={DEMO.BLANK_LINK}>an example link</Alert.Link>. Give it a click if you
                like.
            </Alert>
        ));

        const dismissingAlert = alertVariants.map((variant, idx) => (
            <Alert dismissible={true} key={idx} variant={variant}>
                Holy guacamole! You should check in on some of those fields below.
            </Alert>
        ));

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title="Basic">
                            {basicAlert}
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card title="Link Alert">
                            {linkAlert}
                        </Card>
                    </Col>
                    <Col>
                        <Card title="Dismissing">
                            {dismissingAlert}
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card title="Additional Content">
                            <Alert variant="success">
                                <Alert.Heading as="h4">Well done!</Alert.Heading>
                                <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                                <hr />
                                <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                            </Alert>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default BasicAlert;
