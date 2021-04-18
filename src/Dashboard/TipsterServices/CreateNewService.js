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

import { auth, storage } from "firebase";
import PNotify from "pnotify/dist/es/PNotify";
import "pnotify/dist/es/PNotifyButtons";
import "pnotify/dist/es/PNotifyConfirm";
import "pnotify/dist/es/PNotifyCallbacks";
import CustomAlert from "./CustomAlert";

const CreateNewService = (props) => {
  // const [image, setImage] = useState();
  const [descriptionLengthCheck, setDescriptionLengthCheck] = useState(false);
  const [excerptLengthCheck, setExcerptLengthCheck] = useState(false);
  const [validFields, setValidFields] = useState(false);
  const [imageAsFile, setImageAsFile] = useState("");
  const [saving, setSaving] = useState(false);
  const [newObject, setNewObject] = useState({
    author: "",
    price: "",
    duration: "",
    excerpt: "",
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
  }, [newObject, imageAsFile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewObject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const eventHandlers = {
    addedfile: (file) => setImageAsFile(file),
    removedfile: () => setImageAsFile(""),
  };

  const saveService = () => {
    if (
      newObject.description.length < 100 ||
      newObject.description.length > 2000
    ) {
      setDescriptionLengthCheck(true);
    } else {
      setDescriptionLengthCheck(false);
    }
    if (newObject.excerpt.length < 50 || newObject.excerpt.length > 300) {
      setExcerptLengthCheck(true);
    } else {
      setExcerptLengthCheck(false);
    }

    if (
      newObject.description.length >= 100 &&
      newObject.description.length <= 2000 &&
      newObject.excerpt.length >= 50 &&
      newObject.excerpt.length <= 300
    ) {
      setSaving(true);
      Swal.fire({
        title: "Sei sicuro di voler pubblicare un nuovo servizio?",
        type: 'question',
        showConfirmButton: true,
        confirmButtonText: "Confermo"
      }, (isConfirm) => {
        console.warn("test: " + isConfirm)
      }).then(value => {
        if (value) {
          handleCreateCard()
        }
      });
    }
  }

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
            price: newObject.price * 100,
            duration: newObject.duration,
            description: newObject.description,
            excerpt: newObject.excerpt,
            serviceName: newObject.serviceName,
            maxSubscribers: newObject.maxSubscribers,
            version: "1",
          }),
        }).then((e) => {
          if (e.status !== 201) {
            Swal.fire({
              type: "error",
              title: "Oops...",
              text: "C'è stato un problema!",
            });
          } else {
            uploadServiceCover(e.headers.get("Location"));
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
      newObject.excerpt &&
      newObject.maxSubscribers &&
      imageAsFile &&
      imageAsFile.name
    ) {
      setValidFields(true);
    } else {
      setValidFields(false);
    }
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
                  .then(() => {
                    Swal.fire({
                      type: "success",
                      title: "Servizio creato!",
                    })
                    .then(() => {
                      window.location = "/dashboard/tipster/services";
                    });

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

  return (
    <Aux>
      {props.applicationState.user.stripeAccountStatus !== "verified" &&
      props.applicationState.user.stripeAccountId === null ? (
        <Row md={12}>
          <CustomAlert
            component="impostazioni"
            message="Devi connettere il tuo account a Stripe per creare servizi. Vai alle"
            link="/settings"
          />
        </Row>
      ) : (
        <Form>
          <Row>
            <Col md={12} sm={12} lg={12} xl={12}>
              <Card className={"p-15"}>
                <Row>
                  <Col md={12} style={{ marginBottom: "20px" }}>
                    <Form.Label>Immagine servizio</Form.Label>
                    <DropzoneComponent
                      config={config}
                      djsConfig={djsConfig}
                      eventHandlers={eventHandlers}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={12} sm={12} lg={3} xl={3}>
                    <Form.Group controlId="infirizzo">
                      <Form.Label>
                        Titolo <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        disabled={saving}
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
                        min="1"
                        disabled={saving}
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
                        disabled={saving}
                        placeholder="Durata iscrizione"
                        onChange={handleChange}
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
                        disabled={saving}
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
                        Descrizione corta <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        style={
                          excerptLengthCheck
                            ? {
                                borderColor: "red",
                                minHeight: "100px",
                                maxHeight: 100,
                              }
                            : {
                                borderColor: "black",
                                minHeight: "100px",
                                maxHeight: 100,
                              }
                        }
                        as="textarea"
                        placeholder="Descrizione corta"
                        name="excerpt"
                        disabled={saving}
                        maxLength="300"
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {excerptLengthCheck ? (
                        <p className="text-danger">Minimo 50 caratteri</p>
                      ) : (
                        <span></span>
                      )}
                      <span className="text-muted" style={{ fontSize: "11px" }}>
                        {newObject.excerpt.length} / 300
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="infirizzo">
                      <Form.Label>
                        Descrizione <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        style={
                          descriptionLengthCheck
                            ? { borderColor: "red", minHeight: "200px" }
                            : { borderColor: "black", minHeight: "200px" }
                        }
                        as="textarea"
                        placeholder="Descrizione"
                        name="description"
                        maxLength="2000"
                        onChange={handleChange}
                        disabled={saving}
                      />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {descriptionLengthCheck ? (
                          <p className="text-danger">Minimo 100 caratteri</p>
                        ) : (
                          <span></span>
                        )}
                        <span
                          className="text-muted"
                          style={{ fontSize: "11px" }}
                        >
                          {newObject.description.length} / 2000
                        </span>
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col></Col>
                </Row>
              </Card>

              <Button
                onClick={saveService}
                className="float-right"
                disabled={!validFields || saving}
              >
                Pubblica servizio
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Aux>
  );
};

const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewService);
