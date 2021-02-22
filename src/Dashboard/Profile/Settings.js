import React, { useState } from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import { connect } from 'react-redux';
import * as actions from '../../store/actions'
import { bindActionCreators } from 'redux';
import { DropzoneComponent } from 'react-dropzone-component';
import { auth, storage } from 'firebase';
import TokenManager from '../../App/auth/TokenManager'

const Settings = (props) => {
    const [imageAsFile, setImageAsFile] = useState('')
    
    var config = {
        showFiletypeIcon: false,
        postUrl: '/'
    };
    
    var djsConfig = {
        addRemoveLinks: true,
        acceptedFiles: "image/jpeg,image/png"
    };

    const eventHandlers = {
        addedfile: (file) => setImageAsFile(file)
    };

    const uploadAvatar = e => {
        e.preventDefault()

        if (!imageAsFile || !imageAsFile.name) {
            return;
        }
        
        var token = auth().currentUser.uid;
        const uploadTask = storage().ref(`/avatars/${token}/${imageAsFile.name}`).put(imageAsFile)
        
        uploadTask.on('state_changed', (snapShot) => {
            //takes a snap shot of the process as it is happening
            console.log(snapShot)
        }, (err) => {
            //catches the errors
            console.log(err)
        }, () => {
            // gets the functions from storage refences the image storage in firebase by the children
            // gets the download url then sets the image from firebase as the value for the imgUrl key:
            storage().ref(`/avatars/${token}`).child(imageAsFile.name).getDownloadURL()
            .then(fireBaseUrl => {
                return fireBaseUrl;
            })
            .then(imageUrl => {
                TokenManager.getInstance().getToken()
                .then(jwt => {
                    fetch(props.applicationState.user._links.self.href, {
                            method: 'PATCH',
                            headers: {
                                "Content-Type": "application/json",
                                "X-Auth": jwt,
                            },
                        })
                        .catch(error => {
                            console.warn(error);
                        });
                })
            })
        })
    }

    return (
        <Aux>
            <Row>
                <Col md={4} sm={12}>
                    <Card title='Immagine profilo' isOption={true}>
                        <Row>
                            <Col md={12} sm={12}>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
                                    </Form.Group>
                                    <Button variant={"primary"} onClick={uploadAvatar}>Carica immagine profilo</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Card>

                    <Card title='Dati personali' isOption={true}>
                        <Row>
                            <Col md={12} sm={12}>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Nome</Form.Label>
                                        <Form.Control type="text" placeholder="Nome completo" />
                                    </Form.Group>

                                    <Button variant="primary">
                                        Salva
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Card>

                    <Card title='Indirizzo di faturazione' isOption={true}>
                        <Row>
                            <Col md={12} sm={12}>
                                <Form>
                                    <Form.Group controlId="infirizzo">
                                        <Form.Label>Indirizzo</Form.Label>
                                        <Form.Control type="text" placeholder="Nome via e numero civico" />
                                    </Form.Group>
                                    <Form.Group controlId="cap">
                                        <Form.Label>CAP</Form.Label>
                                        <Form.Control type="number" placeholder="00000" />
                                    </Form.Group>
                                    <Form.Group controlId="citta">
                                        <Form.Label>Città</Form.Label>
                                        <Form.Control type="text" placeholder="Città" />
                                    </Form.Group>
                                    <Form.Group controlId="Cap">
                                        <Form.Label>Provincia</Form.Label>
                                        <Form.Control type="text" placeholder="Provincia" />
                                    </Form.Group>

                                    <Button variant="primary">
                                        Salva
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Card>
                </Col>

                <Col md={4} sm={12}>
                    <Card title='Dati bancari' isOption={true}>
                        <Row>
                            <Col md={12} sm={12}>
                                <Form>
                                    <Form.Group controlId="nomeBanca">
                                        <Form.Label>Nome banca</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>

                                    <Form.Group controlId="indirizzoBanca">
                                        <Form.Label>Indirizzo della Banca</Form.Label>
                                        <Form.Control type="text" placeholder="Via, numero civico, CAP, Città, sigla Provincia" />
                                    </Form.Group>
                                    <Form.Group controlId="IBAN">
                                        <Form.Label>IBAN</Form.Label>
                                        <Form.Control type="text" placeholder="IBAN del conto" />
                                    </Form.Group>
                                    <Form.Group controlId="abiCab">
                                        <Form.Label>ABI / CAB</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                    <Form.Group controlId="swift">
                                        <Form.Label>SWIFT</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                    
                                    <Button variant="primary">
                                        Salva
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Card>
                </Col>

                <Col md={4} sm={12}>
                    <Card title='Dati di accesso' isOption={true}>
                        <Row>
                            <Col md={12} sm={12}>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Indirizzo Email</Form.Label>
                                        <Form.Control type="email" placeholder="emial@dominio.it" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Vecchia password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Nuova password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Conferma nuova password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    
                                    <Button variant="primary">
                                        Salva
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Aux>
    );
}

const mapStateToProps = (state) => ({applicationState: state});
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);