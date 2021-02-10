import React from 'react';
import {
    Row,
    Col,
    Card,
    Modal,
    Button,
    OverlayTrigger,
    Tooltip,
    Container,
    Form
} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";

class BasicModals extends React.Component {
    state = {
        isBasic: false,
        isVertically: false,
        isTooltip: false,
        isGrid: false,
        isScrolling: false,
        isLarge: false,
        title: ''
    };

    render() {
        return (
            <Aux>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Demo Modal</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="bd-example-modal mb-4">
                                    <div className="modal">
                                        <Modal.Dialog>
                                            <Modal.Header closeButton>
                                                <Modal.Title as="h5">Modal title</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <p>Modal body text goes here.</p>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary">Close</Button>
                                                <Button variant="primary">Save changes</Button>
                                            </Modal.Footer>
                                        </Modal.Dialog>
                                    </div>
                                </div>
                                <Button variant="primary" onClick={() => this.setState({ isBasic: true })}>Launch demo modal</Button>
                                <Modal show={this.state.isBasic} onHide={() => this.setState({ isBasic: false })}>
                                    <Modal.Header closeButton>
                                        <Modal.Title as="h5">Modal Title</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={() => this.setState({ isBasic: false })}>Close</Button>
                                        <Button variant="primary">Save Changes</Button>
                                    </Modal.Footer>
                                </Modal>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Vertically Centered</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Button variant="primary" onClick={() => this.setState({ isVertically: true })}>Launch demo modal</Button>
                                <Modal centered show={this.state.isVertically} onHide={() => this.setState({ isVertically: false })}>
                                    <Modal.Header closeButton>
                                        <Modal.Title as="h5">Modal Title</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={() => this.setState({ isVertically: false })}>Close</Button>
                                        <Button variant="primary">Save Changes</Button>
                                    </Modal.Footer>
                                </Modal>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Tooltips Modal</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Button variant="primary" onClick={() => this.setState({ isTooltip: true })}>Launch demo modal</Button>
                                <Modal show={this.state.isTooltip} onHide={() => this.setState({ isTooltip: false })}>
                                    <Modal.Header closeButton>
                                        <Modal.Title as="h5">Modal Title</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <h5>Tooltip in a modal - Button</h5>
                                        <p>This <OverlayTrigger overlay={<Tooltip>Tooltip Bottom</Tooltip>}><Button variant="secondary">Button</Button></OverlayTrigger>triggers a tooltip on hover.</p>
                                        <h5>Tooltip in a modal - Link</h5>
                                        <p>This<OverlayTrigger overlay={<Tooltip>Tooltip Lnk</Tooltip>}><Button variant="link">Link</Button></OverlayTrigger>triggers a tooltip on hover.</p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={() => this.setState({ isTooltip: false })}>Close</Button>
                                        <Button variant="primary">Save Changes</Button>
                                    </Modal.Footer>
                                </Modal>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Using the Grid</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Button variant="primary" onClick={() => this.setState({ isGrid: true })}>Launch demo modal</Button>
                                <Modal show={this.state.isGrid} onHide={() => this.setState({ isGrid: false })}>
                                    <Modal.Header closeButton>
                                        <Modal.Title as="h5">Grids in Modals</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="bd-example-row">
                                            <Container fluid>
                                                <Row>
                                                    <Col md={4}>md=4</Col>
                                                    <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
                                                </Row>
                                                <Row>
                                                    <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
                                                    <Col md={{ span: 2, offset: 4 }}>{`md={{ span: 2, offset: 4 }}`}</Col>
                                                </Row>
                                                <Row>
                                                    <Col md={{ span: 6, offset: 6 }}>{`md={{ span: 6, offset: 6 }}`}</Col>
                                                </Row>
                                                <Row>
                                                    <Col sm={9}>
                                                        Level 1: sm=9
                                                        <Row>
                                                            <Col xs={8} sm={6}>Level 2: xs=8, sm=6</Col>
                                                            <Col xs={4} sm={6}>Level 2: xs=4, sm=6</Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={() => this.setState({ isGrid: false })}>Close</Button>
                                        <Button variant="primary">Save Changes</Button>
                                    </Modal.Footer>
                                </Modal>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Scrolling Long Content</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Button variant="primary" onClick={() => this.setState({ isScrolling: true })}>Launch demo modal</Button>
                                <Modal show={this.state.isScrolling} onHide={() => this.setState({ isScrolling: false })}>
                                    <Modal.Header closeButton>
                                        <Modal.Title as="h5">Modal Title</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={() => this.setState({ isScrolling: false })}>Close</Button>
                                        <Button variant="primary">Save Changes</Button>
                                    </Modal.Footer>
                                </Modal>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Large Modal</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Button variant="primary" onClick={() => this.setState({ isLarge: true })}>Large modal</Button>
                                <Modal size="lg" show={this.state.isLarge} onHide={() => this.setState({ isLarge: false })}>
                                    <Modal.Header closeButton>
                                        <Modal.Title as="h5">Large Modal</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                       ...
                                    </Modal.Body>
                                </Modal>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Small Modal</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Button variant="primary" onClick={() => this.setState({ isSmall: true })}>Small modal</Button>
                                <Modal size="sm" show={this.state.isSmall} onHide={() => this.setState({ isSmall: false })}>
                                    <Modal.Header closeButton>
                                        <Modal.Title as="h5">Small Modal</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                       ...
                                    </Modal.Body>
                                </Modal>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12}>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Varying Modal Content</Card.Title>
                            </Card.Header>
                            <Card.Body className='btn-page'>
                                <Button variant="primary" onClick={() => this.setState({ isVarying: true, title: '@mdo' })}>Open modal for @mdo</Button>
                                <Button variant="primary" onClick={() => this.setState({ isVarying: true, title: '@fat' })}>Open modal for @fat</Button>
                                <Button variant="primary" onClick={() => this.setState({ isVarying: true, title: '@bootstrap' })}>Open modal for @bootstrap</Button>
                                <Modal show={this.state.isVarying} onHide={() => this.setState({ isVarying: false })}>
                                    <Modal.Header closeButton>
                                        <Modal.Title as="h5">New message to {this.state.title}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Recipient:</Form.Label>
                                                <Form.Control type="text" name="recipient" placeholder="Enter recipient" defaultValue={this.state.title} />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Message:</Form.Label>
                                                <Form.Control name="message" as="textarea" rows="3" />
                                            </Form.Group>
                                        </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={() => this.setState({ isVarying: false })}>Close</Button>
                                        <Button variant="primary">Save Changes</Button>
                                    </Modal.Footer>
                                </Modal>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default BasicModals;