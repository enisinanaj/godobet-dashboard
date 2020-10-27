import React, { Component } from "react";
import {
  Row,
  Col,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import * as moment from "moment";
import TokenManager from "../../components/auth/Token";

import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

class NewService extends Component {
  constructor(props, context) {
    super(props, context);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.state = {
      modal: false,
      author: "Andrea",
      taxonomies: "tags",
      serviceName: "Nome servizio",
      description: "descrizione",
      maxSubscribers: "30",
      duration: "50",
      price: "100",
      version: "1",
    };
  }

  toggleModal() {
    this.setState({ modal: !this.state.modal });
  }

  handleGenderChange(selected) {
    this.setState({ gender: selected.target.value });
  }

  saveTest() {
    const newService = {
      author: this.state.author,
      taxonomies: this.state.taxonomies,
      serviceName: this.state.serviceName,
      description: this.state.description,
      maxSubscribers: this.state.maxSubscribers,
      duration: this.state.duration,
      price: this.state.price,
      version: this.state.version,
      taxonomiesDefinition: [],
    };

    this.props.addService(newService);
    this.toggleModal();
  }

  async saveEvent() {
    var token = await TokenManager.getInstance().getToken();

    var body = { ...this.state };
    fetch("http://localhost:5005/events", {
      method: "POST",
      headers: { "X-Auth": token, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    this.toggleModal();
  }

  render() {
    return (
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggleModal}
        style={{ maxWidth: "70%" }}
      >
        <ModalHeader toggle={this.toggleModal}>Nuovo pacchetto</ModalHeader>
        <ModalBody>
          <Row>
            <Col lg="12">
              <div className="card card-default">
                <div className="card-body">
                  <div className="row py-8 justify-content-center">
                    <div className="col-12 col-sm-10">
                      <form className="form-horizontal">
                        <div className="form-group row">
                          <label
                            className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                            htmlFor="inputServiceName"
                          >
                            Nome
                          </label>
                          <div className="col-xl-10 col-md-9 col-8">
                            <input
                              className="form-control"
                              id="inputServiceName"
                              type="text"
                              value={this.state.serviceName}
                              onChange={(service) =>
                                this.setState({
                                  serviceName: service.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                            htmlFor="inputDescription"
                          >
                            Descrizione
                          </label>
                          <div className="col-xl-10 col-md-9 col-8">
                            <Input
                              id="inputDescription"
                              type="text"
                              value={this.state.description}
                              onChange={(service) =>
                                this.setState({
                                  description: service.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                            htmlFor="inputPrice"
                          >
                            Prezzo
                          </label>
                          <div className="col-xl-10 col-md-9 col-8">
                            <Input
                              placeholder="inputPrice"
                              type="number"
                              step="1"
                              value={this.state.price}
                              onChange={(service) =>
                                this.setState({ price: service.target.value })
                              }
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                            htmlFor="inputMaxSubscribers"
                          >
                            N° max iscritti
                          </label>
                          <div className="col-xl-10 col-md-9 col-8">
                            <Input
                              className="form-control"
                              id="inputMaxSubscribers"
                              type="text"
                              value={this.state.maxSubscribers}
                              onChange={(service) =>
                                this.setState({
                                  maxSubscribers: service.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                            htmlFor="inputDuration"
                          >
                            Durata
                          </label>
                          <div className="col-xl-10 col-md-9 col-8">
                            <Input
                              id="inputDuration"
                              type="number"
                              step="1"
                              value={this.state.duration}
                              onChange={(service) =>
                                this.setState({
                                  duration: service.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                            htmlFor="inputTaxonomies"
                          >
                            Tag
                          </label>
                          <div className="col-xl-10 col-md-9 col-8">
                            <input
                              className="form-control"
                              id="inputTaxonomies"
                              type="text"
                              value={this.state.taxonomies}
                              onChange={(service) =>
                                this.setState({
                                  taxonomies: service.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            className="text-bold col-xl-2 col-md-3 col-4 col-form-label text-right"
                            htmlFor="inputVersion"
                          >
                            Versione
                          </label>
                          <div className="col-xl-10 col-md-9 col-8">
                            <input
                              className="form-control"
                              id="inputVersion"
                              type="number"
                              step="0.1"
                              value={this.state.version}
                              onChange={(service) =>
                                this.setState({
                                  version: service.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => this.saveTest()}>
            Salva
          </Button>{" "}
          <Button color="secondary" onClick={this.toggleModal}>
            Annulla
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default NewService;
