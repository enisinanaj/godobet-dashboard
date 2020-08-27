import React, { Component } from 'react';
import ContentWrapper from '../../components/layout/ContentWrapper';
import { Row, Col, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Pool extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            modal: false,
            /*toasterPos: 'top-right',
            toasterType: 'info'*/
        };

    }

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render(){
        return(
            <ContentWrapper>
                <Row>
                    <Col lg="12">
                        <div className="card card-default">
                            <div className="card-header d-flex align-items-center">
                                <div className="d-flex justify-content-center col">
                                    <div className="h4 m-0 text-center">Inserimento schedina</div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row py-4 justify-content-center">
                                    <div className="col-12 col-sm-10">
                                        <form className="form-horizontal">
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputID">ID</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <input className="form-control" id="inputID" type="text" placeholder="" defaultValue="15" readonly="true"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputDescription">Descrizione</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <input className="form-control" id="inputDescription" type="text" placeholder="" defaultValue="Descrizione giocata multipla"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputTotalQuote">Quota</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <input className="form-control" id="inputTotalQuote" type="number" defaultValue="9.60"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputStake">Stake</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <Input placeholder="Stake" type="number" step="0.1" defaultValue="1" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputProfit">Profitto</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <input className="form-control" id="inputProfit" type="text" defaultValue="8.60%"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputBookmaker">Bookmaker</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <select defaultValue="" className="custom-select custom-select-sm">
                                                        <option>Seleziona</option>
                                                        <option defaultValue="1">William Hill</option>
                                                        <option defaultValue="2">Bet365</option>
                                                        <option defaultValue="3">PlanetWin365</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputCreatedOn">Data creazione</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <input className="form-control" id="inputCreatedOn" type="text" defaultValue="26/08/2020 21:19" readOnly="true"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputUpdatedOn">Data ultima modifica</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <input className="form-control" id="inputUpdatedOn" type="text" defaultValue="27/08/2020 07:41" readOnly="true"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-md-12">
                                                    <button className="btn btn-info float-right" type="submit">Salva schedina</button>
                                                    <Button color="primary" onClick={this.toggleModal}>Aggiungi evento</Button>
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
    };
}

export default Pool;