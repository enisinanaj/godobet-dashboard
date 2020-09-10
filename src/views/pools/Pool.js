import React, { Component } from 'react';
import ContentWrapper from '../../components/layout/ContentWrapper';
import { Row, Col, Input, Button } from 'reactstrap';
import Event from '../events/Event.js'
import EventCard from '../events/EventCard.js'
import TokenManager from '../../components/auth/Token';

class Pool extends Component {  

    constructor(props, context) {
        super(props, context);
     
        this.state = {
            description: 'descr',
            quote: '1.02',
            stake: '10.3',
            profit: '1',
            bookmaker: '1',
        };
    }

    eventModalRef = ({toggleModal}) => {
        this.showModal = toggleModal;
     }

    openEvent = () => {
        this.showModal();
    }

    async savePool() {
        var token = await TokenManager.getInstance().getToken();

        var body={...this.state};
        fetch('http://localhost:5005/pools', {method:'POST', headers: {'X-Auth': token, 'Content-Type': 'application/json'}, body:JSON.stringify(body)})
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
                                                    <input className="form-control" id="inputID" type="text" placeholder="" defaultValue="15" readOnly={true}/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputDescription">Descrizione</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <input className="form-control" id="inputDescription" type="text" placeholder="" value={this.state.description} onChange={(event) => this.setState({description: event.target.value})}/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputTotalQuote">Quota</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <input className="form-control" id="inputTotalQuote" type="number" value={this.state.quote} onChange={(event) => this.setState({quote: event.target.value})}/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputStake">Stake</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <Input placeholder="Stake" type="number" step="0.1" value={this.state.stake} onChange={(event) => this.setState({stake: event.target.value})}/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputProfit">Profitto</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <input className="form-control" id="inputProfit" type="text" value={this.state.profit} onChange={(event) => this.setState({profit: event.target.value})}/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputBookmaker">Bookmaker</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <select value={this.state.bookmaker} onChange={(event) => this.setState({bookmaker: event.target.value})} className="custom-select custom-select-sm">
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
                                                    <input className="form-control" id="inputCreatedOn" type="text" defaultValue="26/08/2020 21:19" readOnly={true}/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right" htmlFor="inputUpdatedOn">Data ultima modifica</label>
                                                <div className="col-xl-10 col-md-9 col-8">
                                                    <input className="form-control" id="inputUpdatedOn" type="text" defaultValue="27/08/2020 07:41" readOnly={true}/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-md-12">
                                                    <Button color="success" className="float-right" onClick={() => this.savePool()}>Salva schedina</Button>
                                                    <Button color="primary" onClick={this.openEvent}>Aggiungi evento</Button>
                                                    <Event ref={this.eventModalRef}></Event>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="6">
                    <EventCard id="1" eventDate="01/02/2019" sport="Calcio" competition="Serie B" gender="M" proposal="1" event="Vicenza - Lecce" quote="1.10" outcome="6,90" notes="vittoria facile facile..." poolId="3" eventCreatedOn="02/04/2018 19:22" eventUpdatedOn="06/07/2018 12:18"/>
                    </Col>
                    <Col lg="6">
                    <EventCard id="2" eventDate="01/02/2019" sport="Calcio" competition="Serie A" gender="M" proposal="X" event="Roma - Lazio" quote="2.00" outcome="7,50" notes="-" poolId="3" eventCreatedOn="02/04/2018 19:33" eventUpdatedOn="06/07/2018 12:00"/>
                    </Col>
                </Row>
            </ContentWrapper>
        )
    };
}

export default Pool;