import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from '../../store/actions'
import TokenManager from "../../App/auth/TokenManager";
import InsertEventCard from "../../App/components/InsertEventCard";

const CreateTip = (props) =>  {

  const [description, setDescription] = useState("");
  const [stake, setStake] = useState(0);
  const [events, setEvents] = useState(0);
  
  const [bookmaker, setBookmaker] = useState(0)

  return (
      <Aux>
        <Form>
          <Row>
            <Col md={12} sm={12} lg={12} xl={12}>
              <Card title="Dati tip" isOption={true} className={"p-15"}>
                <Row>
                  <Col md={12} sm={12} lg={4} xl={4}>
                    <Form.Group controlId="infirizzo">
                      <Form.Label>Descrizione Tip</Form.Label>
                      <Form.Control
                        type="text"
                        name="street"
                        value={description}
                        placeholder="Descrizione"
                        onChange={({ target }) => { setDescription(target.value) }}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12} sm={12} lg={4} xl={4}>
                    <Form.Group controlId="cap">
                      <Form.Label>Stake (%)</Form.Label>
                      <Form.Control
                        type="number"
                        name="stake"
                        placeholder="000"
                        value={stake}
                        onChange={({ target }) => {setStake(target.value)}}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12} sm={12} lg={4} xl={4}>
                    <Form.Group controlId="citta">
                      <Form.Label>Bookmaker</Form.Label>
                      <Form.Control
                        type="text"
                        name="bookmaker"
                        placeholder="Bookmaker"
                        value={bookmaker}
                        onChange={({ target }) => {setBookmaker(target.value)}}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Card>

              {events && new Array(events).map((e, index) => {
                return <InsertEventCard key={index} />
              })}

              <Button title={"+ Aggiungi evento"} onClick={e => setEvents(events + 1)} />
            </Col>
          </Row>
        </Form>
    </Aux>
  );


}

const mapStateToProps = state => ({applicationState: state});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTip);
