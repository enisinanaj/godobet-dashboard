import React, { Component } from 'react';
import ContentWrapper from '../../components/layout/ContentWrapper';
import { Row, Col } from 'reactstrap';
import { Input } from 'reactstrap';
import FormValidator from '../../template_components/Forms/FormValidator.js';

class Profile extends Component {
    
    state = {
        formChangePwd: {
            oldPassword: '',
            newPassword: '',
            repeatNewPassword: ''
        }
    }

    validateOnChange = event => {
        const input = event.target;
        const form = input.form
        const value = input.type === 'checkbox' ? input.checked : input.value;
        
        const result = FormValidator.validate(input);
        
        this.setState({
            [form.name]: {
                ...this.state[form.name],
                [input.name]: value,
                errors: {
                    ...this.state[form.name].errors,
                    [input.name]: result
                }
            }
        });

    }

    onSubmit = e => {
        const form = e.target;
        const inputs = [...form.elements].filter(i => ['INPUT', 'SELECT'].includes(i.nodeName))

        const { errors, hasError } = FormValidator.bulkValidate(inputs)

        this.setState({
            [form.name]: {
                ...this.state[form.name],
                errors
            }
        });

        console.log(hasError ? 'Form has errors. Check!' : 'Form Submitted!')

        e.preventDefault()
    }

    hasError = (formName, inputName, method) => {
        return  this.state[formName] &&
                this.state[formName].errors &&
                this.state[formName].errors[inputName] &&
                this.state[formName].errors[inputName][method]
    }

    render() {
        return (
            <ContentWrapper>
                <Row>
                    <Col lg="4">
                        <div className="card card-default">
                            <div className="card-body text-center">
                                <div className="py-4">
                                    <img className="img-fluid rounded-circle img-thumbnail thumb96" src="img/user/02.jpg" alt="Contact"/>
                                </div>
                                <h3 className="m-0 text-bold">Luigi Rosato</h3>
                                <div className="my-3">
                                    <p>Fondatore & CEO di GodoBet.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="8">
                        <div className="card card-default">
                            <div className="card-header d-flex align-items-center">
                                <div className="d-flex justify-content-center col">
                                    <div className="h4 m-0 text-center">Informazioni del contatto</div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row py-4 justify-content-center">
                                    <div className="col-12 col-sm-10">
                                        <form className="form-horizontal">
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputContact1">Nome</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <input className="form-control" id="inputContact1" type="text" placeholder="" defaultValue="Luigi Rosato"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputContact2">Email</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <input className="form-control" id="inputContact2" type="email" defaultValue="luigi.rosato@email.com"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputContact3">Telefono</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <input className="form-control" id="inputContact3" type="text" defaultValue="0039112230"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputContact4">Cellulare</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <input className="form-control" id="inputContact4" type="text" defaultValue="3337224871"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputContact5">Sito Web</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <input className="form-control" id="inputContact5" type="text" defaultValue="http://luigirosato.com"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputContact6">Indirizzo</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <textarea className="form-control" id="inputContact6" row="4" defaultValue="via Roma 23, Lecce"></textarea>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-md-10">
                                                    <button className="btn btn-info" type="submit">Aggiorna contatto</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4">
                        &nbsp;
                    </Col>
                    <Col lg="8">
                        <div className="card card-default">
                            <div className="card-header d-flex align-items-center">
                                <div className="d-flex justify-content-center col">
                                    <div className="h4 m-0 text-center">Cambio password</div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row py-4 justify-content-center">
                                    <div className="col-12 col-sm-10">
                                        <form className="form-horizontal">
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="input-old-password">Vecchia password</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <div className="form-group">
                                                        <div className="input-group with-focus">
                                                            <Input type="password"
                                                                id="id-password"
                                                                name="oldPassword"
                                                                className="border-right-0"
                                                                placeholder="Password"
                                                                invalid={this.hasError('formChangePwd','oldPassword','required')}
                                                                onChange={this.validateOnChange}
                                                                data-validate='["required"]'
                                                                value={this.state.formChangePwd.oldPassword}
                                                            />
                                                            <div className="input-group-append">
                                                                <span className="input-group-text text-muted bg-transparent border-left-0">
                                                                    <em className="fa fa-lock"></em>
                                                                </span>
                                                            </div>
                                                            <span className="invalid-feedback">Il campo password è obbligatorio</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="input-new-password">Nuova password</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <div className="form-group">
                                                        <div className="input-group with-focus">
                                                            <Input type="password"
                                                                id="id-new-password"
                                                                name="newPassword"
                                                                className="border-right-0"
                                                                placeholder="Password"
                                                                invalid={this.hasError('formChangePwd','newPassword','required')}
                                                                onChange={this.validateOnChange}
                                                                data-validate='["required"]'
                                                                value={this.state.formChangePwd.newPassword}
                                                            />
                                                            <div className="input-group-append">
                                                                <span className="input-group-text text-muted bg-transparent border-left-0">
                                                                    <em className="fa fa-lock"></em>
                                                                </span>
                                                            </div>
                                                            <span className="invalid-feedback">Il campo password è obbligatorio</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="input-repeat-new-password">Ripeti nuova password</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <div className="form-group">
                                                        <div className="input-group with-focus">
                                                            <Input type="password"
                                                                id="id-repeat-new-password"
                                                                name="repeatNewPassword"
                                                                className="border-right-0"
                                                                placeholder="Password"
                                                                invalid={this.hasError('formChangePwd','repeatNewPassword','required')}
                                                                onChange={this.validateOnChange}
                                                                data-validate='["required"]'
                                                                value={this.state.formChangePwd.repeatNewPassword}
                                                            />
                                                            <div className="input-group-append">
                                                                <span className="input-group-text text-muted bg-transparent border-left-0">
                                                                    <em className="fa fa-lock"></em>
                                                                </span>
                                                            </div>
                                                            <span className="invalid-feedback">Il campo password è obbligatorio</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-md-10">
                                                    <button className="btn btn-info" type="submit">Conferma</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </ContentWrapper>
        )
    }
}

export default Profile;