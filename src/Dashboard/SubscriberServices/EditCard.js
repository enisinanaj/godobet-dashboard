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
import { DropzoneComponent } from "react-dropzone-component";
import Swal from "sweetalert2";

import { auth, storage } from "firebase";
import PNotify from "pnotify/dist/es/PNotify";
import "pnotify/dist/es/PNotifyButtons";
import "pnotify/dist/es/PNotifyConfirm";
import "pnotify/dist/es/PNotifyCallbacks";

const EditCard = (props) => {
  const [currentObject, setCurrentObject] = useState();
  const [imageAsFile, setImageAsFile] = useState("");

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
            excerpt: currentObject.excerpt,
            price: currentObject.price,
          }),
        }).then((e) => {
          if (e.status !== 200) {
            Swal.fire({
              type: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
          } else {
            Swal.fire({
              type: "success",
              title: "Servizio aggiornato!",
            });
            uploadServiceCover(e.url);
          }
        });
      });
  };

  function dynamicProgressButtonPNotify() {
    const notice = PNotify.info({
      text: "Caricamento in corso",
      icon: "fa fa-spinner fa-pulse",
      hide: false,
      shadow: false,
      width: "200px",
      modules: {
        Buttons: {
          closer: false,
          sticker: false,
        },
      },
    });

    return notice;
  }

  const uploadServiceCover = (serviceLocation) => {
    if (!imageAsFile || !imageAsFile.name) {
      return;
    }

    const token = auth().currentUser.uid;
    const timestamp = new Date().getTime();

    const uploadTask = storage()
      .ref(`/services/${token}/${timestamp}/${imageAsFile.name}`)
      .put(imageAsFile);

    var notice = dynamicProgressButtonPNotify();
    const interval = setInterval(function () {
      let percent =
        (100.0 * uploadTask.snapshot.bytesTransferred) /
        uploadTask.snapshot.totalBytes;
      const options = {
        text:
          percent.toLocaleString("it-IT", { maximumFractionDigits: 2 }) +
          "% complete.",
      };
      if (percent === 80) {
        options.title = "Quasi fatto.";
      }
      if (percent >= 100) {
        window.clearInterval(interval);
        options.title = "Completato!";
        options.type = "success";
        options.hide = true;
        options.icon = "fa fa-check";
        options.shadow = true;
        options.width = PNotify.defaults.width;
        options.modules = {
          Buttons: {
            closer: true,
            sticker: true,
          },
        };
      }
      notice.update(options);
    }, 120);

    uploadTask.on(
      "state_changed",
      (snapShot) => {
        console.log(snapShot);
      },
      (err) => {
        console.log(err);
      },
      () => {
        storage()
          .ref(`/services/${token}/${timestamp}/`)
          .child(imageAsFile.name)
          .getDownloadURL()
          .then((imageUrl) => {
            TokenManager.getInstance()
              .getToken()
              .then((jwt) => {
                fetch(BASE_CONFIG.API_URL + "/serviceMedias", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "X-Auth": jwt,
                  },
                  body: JSON.stringify({
                    url: imageUrl,
                    service: serviceLocation,
                    mediaType: "cover",
                  }),
                })
                  .then((_) => {
                    props.callback();
                  })
                  .catch((error) => {
                    console.warn(error);
                  });
              });
          })
          .catch((error) => {
            console.warn(error);
          });
      }
    );
  };

  const eventHandlers = {
    addedfile: (file) => setImageAsFile(file),
    removedfile: () => setImageAsFile(""),
  };

  let config = {
    showFiletypeIcon: false,
    postUrl: "/",
  };

  let djsConfig = {
    addRemoveLinks: true,
    acceptedFiles: "image/jpeg,image/png,application/pdf",
  };

  return (
    <Aux>
      {currentObject ? (
        <Form>
          <DropzoneComponent
            config={config}
            djsConfig={djsConfig}
            eventHandlers={eventHandlers}
          />
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
                        Descrizione corta <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        style={{ minHeight: "100px", maxHeight: 100 }}
                        as="textarea"
                        placeholder="Descrizione corta"
                        value={currentObject.excerpt}
                        name="excerpt"
                        onChange={handleChange}
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
