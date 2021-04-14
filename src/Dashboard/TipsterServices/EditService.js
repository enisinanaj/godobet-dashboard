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

import CoverImage from "../../assets/images/godobet-placeholder.jpg";

const EditService = (props) => {
  const [descriptionLengthCheck, setDescriptionLengthCheck] = useState(false);
  const [excerptLengthCheck, setExcerptLengthCheck] = useState(false);
  const [currentObject, setCurrentObject] = useState();
  const [saving, setSaving] = useState(false);
  const [imageAsFile, setImageAsFile] = useState("");

  let id = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );

  window.onbeforeunload = function (e) {
    return "Do you want to exit this page?";
  };

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
            setCurrentObject({ ...object, price: object.price / 100 });
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

  const handleUpdate = (e) => {
    e.preventDefault();
    if (
      currentObject.description.length < 100 ||
      currentObject.description.length > 2000
    ) {
      setDescriptionLengthCheck(true);
    } else {
      setDescriptionLengthCheck(false);
    }
    if (
      currentObject.excerpt.length < 50 ||
      currentObject.excerpt.length > 300
    ) {
      setExcerptLengthCheck(true);
    } else {
      setExcerptLengthCheck(false);
    }

    if (
      currentObject.description.length >= 100 &&
      currentObject.description.length <= 2000 &&
      currentObject.excerpt.length >= 50 &&
      currentObject.excerpt.length <= 300
    ) {
      setSaving(true);
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
              price: currentObject.price * 100,
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
              }).then(() => {
                window.onbeforeunload = null;
                uploadServiceCover(e.url);
                setTimeout(() => {
                  window.location = "/dashboard/tipster/pools";
                }, 2000);
              });
            }
          });
        });
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

  const getLatestImage = (media) => {
    if (
      !media._embedded ||
      media.length === 0 ||
      !media._embedded.serviceMedia
    ) {
      return CoverImage;
    }

    return media._embedded.serviceMedia.sort((a, b) => b.id - a.id)[0].url;
  };

  return (
    <Aux>
      {currentObject ? (
        <Form onSubmit={handleUpdate}>
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
                <Row style={{ alignItems: "center" }}>
                  <Col style={{ textAlign: "center" }} md={2}>
                    <img
                      src={getLatestImage(currentObject)}
                      alt={"Immagine servizio"}
                      height="150px"
                      width="150px"
                      style={{
                        objectFit: "cover",
                        border: "1px solid lightgray",
                      }}
                    />
                  </Col>
                  <Col>
                    <Form.Group controlId="infirizzo">
                      <Form.Label>
                        Titolo <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Titolo"
                        value={currentObject.serviceName}
                        onChange={handleChange}
                        disabled={saving}
                        name="serviceName"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="citta">
                      <Form.Label>
                        Prezzo (€) <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        name="price"
                        value={currentObject.price}
                        disabled={saving}
                        onChange={handleChange}
                        placeholder="Prezzo"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>
                        Durata iscrizione <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        min="0"
                        placeholder="Durata iscrizione"
                        onChange={handleChange}
                        disabled={saving}
                        value={currentObject.duration}
                        name="duration"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
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
                        value={currentObject.maxSubscribers}
                        onChange={handleChange}
                        name="maxSubscribers"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="pt-5">
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
                        value={currentObject.excerpt}
                        name="excerpt"
                        disabled={saving}
                        maxLength="300"
                        onChange={handleChange}
                        required
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
                        {currentObject.excerpt.length} / 300
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row className="pt-5">
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
                        value={currentObject.description}
                        maxLength="2000"
                        disabled={saving}
                        name="description"
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
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
                      <span className="text-muted" style={{ fontSize: "11px" }}>
                        {currentObject.description.length} / 2000
                      </span>
                    </div>
                  </Col>
                </Row>
              </Card>

              <Button type="submit" className="float-right" disabled={saving}>
                Salva servizio
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
  connect(mapStateToProps, mapDispatchToProps)(EditService)
);
