import React, { useEffect, useState } from "react";
import { Card, Col, Form, Row, Dropdown } from "react-bootstrap";
import InputMask from "react-input-mask";
import Select from "react-select";
import Sports from "../../App/components/Sports";
import DatePicker, {registerLocale} from "react-datepicker";
import moment from "moment";
import {it} from 'date-fns/esm/locale'

registerLocale('it', it);

const InsertEventCard = (props) => {
  const [eventDate, setEventDate] = useState(moment().toDate());
  const [competition, setCompetition] = useState("");
  const [event, setEvent] = useState("");
  const [proposal, setProposal] = useState("");
  const [quote, setQuote] = useState("");
  const [sport, setSport] = useState("");

  useEffect(() => {
    props.onValueChange({
      key: props.index,
      eventDate: moment(eventDate).format("YYYY-MM-DDTHH:mm:ss.SSS"),
      competition,
      event,
      proposal,
      quote,
      sport,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventDate, competition, event, proposal, quote, props]);

  return (
    <Card className={"p-15"}>
      <Card.Body>
        <Card.Title>
          Inserisci i dati dell'evento
          <Dropdown className="drp-tipster-pool">
            <Dropdown.Toggle
              style={{ display: "inline", float: "right" }}
              variant={"light"}
            ></Dropdown.Toggle>
            <Dropdown.Menu alignRight className="profile-notification">
              <Dropdown.Item
                onClick={() => {
                  props.onRemove(props.index);
                }}
              >
                Elimina
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Title>
        <Row>
          <Col md={12} sm={12} lg={4} xl={4}>
            <Form.Group controlId="infirizzo">
              <Form.Label>
                Data evento <span className={"text-danger"}>*</span>
              </Form.Label>
              <div className={"row"}>
                <DatePicker
                    selected={eventDate}
                    onChange={(e) => setEventDate(e)}
                    showTimeInput
                    placeholderText="Seleziona una data"
                    disabled={props.saving}
                    className={"form-control"}
                    wrapperClassName={"col-md-12 col-lg-12 col-sm-12"}
                    locale={"it"}
                    dateFormat="MMMM d, yyyy HH:mm"
                />
              </div>
            </Form.Group>
          </Col>
          <Col md={12} sm={12} lg={4} xl={4}>
            <Form.Group controlId="infirizzo">
              <Form.Label>
                Sport <span className={"text-danger"}>*</span>
              </Form.Label>
              <Select
                isClearable
                isSearchable
                className="basic-single"
                classNamePrefix="select"
                name="sport"
                isDisabled={props.saving}
                options={Sports}
                value={sport}
                onChange={(sport) => setSport(sport)}
              />
            </Form.Group>
          </Col>
          <Col md={12} sm={12} lg={4} xl={4}>
            <Form.Group controlId="cap">
              <Form.Label>
                Competizione <span className={"text-danger"}>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="competition"
                placeholder="Juve - Nappoli"
                disabled={props.saving}
                value={competition}
                onChange={({ target }) => {
                  setCompetition(target.value);
                }}
              />
            </Form.Group>
          </Col>
          <Col md={12} sm={12} lg={4} xl={4}>
            <Form.Group controlId="citta">
              <Form.Label>
                Evento <span className={"text-danger"}>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="event"
                disabled={props.saving}
                placeholder="Ronaldo spacca tutto"
                value={event}
                onChange={({ target }) => {
                  setEvent(target.value);
                }}
              />
            </Form.Group>
          </Col>
          <Col md={12} sm={12} lg={4} xl={4}>
            <Form.Group controlId="citta">
              <Form.Label>
                Proposta <span className={"text-danger"}>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="proposta"
                placeholder="Vincita"
                disabled={props.saving}
                value={proposal}
                onChange={({ target }) => {
                  setProposal(target.value);
                }}
              />
            </Form.Group>
          </Col>
          <Col md={12} sm={12} lg={4} xl={4}>
            <Form.Group controlId="quota">
              <Form.Label>
                Quota <span className={"text-danger"}>*</span>
              </Form.Label>
              <InputMask
                className={"form-control"}
                mask={"99.99"}
                onChange={({ target }) => {
                  setQuote(target.value);
                }}
                name="quota"
                disabled={props.saving}
                placeholder="1.98"
                value={quote}
              />
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default InsertEventCard;
