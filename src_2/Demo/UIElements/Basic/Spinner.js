import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";

class BasicSpinner extends React.Component {
    render() {
        const spinnerVariants = [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
        ];

        const basicSpinnerBorder = spinnerVariants.map((variant, idx) => (
            <div key={idx} className={['spinner-border', 'mr-1', 'text-'+variant].join(' ')} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        ));

        const basicSpinnerGrowing = spinnerVariants.map((variant, idx) => (
            <div key={idx} className={['spinner-grow', 'mr-1', 'text-'+variant].join(' ')} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        ));

        return (
            <Aux>
                <Row>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Border spinner</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Border spinner [Color]</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                {basicSpinnerBorder}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Growing spinner</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="spinner-grow" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Growing spinner [Color]</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                {basicSpinnerGrowing}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Placement</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <h5>Start</h5>
                                <hr/>
                                <div className="d-flex justify-content-start">
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                                <h5 className="mt-4">Center</h5>
                                <hr/>
                                <div className="d-flex justify-content-center">
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                                <h5 className="mt-4">End</h5>
                                <hr/>
                                <div className="d-flex justify-content-end">
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Size</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <h5>Size</h5>
                                <hr/>
                                <div className="spinner-border spinner-border-sm mr-1" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-grow spinner-grow-sm" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <h5>Custom</h5>
                                <hr/>
                                <div className="spinner-border mr-1" role="status" style={{width: '3rem', height: '3rem'}}>
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-grow" role="status" style={{width: '3rem', height: '3rem'}}>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Buttons</Card.Title>
                            </Card.Header>
                            <Card.Body className='btn-page'>
                                <Button disabled>
                                    <div className="spinner-border spinner-border-sm mr-1" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </Button>
                                <Button disabled>
                                    <span className="spinner-border spinner-border-sm mr-1" role="status" />Loading...
                                </Button>
                                <Button disabled>
                                    <div className="spinner-grow spinner-grow-sm mr-1" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </Button>
                                <Button disabled>
                                    <span className="spinner-grow spinner-grow-sm mr-1" role="status" />Loading...
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default BasicSpinner;
