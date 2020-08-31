import React, { Component } from 'react';
import ContentWrapper from '../../components/layout/ContentWrapper';
import { Row, Col, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Event extends Component {

    constructor(props, context) {
        super(props, context);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            modal: false,
        };
    }

    toggleModal() {
        this.setState({ modal: !this.state.modal })
    }

    render() {
        return(
            <Modal isOpen={this.state.modal} toggle={this.toggleModal} style={{maxWidth: "70%"}}>
                <ModalHeader toggle={this.toggleModal}>Dettaglio evento</ModalHeader>
                <ModalBody>
                    <Row>
                        <Col lg="12">
                            <div className="card card-default">
                                <div className="card-body">
                                    <div className="row py-8 justify-content-center">
                                        <div className="col-12 col-sm-10">
                                            <form className="form-horizontal">
                                                <div className="form-group row">
                                                    <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputEventID">ID</label>
                                                    <div className="col-xl-10 col-md-9 col-8">
                                                        <input className="form-control" id="inputEventID" type="text" placeholder="" defaultValue="26" readonly="true"/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputEventDate">Data evento</label>
                                                    <div className="col-xl-10 col-md-9 col-8">
                                                        <input className="form-control" id="inputEventDate" type="date" placeholder="" defaultValue="31/08/2020"/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputSport">Sport</label>
                                                    <div className="col-xl-10 col-md-9 col-8">
                                                        <input className="form-control" id="inputSport" type="text" defaultValue="Calcio"/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputCompetition">Competizione</label>
                                                    <div className="col-xl-10 col-md-9 col-8">
                                                        <Input placeholder="inputCompetition" type="text" defaultValue="Serie A" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputSex">Sesso</label>
                                                    <div className="col-xl-10 col-md-9 col-8">
                                                        <select defaultValue="" className="custom-select custom-select-sm">
                                                            <option>Seleziona</option>
                                                            <option defaultValue="M">M</option>
                                                            <option defaultValue="F">F</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputProposal">Proposta</label>
                                                    <div className="col-xl-10 col-md-9 col-8">
                                                        <Input placeholder="inputProposal" type="text" defaultValue="over 2.5" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputEvent">Evento</label>
                                                    <div className="col-xl-10 col-md-9 col-8">
                                                        <input className="form-control" id="inputEvent" type="text" defaultValue="Roma - Parma"/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputQuote">Quota</label>
                                                    <div className="col-xl-10 col-md-9 col-8">
                                                        <Input id="inputQuote" placeholder="Stake" type="number" step="0.1" defaultValue="1.40" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputOutcome">Risultato</label>
                                                    <div className="col-xl-10 col-md-9 col-8">
                                                        <input className="form-control" id="inputOutcome" type="text" defaultValue="over 2.5"/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputNotes">Note</label>
                                                    <div className="col-xl-10 col-md-9 col-8">
                                                        <textarea className="form-control" id="inputNotes" row="4" defaultValue="alto rischio, non giocatela se non vi fidate"></textarea>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputPoolID">ID Schedina</label>
                                                    <div className="col-xl-10 col-md-9 col-8">
                                                        <input className="form-control" id="inputPoolID" type="text" placeholder="" defaultValue="26" readonly="true"/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputEventCreatedOn">Data creazione</label>
                                                    <div className="col-xl-10 col-md-9 col-8">
                                                        <input className="form-control" id="inputEventCreatedOn" type="text" defaultValue="26/08/2020 21:19" readOnly="true"/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputEventUpdatedOn">Data ultima modifica</label>
                                                    <div className="col-xl-10 col-md-9 col-8">
                                                        <input className="form-control" id="inputEventUpdatedOn" type="text" defaultValue="27/08/2020 07:41" readOnly="true"/>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggleModal}>Salva</Button>{' '}
                    <Button color="secondary" onClick={this.toggleModal}>Annulla</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default Event;