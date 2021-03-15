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
import ScrollToTop from "../../App/layout/ScrollToTop";

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
            console.log(object);
            console.log(props.applicationState.user);
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
      <h1>Modifica servizio</h1>
      {currentObject ? (
        <Card
          style={{
            width: "70%",
            margin: "auto",
            marginTop: "5%",
            padding: "30px",
          }}
        >
          <Row>
            <Col>
              <Card.Img variant="top" src={currentObject.img} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Titolo</Form.Label>
              <Form.Control
                type="text"
                value={currentObject.serviceName}
                name="serviceName"
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Label>Numero massimo iscrizioni</Form.Label>
              <Form.Control
                type="number"
                name="maxSubscribers"
                value={currentObject.maxSubscribers}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Label>Durata</Form.Label>
              <Form.Control
                type="number"
                value={currentObject.duration}
                name="duration"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                style={{ height: "400px" }}
                name="description"
                value={currentObject.description}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                value={currentObject.price}
                name="price"
                onChange={handleChange}
              />{" "}
              <span>€</span>
            </Col>
            <Col md={4}></Col>
            <Col
              md={4}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button onClick={handleUpdate} style={{ alignSelf: "flex-end" }}>
                Salva
              </Button>
            </Col>
          </Row>
        </Card>
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
export default connect(mapStateToProps, mapDispatchToProps)(EditCard);
