import React, { useEffect, useState } from 'react';
import { Row, Col, Form } from "react-bootstrap";
import { DropzoneComponent } from 'react-dropzone-component';
import CustomAlert from '../TipsterServices/CustomAlert';
import firebase from "firebase/app";
import PNotify from "pnotify/dist/es/PNotify";
import "pnotify/dist/es/PNotifyButtons";
import "pnotify/dist/es/PNotifyConfirm";
import "pnotify/dist/es/PNotifyCallbacks";
import TokenManager from '../../App/auth/TokenManager';
import BASE_CONFIG from "../../store/config";
import { connect } from 'react-redux';

const UploadDocuments = ({user, applicationState, onDocumentsUploaded}) => {

    const [uploadedFrontDocument, setUploadedFrontDocument] = useState(null);
    const [uploadedBackDocument, setUploadedBackDocument] = useState(null);
    const [uploadedBillDocument, setUploadedBillDocument] = useState(null);
    const [documentErrors, setDocumentErrors] = useState("");

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

    useEffect(() => {
        if (!user) {
          return;
        }
    
        if (user._embedded 
          && user._embedded.media) {
            if (user._embedded.media.filter(m => m.mediaType === 'bill').sort((a, b) => a.id - b.id).length > 0) {
              setUploadedBillDocument(user._embedded.media.filter(m => m.mediaType === 'bill').sort((a, b) => a.id - b.id)[0]);
            }
    
            if (user._embedded.media.filter(m => m.mediaType === 'front').sort((a, b) => a.id - b.id).length > 0) {
              setUploadedFrontDocument(user._embedded.media.filter(m => m.mediaType === 'front').sort((a, b) => a.id - b.id)[0]);
            }
            
            if (user._embedded.media.filter(m => m.mediaType === 'back').sort((a, b) => a.id - b.id).length) {
              setUploadedBackDocument(user._embedded.media.filter(m => m.mediaType === 'back').sort((a, b) => a.id - b.id)[0]);
            }
          }
    }, [user]);

    useEffect(() => {
        console.warn("done is: " + JSON.stringify(uploadedBackDocument && uploadedBillDocument && uploadedFrontDocument))
        onDocumentsUploaded(uploadedBackDocument && uploadedBillDocument && uploadedFrontDocument)
    }, [uploadedBackDocument, uploadedBillDocument, uploadedFrontDocument])

    var config = {
        showFiletypeIcon: false,
        postUrl: "/",
    };

    var djsConfig = {
        addRemoveLinks: true,
        autoProcessQueue: true,
        acceptedFiles: "image/jpeg,image/png,application/pdf"
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
          (snapShot) => console.log(snapShot),
          (err) => console.log(err),
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
                        owner: applicationState.user._links.self.href,
                        mediaType: type,
                      }),
                    })
                    .then((_) => {
                        onDocumentUploaded(imageUrl, type)
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

    const onDocumentUploaded = (url, type) => {
        switch(type) {
            case "back":
                console.warn("called with: " + url + ", " + type)
                setUploadedBackDocument({url})
                break;
            case "bill":
                console.warn("called with: " + url + ", " + type)
                setUploadedBillDocument({url})
                break;
            default:
            case "front":
                setUploadedFrontDocument({url});
                break;
        }
    };

    return (
        <Row>
            <Col md={12} sm={12}>
                <Form>
                    {documentErrors !== "" && (
                        <div role="alert" class="fade alert alert-danger show">
                        {documentErrors}
                        </div>
                    )}
                    <Row>
                        <Col md={4} lg={4} sm={12}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Documento d'identità (Fronte)</Form.Label>
                                {uploadedFrontDocument ? 
                                    <CustomAlert message={"Hai già caricato il tuo documento d'identità."} variant={"success"} component={"Scaricalo qua"} link={uploadedFrontDocument.url} />
                                :
                                    <DropzoneComponent
                                        config={config}
                                        eventHandlers={{addedfile: file => uploadDocument("front", file)}}
                                        djsConfig={djsConfig}
                                    />
                                }
                            </Form.Group>
                        </Col>
                        <Col md={4} lg={4} sm={12}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Documento d'identità (Retro)</Form.Label>
                                {uploadedBackDocument ? 
                                    <CustomAlert message={"Hai già caricato il retro del tuo documento d'identità."} variant={"success"} component={"Scaricalo qua"} link={uploadedBackDocument.url} />
                                : 
                                    <DropzoneComponent
                                        config={config}
                                        eventHandlers={{addedfile: file => uploadDocument("back", file)}}
                                        djsConfig={djsConfig}
                                    />
                                }
                            </Form.Group>
                        </Col>
                        <Col md={4} lg={4} sm={12}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Prova di residenza (Bolletta, stato di famiglia, estratto conto, ecc.)</Form.Label>
                                {uploadedBillDocument ? 
                                    <CustomAlert message={"Hai già caricato questo documento."} variant={"success"} component={"Scaricalo qua"} link={uploadedBillDocument.url} />
                                : 
                                    <DropzoneComponent
                                        config={config}
                                        eventHandlers={{addedfile: file => uploadDocument("bill", file)}}
                                        djsConfig={djsConfig}
                                    /> 
                                }
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>)
}

const mapStateToProps = state => ({applicationState: state});
export default connect(mapStateToProps)(UploadDocuments);