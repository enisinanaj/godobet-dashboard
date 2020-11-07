import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Row,
  Col,
  FormGroup,
} from "reactstrap";
import PropTypes from "prop-types";
import * as moment from "moment";
import TokenManager from "../../components/auth/Token";
import config from "../../store/config";

class EventCard extends Component {
  state = {
    gender: "",
  };

  componentDidMount() {
    this.getGender();
  }

  async getGender() {
    var token = await TokenManager.getInstance().getToken();

    try {
      fetch(this.props.data._links.gender.href, {
        method: "GET",
        headers: { "Content-Type": "application/json", "X-Auth": token },
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.value) {
            this.setState({ gender: response.value });
          }
        });
    } catch {}
  }

  render() {
    return (
      <Card className="card-default">
        <CardBody>
          <Row>
            <Col lg="6">
              <FormGroup row>
                <Col md="4">Sport:</Col>
                <Col md="8">
                  <strong>{this.props.data.sport}</strong>
                </Col>
                <Col md="4">Sesso:</Col>
                <Col md="8">
                  <strong>{this.state.gender}</strong>
                </Col>
                <Col md="4">Evento:</Col>
                <Col md="8">
                  <strong>{this.props.data.event}</strong>
                </Col>
                <Col md="4">Risultato:</Col>
                <Col md="8">
                  <strong>{this.props.data.outcome}</strong>
                </Col>
                <Col md="4">Creato il:</Col>
                <Col md="8">
                  <strong>
                    {moment(this.props.data.createdOn).format(
                      "DD/MM/YYYY HH:mm"
                    )}
                  </strong>
                </Col>
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup row>
                <Col md="4">Data evento:</Col>
                <Col md="8">
                  <strong>
                    {moment(this.props.data.eventDate).format(
                      "DD/MM/YYYY HH:mm"
                    )}
                  </strong>
                </Col>
                <Col md="4">Competizione:</Col>
                <Col md="8">
                  <strong>{this.props.data.competition}</strong>
                </Col>
                <Col md="4">Proposta:</Col>
                <Col md="8">
                  <strong>{this.props.data.proposal}</strong>
                </Col>
                <Col md="4">Quota:</Col>
                <Col md="8">
                  <strong>{this.props.data.quote}</strong>
                </Col>
                <Col md="4">Note:</Col>
                <Col md="8">
                  <strong>{this.props.data.notes}</strong>
                </Col>
                <Col md="4">Modificato il:</Col>
                <Col md="8">
                  <strong>
                    {moment(this.props.data.updatedOn).format(
                      "DD/MM/YYYY HH:mm"
                    )}
                  </strong>
                </Col>
              </FormGroup>
            </Col>
          </Row>
        </CardBody>

        <CardFooter className="d-flex">
          <div>
            <button
              type="button"
              className="btn btn-block btn-secondary"
              onClick={() => this.props.editEvent(this.props.data)}
            >
              Modifica
            </button>
          </div>
        </CardFooter>
      </Card>
    );
  }
}

export default EventCard;
