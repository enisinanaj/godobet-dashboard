import React, { useState, useEffect } from "react";
import Aux from "../../hoc/_Aux";
import { Card, Col, Form, Row, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import TokenManager from "../../App/auth/TokenManager";
import BASE_CONFIG from "../../store/config";
import Loader from "../../App/layout/Loader";

const EditCard = (props) => {
  const [currentObject, setCurrentObject] = useState();

  let id = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );

  useEffect(() => {
    TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        fetch(BASE_CONFIG.API_URL + "/services/" + id + "/author", {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
        })
          .then((e) => e.json())
          .then((object) => {
            if (object.userCode !== props.applicationState.user.userCode) {
              return;
            }
            getService();
          });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getService = () => {
    TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        fetch(BASE_CONFIG.API_URL + "/services/" + id, {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
        })
          .then((e) => e.json())
          .then((object) => {
            setCurrentObject(object);
            // console.log(object);
            // console.log(props.applicationState.user);
          });
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentObject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        console.log(jwt);
        fetch(BASE_CONFIG.API_URL + "/services/" + id, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
          body: JSON.stringify({
            serviceName: currentObject.serviceName,
            description: currentObject.description,
            maxSubscribers: currentObject.maxSubscribers,
            duration: currentObject.duration,
            price: currentObject.price,
          }),
        }).then((e) => console.log(e));
      });
  };

  return (
    <Aux>
      {currentObject ? (
        <Form>
          <Row>
            <Col md={12} sm={12} lg={12} xl={12}>
              <Card className={"p-15"}>
                <Row>
                  <Col md={12} sm={12} lg={3} xl={3}>
                    <Form.Group controlId="infirizzo">
                      <Form.Label>
                        Titolo <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Titolo"
                        value={currentObject.serviceName}
                        onChange={handleChange}
                        name="serviceName"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12} sm={12} lg={3} xl={3}>
                    <Form.Group controlId="citta">
                      <Form.Label>
                        Prezzo (€) <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        name="price"
                        value={currentObject.price}
                        onChange={handleChange}
                        placeholder="Prezzo"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12} sm={12} lg={3} xl={3}>
                    <Form.Group>
                      <Form.Label>
                        Durata iscrizione <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        min="0"
                        placeholder="Durata iscrizione"
                        onChange={handleChange}
                        value={currentObject.duration}
                        name="duration"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12} sm={12} lg={3} xl={3}>
                    <Form.Group>
                      <Form.Label>
                        Massimo iscrizioni{" "}
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        min="0"
                        placeholder="Massimo iscrizioni"
                        value={currentObject.maxSubscribers}
                        onChange={handleChange}
                        name="maxSubscribers"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="infirizzo">
                      <Form.Label>
                        Descrizione <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        style={{ minHeight: "200px" }}
                        as="textarea"
                        placeholder="Descrizione"
                        value={currentObject.description}
                        name="description"
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Card>

              <Button onClick={handleUpdate} className="float-right">
                Salva
              </Button>
            </Col>
          </Row>
        </Form>
      ) : (
        <Loader />
      )}
    </Aux>
  );
};

const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditCard)
);
