import React, { useEffect, useState } from 'react';
import { Card, Col, Form, Row, Dropdown } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import Select from 'react-select';
import Sports from '../../App/components/Sports'

const InsertEventCard = (props) => {
    const [eventDate, setEventDate] = useState("");
    const [competition, setCompetition] = useState("");
    const [event, setEvent] = useState("");
    const [proposal, setProposal] = useState("");
    const [quote, setQuote] = useState("");
    const [sport, setSport] = useState("");
    const [notes, setNotes] = useState("");

    useEffect(() => {
        props.onValueChange({
            key: props.index,
            eventDate,
            competition,
            event,
            proposal,
            quote,
            sport,
            notes
        });
    }, [eventDate, competition, event, proposal, quote, notes, props])

    return (<Card className={"p-15"}>
        <Card.Body>
            <Card.Title>
                Inserisci i dati dell'evento
                <Dropdown className="drp-tipster-pool">
                    <Dropdown.Toggle style={{display: "inline", float: "right"}} variant={"light"}></Dropdown.Toggle>
                    <Dropdown.Menu alignRight className="profile-notification">
                        <Dropdown.Item onClick={() => {props.onRemove(props.index)}}>Elimina</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Card.Title>
            <Row>
                <Col md={12} sm={12} lg={4} xl={4}>
                    <Form.Group controlId="infirizzo">
                        <Form.Label>Data evento <span className={"text-danger"}>*</span></Form.Label>
                        <input type="datetime-local"
                            className={"form-control"} 
                            name="eventdate"
                            value={eventDate}
                            onChange={({ target }) => { setEventDate(target.value) }}
                            placeholder="dd/mm/yyyy hh:mm" />
                    </Form.Group>
                </Col>
                <Col md={12} sm={12} lg={4} xl={4}>
                    <Form.Group controlId="infirizzo">
                        <Form.Label>Sport <span className={"text-danger"}>*</span></Form.Label>
                        <Select
                            isClearable
                            isSearchable
                            className="basic-single"
                            classNamePrefix="select"
                            name="sport"
                            options={Sports}
                            value={sport}
                            onChange={(sport) => setSport(sport)}
                            />
                    </Form.Group>
                </Col>
                <Col md={12} sm={12} lg={4} xl={4}>
                    <Form.Group controlId="cap">
                    <Form.Label>Competizione <span className={"text-danger"}>*</span></Form.Label>
                    <Form.Control
                        type="text"
                        name="competition"
                        placeholder="Juve - Nappoli"
                        value={competition}
                        onChange={({ target }) => {setCompetition(target.value)}}
                    />
                    </Form.Group>
                </Col>
                <Col md={12} sm={12} lg={4} xl={4}>
                    <Form.Group controlId="citta">
                    <Form.Label>Evento <span className={"text-danger"}>*</span></Form.Label>
                    <Form.Control
                        type="text"
                        name="event"
                        placeholder="Ronaldo spacca tutto"
                        value={event}
                        onChange={({ target }) => {setEvent(target.value)}}
                    />
                    </Form.Group>
                </Col>
                <Col md={12} sm={12} lg={4} xl={4}>
                    <Form.Group controlId="citta">
                    <Form.Label>Proposta <span className={"text-danger"}>*</span></Form.Label>
                    <Form.Control
                        type="text"
                        name="proposta"
                        placeholder="Vincita"
                        value={proposal}
                        onChange={({ target }) => {setProposal(target.value)}}
                    />
                    </Form.Group>
                </Col>
                <Col md={12} sm={12} lg={4} xl={4}>
                    <Form.Group controlId="quota">
                        <Form.Label>Quota <span className={"text-danger"}>*</span></Form.Label>
                        <InputMask className={"form-control"} mask={"99.99"}
                            onChange={({ target }) => {setQuote(target.value)}}
                            name="quota"
                            placeholder="1.98"
                            value={quote} />
                    </Form.Group>
                </Col>
                <Col md={12} sm={12} lg={12} xl={12}>
                    <Form.Group controlId="notes">
                    <Form.Label>Notes <em>(Opzione)</em></Form.Label>
                    <Form.Control
                        type="text"
                        name="notes"
                        placeholder="Note"
                        value={notes}
                        onChange={({ target }) => {setNotes(target.value)}}
                    />
                    </Form.Group>
                </Col>
            </Row>
        </Card.Body>
    </Card>)

}

export default InsertEventCard;