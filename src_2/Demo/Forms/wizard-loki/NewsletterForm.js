import React from 'react';
import {Row, Col, ButtonGroup, Button, Form} from 'react-bootstrap';

const NewsletterForm = (props) => {
    const {
        isSubmitting,

        // Loki props
        backLabel,
        nextLabel,
        onBack,
        onNext,
        cantBack
    } = props;

    return (
        <Row className="justify-content-md-center">
            <Col sm={12} md={9}>
                <Form className="p-1">
                    <Form.Group>
                        <div className="checkbox d-inline checkbox-fill">
                            <Form.Control type="checkbox" name="receiveNewsletter" id="receiveNewsletter" defaultChecked={true} />
                            <Form.Label htmlFor="receiveNewsletter" className="cr">Register for newsletter</Form.Label>
                        </div>
                    </Form.Group>
                    <ButtonGroup aria-label="Wizard Buttons">
                        <Button variant="secondary" onClick={onBack} disabled={isSubmitting || cantBack}>{backLabel}</Button>
                        <Button variant="secondary" onClick={onNext} disabled={isSubmitting}>{nextLabel}</Button>
                    </ButtonGroup>
                </Form>
            </Col>
        </Row>
    );
};

export default NewsletterForm;