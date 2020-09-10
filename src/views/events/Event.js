import React, { Component } from 'react';
import { Row, Col, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as moment from 'moment';
import TokenManager from '../../components/auth/Token';

import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

class Event extends Component {

    constructor(props, context) {
        super(props, context);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            modal: false,
            eventDate: moment(),
            sport: 'calcio',
            competition: 'Serie A',
            gender: 'M',
            proposal: 'over 2.5',
            event: 'Roma - Parma',
            quote: '1.40',
            outcome: '2.5',
            notes: 'alto rischio, non giocatela se non vi fidate',
        };
    }

    toggleModal() {
        this.setState({ modal: !this.state.modal })
    }

    async saveEvent() {
        var token = await TokenManager.getInstance().getToken();

        var body={...this.state};
        fetch('http://localhost:5005/events', {method:'POST', headers: {'X-Auth': token, 'Content-Type': 'application/json'}, body:JSON.stringify(body)})
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
                                                        <input className="form-control" id="inputEventID" type="text" placeholder="" defaultValue="26" readOnly={true}/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputEventDate">Data evento</label>
                                                    <div className="col-xl-10 col-md-9 col-8">
                                                        <Datetime dateFormat={moment().format("DD/MM/YYYY")} timeFormat={false} closeOnSelect={true} value={this.state.eventDate} /*onChange={this.handleDateChange}*/ onChange={(date) => this.setState({eventDate: date.format('DD/MM/YYYY')})} />
                                                        {/*<input className="form-control" id="inputEventDate" type="date" placeholder="" value={this.state.eventDate} onChange={(event) => this.setState({eventDate: event.target.eventDate})}/>*/}
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputSport">Sport</label>
                                                    <div className="col-xl-10 col-md-9 col-8">
                                                        <input className="form-control" id="inputSport" type="text" value={this.state.sport} onChange={(event) => this.setState({sport: event.target.sport})}/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputCompetition">Competizione</label>
                                                    <div className="col-xl-10 col-md-9 col-8">
                                                        <Input placeholder="inputCompetition" type="text" value={this.state.competition} onChange={(event) => this.setState({competition: event.target.competition})} />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputGender">Sesso</label>
                                                    <div className="col-xl-10 col-md-9 col-8">
                                                        <select value={this.state.gender} onChange={(event) => this.setState({gender: event.target.gender})} className="custom-select custom-select-sm">
                                                            <option>Seleziona</option>
                                                            <option defaultValue="M">M</option>
                                                            <option defaultValue="F">F</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputProposal">Proposta</label>
                                                    <div className="col-xl-10 col-md-9 col-8">
                                                        <Input placeholder="inputProposal" type="text" value={this.state.proposal} onChange={(event) => this.setState({proposal: event.target.proposal})} />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputEvent">Evento</label>
                                                    <div className="col-xl-10 col-md-9 col-8">
                                                        <input className="form-control" id="inputEvent" type="text" value={this.state.event} onChange={(event) => this.setState({event: event.target.event})} />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputQuote">Quota</label>
                                                    <div className="col-xl-10 col-md-9 col-8">
                                                        <Input id="inputQuote" placeholder="Stake" type="number" step="0.1" value={this.state.quote} onChange={(event) => this.setState({quote: event.target.quote})} />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputOutcome">Risultato</label>
                                                    <div className="col-xl-10 col-md-9 col-8">
                                                        <input className="form-control" id="inputOutcome" type="text" value={this.state.outcome} onChange={(event) => this.setState({outcome: event.target.outcome})} />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputNotes">Note</label>
                                                    <div className="col-xl-10 col-md-9 col-8">
                                                        <textarea className="form-control" id="inputNotes" row="4" value={this.state.notes} onChange={(event) => this.setState({notes: event.target.notes})} ></textarea>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputPoolID">ID Schedina</label>
                                                    <div className="col-xl-10 col-md-9 col-8">
                                                        <input className="form-control" id="inputPoolID" type="text" placeholder="" defaultValue="26" readOnly={true}/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputEventCreatedOn">Data creazione</label>
                                                    <div className="col-xl-10 col-md-9 col-8">
                                                        <input className="form-control" id="inputEventCreatedOn" type="text" defaultValue="26/08/2020 21:19" readOnly={true}/>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputEventUpdatedOn">Data ultima modifica</label>
                                                    <div className="col-xl-10 col-md-9 col-8">
                                                        <input className="form-control" id="inputEventUpdatedOn" type="text" defaultValue="27/08/2020 07:41" readOnly={true}/>
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
                    <Button color="primary" onClick={() => this.saveEvent()} >Salva</Button>{' '}
                    <Button color="secondary" onClick={this.toggleModal}>Annulla</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default Event;