import React, { Component } from "react";
import { Card } from 'react-bootstrap';
class ServiceCard extends Component {

    image = this.props.data.media && this.props.data.media.url ? this.props.data.media.url : "https://images.unsplash.com/photo-1473075109809-7a17d327bdf6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80";

    render() {
        return (
            <Card>
                <div className="profile-card" style={{minHeight: 200}}>
                    <Card.Img variant="top" src={this.image} alt="CardImageCap"/>
                    <Card.ImgOverlay>
                        <Card.Title className="text-right">
                            {/* <Dropdown className="drp-tipster-pool">
                                <Dropdown.Toggle style={{display: "inline", float: "right"}} variant={"light"}></Dropdown.Toggle>
                                <Dropdown.Menu alignRight className="profile-notification">
                                    <div className="pro-head"></div>
                                    <ul className="pro-body" style={{listStyle: "none", padding: "5px 0 5px 0", margin: 0}}>
                                        <li>
                                            <a href="/settings" className="dropdown-item">
                                                <i className="feather icon-bell" /> Attiva notifiche per il servizio
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/profile" className="dropdown-item">
                                                <i className="feather icon-user" /> Disattiva notifiche per il servizio
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/profile" className="dropdown-item">
                                                <i className="feather icon-user" /> Annulla l'iscrizione
                                            </a>
                                        </li>
                                    </ul>
                                </Dropdown.Menu>
                            </Dropdown> */}
                        </Card.Title>
                    </Card.ImgOverlay>
                    <Card.Body className="text-left"> 
                        <Card.Title as="h2" style={{color: "white"}}>
                            {this.props.data.service.price} €
                        </Card.Title>
                    </Card.Body>
                </div>
                <Card.Body>
                    <Card.Title as="h5">{this.props.data.service.serviceName}</Card.Title>
                    <Card.Text>
                        <span className="text-danger">Scade tra {this.props.data.remainingDays} giorni</span><br/>
                        <span>Numero massimo iscrizioni: {this.props.data.service.maxSubscribers}</span><br/>
                        <span>Durata iscrizione: {this.props.data.service.duration} giorni</span><br/>
                    </Card.Text>

                    <Card.Text style={{overflow: "scroll", maxHeight: "160px"}} as="div">
                        {this.props.data.service.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default ServiceCard;
