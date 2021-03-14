import React, { Component } from "react";
import { Card, Dropdown } from "react-bootstrap";

import imgSlide3 from '../../assets/images/gallery-grid/img-grd-gal-2.jpg'

class ServiceCard extends Component {
    render() {
        return (
            <Card>
                <div className="profile-card" style={{minHeight: 200}}>
                    <Card.Img variant="top" src={imgSlide3} alt="CardImageCap"/>
                    <Card.ImgOverlay>
                        <Card.Title className="text-right">
                            <Dropdown className="drp-tipster-pool">
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
                                                <i className="feather icon-user" /> Modifica
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/profile" className="dropdown-item">
                                                <i className="feather icon-user" /> Annulla l'iscrizione
                                            </a>
                                        </li>
                                    </ul>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Title>
                    </Card.ImgOverlay>
                    <Card.Body className="text-left"> 
                        <Card.Title as="h2" style={{color: "white"}}>
                            65 €
                        </Card.Title>
                    </Card.Body>
                </div>
                <Card.Body>
                    <Card.Title as="h5">Smash Bros premium</Card.Title>
                    <Card.Text>
                        <span className="text-danger">Scade tra 5 minuti</span><br/>
                        <span>Numero massimo iscrizioni: 75</span><br/>
                        <span>Durata iscrizione: 35 giorni</span><br/>
                    </Card.Text>

                    <Card.Text style={{overflow: "scroll", maxHeight: "160px"}}>
                        <ul>
                            <li>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</li>
                            <li>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</li>
                            <li>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</li>
                            <li>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</li>
                            <li>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</li>
                            <li>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</li>
                            <li>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</li>
                            <li>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</li>
                            <li>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</li>
                            <li>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default ServiceCard;
