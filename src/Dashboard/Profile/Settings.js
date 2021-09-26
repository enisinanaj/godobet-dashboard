import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Card, Tab, Tabs } from "react-bootstrap";
import Aux from "../../hoc/_Aux";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { bindActionCreators } from "redux";
import TokenManager from "../../App/auth/TokenManager";
import FileUpload from "../../App/components/FileUpload";
import BASE_CONFIG from "../../store/config";
import PNotify from "pnotify/dist/es/PNotify";
import "pnotify/dist/es/PNotifyButtons";
import "pnotify/dist/es/PNotifyConfirm";
import "pnotify/dist/es/PNotifyCallbacks";
import DatePicker, { registerLocale } from "react-datepicker";
import Swal from "sweetalert2";
import moment from "moment";
import { it } from "date-fns/esm/locale";
import CustomAlert from "../TipsterServices/CustomAlert";
import UploadDocuments from "./UploadDocuments";
import BankForm from "./BankForm";
import Credentials from "./Credentials";
import Autocomplete from "react-google-autocomplete";

registerLocale("it", it);

const Settings = (props) => {
  const [user, setUser] = useState({
    ...props.applicationState.user,
    dob: new Date(props.applicationState.user.dob),
  });
  const [nameChanged, setNameChanged] = useState(false);
  const [currentTab, setCurrentTab] = useState("profile");
  const [documentsNotUploaded, setDocumentsNotUploaded] = useState(true);
  const [documentNumber, setDocumentNumber] = useState(
    user.idDocumentNumber || ""
  );
  const [usernameError, setUsernameError] = useState(false);

  const SHOW_FULL_PROFILE = user.roleValue > 4;

  var sortedAddresses =
    props.applicationState.user._embedded &&
    props.applicationState.user._embedded.addresses
      ? props.applicationState.user._embedded.addresses.sort(
          (a, b) =>
            new Date(b.insertedOn).getTime() - new Date(a.insertedOn).getTime()
        )
      : [];
  const [address, setAddress] = useState(
    sortedAddresses.length > 0 ? sortedAddresses[0] : {}
  );
  const [addressChanged, setAddressChanged] = useState(false);
  const [bank, setBank] = useState({});
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
          .then((localUser) => {
            setUser({ ...user, ...localUser, dob: new Date(localUser.dob) });
          });
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
              dob: new Date(localUser.dob),
            });
          });
      });
  };

  const saveProfile = (fields) => {
    let body = { ...fields };
    if (fields.dob) {
      body = {
        ...fields,
        dob: moment(fields.dob).format("YYYY-MM-DDTHH:mm:ss.SSS"),
      };
    }

    return TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        return fetch(user._links.self.href, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
          body: JSON.stringify(body),
        })
          .then((e) => e.json())
          .then(() => {
            props.actions.userLogin({
              ...user,
              ...fields,
            });
            dynamicNotifyWithAlert(
              "I tuoi dati sono stati aggiornati con successo!"
            );
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
                    dynamicNotifyWithAlert(
                      "Il tuo indirizzo è stato aggiornato!"
                    );
                  });
              });
          })
          .catch((error) => alert(error));
      });
  };

  const saveAccount = () => {
    saveProfile({
      name: user.name,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      username: user.username,
      dob: user.dob,
      ssn: user.ssn,
    });

    if (addressChanged) {
      saveAddress();
    }
  };

  const saveBank = () => {
    return TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        return fetch(BASE_CONFIG.API_URL + "/bankAccounts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
          body: JSON.stringify({
            ...bank,
            owner: props.applicationState.user._links.self.href,
          }),
        });
      })
      .then((e) => e.json())
      .then((_) => {
        dynamicNotifyWithAlert("Bank account updated!");
      })
      .catch((error) => console.error(error));
  };

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
      styling: "brighttheme",
      mode: "light",
      type: "success",
    });

    notice.update({ type: "success" });
    return notice;
  }

  const activatePayments = (e) => {
    setActivating(true);
    saveBank(e);
    saveProfile({
      idDocumentNumber: documentNumber,
    })
      .then((e) => {
        return TokenManager.getInstance().getToken();
      })
      .then((jwt) => {
        return fetch(`${BASE_CONFIG.API_URL}/pps/accounts/${user.userCode}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
        });
      })
      .then((result) => result.json())
      .then(() => {
        setActivating(false);
        Swal.fire({
          title: "Richiesta inviata con successo",
          text:
            "La verifica dei dati e dei documenti potrà richiedere qualche ora.",
          type: "success",
        });
        reloadUser();
      })
      .catch(() => {
        setActivating(false);
        reloadUser();
      });
  };

  const handleAutocomplete = (address_components) => {
    let street;
    let num;
    let zipCode;
    let state;
    let city;
    if(address_components) {
      address_components.forEach((component) => {
        if (component.types.includes("street_number")) {
          num = component.long_name;
        } else if (component.types.includes("route")) {
          console.log(component.long_name);
          street = component.long_name + " " + (num ? num : "");
        } else if (component.types.includes("postal_code")) {
          zipCode = component.long_name
        } else if (component.types.includes("administrative_area_level_2")) {
          state = component.long_name;
        } else if (
          component.types.includes("administrative_area_level_3") ||
          component.types.includes("locality")
        ) {
          city = component.long_name;
        }
      });
    }
    
    setAddress({
      ...address,
      street: street,
      zipCode: zipCode,
      state: state,
      city: city,
    });
  };

  return (
    <Aux>
      <Row>
        <Col sm={12} className="tab-user-card">
          <Tabs
            variant="pills"
            activeKey={currentTab}
            id="uncontrolled-tab-example"
            onSelect={(k) => setCurrentTab(k)}
          >
            <Tab eventKey="profile" title="Generali">
              <Row>
                <Col>
                  <Card>
                    <Card.Title className={"m-2 ml-4 mt-4"} as={"h4"}>
                      Immagine profilo
                    </Card.Title>
                    <Card.Body>
                      <Row>
                        <Col md={12} sm={12}>
                          <FileUpload
                            type={"avatar"}
                            user={user}
                            callback={reloadUser}
                          />
                        </Col>
                        <Col md={12} sm={12}>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nome utente</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Nome utente"
                              value={user.username}
                              onChange={({ target }) => {
                                setUser({ ...user, username: target.value });
                                setNameChanged(true);
                              }}
                            />
                            {usernameError && <span className={"text-danger"}>Il nome utente selezionato non è disponibile.</span>}
                          </Form.Group>
                        </Col>
                      </Row>
                    </Card.Body>
                    <Card.Title className={"m-2 ml-4"} as={"h4"}>
                      Dati personali <span className={"text-danger"}>*</span>
                    </Card.Title>
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
                              <div className={"row"}>
                                <DatePicker
                                  locale={"it"}
                                  dateFormat={"dd/MM/yyyy"}
                                  placeholderText="Data di nascita"
                                  selected={user.dob}
                                  onChange={(e) => {
                                    setUser({ ...user, dob: e });
                                    setNameChanged(true);
                                  }}
                                  className={"form-control"}
                                  wrapperClassName={
                                    "col-md-12 col-lg-12 col-sm-12"
                                  }
                                  disabled={props.saving}
                                />
                              </div>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                              <Form.Label>Codice fiscale</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="SNNNEI90..."
                                value={user.ssn}
                                onChange={({ target }) => {
                                  setUser({ ...user, ssn: target.value });
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
                                  setUser({
                                    ...user,
                                    phoneNumber: target.value,
                                  });
                                  setNameChanged(true);
                                }}
                              />
                            </Form.Group>
                          </Form>
                        </Col>
                      </Row>
                    </Card.Body>
                    <Card.Title className={"m-2 ml-4"} as={"h4"}>
                      Indirizzo di fatturazione{" "}
                      <span className={"text-danger"}>*</span>
                    </Card.Title>
                    <Card.Body>
                      <Autocomplete
                        defaultValue={`${address.street}, ${address.city}, ${address.state}`}
                        options={{
                          componentRestrictions: { country: "it" },
                        }}
                        style={{
                          width: "100%",
                          border: "none",
                          borderBottom: "1px solid gray",
                          marginBottom: "10px",
                          padding: "5px 0 5px 0",
                        }}
                        apiKey="AIzaSyBJL42CSkxxiKhtilLf-XeYQYrXkRbkOGg"
                        onPlaceSelected={(place) => {
                          console.log(place);
                          setAddressChanged(true);
                          handleAutocomplete(place.address_components);
                        }}
                        types="address"
                      />
                    </Card.Body>
                    <Card.Footer>
                      <Button
                        variant="primary"
                        className={"float-right"}
                        disabled={!nameChanged && !addressChanged}
                        onClick={saveAccount}
                      >
                        Salva
                      </Button>
                    </Card.Footer>
                  </Card>
                  <Credentials user={user} onChange={saveProfile} />
                </Col>
              </Row>
            </Tab>
            {SHOW_FULL_PROFILE && (
              <Tab eventKey="tipster" title="Tipster">
                <Row>
                  <Col md={12} lg={12} sm={12}>
                    <Card>
                      <Card.Title className={"m-2 ml-4 mt-4"} as={"h4"}>
                        Dati bancari <span className={"text-danger"}>*</span>
                      </Card.Title>
                      <Card.Body>
                        <Row>
                          <BankForm
                            user={user}
                            bank={bank}
                            onChange={setBank}
                          />
                        </Row>
                      </Card.Body>
                      <Card.Title className={"m-2 ml-4"} as={"h4"}>
                        Documenti <span className={"text-danger"}>*</span>
                      </Card.Title>
                      <Card.Body>
                        <Form.Group controlId="swift">
                          <Form.Label>Numero documento d'identità</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="AX 074 JJ"
                            disabled={user.stripeAccountStatus === "verified"}
                            value={documentNumber}
                            onChange={(event) => {
                              setDocumentNumber(event.target.value);
                            }}
                          />
                        </Form.Group>
                        <UploadDocuments
                          user={user}
                          onDocumentsUploaded={(documentsDone) =>
                            setDocumentsNotUploaded(!documentsDone)
                          }
                        />
                      </Card.Body>
                      <Card.Title className={"m-2 ml-4"} as={"h4"}>
                        Integrazione con Stripe (Pagamenti)
                      </Card.Title>
                      <Card.Body>
                        <Row>
                          <Col md={12} sm={12}>
                            <Form>
                              <Form.Group controlId="accountState">
                                {!user.stripeAccountStatus &&
                                  !user.stripeAccountId && (
                                    <blockquote>
                                      Conto non ancora attivato
                                    </blockquote>
                                  )}
                                {user.stripeAccountStatus &&
                                  user.stripeAccountId && (
                                    <Form.Label
                                      style={{ textTransform: "uppercase" }}
                                      className={
                                        user.stripeAccountStatus !== "verified"
                                          ? "badge badge-light-danger"
                                          : "badge badge-light-success"
                                      }
                                    >
                                      {user.stripeAccountStatus}
                                    </Form.Label>
                                  )}
                              </Form.Group>

                              {user.stripeAccountStatus !== "verified" &&
                                !user.stripeAccountId && (
                                  <Button
                                    variant="primary"
                                    onClick={activatePayments}
                                    disabled={documentsNotUploaded}
                                  >
                                    {activating ? (
                                      <div
                                        class="spinner-border spinner-border-sm mr-1"
                                        role="status"
                                      >
                                        <span class="sr-only">
                                          In caricamento...
                                        </span>
                                      </div>
                                    ) : null}{" "}
                                    Chiedi l'attivazione del conto
                                  </Button>
                                )}
                              {user.stripeAccountStatus !== "verified" &&
                                !user.stripeAccountId && <br />}
                              {user.stripeAccountStatus !== "verified" &&
                                !user.stripeAccountId && <br />}
                              {user.stripeAccountStatus !== "verified" &&
                                !user.stripeAccountId && (
                                  <small class="text-muted">
                                    Registrando l'account per i pagamenti
                                    implicitamente accetti le <a href="https://godobet.it/terms-of-service">condizioni di
                                    servizio</a> di Godobet e le condizioni di servizio {" "}
                                    <a
                                      href="https://stripe.com/connect-account/legal/full"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      Stripe Connected Account
                                    </a>
                                    .
                                  </small>
                                )}
                            </Form>
                          </Col>
                          {user.stripeAccountStatus !== "verified" &&
                            user.stripeAccountId && (
                              <CustomAlert
                                message={
                                  "Ritorna più tardi in questa pagina per aggiornamenti sullo stato del tuo conto."
                                }
                                variant={"info"}
                              />
                            )}
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Tab>
            )}
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
