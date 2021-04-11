import React, { useState } from "react";
import { Row, Col, Form, Button, Card } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
//import Card from "../../App/components/MainCard";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import TokenManager from "../../App/auth/TokenManager";
import FileUpload from "../../App/components/FileUpload";
import BASE_CONFIG from "../../store/config";
import { DropzoneComponent } from "react-dropzone-component";
import firebase from "firebase/app";
import { useEffect } from "react";
import PNotify from "pnotify/dist/es/PNotify";
import "pnotify/dist/es/PNotifyButtons";
import "pnotify/dist/es/PNotifyConfirm";
import "pnotify/dist/es/PNotifyCallbacks";
import { Tab } from "react-bootstrap";
import { Tabs } from "react-bootstrap";

const Settings = (props) => {
  const [user, setUser] = useState(props.applicationState.user);
  const [nameChanged, setNameChanged] = useState(false);

  const SHOW_FULL_PROFILE = user.roleValue > 4;

  var sortedAddresses = props.applicationState.user._embedded && props.applicationState.user._embedded.addresses
    ? props.applicationState.user._embedded.addresses.sort(
        (a, b) =>
          new Date(b.insertedOn).getTime() - new Date(a.insertedOn).getTime()
      )
    : [];
  const [address, setAddress] = useState(
    sortedAddresses.length > 0 ? sortedAddresses[0] : {}
  );
  const [addressChanged, setAddressChanged] = useState(false);

  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [credentialsChanged, setCredentialsChanged] = useState(false);
  const [emailPasswordError, setEmailPasswordError] = useState("");

  const [bankDataChanged, setBankDataChanged] = useState(false);
  const [bank, setBank] = useState({});

  const [documentErrors, setDocumentErrors] = useState("");
  const [documentoIdentitaFronte, setDocumentoIdentita] = useState("");
  const [documentoIdentaRetro, setDocumentoIdentitaRetro] = useState("");
  const [bolletta, setBolletta] = useState("");
  const [documentNumber, setDocumentNumber] = useState(
    user.idDocumentNumber || ""
  );
  const [documentsChanged, setDocumentsChanged] = useState(false);
  const [activating, setActivating] = useState(false);
  
  useEffect(() => {
    TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        fetch(props.applicationState.user._links.bankAccounts.href, {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
        })
          .then((e) => e.json())
          .then((banks) => {
            if (!banks._embedded.bankAccounts) {
              return;
            }

            var sortedBanks = banks._embedded.bankAccounts.sort(
              (a, b) =>
                new Date(b.insertedOn).getTime() -
                new Date(a.insertedOn).getTime()
            );
            setBank(sortedBanks.length > 0 ? sortedBanks[0] : {});
          });

        fetch(props.applicationState.user._links.self.href, {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
        })
          .then((e) => e.json())
          .then(localUser => setUser({...user, ...localUser}))
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reloadUser = () => {
    TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        fetch(props.applicationState.user._links.self.href, {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
        })
          .then((e) => e.json())
          .then((localUser) => {
            props.actions.userLogin({
              ...user,
              ...localUser,
            });

            setUser({
              ...user,
              ...localUser,
            })
          });
      });
  };

  const saveProfile = (fields) => {
    TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        fetch(user._links.self.href, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
          body: JSON.stringify(fields),
        })
          .then((e) => e.json())
          .then(() => {
            props.actions.userLogin({
              ...user,
              ...fields,
            });
            dynamicNotifyWithAlert("I tuoi dati sono stati aggiornati con successo!")
          })
          .catch((error) => alert(error));
      });
  };

  const saveAddress = () => {
    TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        fetch(BASE_CONFIG.API_URL + "/addresses", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
          body: JSON.stringify({
            ...address,
            owner: user._links.self.href,
            addressType: 1,
          }),
        })
          .then((e) => e.json())
          .then((_) => {
            TokenManager.getInstance()
              .getToken()
              .then((jwt) => {
                return fetch(user._links.self.href, {
                  headers: {
                    "Content-Type": "application/json",
                    "X-Auth": jwt,
                  },
                })
                  .then((userBody) => userBody.json())
                  .then((updatedLocalUser) => {
                    props.actions.userLogin({
                      ...user,
                      ...updatedLocalUser,
                    });
                    dynamicNotifyWithAlert("Il tuo indirizzo è stato aggiornato!")
                  });
              });
          })
          .catch((error) => alert(error));
      });
  };

  const reauthenticate = () => {
    var fbuser = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(
      fbuser.email,
      oldPassword
    );
    return fbuser.reauthenticateWithCredential(cred);
  };

  const changePassword = () => {
    reauthenticate(oldPassword)
      .then(() => {
        return firebase
          .auth()
          .currentUser.updatePassword(newPassword)
          .then(() => {
            setEmailPasswordError("");
          });
      })
      .then(_ => dynamicNotifyWithAlert("Password aggiornata!"))
      .catch(() => {
        setEmailPasswordError("La password attuale inserita non è corretta.");
      });
  };

  const changeEmail = () => {
    reauthenticate(oldPassword)
      .then(() => {
        return firebase
          .auth()
          .currentUser.updateEmail(email)
          .then(() => {
            saveProfile({ email });
            setEmailPasswordError("");
          });
      })
      .then(_ => dynamicNotifyWithAlert("I tuoi dati di accesso sono stati aggiornati."))
      .catch(() => {
        setEmailPasswordError("La password attuale inserita non è corretta.");
      });
  };

  const updateEmailAndPassword = () => {
    if (!oldPassword || oldPassword === "") {
      setEmailPasswordError(
        "Sia per aggiornare la mail che cambiare la password, è necessario inserire la password attuale nella casella Password attuale"
      );
    }

    if (newPassword && repeatPassword && newPassword === repeatPassword) {
      changePassword();
    }

    changeEmail();
  };

  const saveBank = () => {
    TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        fetch(BASE_CONFIG.API_URL + "/bankAccounts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
          body: JSON.stringify({
            ...bank,
            owner: props.applicationState.user._links.self.href,
          }),
        })
          .then((e) => e.json())
          .then((_) => {
            // return TokenManager.getInstance()
            //   .getToken()
            //   .then((jwt) => {
            //     return fetch(
            //       BASE_CONFIG.API_URL + "/pps/accounts/banks/" + user.userCode,
            //       {
            //         method: "POST",
            //         headers: {
            //           "Content-Type": "application/json",
            //           "X-Auth": jwt,
            //         },
            //       }
            //     );
            //   });
            dynamicNotifyWithAlert("Bank account updated!")
          })
          .catch((error) => console.error(error));
      });
  };

  var config = {
    showFiletypeIcon: false,
    postUrl: "/",
  };

  var djsConfig = {
    addRemoveLinks: true,
    acceptedFiles: "image/jpeg,image/png,application/pdf",
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

  function dynamicNotifyWithAlert(message) {
    const notice = PNotify.info({
      text: message,
      icon: "fa fa-check",
      hide: true,
      shadow: true,
      width: "200px",
      modules: {
        Buttons: {
          closer: true,
          sticker: false,
        },
      },
      styling: 'brighttheme',
      mode: 'light',
    });

    return notice;
  }

  const uploadDocuments = (e) => {
    e.preventDefault();

    if (documentNumber === "") {
      setDocumentErrors(
        "È necessario inserire anche il numero del documento d'identità."
      );
    }

    if (
      documentoIdentaRetro === "" ||
      documentoIdentitaFronte === "" ||
      bolletta === ""
    ) {
      setDocumentErrors("Tutti i documenti sono obbligatori!");
    }

    setDocumentErrors("");

    saveProfile({
      idDocumentNumber: documentNumber,
    });

    uploadDocument("front", documentoIdentitaFronte);
    uploadDocument("back", documentoIdentaRetro);
    uploadDocument("bill", bolletta);
  };

  const uploadDocument = (type, file) => {
    if (!file || !file.name) {
      setDocumentErrors(`Documento "${type}" non fornito.`);
      return;
    }

    var token = firebase.auth().currentUser.uid;
    const uploadTask = firebase
      .storage()
      .ref(`/${type}/${token}/user${type}_` + file.name)
      .put(file);

    var notice = dynamicProgressButtonPNotify();
    const interval = setInterval(function () {
      let percent =
        (100.0 * uploadTask.snapshot.bytesTransferred) / uploadTask.snapshot.totalBytes;
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
        firebase
          .storage()
          .ref(`/${type}/${token}`)
          .child(`user${type}_` + file.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            return fireBaseUrl;
          })
          .then((imageUrl) => {
            TokenManager.getInstance()
              .getToken()
              .then((jwt) => {
                fetch(BASE_CONFIG.API_URL + "/userMedias/", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "X-Auth": jwt,
                  },
                  body: JSON.stringify({
                    url: imageUrl,
                    owner: props.applicationState.user._links.self.href,
                    mediaType: type,
                  }),
                })
                  .then((_) => {})
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

  const activatePayments = () => {
    setActivating(true);
    TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        return fetch(`${BASE_CONFIG.API_URL}/pps/accounts/${user.userCode}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
        })
          .then((result) => result.json())
          .then((result) => {
            setActivating(false);
            reloadUser();
          })
          .catch((error) => {
            setActivating(false);
            reloadUser();
          });
      });
  };

  return (
    <Aux>
      <Row>
        <Col sm={12} className="tab-user-card">
          <Tabs
            variant="pills"
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
          >
            <Tab eventKey="profile" title="Impostazioni principali">
              <Row>
                <Col>
                  <Card isOption={true}>
                    <Card.Title className={"m-2 ml-4 mt-4"} as={"h4"}>Immagine profilo</Card.Title>
                    <Card.Body>
                      <Row>
                        <Col md={12} sm={12}>
                          <FileUpload type={"avatar"} user={user} callback={reloadUser} />
                        </Col>
                      </Row>
                    </Card.Body>
                    <Card.Title className={"m-2 ml-4"} as={"h4"}>Dati personali <span className={"text-danger"}>*</span></Card.Title>
                    <Card.Body>
                      <Row>
                        <Col md={12} sm={12}>
                          <Form>
                            <Form.Group controlId="formBasicEmail">
                              <Form.Label>Nome</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Nome"
                                value={user.name}
                                onChange={({ target }) => {
                                  setUser({ ...user, name: target.value });
                                  setNameChanged(true);
                                }}
                              />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                              <Form.Label>Cognome</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Cognome"
                                value={user.lastName}
                                onChange={({ target }) => {
                                  setUser({ ...user, lastName: target.value });
                                  setNameChanged(true);
                                }}
                              />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                              <Form.Label>Data di nascita</Form.Label>
                              <Form.Control
                                type="date"
                                placeholder="Data di nascita"
                                value={user.dob}
                                onChange={({ target }) => {
                                  setUser({ ...user, dob: target.value });
                                  setNameChanged(true);
                                }}
                              />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                              <Form.Label>Telefono</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="+39 339 481 0000"
                                value={user.phoneNumber}
                                onChange={({ target }) => {
                                  setUser({ ...user, phoneNumber: target.value });
                                  setNameChanged(true);
                                }}
                              />
                            </Form.Group>

                            <Button
                              variant="primary"
                              onClick={() =>
                                saveProfile({
                                  name: user.name,
                                  lastName: user.lastName,
                                  phoneNumber: user.phoneNumber,
                                })
                              }
                              className={"float-right"}
                              disabled={!nameChanged}
                            >
                              Salva
                            </Button>
                          </Form>
                        </Col>
                      </Row>
                    </Card.Body>
                    <Card.Title className={"m-2 ml-4"} as={"h4"}>Indirizzo di fatturazione <span className={"text-danger"}>*</span></Card.Title>
                    <Card.Body>
                      <Row>
                        <Col md={12} sm={12}>
                          <Form>
                            <Form.Group controlId="infirizzo">
                              <Form.Label>Indirizzo</Form.Label>
                              <Form.Control
                                type="text"
                                name="street"
                                value={address.street}
                                placeholder="Nome via e numero civico"
                                onChange={({ target }) => {
                                  setAddress({
                                    ...address,
                                    street: target.value,
                                  });
                                  setAddressChanged(true);
                                }}
                              />
                            </Form.Group>
                            <Form.Group controlId="cap">
                              <Form.Label>CAP</Form.Label>
                              <Form.Control
                                type="number"
                                name="zipcode"
                                placeholder="00000"
                                value={address.zipCode}
                                onChange={({ target }) => {
                                  setAddress({
                                    ...address,
                                    zipCode: target.value,
                                  });
                                  setAddressChanged(true);
                                }}
                              />
                            </Form.Group>
                            <Form.Group controlId="citta">
                              <Form.Label>Città</Form.Label>
                              <Form.Control
                                type="text"
                                name="city"
                                placeholder="Città"
                                value={address.city}
                                onChange={({ target }) => {
                                  setAddress({
                                    ...address,
                                    city: target.value,
                                  });
                                  setAddressChanged(true);
                                }}
                              />
                            </Form.Group>
                            <Form.Group controlId="Cap">
                              <Form.Label>Provincia</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Provincia"
                                name="state"
                                value={address.state}
                                onChange={({ target }) => {
                                  setAddress({
                                    ...address,
                                    state: target.value,
                                  });
                                  setAddressChanged(true);
                                }}
                              />
                            </Form.Group>

                            <Button
                              variant="primary"
                              onClick={saveAddress}
                              disabled={!addressChanged}
                              className={"float-right"}
                            >
                              Salva
                            </Button>
                          </Form>
                        </Col>
                      </Row>
                    </Card.Body>
                    <Card.Title className={"m-2 ml-4"} as={"h4"}>
                      Dati di accesso
                    </Card.Title>
                    <Card.Body>
                      {emailPasswordError !== "" && (
                        <div role="alert" class="fade alert alert-danger show">
                          {emailPasswordError}
                        </div>
                      )}
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Indirizzo Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="emial@dominio.it"
                          value={email}
                          onChange={(event) => {
                            setEmail(event.target.value);
                            setCredentialsChanged(true);
                          }}
                        />
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password attuale</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password attuale"
                          value={oldPassword}
                          onChange={(event) => {
                            setOldPassword(event.target.value);
                            setCredentialsChanged(true);
                          }}
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Nuova password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={newPassword}
                          onChange={(event) => {
                            setNewPassword(event.target.value);
                            setCredentialsChanged(true);
                          }}
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Conferma nuova password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={repeatPassword}
                          onChange={(event) => {
                            setRepeatPassword(event.target.value);
                            setCredentialsChanged(true);
                          }}
                        />
                      </Form.Group>

                      <Button
                        variant="primary"
                        disabled={!credentialsChanged}
                        onClick={updateEmailAndPassword}
                        className="float-right"
                      >
                        Salva
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Tab>
            {SHOW_FULL_PROFILE && <Tab eventKey="tipster" title="Diventa tipster">
              <Row>
                <Col md={12} lg={12} sm={12}>
                  <Card isOption={true}>
                    <Card.Title className={"m-2 ml-4 mt-4"} as={"h4"}>Dati bancari <span className={"text-danger"}>*</span></Card.Title>
                    <Card.Body>
                      <Row>
                        <Col md={12} sm={12}>
                          <Form>
                            <Form.Group controlId="nomeBanca">
                              <Form.Label>Nome banca</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Revolut"
                                value={bank.bankName}
                                onChange={(event) => {
                                  setBank({ ...bank, bankName: event.target.value });
                                  setBankDataChanged(true);
                                }}
                              />
                            </Form.Group>

                            <Form.Group controlId="indirizzoBanca">
                              <Form.Label>Indirizzo della Banca</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Via, numero civico, CAP, Città, sigla Provincia"
                                value={bank.bankAddress}
                                onChange={(event) => {
                                  setBank({ ...bank, bankAddress: event.target.value });
                                  setBankDataChanged(true);
                                }}
                              />
                            </Form.Group>
                            <Form.Group controlId="IBAN">
                              <Form.Label>IBAN</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="IBAN del conto"
                                value={bank.iban}
                                onChange={(event) => {
                                  setBank({ ...bank, iban: event.target.value });
                                  setBankDataChanged(true);
                                }}
                              />
                            </Form.Group>
                            <Form.Group controlId="abiCab">
                              <Form.Label>ABI / CAB</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="011683"
                                value={bank.abiCab}
                                onChange={(event) => {
                                  setBank({ ...bank, abiCab: event.target.value });
                                  setBankDataChanged(true);
                                }}
                              />
                            </Form.Group>
                            <Form.Group controlId="swift">
                              <Form.Label>SWIFT</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="GIBAATWWXXX"
                                value={bank.swift}
                                onChange={(event) => {
                                  setBank({ ...bank, swift: event.target.value });
                                  setBankDataChanged(true);
                                }}
                              />
                            </Form.Group>

                            <Button
                              variant="primary"
                              disabled={!bankDataChanged}
                              onClick={saveBank}
                              className={"float-right"}
                            >
                              Salva
                            </Button>
                          </Form>
                        </Col>
                      </Row>
                    </Card.Body>
                    <Card.Title className={"m-2 ml-4"} as={"h4"}>
                      Documenti <span className={"text-danger"}>*</span>
                    </Card.Title>
                    <Card.Body>
                      <Row>
                        <Col md={12} sm={12}>
                          <Form>
                            {documentErrors !== "" && (
                              <div role="alert" class="fade alert alert-danger show">
                                {documentErrors}
                              </div>
                            )}
                            <Form.Group controlId="swift">
                              <Form.Label>Numero documento d'identità</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="AX 074 JJ"
                                value={documentNumber}
                                onChange={(event) => {
                                  setDocumentNumber(event.target.value);
                                  setDocumentsChanged(true);
                                }}
                              />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                              <Form.Label>Documento d'identità (Fronte)</Form.Label>
                              <DropzoneComponent
                                config={config}
                                eventHandlers={{
                                  addedfile: (file) => {
                                    setDocumentoIdentita(file);
                                    setDocumentsChanged(true);
                                  },
                                }}
                                djsConfig={djsConfig}
                              />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                              <Form.Label>Documento d'identità (Retro)</Form.Label>
                              <DropzoneComponent
                                config={config}
                                eventHandlers={{
                                  addedfile: (file) => {
                                    setDocumentoIdentitaRetro(file);
                                    setDocumentsChanged(true);
                                  },
                                }}
                                djsConfig={djsConfig}
                              />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                              <Form.Label>Bolletta</Form.Label>
                              <DropzoneComponent
                                config={config}
                                eventHandlers={{
                                  addedfile: (file) => {
                                    setBolletta(file);
                                    setDocumentsChanged(true);
                                  },
                                }}
                                djsConfig={djsConfig}
                              />
                            </Form.Group>
                            <Button
                              variant={"primary"}
                              disabled={!documentsChanged}
                              onClick={uploadDocuments}
                              className={"float-right"}
                            >
                              Carica i documenti
                            </Button>
                          </Form>
                        </Col>
                      </Row>
                    </Card.Body>
                    <Card.Title className={"m-2 ml-4"} as={"h4"}>Integrazione con Stripe (Pagamenti)</Card.Title>
                    <Card.Body>
                      <Row>
                        <Col md={12} sm={12}>
                          <Form>
                            <Form.Group controlId="accountState">
                              {!user.stripeAccountStatus && (
                                <Form.Label>Conto non ancora attivato</Form.Label>
                              )}
                              {user.stripeAccountStatus && (
                                <Form.Label style={{textTransform: "uppercase"}} className={user.stripeAccountStatus !== 'verified' ? 'badge badge-light-danger' : 'badge badge-light-success' } >
                                  {user.stripeAccountStatus}
                                </Form.Label>
                              )}
                            </Form.Group>

                            {user.stripeAccountStatus !== 'verified' && (
                              <Button variant="primary" onClick={activatePayments}>
                                {activating ? (
                                  <div class="spinner-border spinner-border-sm mr-1" role="status"><span class="sr-only">In caricamento...</span></div>
                                ) : null }{" "}
                                Chiedi l'attivazione del conto
                              </Button>
                            )}
                            {user.stripeAccountStatus !== 'verified' && <br />}
                            {user.stripeAccountStatus !== 'verified' && <span class="text-muted">Registrando l'account per i pagamenti implicitamente accetti le condizioni di servizio di <a href="https://stripe.com/connect-account/legal/full" target="_blank" rel="noopener noreferrer">Stripe Connected Account</a>.</span>}
                          </Form>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Tab>}
          </Tabs>
        </Col>
      </Row>
    </Aux>
  );
};

const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
