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
import { connect } from "react-redux";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import config from "../../store/config";

class NewService extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      taxonomies: [],
      serviceName: "",
      description: "",
      maxSubscribers: "",
      duration: "",
      price: "",
      version: 1,
    };
  }

  toggleModal() {
    this.props.toggleModal();
  }

  handleTaxonomiesChange(newTaxonomies) {
    this.setState({ taxonomies: newTaxonomies });
  }

  async saveService() {
    const newService = {
      author: this.props.app.user._links.user.href,
      taxonomies: [], //this.state.taxonomies,
      serviceName: this.state.serviceName,
      description: this.state.description,
      maxSubscribers: parseInt(
        this.state.maxSubscribers == "" ? 0 : this.state.maxSubscribers
      ),
      duration: parseInt(this.state.duration == "" ? 0 : this.state.duration),
      price: parseInt(this.state.price == "" ? 0 : this.state.price),
      version: parseInt(this.state.version == "" ? 0 : this.state.version),
    };

    var token = await TokenManager.getInstance().getToken();
    fetch(config.API_URL + "/services", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Auth": token },
      body: JSON.stringify(newService),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.toggleModal();
        this.props.refreshServiceList();
      });
  }

  async test() {
    var token = await TokenManager.getInstance().getToken();
    fetch("https://godobet-api.herokuapp.com/taxonomies", {
      method: "GET",
      headers: { "Content-Type": "application/json", "X-Auth": token },
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
  }

  render() {
    return (
      <Modal
        isOpen={this.props.modalNewServiceVisible}
        toggle={() => this.toggleModal()}
        style={{ maxWidth: "70%" }}
      >
        <ModalHeader toggle={() => this.toggleModal()}>
          Nuovo pacchetto
        </ModalHeader>
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
                              type="text"
                              pattern="[0-9]*"
                              value={this.state.price}
                              onChange={(service) =>
                                this.setState({
                                  price: service.target.validity.valid
                                    ? service.target.value
                                    : this.state.price,
                                })
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
                              pattern="[0-9]*"
                              value={this.state.maxSubscribers}
                              onChange={(service) =>
                                this.setState({
                                  maxSubscribers: service.target.validity.valid
                                    ? service.target.value
                                    : this.state.maxSubscribers,
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
                              type="text"
                              pattern="[0-9]*"
                              value={this.state.duration}
                              onChange={(service) =>
                                this.setState({
                                  duration: service.target.validity.valid
                                    ? service.target.value
                                    : this.state.duration,
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
                            <ReactTagInput
                              tags={this.state.taxonomies}
                              onChange={(newTags) =>
                                this.handleTaxonomiesChange(newTags)
                              }
                              removeOnBackspace={true}
                              placeholder={"Inserisci un tag e premi invio"}
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
                              type="text"
                              pattern="[0-9]*"
                              value={this.state.version}
                              onChange={(service) =>
                                this.setState({
                                  version: service.target.validity.valid
                                    ? service.target.value
                                    : this.state.version,
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
          <Button color="primary" onClick={() => this.saveService()}>
            Salva
          </Button>{" "}
          <Button color="secondary" onClick={() => this.toggleModal()}>
            Annulla
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(NewService);
