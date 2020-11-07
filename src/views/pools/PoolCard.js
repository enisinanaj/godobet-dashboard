import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Row,
  Col,
  FormGroup,
  Button,
} from "reactstrap";
import * as moment from "moment";
import "moment/locale/it";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../store/actions/actions";
moment.locale("it");

class PoolCard extends Component {
  render() {
    return (
      <Card className="card-default">
        <CardHeader>Riepilogo schedina {this.props.poolData.id}</CardHeader>
        <CardBody>
          <Row>
            <Col lg="6">
              <FormGroup row>
                <Col md="4">Descrizione:</Col>
                <Col md="8">
                  <strong>{this.props.poolData.description}</strong>
                </Col>
                <Col md="4">Quota:</Col>
                <Col md="8">
                  <strong>{this.props.poolData.totalQuote}</strong>
                </Col>
                <Col md="4">Bookmaker:</Col>
                <Col md="8">
                  <strong>{this.props.poolData.bookmaker}</strong>
                </Col>
                <Col md="4">Creato il:</Col>
                <Col md="8">
                  <strong>
                    {moment(this.props.poolData.createdOn).format(
                      "DD/MM/YYYY HH:mm"
                    )}
                  </strong>
                </Col>
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup row>
                <Col md="4">Stake:</Col>
                <Col md="8">
                  <strong>{this.props.poolData.stake}</strong>
                </Col>
                <Col md="4">Profitto:</Col>
                <Col md="8">
                  <strong>{this.props.poolData.profit}</strong>
                </Col>
                <Col md="4">Eventi totali:</Col>
                <Col md="8">
                  <strong>{this.props.poolData.totalEvents}</strong>
                </Col>
                <Col md="4">Modificato il:</Col>
                <Col md="8">
                  <strong>
                    {moment(this.props.poolData.updatedOn).format(
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
            <Button
              className="btn btn-block btn-secondary"
              onClick={() => {
                this.props.actions.poolDetails({
                  bookmaker: this.props.poolData.bookmaker,
                  description: this.props.poolData.description,
                  id: this.props.id,
                  poolCreatedOn: this.props.poolData.poolCreatedOn,
                  poolUpdatedOn: this.props.poolData.poolUpdatedOn,
                  profit: this.props.poolData.profit,
                  stake: this.props.poolData.stake,
                  totalEvents: this.props.poolData.totalEvents,
                  totalQuote: this.props.poolData.totalQuote,
                  links: this.props.poolData._links,
                });
                this.props.history.push("/poolDetails");
              }}
            >
              Visualizza
            </Button>
          </div>
          <div className="ml-auto">
            <Button
              type="button"
              className="btn btn-block btn-primary"
              onClick={() => {
                this.props.editPool(this.props.poolData);
              }}
            >
              Modifica
            </Button>
          </div>
        </CardFooter>
      </Card>
    );
  }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(PoolCard);
