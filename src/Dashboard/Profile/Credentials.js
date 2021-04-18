import React, { useState } from 'react';
import firebase from "firebase/app";
import { Button, Card, Form } from 'react-bootstrap';
import PNotify from "pnotify/dist/es/PNotify";
import "pnotify/dist/es/PNotifyButtons";
import "pnotify/dist/es/PNotifyConfirm";
import "pnotify/dist/es/PNotifyCallbacks";

// interface CredentialsProps {
//     onEmailChanged(v: string): void, 
//     onOldPasswordChanged(v: string): void, 
//     onNewPasswordChanged(v: string): void, 
//     onRepeatPasswordChanged(v: string): void, 
//     save(): void
// };

const Credentials = ({user, onChange}) => {  
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [credentialsChanged, setCredentialsChanged] = useState(false);
  const [emailPasswordError, setEmailPasswordError] = useState("");

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
            onChange({ email });
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
      type: 'success'
    });

    notice.update({type: 'success'})
    return notice;
  }
  
  return (
      <Card>
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
                    disabled={true}
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
  )
}

export default Credentials;