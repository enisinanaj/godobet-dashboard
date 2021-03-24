import React from 'react';
import {Row, Col, Form, FormGroup, ButtonGroup, Button, FormControl} from 'react-bootstrap';

const UserForm = (props) => {
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
                        <Form.Label htmlFor="name">Name</Form.Label>
                        <FormControl type="text" name="userName" id="userName" defaultValue={user.name} />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label htmlFor="email">E-mail</Form.Label>
                        <FormControl type="text" name="email" id="email" defaultValue={user.email} />
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

export default UserForm;