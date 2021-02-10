import React from 'react';
import {Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

class FormsElements extends React.Component {
    state = {
        validated: false,
        validatedTooltip: false,
        supportedCheckbox: false,
        supportedRadio: false,
        supportedSelect: 0,
        supportedFile: 0
    };

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ validated: true });
    }

    handleSubmitTooltip(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ validatedTooltip: true });
    }

    supportedSelectHandler = (event) => {
        this.setState({ supportedSelect: parseInt(event.target.value) });
    };

    supportedFileHandler = (event) => {
        this.setState({ supportedFile: !!(event.target.value) });
    };

    render() {
        const { validated, validatedTooltip } = this.state;

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Basic Component</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <h5>Form controls</h5>
                                <hr/>
                                <Row>
                                    <Col md={6}>
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />
                                                <Form.Text className="text-muted">
                                                    We'll never share your email with anyone else.
                                                </Form.Text>
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicChecbox">
                                                <Form.Check type="checkbox" label="Check me out" />
                                            </Form.Group>
                                            <Button variant="primary">
                                                Submit
                                            </Button>
                                        </Form>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Text</Form.Label>
                                            <Form.Control type="email" placeholder="Text" />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Example select</Form.Label>
                                            <Form.Control as="select">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Example textarea</Form.Label>
                                            <Form.Control as="textarea" rows="3" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <h5 className="mt-5">Sizing</h5>
                                <hr/>
                                <Row>
                                    <Col md={6}>
                                        <Form.Control size="lg" type="text" placeholder="Large text" className="mb-3" />
                                        <Form.Control type="text" placeholder="Normal text" className="mb-3" />
                                        <Form.Control size="sm" type="text" placeholder="Small text" className="mb-3" />
                                    </Col>
                                    <Col md={6}>
                                        <Form.Control size="lg" as="select" className="mb-3">
                                            <option>Large select</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Form.Control>
                                        <Form.Control as="select" className="mb-3">
                                            <option>Default select</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Form.Control>
                                    </Col>
                                </Row>
                                <h5 className="mt-5">Range Inputs</h5>
                                <hr/>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="exampleForm.RangeInput">
                                            <Form.Label>Example Range input</Form.Label>
                                            <Form.Control type="range" className="form-control-range" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <h5 className="mt-5">Readonly</h5>
                                        <hr/>
                                        <Form.Group controlId="formPlaintextEmail">
                                            <Form.Label>Read only input</Form.Label>
                                            <Form.Control readOnly defaultValue="email@example.com" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <h5 className="mt-5">Readonly plaintext</h5>
                                        <hr/>
                                        <Form.Group as={Row} controlId="formPlaintextEmail1">
                                            <Form.Label column sm="3">
                                                Email
                                            </Form.Label>
                                            <Col sm="9">
                                                <Form.Control plaintext readOnly defaultValue="email@example.com" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} controlId="formPlaintextPassword">
                                            <Form.Label column sm="3">
                                                Password
                                            </Form.Label>
                                            <Col sm="9">
                                                <Form.Control type="password" placeholder="Password" />
                                            </Col>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <h5 className="mt-5">Inline</h5>
                                <hr/>
                                <Row>
                                    <Col>
                                        <Form inline>
                                            <Form.Group className="mb-2">
                                                <Form.Label srOnly>Email</Form.Label>
                                                <Form.Control plaintext readOnly defaultValue="email@example.com" />
                                            </Form.Group>
                                            <Form.Group className="mb-2 mr-5">
                                                <Form.Label srOnly>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>
                                            <Form.Group>
                                                <Button className="mb-0">Confirm Identity</Button>
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </Row>
                                <h5 className="mt-5">Form Grid</h5>
                                <hr/>
                                <Row>
                                    <Col>
                                        <Form>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridEmail">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridPassword">
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control type="password" placeholder="Password" />
                                                </Form.Group>
                                            </Form.Row>

                                            <Form.Group controlId="formGridAddress1">
                                                <Form.Label>Address</Form.Label>
                                                <Form.Control placeholder="1234 Main St" />
                                            </Form.Group>

                                            <Form.Group controlId="formGridAddress2">
                                                <Form.Label>Address 2</Form.Label>
                                                <Form.Control placeholder="Apartment, studio, or floor" />
                                            </Form.Group>

                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridCity">
                                                    <Form.Label>City</Form.Label>
                                                    <Form.Control />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridState">
                                                    <Form.Label>State</Form.Label>
                                                    <Form.Control as="select">
                                                        <option>Choose...</option>
                                                        <option>...</option>
                                                    </Form.Control>
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridZip">
                                                    <Form.Label>Zip</Form.Label>
                                                    <Form.Control />
                                                </Form.Group>
                                            </Form.Row>

                                            <Form.Group id="formGridCheckbox">
                                                <Form.Check type="checkbox" label="Check me out" />
                                            </Form.Group>

                                            <Button variant="primary">
                                                Sign In
                                            </Button>
                                        </Form>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <h5 className="mt-5">Horizontal Form</h5>
                                        <hr/>
                                        <Form>
                                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                                <Form.Label column sm={3}>
                                                    Email
                                                </Form.Label>
                                                <Col sm={9}>
                                                    <Form.Control type="email" placeholder="Email" />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                                <Form.Label column sm={3}>
                                                    Password
                                                </Form.Label>
                                                <Col sm={9}>
                                                    <Form.Control type="password" placeholder="Password" />
                                                </Col>
                                            </Form.Group>
                                            <fieldset>
                                                <Form.Group as={Row}>
                                                    <Form.Label as="legend" column sm={3}>
                                                        Radios
                                                    </Form.Label>
                                                    <Col sm={9}>
                                                        <Form.Check
                                                            type="radio"
                                                            label="first radio"
                                                            name="formHorizontalRadios"
                                                            id="formHorizontalRadios1"
                                                        />
                                                        <Form.Check
                                                            type="radio"
                                                            label="second radio"
                                                            name="formHorizontalRadios"
                                                            id="formHorizontalRadios2"
                                                        />
                                                        <Form.Check
                                                            type="radio"
                                                            label="third radio"
                                                            name="formHorizontalRadios"
                                                            id="formHorizontalRadios3"
                                                        />
                                                    </Col>
                                                </Form.Group>
                                            </fieldset>
                                            <Form.Group as={Row} controlId="formHorizontalCheck">
                                                <Form.Label as="legend" column sm={3}>
                                                    Checkbox
                                                </Form.Label>
                                                <Col sm={9}>
                                                    <Form.Check label="Remember me" />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row}>
                                                <Col sm={{ span: 10, offset: 2 }}>
                                                    <Button>Sign In</Button>
                                                </Col>
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                    <Col md={6}>
                                        <h5 className="mt-5">Horizontal Form Label Sizing</h5>
                                        <hr/>
                                        <Form.Group as={Row} controlId="formHorizontalEmail1">
                                            <Form.Label column sm={3}>
                                                Default
                                            </Form.Label>
                                            <Col sm={9}>
                                                <Form.Control type="email" placeholder="Email" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} controlId="formHorizontalEmail2">
                                            <Form.Label className="col-form-label-lg" column sm={3}>
                                                Large
                                            </Form.Label>
                                            <Col sm={9}>
                                                <Form.Control type="email" placeholder="Email" />
                                            </Col>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <h5 className="mt-5">Help Text</h5>
                                <hr/>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="formBasicEmail1">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                            <Form.Text className="text-muted">
                                                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                                            </Form.Text>
                                        </Form.Group>
                                        <Form inline>
                                            <Form.Group className="mt-3">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" className="mx-sm-3" />
                                                <Form.Text className="text-muted">Must be 8-20 characters long.</Form.Text>
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                </Row>
                                <h5 className="mt-5">Validation</h5>
                                <hr/>
                                <Row>
                                    <Col>
                                        <Form
                                            noValidate
                                            validated={validated} >
                                            <Form.Row>
                                                <Form.Group as={Col} md="4" controlId="validationCustom01">
                                                    <Form.Label>First name</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="First name"
                                                        defaultValue="Mark"
                                                    />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group as={Col} md="4" controlId="validationCustom02">
                                                    <Form.Label>Last name</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="Last name"
                                                        defaultValue="Otto"
                                                    />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                                    <Form.Label>Username</Form.Label>
                                                    <InputGroup>
                                                        <InputGroup.Prepend>
                                                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                                        </InputGroup.Prepend>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Username"
                                                            aria-describedby="inputGroupPrepend"
                                                            required
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Please choose a username.
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} md="6" controlId="validationCustom03">
                                                    <Form.Label>City</Form.Label>
                                                    <Form.Control type="text" placeholder="City" required />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please provide a valid city.
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group as={Col} md="3" controlId="validationCustom04">
                                                    <Form.Label>State</Form.Label>
                                                    <Form.Control type="text" placeholder="State" required />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please provide a valid state.
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group as={Col} md="3" controlId="validationCustom05">
                                                    <Form.Label>Zip</Form.Label>
                                                    <Form.Control type="text" placeholder="Zip" required />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please provide a valid zip.
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Group>
                                                <Form.Check
                                                    required
                                                    label="Agree to terms and conditions"
                                                    feedback="You must agree before submitting."
                                                />
                                            </Form.Group>
                                            <Button onClick={e => this.handleSubmit(e)}>Submit form</Button>
                                        </Form>
                                    </Col>
                                </Row>
                                <h5 className="mt-5">Supported Elements</h5>
                                <hr/>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Check
                                                custom
                                                required
                                                isInvalid = {!this.state.supportedCheckbox}
                                                isValid = {this.state.supportedCheckbox}
                                                type="checkbox"
                                                id="supported-checkbox"
                                                label="Check this custom checkbox"
                                                feedback={this.state.supportedCheckbox ? false : "Example invalid feedback text."}
                                                onChange={() => this.setState(prevState => { return {supportedCheckbox: !prevState.supportedCheckbox}})}
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Check
                                                custom
                                                required
                                                isInvalid = {!this.state.supportedRadio}
                                                isValid = {this.state.supportedRadio}
                                                type="radio"
                                                label="Toggle this custom radio"
                                                name="supportedRadio"
                                                id="supportedRadio1"
                                                onChange={() => this.setState({supportedRadio: true})}
                                            />
                                            <Form.Check
                                                custom
                                                required
                                                isInvalid = {!this.state.supportedRadio}
                                                isValid = {this.state.supportedRadio}
                                                type="radio"
                                                label="Or toggle this other custom radio"
                                                name="supportedRadio"
                                                id="supportedRadio2"
                                                feedback={this.state.supportedRadio ? false : "More example invalid feedback text."}
                                                onChange={() => this.setState({supportedRadio: true})}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mt-3">
                                            <Form.Control
                                                as="select"
                                                required
                                                value={this.state.supportedSelect}
                                                isInvalid = {this.state.supportedSelect === 0}
                                                isValid = {this.state.supportedSelect !== 0}
                                                onChange={(event) => this.supportedSelectHandler(event)}
                                            >
                                                <option value={0}>Open this select menu</option>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                            </Form.Control>
                                            {this.state.supportedSelect ? '' : <div className="invalid-feedback">Example invalid custom select feedback</div>}
                                        </Form.Group>
                                        <div className="custom-file">
                                            <Form.Control
                                                type="file"
                                                className="custom-file-input"
                                                id="validatedCustomFile"
                                                required
                                                isInvalid = {!this.state.supportedFile}
                                                isValid = {this.state.supportedFile}
                                                onChange={(event) => this.supportedFileHandler(event)}
                                            />
                                                <Form.Label className="custom-file-label" htmlFor="validatedCustomFile">Choose file...</Form.Label>
                                            {this.state.supportedFile ? '' : <div className="invalid-feedback">Example invalid custom file feedback</div>}
                                        </div>
                                    </Col>
                                </Row>
                                <h5 className="mt-5">Tooltip</h5>
                                <hr/>
                                <Row>
                                    <Col>
                                        <Form
                                            noValidate
                                            validated={validatedTooltip} >
                                            <Form.Row>
                                                <Form.Group as={Col} md="4" controlId="validationCustom011">
                                                    <Form.Label>First name</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="First name"
                                                        defaultValue="Mark"
                                                    />
                                                    <div className="valid-tooltip">Looks good!</div>
                                                </Form.Group>
                                                <Form.Group as={Col} md="4" controlId="validationCustom021">
                                                    <Form.Label>Last name</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="Last name"
                                                        defaultValue="Otto"
                                                    />
                                                    <div className="valid-tooltip">Looks good!</div>
                                                </Form.Group>
                                                <Form.Group as={Col} md="4" controlId="validationCustomUsername1">
                                                    <Form.Label>Username</Form.Label>
                                                    <InputGroup>
                                                        <InputGroup.Prepend>
                                                            <InputGroup.Text id="inputGroupPrepend1">@</InputGroup.Text>
                                                        </InputGroup.Prepend>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Username"
                                                            aria-describedby="inputGroupPrepend"
                                                            required
                                                        />
                                                        <div className="invalid-tooltip">
                                                            Please choose a username.
                                                        </div>
                                                    </InputGroup>
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} md="6" controlId="validationCustom031">
                                                    <Form.Label>City</Form.Label>
                                                    <Form.Control type="text" placeholder="City" required />
                                                    <div className="invalid-tooltip">
                                                        Please provide a valid city.
                                                    </div>
                                                </Form.Group>
                                                <Form.Group as={Col} md="3" controlId="validationCustom041">
                                                    <Form.Label>State</Form.Label>
                                                    <Form.Control type="text" placeholder="State" required />
                                                    <div className="invalid-tooltip">
                                                        Please provide a valid state.
                                                    </div>
                                                </Form.Group>
                                                <Form.Group as={Col} md="3" controlId="validationCustom051">
                                                    <Form.Label>Zip</Form.Label>
                                                    <Form.Control type="text" placeholder="Zip" required />
                                                    <div className="invalid-tooltip">
                                                        Please provide a valid zip.
                                                    </div>
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Group>
                                                <Form.Check
                                                    custom
                                                    required
                                                    label="Agree to terms and conditions"
                                                    feedback="You must agree before submitting."
                                                    id="tooltip-agree"
                                                />
                                            </Form.Group>
                                            <Button onClick={e => this.handleSubmitTooltip(e)}>Submit form</Button>
                                        </Form>
                                    </Col>
                                </Row>
                                <h3 className="mt-5">Checkboxes and Radios</h3>
                                <Row>
                                    <Col md={12}>
                                        <h5 className="mt-5">Checkboxes</h5>
                                        <hr/>
                                        <Form.Group>
                                            <Form.Check
                                                custom
                                                type="checkbox"
                                                id="checkbox1"
                                                label="Check this custom checkbox"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <h5 className="mt-5">Radios</h5>
                                        <hr/>
                                        <Form.Group>
                                            <Form.Check
                                                custom
                                                type="radio"
                                                label="Toggle this custom radio"
                                                name="supportedRadios"
                                                id="supportedRadio3"
                                            />
                                            <Form.Check
                                                custom
                                                type="radio"
                                                label="Or toggle this other custom radio"
                                                name="supportedRadios"
                                                id="supportedRadio4"
                                            />
                                        </Form.Group>
                                        <h5 className="mt-3">Inline</h5>
                                        <hr/>
                                        <Form.Group>
                                            <Form.Check
                                                inline
                                                custom
                                                type="radio"
                                                label="Toggle this custom radio"
                                                name="supportedRadio"
                                                id="supportedRadio21"
                                            />
                                            <Form.Check
                                                inline
                                                custom
                                                type="radio"
                                                label="Or toggle this other custom radio"
                                                name="supportedRadio"
                                                id="supportedRadio22"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <h5 className="mt-5">Range</h5>
                                        <hr/>
                                        <Form.Label htmlFor="customRange1">Example range</Form.Label>
                                        <input type="range" className="custom-range" defaultValue="22" id="customRange1" />
                                        <Form.Label htmlFor="customRange2">Example range</Form.Label>
                                        <input type="range" className="custom-range" min="0" defaultValue="3" max="5" id="customRange2" />
                                        <Form.Label htmlFor="customRange3">Example range</Form.Label>
                                        <input type="range" className="custom-range" min="0" defaultValue="1.5" max="5" step="0.5" id="customRange3" />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Input Group</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={12}>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                placeholder="Username"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="Recipient's username"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                            />
                                            <InputGroup.Append>
                                                <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>

                                        <label htmlFor="basic-url">Your vanity URL</label>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon3">
                                                    https://example.com/users/
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl id="basic-url" aria-describedby="basic-addon3" />
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>$</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl aria-label="Amount (to the nearest dollar)" />
                                            <InputGroup.Append>
                                                <InputGroup.Text>.00</InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>

                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>With textarea</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl as="textarea" aria-label="With textarea" />
                                        </InputGroup>
                                    </Col>
                                    <Col md={6}>
                                        <h5 className="mt-5">Sizing</h5>
                                        <hr/>
                                        <InputGroup size="sm" className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                        </InputGroup>
                                        <br />
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                            />
                                        </InputGroup>
                                        <br />
                                        <InputGroup size="lg">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                                        </InputGroup>
                                    </Col>
                                    <Col md={6}>
                                        <h5 className="mt-5">Checkboxes and radios</h5>
                                        <hr/>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                            </InputGroup.Prepend>
                                            <FormControl aria-label="Text input with checkbox" />
                                        </InputGroup>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Radio aria-label="Radio button for following text input" />
                                            </InputGroup.Prepend>
                                            <FormControl aria-label="Text input with radio button" />
                                        </InputGroup>
                                    </Col>
                                    <Col md={6}>
                                        <h5 className="mt-5">Multiple inputs</h5>
                                        <hr/>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>First and last name</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl />
                                            <FormControl />
                                        </InputGroup>
                                    </Col>
                                    <Col md={6}>
                                        <h5 className="mt-5">Multiple addons</h5>
                                        <hr/>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>$</InputGroup.Text>
                                                <InputGroup.Text>0.00</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl aria-label="Amount (to the nearest dollar)" />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <FormControl aria-label="Amount (to the nearest dollar)" />
                                            <InputGroup.Append>
                                                <InputGroup.Text>$</InputGroup.Text>
                                                <InputGroup.Text>0.00</InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <h5 className="mt-5">Button Addons</h5>
                                <hr/>
                                <Row>
                                    <Col md={6}>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <Button>Button</Button>
                                            </InputGroup.Prepend>
                                            <FormControl aria-describedby="basic-addon1" />
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="Recipient's username"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                            />
                                            <InputGroup.Append>
                                                <Button>Button</Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Col>
                                    <Col md={6}>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <Button>Button</Button>
                                                <Button variant="secondary">Button</Button>
                                            </InputGroup.Prepend>
                                            <FormControl aria-describedby="basic-addon1" />
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="Recipient's username"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                            />
                                            <InputGroup.Append>
                                                <Button variant="secondary">Button</Button>
                                                <Button>Button</Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Col>
                                    <Col md={6}>
                                        <h5 className="mt-5">Buttons With Dropdown</h5>
                                        <hr/>
                                        <InputGroup className="mb-3">
                                            <DropdownButton as={InputGroup.Prepend} title="Dropdown" id="input-group-dropdown-1">
                                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                            </DropdownButton>
                                            <FormControl aria-describedby="basic-addon1" />
                                        </InputGroup>

                                        <InputGroup>
                                            <FormControl
                                                placeholder="Recipient's username"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                            />

                                            <DropdownButton as={InputGroup.Append} title="Dropdown" id="input-group-dropdown-2">
                                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                            </DropdownButton>
                                        </InputGroup>
                                    </Col>
                                    <Col md={6}>
                                        <h5 className="mt-5">Segmented  Buttons</h5>
                                        <hr/>
                                        <InputGroup className="mb-3">
                                            <Dropdown as={InputGroup.Prepend}>
                                                <Button variant="secondary">Action</Button>
                                                <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic-1" />
                                                <Dropdown.Menu>
                                                    <Dropdown.Item hred="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item hred="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item hred="#/action-3">Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <FormControl aria-describedby="basic-addon1" />
                                        </InputGroup>

                                        <InputGroup>
                                            <FormControl
                                                placeholder="Recipient's username"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                            />

                                            <Dropdown as={InputGroup.Append}>
                                                <Button variant="secondary">Action</Button>
                                                <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic-2" />
                                                <Dropdown.Menu>
                                                    <Dropdown.Item hred="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item hred="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item hred="#/action-3">Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <h3 className="mt-5">Custom Forms</h3>
                                <Row>
                                    <Col md={6}>
                                        <h5 className="mt-3">Custom Select</h5>
                                        <hr/>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="custom-addons1">Option</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl as="select" aria-describedby="custom-addons1" className="custom-select">
                                                <option>Choose...</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </FormControl>
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <FormControl as="select" aria-describedby="custom-addons2" className="custom-select">
                                                <option>Choose...</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </FormControl>
                                            <InputGroup.Append>
                                                <InputGroup.Text id="custom-addons2">Option</InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <Button id="custom-addons3">Button</Button>
                                            </InputGroup.Prepend>
                                            <FormControl as="select" aria-describedby="custom-addons3" className="custom-select">
                                                <option>Choose...</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </FormControl>
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <FormControl as="select" aria-describedby="custom-addons4" className="custom-select">
                                                <option>Choose...</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </FormControl>
                                            <InputGroup.Append>
                                                <Button id="custom-addons4">Button</Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Col>
                                    <Col md={6}>
                                        <h5 className="mt-3">Custom File Input</h5>
                                        <hr/>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="custom-addons5">Upload</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <div className="custom-file">
                                                <Form.Control
                                                    aria-describedby="custom-addons5"
                                                    type="file"
                                                    className="custom-file-input"
                                                    id="validatedCustomFile1"
                                                />
                                                <Form.Label className="custom-file-label" htmlFor="validatedCustomFile1">Choose file</Form.Label>
                                            </div>
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <div className="custom-file">
                                                <Form.Control
                                                    aria-describedby="custom-addons6"
                                                    type="file"
                                                    className="custom-file-input"
                                                    id="validatedCustomFile2"
                                                />
                                                <Form.Label className="custom-file-label" htmlFor="validatedCustomFile2">Choose file</Form.Label>
                                            </div>
                                            <InputGroup.Append>
                                                <InputGroup.Text id="custom-addons6">Upload</InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>
                                        <InputGroup className="mb-3 cust-file-button">
                                            <InputGroup.Prepend>
                                                <Button id="custom-addons7">Button</Button>
                                            </InputGroup.Prepend>
                                            <div className="custom-file">
                                                <Form.Control
                                                    aria-describedby="custom-addons7"
                                                    type="file"
                                                    className="custom-file-input"
                                                    id="validatedCustomFile3"
                                                />
                                                <Form.Label className="custom-file-label" htmlFor="validatedCustomFile3">Choose file</Form.Label>
                                            </div>
                                        </InputGroup>
                                        <InputGroup className="mb-3 cust-file-button">
                                            <div className="custom-file">
                                                <Form.Control
                                                    aria-describedby="custom-addons8"
                                                    type="file"
                                                    className="custom-file-input"
                                                    id="validatedCustomFile4"
                                                />
                                                <Form.Label className="custom-file-label" htmlFor="validatedCustomFile4">Choose file</Form.Label>
                                            </div>
                                            <InputGroup.Append>
                                                <Button id="custom-addons8">Button</Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default FormsElements;
