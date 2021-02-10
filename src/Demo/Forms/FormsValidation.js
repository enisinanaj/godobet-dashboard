import React from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';
import MaskedInput from 'react-text-mask';
import validator from 'validator';

import Aux from "../../hoc/_Aux";
import AnimatedModal from "../../App/components/AnimatedModal";

class MaskWithValidation extends BaseFormControl {
    constructor(props){
        super(props);
        this.inputRef = React.createRef();
    }

    getInputRef(){
        return this.inputRef.current.inputElement;
    }

    handleChange = (e) => {
        this.checkError();
        if(this.props.onChange) this.props.onChange(e);
    };

    render () {
        return (
            <React.Fragment>
                <MaskedInput ref={this.inputRef} {...this.filterProps()} onChange={this.handleChange}/>
                { this.displayErrorMessage() }
                { this.displaySuccessMessage() }
            </React.Fragment>
        )
    }
}

class FormsValidation extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone:"",
        description: "",
        url: "",
        gear: "",
        basic: "",
        custom: "",
        chkBasic: false,
        chkCustom: false,
        checkMeSwitch: false,
        showModal: false
    };

    handleCheckboxChange = (e, value) => {
        this.setState({
            [e.target.name]: value
        })
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = (e, formData, inputs) => {
        e.preventDefault();
        //alert(JSON.stringify(formData, null, 2));
        this.setState({ showModal: true });
    };

    handleErrorSubmit = (e, formData, errorInputs) => {
        //console.log(errorInputs);
    };

    matchPassword = (value) => {
        return value && value === this.state.password;
    };

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Form Validation</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                                    <Form.Row>
                                        <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="firstName">First name</Form.Label>
                                            <TextInput
                                                name="firstName"
                                                id="firstName"
                                                placeholder="First Name"
                                                required value={this.state.firstName}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="lastName">Last name</Form.Label>
                                            <TextInput
                                                name="lastName"
                                                id="lastName"
                                                placeholder="Last Name"
                                                minLength="4"
                                                value={this.state.lastName}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="email">Email</Form.Label>
                                            <TextInput
                                                name="email"
                                                id="email"
                                                type="email"
                                                placeholder="Email Address"
                                                validator={validator.isEmail}
                                                errorMessage={{validator:"Please enter a valid email"}}
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="password">Password</Form.Label>
                                            <TextInput
                                                name="password"
                                                id="password"
                                                type="password"
                                                placeholder="Password"
                                                required
                                                pattern="(?=.*[A-Z]).{6,}"
                                                errorMessage={{required:"Password is required", pattern: "Password should be at least 6 characters and contains at least one upper case letter"}}
                                                value={this.state.password}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
                                            <TextInput
                                                name="confirmPassword"
                                                id="confirmPassword"
                                                type="password"
                                                placeholder="Confirm Password"
                                                required
                                                validator={this.matchPassword}
                                                errorMessage={{required:"Confirm password is required", validator: "Password does not match"}}
                                                value={this.state.confirmPassword}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="phone">Phone</Form.Label>
                                            <MaskWithValidation
                                                name="phone"
                                                id="phone"
                                                placeholder="Contact Number"
                                                className="form-control"
                                                required
                                                validator={(value) => value === "(123) 456-7890"}
                                                value={this.state.phone}
                                                onChange={this.handleChange}
                                                successMessage="Looks good!"
                                                errorMessage={{validator: "Please enter (123) 456-7890"}}
                                                mask={['(', /[1-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="url">URL</Form.Label>
                                            <TextInput
                                                name="url"
                                                id="url"
                                                type="url"
                                                placeholder="Website"
                                                required
                                                pattern="^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$"
                                                errorMessage={{required:"URL is required", pattern: 'URL is invalid.'}}
                                                value={this.state.url}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="gear">Gear</Form.Label>
                                            <SelectGroup
                                                name="gear"
                                                id="gear"
                                                value={this.state.gear}
                                                required
                                                errorMessage="Please select a gear."
                                                onChange={this.handleChange}>
                                                <option value="">Please select a gear...</option>
                                                <optgroup label="Climbing">
                                                    <option value="pitons">Pitons</option>
                                                    <option value="cams">Cams</option>
                                                    <option value="nuts">Nuts</option>
                                                    <option value="bolts">Bolts</option>
                                                    <option value="stoppers">Stoppers</option>
                                                    <option value="sling">Sling</option>
                                                </optgroup>
                                                <optgroup label="Skiing">
                                                    <option value="skis">Skis</option>
                                                    <option value="skins">Skins</option>
                                                    <option value="poles">Poles</option>
                                                </optgroup>
                                            </SelectGroup>
                                        </Form.Group>
                                        <Form.Group as={Col} sm="12">
                                            <Form.Label htmlFor="description">Description</Form.Label>
                                            <TextInput
                                                name="description"
                                                id="description"
                                                placeholder="About Us"
                                                multiline
                                                required
                                                value={this.state.description}
                                                onChange={this.handleChange}
                                                rows="3"
                                                autoComplete="off"
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} sm="6" className="mb-5">
                                            <Form.Label htmlFor="description">Switch</Form.Label>
                                            <div className="switch">
                                                <Checkbox name="check-me" label='' id="check-me" defaultValue={this.state.checkMeSwitch} required inline onChange={this.handleCheckboxChange} />
                                                <Form.Label>Check me</Form.Label>
                                            </div>
                                        </Form.Group>

                                        <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="upload_avatar">Upload Avatar</Form.Label>
                                            <div className="custom-file">
                                                <FileInput
                                                    name="avatar"
                                                    id="avatar"
                                                    required
                                                    fileType={["png", "jpg", "jpeg"]}
                                                    maxFileSize="100 kb"
                                                    errorMessage={
                                                        { required: "Please upload a file",
                                                            fileType:"Only .png or .jpg file is allowed",
                                                            maxFileSize: "Max file size is 100 kb"
                                                        }
                                                    }/>
                                            </div>
                                        </Form.Group>

                                        <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="basic">Radios</Form.Label>
                                            <Radio.RadioGroup
                                                name="basic"
                                                required
                                                valueSelected={this.state.basic}
                                                inline={false}
                                                onChange={this.handleCheckboxChange}>
                                                <Radio.RadioItem id="radio1" label="Option one is this and that—be sure to include why it's great" value="1" />
                                                <Radio.RadioItem id="radio2" label="Option two can be something else and selecting it will deselect option one" value="2" />
                                                <Radio.RadioItem id="radio3" label="Option three is disabled" value="3" />
                                            </Radio.RadioGroup>
                                        </Form.Group>

                                        <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="custom">Custom Radios</Form.Label>
                                            <div className="custom-controls-stacked radio">
                                                <Radio.RadioGroup
                                                    name="custom"
                                                    required
                                                    valueSelected={this.state.custom}
                                                    inline={false}
                                                    onChange={this.handleChange}>
                                                    <Radio.RadioItem id="radio4" label="Option one is this and that—be sure to include why it's great" value="1" />
                                                    <Radio.RadioItem id="radio5" label="Option two can be something else and selecting it will deselect option one" value="2" />
                                                    <Radio.RadioItem id="radio6" label="Option three is disabled" value="3" />
                                                </Radio.RadioGroup>
                                            </div>
                                        </Form.Group>

                                        <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="chkBasic">Basic Checkbox</Form.Label>
                                            <Checkbox name="chkBasic" label="Check me out" id="chkBasic" value={this.state.chkBasic} required onChange={this.handleCheckboxChange} />
                                        </Form.Group>

                                        <Form.Group as={Col} md="6">
                                            <Form.Label htmlFor="chkCustom">Custom Checkbox</Form.Label>
                                            <div className="checkbox">
                                                <Checkbox name="chkCustom" label="Check me" id="chkCustom" value={this.state.chkCustom} required onChange={this.handleCheckboxChange} />
                                            </div>
                                        </Form.Group>

                                        <Form.Group as={Col} sm={12} className="mt-3">
                                            <Button type="submit">Submit</Button>
                                        </Form.Group>
                                    </Form.Row>
                                </ValidationForm>
                                <AnimatedModal animation='slideInDown' showModal={this.state.showModal} modalClosed={() => this.setState({ showModal: false })}>
                                    <Card>
                                        <Card.Header className="bg-c-purple">
                                            <Card.Title as='h5'>User Information</Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <ul>
                                                <li><strong>Full Name:</strong> {this.state.firstName} {this.state.lastName}</li>
                                                <li><strong>Email:</strong> {this.state.email}</li>
                                                <li><strong>Password:</strong> Yes</li>
                                                <li><strong>Phone:</strong> {this.state.phone}</li>
                                                <li><strong>Website:</strong> {this.state.url}</li>
                                                <li><strong>Gear:</strong> {this.state.gear}</li>
                                                <li><strong>About:</strong> {this.state.description}</li>
                                            </ul>
                                        </Card.Body>
                                        <Card.Footer className="text-center">
                                            <button onClick={() => this.setState({ showModal: false })} className="btn btn-theme2 md-close">Close Me!!</button>
                                        </Card.Footer>
                                    </Card>
                                </AnimatedModal>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default FormsValidation;