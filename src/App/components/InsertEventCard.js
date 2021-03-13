import React, { useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';

const InsertEventCard = (props) => {
    const [eventDate, setEventDate] = useState("");
    const [competition, setCompetition] = useState("");
    const [event, setEvent] = useState("");
    const [proposal, setProposal] = useState("");
    const [quota, setQuota] = useState("");
    const [notes, setNotes] = useState("");


    return (<Card title="Dati evento" isOption={true} className={"p-15"}>
        <Row>
        <Col md={12} sm={12} lg={4} xl={4}>
            <Form.Group controlId="infirizzo">
            <Form.Label>Data evento</Form.Label>
            <Form.Control
                type="text"
                name="Event date"
                value={eventDate}
                placeholder="12/01/2021 13:30"
                onChange={({ target }) => { setEventDate(target.value) }}
            />
            </Form.Group>
        </Col>
        <Col md={12} sm={12} lg={4} xl={4}>
            <Form.Group controlId="cap">
            <Form.Label>Competizione</Form.Label>
            <Form.Control
                type="number"
                name="competition"
                placeholder="000"
                value={competition}
                onChange={({ target }) => {setCompetition(target.value)}}
            />
            </Form.Group>
        </Col>
        <Col md={12} sm={12} lg={4} xl={4}>
            <Form.Group controlId="citta">
            <Form.Label>Evento</Form.Label>
            <Form.Control
                type="text"
                name="event"
                placeholder="event"
                value={event}
                onChange={({ target }) => {setEvent(target.value)}}
            />
            </Form.Group>
        </Col>
        <Col md={12} sm={12} lg={4} xl={4}>
            <Form.Group controlId="citta">
            <Form.Label>Proposta</Form.Label>
            <Form.Control
                type="text"
                name="proposta"
                placeholder="Proposta"
                value={proposal}
                onChange={({ target }) => {setProposal(target.value)}}
            />
            </Form.Group>
        </Col>
        <Col md={12} sm={12} lg={4} xl={4}>
            <Form.Group controlId="quota">
            <Form.Label>Quota</Form.Label>
            <Form.Control
                type="text"
                name="quota"
                placeholder="Quota"
                value={quota}
                onChange={({ target }) => {setQuota(target.value)}}
            />
            </Form.Group>
        </Col>
        <Col md={12} sm={12} lg={4} xl={4}>
            <Form.Group controlId="notes">
            <Form.Label>Notes</Form.Label>
            <Form.Control
                type="text"
                name="notes"
                placeholder="Notes"
                value={notes}
                onChange={({ target }) => {setNotes(target.value)}}
            />
            </Form.Group>
        </Col>
        </Row>
    </Card>)

}

export default InsertEventCard;