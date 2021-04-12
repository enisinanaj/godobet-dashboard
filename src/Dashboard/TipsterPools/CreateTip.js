import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Aux from "../../hoc/_Aux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import InsertEventCard from "../../App/components/InsertEventCard";
import NumberFormat from "react-number-format";
import TokenManager from "../../App/auth/TokenManager";
import Select from "react-select";
import config from "../../store/config";

const CreateTip = (props) => {
  const [description, setDescription] = useState("");
  const [stake, setStake] = useState();
  const [events, setEvents] = useState([{}]);
  const [bookmaker, setBookmaker] = useState();
  const [validEvents, setValidEvents] = useState(false);
  const [service, setService] = useState("");
  const [services, setServices] = useState();
  const [motivation, setMotivation] = useState("");
  const [motivationCount, setMotivationCount] = useState(1000);

  const updateEvents = (event) => {
    let newEvents = events;
    newEvents[event.key] = event;
    setEvents(newEvents);
    validateEvents();
  };

  useEffect(() => {
    validateEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stake, description, bookmaker, service]);

  useEffect(() => {
    setMotivationCount(1000 - motivation.length);
  }, [motivation]);

  useEffect(() => {
    TokenManager.getInstance()
      .getToken()
      .then((token) => {
        return fetch(
          `${props.applicationState.user._links.self.href}/services`,
          {
            headers: { "Content-Type": "application/json", "X-Auth": token },
          }
        )
          .then((result) => result.json())
          .then((services) =>
            setServices(
              services._embedded.services.map((service) => ({
                label: service.serviceName,
                value: service._links.self.href,
              }))
            )
          );
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const validateEvents = () => {
    if (events.length === 0) {
      setEvents([{}]);
    }

    let errors = events.filter((event) => {
      if (
        event.eventDate === "" ||
        event.competition === "" ||
        event.event === "" ||
        event.proposal === "" ||
        event.quote.replace(".", "").replace("_", "") === "" ||
        event.quote === "__.__" ||
        event.sport === "" ||
        description === "" ||
        stake === "" ||
        bookmaker === "" ||
        service === ""
      ) {
        return true;
      } else {
        return false;
      }
    });

    if (errors.length > 0) {
      setValidEvents(false);
    } else {
      setValidEvents(true);
    }
  };

  const removeEvent = (index) => {
    let newEvents = [...events];
    newEvents = newEvents.filter((_, i) => i !== index);
    setEvents(newEvents);
    validateEvents();
  };

  const saveTip = async () => {
    let token = await TokenManager.getInstance().getToken();
    let result = await fetch(config.API_URL + "/pools/", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Auth": token },
      body: JSON.stringify({
        service: service.value,
        description,
        bookmaker,
        motivation,
        events: [],
        author: props.applicationState.user._links.self.href,
        stake: Number(stake.replace("%", "")) * 100,
      }),
    });

    let poolResult = await result.json();

    let updateEvents = [];
    events.forEach((event) => {
      updateEvents.push(
        fetch(config.API_URL + "/events/", {
          method: "POST",
          headers: { "Content-Type": "application/json", "X-Auth": token },
          body: JSON.stringify({
            author: props.applicationState.user._links.self.href,
            eventDate: event.eventDate,
            proposal: event.proposal,
            sport: event.sport.value,
            event: event.event,
            quote: Number(event.quote.replace("_", "")) * 100,
            notes: event.notes,
            pool: poolResult._links.self.href,
            competition: event.competition,
            gender: "http://localhost:5005/items/3",
          }),
        })
      );
    });

    Promise.all(updateEvents).then((result) => {
      window.location = "/dashboard/tipster/pools";
    });
  };

  return (
    <Aux>
      <Form>
        <Row>
          <Col md={12} sm={12} lg={12} xl={12}>
            <Card title="Dati tip" className={"p-15"}>
              <Row>
                <Col md={12} sm={12} lg={3} xl={3}>
                  <Form.Group controlId="infirizzo">
                    <Form.Label>
                      Servizio <span className={"text-danger"}>*</span>
                    </Form.Label>
                    <Select
                      isClearable
                      isSearchable
                      className="basic-single"
                      classNamePrefix="select"
                      name="service"
                      options={services}
                      value={service}
                      onChange={(service) => setService(service)}
                    />
                  </Form.Group>
                </Col>
                <Col md={12} sm={12} lg={3} xl={3}>
                  <Form.Group controlId="infirizzo">
                    <Form.Label>
                      Descrizione Tip <span className={"text-danger"}>*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="street"
                      value={description}
                      placeholder="Descrizione"
                      onChange={({ target }) => {
                        setDescription(target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col md={12} sm={12} lg={3} xl={3}>
                  <Form.Group controlId="cap">
                    <Form.Label>
                      Stake (%) <span className={"text-danger"}>*</span>
                    </Form.Label>
                    <NumberFormat
                      className={"form-control"}
                      name="stake"
                      placeholder="0.0%"
                      suffix={"%"}
                      onChange={({ target }) => {
                        setStake(target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col md={12} sm={12} lg={3} xl={3}>
                  <Form.Group controlId="citta">
                    <Form.Label>
                      Bookmaker <span className={"text-danger"}>*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="bookmaker"
                      placeholder="Bookmaker"
                      value={bookmaker}
                      onChange={({ target }) => {
                        setBookmaker(target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={12} sm={12} lg={12} xl={12}>
                  <Form.Group controlId="notes">
                    <Form.Label>
                      Motivazione <em>(Opzionale)</em>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="motivation"
                      placeholder="Motivazione"
                      value={motivation}
                      onChange={({ target }) => {
                        setMotivation(target.value);
                      }}
                    />
                    <span
                      className={
                        "text-muted small float-right " +
                        (motivationCount < 0 ? "text-danger" : "")
                      }
                    >
                      Caratteri rimanenti {motivationCount}
                    </span>
                  </Form.Group>
                </Col>
              </Row>
            </Card>

            {events.map((e, index) => {
              return (
                <InsertEventCard
                  key={index}
                  onValueChange={updateEvents}
                  index={index}
                  onRemove={removeEvent}
                />
              );
            })}

            <Button onClick={(e) => setEvents([...events, {}])}>
              + Aggiungi evento
            </Button>
            <Button
              className={"float-right"}
              disabled={!validEvents || motivationCount < 0}
              onClick={() => saveTip()}
            >
              Salva
            </Button>
          </Col>
        </Row>
      </Form>
    </Aux>
  );
};

const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTip);
