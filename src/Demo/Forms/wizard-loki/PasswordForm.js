import React from 'react';
import {Row, Col, Form, FormGroup, ButtonGroup, Button, FormControl} from 'react-bootstrap';

const PasswordForm = (props) => {
    const {
        user,
        isSubmitting,
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
                    <FormGroup>
                        <Form.Label htmlFor="password">Password</Form.Label>
                        <FormControl type="password" name="password" id="password" defaultValue={user.password} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label htmlFor="passwordConfirmation">Password Confirmation</Form.Label>
                        <FormControl type="password" name="passwordConfirmation" id="passwordConfirmation" defaultValue={user.passwordConfirmation} />
                    </FormGroup>

                    <ButtonGroup aria-label="Wizard Buttons">
                        <Button variant="secondary" onClick={onBack} disabled={isSubmitting || cantBack}>{backLabel}</Button>
                        <Button variant="secondary" onClick={onNext} disabled={isSubmitting}>{nextLabel}</Button>
                    </ButtonGroup>
                </Form>
            </Col>
        </Row>
    );
};

export default PasswordForm;