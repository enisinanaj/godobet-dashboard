import React, { Component } from "react";
import ContentWrapper from "../../components/layout/ContentWrapper";
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
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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
      <ContentWrapper>
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
                    <strong>{this.props.poolCreatedOn}</strong>
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
                    <strong>{this.props.poolUpdatedOn}</strong>
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
                  console.log(this.props);
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
      </ContentWrapper>
    );
  }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(PoolCard);
