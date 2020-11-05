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
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../store/actions/actions";

class PoolCard extends Component {
  static propTypes = {
    description: PropTypes.string,
    totalQuote: PropTypes.number,
    stake: PropTypes.string,
    profit: PropTypes.number,
    bookmaker: PropTypes.string,
    totalEvents: PropTypes.array,
    poolCreatedOn: PropTypes.string,
    poolUpdatedOn: PropTypes.string,
    hrefPool: PropTypes.string,
  };

  render() {
    return (
      <Card className="card-default">
        <CardHeader>Riepilogo schedina {this.props.id}</CardHeader>
        <CardBody>
          <Row>
            <Col lg="6">
              <FormGroup row>
                <Col md="4">Descrizione:</Col>
                <Col md="8">
                  <strong>{this.props.description}</strong>
                </Col>
                <Col md="4">Quota:</Col>
                <Col md="8">
                  <strong>{this.props.totalQuote}</strong>
                </Col>
                <Col md="4">Bookmaker:</Col>
                <Col md="8">
                  <strong>{this.props.bookmaker}</strong>
                </Col>
                <Col md="4">Creato il:</Col>
                <Col md="8">
                  <strong>
                    {moment(this.props.poolCreatedOn).format(
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
                  <strong>{this.props.stake}</strong>
                </Col>
                <Col md="4">Profitto:</Col>
                <Col md="8">
                  <strong>{this.props.profit}</strong>
                </Col>
                <Col md="4">Eventi totali:</Col>
                <Col md="8">
                  <strong>{this.props.totalEvents}</strong>
                </Col>
                <Col md="4">Modificato il:</Col>
                <Col md="8">
                  <strong>
                    {moment(this.props.poolUpdatedOn).format(
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
                  bookmaker: this.props.bookmaker,
                  description: this.props.description,
                  id: this.props.id,
                  poolCreatedOn: this.props.poolCreatedOn,
                  poolUpdatedOn: this.props.poolUpdatedOn,
                  profit: this.props.profit,
                  stake: this.props.stake,
                  totalEvents: this.props.totalEvents,
                  totalQuote: this.props.totalQuote,
                  links: this.props.links,
                });
                this.props.history.push("/poolDetails");
              }}
            >
              Visualizza
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
