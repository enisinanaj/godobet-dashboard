import React, { useState } from "react";
import { Col, Form, Card, Row } from "react-bootstrap";
import { DropzoneComponent } from "react-dropzone-component";
import Swal from "sweetalert2";

import TokenManager from "../../App/auth/TokenManager";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import BASE_CONFIG from "../../store/config";
import Aux from "../../hoc/_Aux";

const CreateNewCard = (props) => {
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);
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
            setLoading(false);
            console.log(e);
          } else {
            Swal.fire({
              type: "success",
              title: "Servizio creato!",
            });
            setLoading(false);
          }
        });
      });
  };

  console.log(image);

  return (
    <Aux>
      <Row>
        <Col>
          <Card title="Crea nuovo servizio">
            <Card.Body>
              <Card.Title>
                <h4>Crea nuovo servizio</h4>
              </Card.Title>
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
      </Row>
    </Aux>
  );
};

const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewCard);
