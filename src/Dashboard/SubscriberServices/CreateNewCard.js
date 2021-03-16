import React, { useState, useEffect } from "react";
import { Col, Form, Card, Row, Button } from "react-bootstrap";
import { DropzoneComponent } from "react-dropzone-component";
import Swal from "sweetalert2";

import TokenManager from "../../App/auth/TokenManager";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import BASE_CONFIG from "../../store/config";
import Aux from "../../hoc/_Aux";

const CreateNewCard = (props) => {
  // const [image, setImage] = useState();
  const [validFields, setValidFields] = useState(false);

  const [newObject, setNewObject] = useState({
    author: "",
    price: "",
    duration: "",
    description: "",
    serviceName: "",
    maxSubscribers: "",
    version: "",
  });
  let config = {
    showFiletypeIcon: false,
    postUrl: "/",
  };

  let djsConfig = {
    addRemoveLinks: true,
    acceptedFiles: "image/jpeg,image/png,application/pdf",
  };

  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newObject]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewObject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreateCard = () => {
    TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        fetch(BASE_CONFIG.API_URL + "/services", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
          body: JSON.stringify({
            author: props.applicationState.user._links.self.href,
            price: newObject.price,
            duration: newObject.duration,
            description: newObject.description,
            serviceName: newObject.serviceName,
            maxSubscribers: newObject.maxSubscribers,
            version: "1",
          }),
        }).then((e) => {
          if (e.status !== 201) {
            Swal.fire({
              type: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });

            console.log(e);
          } else {
            Swal.fire({
              type: "success",
              title: "Servizio creato!",
            });
          }
        });
      });
  };

  const validate = () => {
    if (
      newObject.serviceName &&
      newObject.description &&
      newObject.price &&
      newObject.duration &&
      newObject.maxSubscribers
    ) {
      setValidFields(true);
    } else {
      setValidFields(false);
    }
  };

  return (
    <Aux>
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
                      onChange={handleChange}
                      placeholder="Prezzo"
                    />
                  </Form.Group>
                </Col>
                <Col md={12} sm={12} lg={3} xl={3}>
                  <Form.Group>
                    <Form.Label>
                      Durata iscrizione (giorni){" "}
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="number"
                      min="0"
                      placeholder="Durata iscrizione"
                      onChange={handleChange}
                      name="duration"
                    />
                  </Form.Group>
                </Col>
                <Col md={12} sm={12} lg={3} xl={3}>
                  <Form.Group>
                    <Form.Label>
                      Massimo iscrizioni <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="number"
                      min="0"
                      placeholder="Massimo iscrizioni"
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
                      name="description"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <DropzoneComponent config={config} djsConfig={djsConfig} />
                </Col>
              </Row>
            </Card>

            <Button
              onClick={handleCreateCard}
              className="float-right"
              disabled={!validFields}
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewCard);

/* <Row>
        <Col>
          <Card title="Crea nuovo servizio">
            <Card.Body>
              <Card.Text>
                <ul className="list-group">
                  <li className="list-group-item">
                    Price:{" "}
                    <Form.Control
                      type="number"
                      min="0"
                      name="price"
                      placeholder="Prezzo"
                      onChange={handleChange}
                    />
                  </li>
                  <li className="list-group-item">
                    Title:{" "}
                    <Form.Control
                      type="text"
                      name="serviceName"
                      placeholder="Titolo"
                      onChange={handleChange}
                    />
                  </li>
                  <li className="list-group-item">
                    Numero massimo iscrizioni:{" "}
                    <Form.Control
                      type="number"
                      min="0"
                      placeholder="Numero massimo iscrizioni"
                      name="maxSubscribers"
                      onChange={handleChange}
                    />
                  </li>
                  <li className="list-group-item">
                    Durata iscrizione:{" "}
                    <Form.Control
                      type="number"
                      min="0"
                      name="duration"
                      placeholder="Durata iscrizione"
                      onChange={handleChange}
                    />
                  </li>
                  <li className="list-group-item">
                    Descrizione:
                    <Form.Control
                      type="text"
                      placeholder="Descrizione"
                      name="description"
                      onChange={handleChange}
                    />
                  </li>
                  <li className="list-group-item">
                    Immagine:{" "}
                    <DropzoneComponent
                      config={config}
                      djsConfig={djsConfig}
                      eventHandlers={{
                        addedfile: (file) => {
                          setImage(file);
                        },
                      }}
                    />
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
            <div style={{ textAlign: "center" }}>
              <button
                className="btn btn-primary shadow-2 mb-4"
                disabled={loading}
                onClick={() => {
                  handleCreateCard();
                  setLoading(true);
                }}
              >
                {loading ? "Creating.." : "Creare"}
              </button>
            </div>
          </Card>
        </Col>
      </Row> */
