import React, { useState } from "react";
import { bindActionCreators } from "redux";
import * as actions from "../../store/actions";
import { DropzoneComponent } from "react-dropzone-component";
import { auth, storage } from "firebase";
import TokenManager from "../auth/TokenManager";
import * as API from "../../store/config";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import PNotify from "pnotify/dist/es/PNotify";
import "pnotify/dist/es/PNotifyButtons";
import "pnotify/dist/es/PNotifyConfirm";
import "pnotify/dist/es/PNotifyCallbacks";

const FileUpload = (props) => {
  const { user } = props.applicationState;
  const [imageAsFile, setImageAsFile] = useState("");

  var config = {
    showFiletypeIcon: false,
    postUrl: "/",
  };

  var djsConfig = {
    addRemoveLinks: true,
    acceptedFiles: "image/jpeg,image/png",
  };

  const eventHandlers = {
    addedfile: (file) => setImageAsFile(file),
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

  const uploadAvatar = (e) => {
    e.preventDefault();

    if (!imageAsFile || !imageAsFile.name) {
      return;
    }

    var token = auth().currentUser.uid;
    const uploadTask = storage()
      .ref(`/${props.type}/${token}/user${props.type}_` + imageAsFile.name)
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
          .ref(`/${props.type}/${token}`)
          .child(`user${props.type}_` + imageAsFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            return fireBaseUrl;
          })
          .then((imageUrl) => {
            TokenManager.getInstance()
              .getToken()
              .then((jwt) => {
                fetch(API.default.API_URL + "/userMedias/", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "X-Auth": jwt,
                  },
                  body: JSON.stringify({
                    url: imageUrl,
                    owner: props.applicationState.user._links.self.href,
                    mediaType: "avatar",
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

  return (
    <Form>
      {props.type === "avatar" &&
        user._embedded &&
        user._embedded.media &&
        user._embedded.media.filter((m) => m.mediaType === "avatar").length >
          0 && (
          <div
            style={{
              flexDirection: "row",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <img
              src={
                user._embedded.media
                  .filter((m) => m.mediaType === "avatar")
                  .sort((a, b) => b.id - a.id)[0].url
              }
              style={{
                width: 180,
                margin: 10,
                height: 180,
                borderRadius: 90,
                objectFit: "cover",
              }}
              alt=""
            />
          </div>
        )}
      <Form.Group controlId="formBasicEmail">
        <DropzoneComponent
          config={config}
          eventHandlers={eventHandlers}
          djsConfig={djsConfig}
        />
      </Form.Group>
      <Button
        variant={"primary"}
        onClick={uploadAvatar}
        disabled={!imageAsFile}
        className={"float-right"}
      >
        Salva
      </Button>
    </Form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

const mapStateToProps = (state) => ({
  applicationState: state,
});

export default connect(mapStateToProps, mapDispatchToProps)(FileUpload);
